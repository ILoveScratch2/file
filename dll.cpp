#include <windows.h>
#include <iostream>
#include <conio.h>

// 定义函数指针类型（必须和 DLL 中的声明一致）
typedef BOOL (__stdcall *FN_ENABLE_INPUT_MESSAGE)();

int main() {
    // 1. 加载 DLL（确保路径正确）
    HMODULE hDll = LoadLibraryA("C:/Program Files (x86)/广州海光/海耘云教学系统/redhooks.dll");
    if (!hDll) {
        std::cerr << "无法加载 DLL，错误代码: " << GetLastError() << std::endl;
        return 1;
    }

    // 2. 获取函数地址
    FN_ENABLE_INPUT_MESSAGE EnableInputMessage = 
        (FN_ENABLE_INPUT_MESSAGE)GetProcAddress(hDll, "_EnableInputMessage");

    if (!EnableInputMessage) {
        std::cerr << "找不到函数，错误代码: " << GetLastError() << std::endl;
        FreeLibrary(hDll);
        return 1;
    }

    // 3. 调用 DLL 函数
	BOOL result = EnableInputMessage();
	std::cout << "返回: " << (result ? "True" : "False") << std::endl;

    // 4. 释放 DLL
    FreeLibrary(hDll);
    
    std::cout << "代码执行完成" << std::endl;
    return 0;
}
