// ==UserScript==
// @name         Amazing Luogu
// @namespace    https://zym2013.dpdns.org/
// @version      0.9.1
// @description  Amazing Luogu with Chat Markdown, Problem Colors, Cover Removal, Problem Jumper, Save Station Jumper, and More!
// @author       zhangyimin12345&yangrenrui
// @icon         https://cdn.luogu.com.cn/upload/usericon/3.png
// @match        *://www.luogu.com.cn/*
// @match        *://www.luogu.com/*
// @match        zym2013.dpdns.org/*
// @match        dash.amazingluogu.dpdns.org/*
// @connect      apis.uctb.cn
// @connect      luogu.com
// @connect      luogu.com.cn
// @connect      v2.jinrishici.com
// @connect      cdn.jsdmirror.cn
// @connect      bgithub.xyz
// @connect      raw.bgithub.xyz
// @connect      raw.githubusercontent.com
// @connect      cdn.jsdelivr.net
// @connect      kr2-proxy.gitwarp.com
// @connect      jp-proxy.gitwarp.com
// @connect      gh.catmak.name
// @connect      kr1-proxy.gitwarp.com
// @connect      proxy.gitwarp.com
// @connect      jp1-proxy.gitwarp.com
// @connect      gh.halonice.com
// @connect      hk-yd-proxy.gitwarp.com
// @connect      zym2013.dpdns.org
// @connect      api-v2.luogu.me
// @connect      www.luogu.com.cn
// @connect      lab.magiconch.com
// @connect      yiyan.amlg.top
// @connect      luogu.store
// @connect      uapis.cn
// @connect      amlg.top
// @connect      ktwhwvafywwekfkvskbk.supabase.co
// @connect      codeforces.com
// @connect      127.0.0.1
// @connect      online.amlg.top
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_cookie
// @grant        GM_listValues
// @grant        unsafeWindow
// @license      CC-BY-NC-ND-4.0
// @require      https://cdn.jsdmirror.cn/npm/sweetalert2@11.26.17/dist/sweetalert2.min.js
// @require      https://cdn.jsdmirror.cn/gh/highlightjs/cdn-release/build/highlight.min.js
// @require      https://cdn.jsdmirror.cn/npm/marked@4.0.0/marked.min.js
// @require      https://cdn.jsdmirror.cn/npm/dompurify@3.3.1/dist/purify.min.js
// @require      https://cdn.jsdmirror.cn/npm/katex@0.16.27/dist/katex.min.js
// @require      https://cdn.jsdmirror.cn/npm/katex@0.16.27/dist/contrib/auto-render.min.js
// @require      https://cdn.jsdmirror.cn/npm/@fortawesome/fontawesome-free@7.1.0/js/all.min.js
// @require      https://cdn.jsdmirror.cn/npm/jquery@3.7.1/dist/jquery.min.js
// @require      https://cdn.jsdmirror.cn/npm/izitoast@1.4.0/dist/js/iziToast.min.js
// @require      https://cdn.jsdmirror.cn/npm/clipboard@2.0.11/dist/clipboard.min.js
// @require      https://cdn.jsdmirror.cn/ajax/libs/vue/2.6.11/vue.min.js
// @require      https://cdn.jsdmirror.cn/npm/mark.js@8.11.1/dist/mark.min.js
// @resource     iziToastCSS https://cdn.jsdmirror.cn/npm/izitoast@1.4.0/dist/css/iziToast.min.css
// @resource     icomoonCSS https://cdn.jsdmirror.cn/gh/marcelodolza/iziToast@master/docs/css/icomoon.css
// @resource     hljs https://cdn.jsdmirror.cn/gh/highlightjs/cdn-release/build/styles/github.min.css
// @resource     swal https://cdn.jsdmirror.cn/npm/sweetalert2@11.26.17/dist/sweetalert2.min.css
// @resource     animate https://cdn.jsdmirror.cn/ajax/libs/animate.css/4.1.1/animate.min.css
// @run-at       document-start
// ==/UserScript==

GM_addStyle(GM_getResourceText("iziToastCSS"));
GM_addStyle(GM_getResourceText("icomoonCSS"));
GM_addStyle(GM_getResourceText("swal"));
GM_addStyle(GM_getResourceText("animate"));
GM_addStyle(`
a[href="/user/1157535"][target="_blank"]:not(:has(> .luogu-username:first-child))::after {
    content: "AMLG";
    position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
.user-header-top img[src="https://cdn.luogu.com.cn/upload/usericon/1157535.png"] + div.user-info.desktop-layout > div.luogu-username.user-name > span:first-child::after {
	content: "AMLG";
	position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
.luogu-username > *:nth-last-child(2)[href="/user/1157535"]::after {
	content: "AMLG";
	position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
.luogu-username > *:nth-child(1) > *:nth-child(1) > *:nth-child(1)[href="/user/1157535"]::after {
	content: "AMLG";
	position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
a[href="/user/1393230"][target="_blank"]:not(:has(> .luogu-username:first-child))::after {
    content: "AMLG";
    position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
.luogu-username > *:nth-last-child(2)[href="/user/1393230"]::after {
	content: "AMLG";
	position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
.user-header-top img[src="https://cdn.luogu.com.cn/upload/usericon/1393230.png"] + div.user-info.desktop-layout > div.luogu-username.user-name > span:first-child::after {
	content: "AMLG";
	position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); 
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
.luogu-username > *:nth-child(1) > *:nth-child(1) > *:nth-child(1)[href="/user/1393230"]::after {
	content: "AMLG";
	position: relative;
    display: inline-block !important;
    background: #00ffff;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 100px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: x-small;
    margin-left: 5px;
    line-height: inherit !important;
    top: 5px;
}
`);

let benbenctrlenterInited = false;
let slogenFunctionRunned = false;
let nbnhhshInited = false;
let chatWSRD = false;
let Notificationaaaaaaa = null;
let supabaseRunned = false;
let onlineInitialized = false;
let NotificationCache = GM_getValue("AML_notification_cache", null);
let NotificationCacheTime = GM_getValue("AML_notification_cache_time", 0);
if (NotificationCache && Date.now() - NotificationCacheTime < 24 * 60 * 60 * 1000) {
	Notificationaaaaaaa = NotificationCache;
}

function getNotification() {
	if (Notificationaaaaaaa) {
		let result__ = Notificationaaaaaaa;
		const sortedResult = result__.sort((a, b) => b.id - a.id);
		let inner = '';
		const d = document.getElementById("aml-notification-list");
		let markdown = '';
		if (!d) {
			console.error("未找到通知列表容器，无法渲染通知");
			return;
		}
		let node = null;
		d.innerHTML = '';
		// 渲染DOM操作也移到回调内
		sortedResult.forEach(notification => {
			const parser = new DOMParser();
			node = parser.parseFromString(`<div class="aml-notification-item${GM_getValue("AML_notification_read_" + notification.id, false) ? "" : " unread"}">
				<div class="aml-notif-title">${notification.title}</div>
				<div class="aml-notif-time">${notification.time}</div>
			</div>`, 'text/html').body.firstChild;
			node.onclick = (function () {
				const tmp = document.createElement('div');
				tmp.innerHTML = marked.parse(notification.content);
				renderMathInElement(tmp, {
					delimiters: [
						{ left: '$$', right: '$$', display: true },
						{ left: '$', right: '$', display: false }
					],
					strict: false,
					escape: false,
					preProcess: (math) => {
						let processed = math.replace(/\\(\r?\n)/g, '\\\\$1');
						return processed;
					}
				});
				let Event1 = new CustomEvent("AML_notification_read", { detail: { id: notification.id } });
				document.dispatchEvent(Event1);
				this.classList.remove("unread");
				document.getElementsByClassName('aml-modal-header')[0].innerHTML = '<h4>' + notification.title + '</h4><button id="aml-close-modal" onclick="document.getElementById(\'aml-notification-modal\').style.display = \'none\'; document.getElementById(\'aml-notification-modal\').classList.toggle(\'show\');" class="aml-header-btn"><svg class="svg-inline--fa fa-xmark" data-prefix="fas" data-icon="xmark" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg><!-- <i class="fas fa-times"></i> Font Awesome fontawesome.com --></button>';
				document.getElementsByClassName('aml-modal-body')[0].innerHTML = tmp.innerHTML;
				document.getElementById('aml-modal-time').innerHTML = notification.time;
				document.getElementById('aml-notification-modal').style.display = 'flex';
				document.getElementById('aml-notification-modal').classList.toggle('show');
			});
			d.appendChild(node);
			if (!GM_getValue("AML_notification_read_" + notification.id, false)) {
				document.getElementById("aml-notification-badge").style.display = 'block';
				document.getElementsByClassName("fa-bell svg-inline--fa")[1].classList.add("animate__animated");
				document.getElementsByClassName("fa-bell svg-inline--fa")[1].classList.add("animate__infinite");
				document.getElementsByClassName("fa-bell svg-inline--fa")[1].classList.add("animate__swing");
			}
		});
	} else {
		GM_xmlhttpRequest({
			method: "GET",
			url: "https://amlg.top/Amazing-Luogu/notification.json",
			timeout: 10000,
			responseType: "json",
			onload: function (response) {
				if (response.status >= 200 && response.status < 300) {
					// 数据获取成功后再处理
					const result__ = response.response;
					Notificationaaaaaaa = result__;
					GM_setValue("AML_notification_cache", result__);
					GM_setValue("AML_notification_cache_time", Date.now());
					console.log("数据获取成功：", result__);
					// 先判断数据是否为有效数组，增加鲁棒性
					if (Array.isArray(result__)) {
						// 排序操作移到回调内
						const sortedResult = result__.sort((a, b) => b.id - a.id);
						let inner = '';
						const d = document.getElementById("aml-notification-list");
						let markdown = '';
						if (!d) {
							console.error("未找到通知列表容器，无法渲染通知");
							return;
						}
						let node = null;
						d.innerHTML = '';
						// 渲染DOM操作也移到回调内
						sortedResult.forEach(notification => {
							const parser = new DOMParser();
							node = parser.parseFromString(`<div class="aml-notification-item${GM_getValue("AML_notification_read_" + notification.id, false) ? "" : " unread"}">
								<div class="aml-notif-title">${notification.title}</div>
								<div class="aml-notif-time">${notification.time}</div>
							</div>`, 'text/html').body.firstChild;
							node.onclick = (function () {
								const tmp = document.createElement('div');
								tmp.innerHTML = marked.parse(notification.content);
								renderMathInElement(tmp, {
									delimiters: [
										{ left: '$$', right: '$$', display: true },
										{ left: '$', right: '$', display: false }
									],
									strict: false,
									escape: false,
									preProcess: (math) => {
										let processed = math.replace(/\\(\r?\n)/g, '\\\\$1');
										return processed;
									}
								});
								let Event1 = new CustomEvent("AML_notification_read", { detail: { id: notification.id } });
								document.dispatchEvent(Event1);
								this.classList.remove("unread");
								document.getElementsByClassName('aml-modal-header')[0].innerHTML = '<h4>' + notification.title + '</h4><button id="aml-close-modal" onclick="document.getElementById(\'aml-notification-modal\').style.display = \'none\'; document.getElementById(\'aml-notification-modal\').classList.toggle(\'show\');" class="aml-header-btn"><svg class="svg-inline--fa fa-xmark" data-prefix="fas" data-icon="xmark" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg><!-- <i class="fas fa-times"></i> Font Awesome fontawesome.com --></button>';
								document.getElementsByClassName('aml-modal-body')[0].innerHTML = tmp.innerHTML;
								document.getElementById('aml-modal-time').innerHTML = notification.time;
								document.getElementById('aml-notification-modal').style.display = 'flex';
								document.getElementById('aml-notification-modal').classList.toggle('show');
							});
							d.appendChild(node);
							if (!GM_getValue("AML_notification_read_" + notification.id, false)) {
								document.getElementById("aml-notification-badge").style.display = 'block';
								document.getElementsByClassName("fa-bell svg-inline--fa")[1].classList.add("animate__animated");
								document.getElementsByClassName("fa-bell svg-inline--fa")[1].classList.add("animate__infinite");
								document.getElementsByClassName("fa-bell svg-inline--fa")[1].classList.add("animate__swing");
							}
						});
					} else {
						console.error("返回的数据不是数组格式：", result__);
					}
				} else {
					console.error("请求返回错误状态码：", response.status);
				}
			},
			onerror: function (error) {
				console.error("请求失败：", error);
			},
			ontimeout: function () {
				console.error("请求超时");
			}
		});
	}
}
document.addEventListener("AML_notification_read", function (e) {
	GM_setValue("AML_notification_read_" + e.detail.id, true);
});
unsafeWindow.gotolink = function (link) {
	window.location.href = link.trim();
};
function gettoken() {
	return (document.querySelector("meta[name=csrf-token]") || { content: "" })
		.content;
}
async function follow() {
	const followed = GM_getValue("amazing-luogu-followed-checked", false);
	if (!followed && window.location.href.includes("www.luogu.com.cn")) {
		Swal.fire({
			title: "提示",
			html: "点击“确定”以关注作者洛谷账号，感谢支持！",
			showCancelButton: true,
			allowOutsideClick: false,
			confirmButtonText: "确定",
			cancelButtonText: "取消",
		}).then(async (result) => {
			GM_setValue("amazing-luogu-followed-checked", true);
			if (result.isConfirmed) {
				Swal.fire({
					title: "正在关注中，请稍候",
					text: "如果长时间没有反应，可能是网络问题，请稍后手动关注zhangyimin12345和yangrenrui，谢谢！",
					didOpen: () => {
						Swal.showLoading();
					},
				});
				let result1 = await fetch(
					"https://www.luogu.com.cn/api/user/updateRelationShip",
					{
						headers: [
							["content-type", "application/json"],
							["referer", "https://www.luogu.com.cn/"],
							["x-csrf-token", gettoken()],
						],
						body: JSON.stringify({
							uid: 1393230,
							relationship: 1,
						}),
						method: "POST",
					},
				);
				let json1 = await result1.json();
				let result2 = await fetch(
					"https://www.luogu.com.cn/api/user/updateRelationShip",
					{
						headers: [
							["content-type", "application/json"],
							["referer", "https://www.luogu.com.cn/"],
							["x-csrf-token", gettoken()],
						],
						body: JSON.stringify({
							uid: 1157535,
							relationship: 1,
						}),
						method: "POST",
					},
				);
				let json2 = await result2.json();
				if (json1.errorMessage || json2.errorMessage) {
					Swal.fire({
						title: "提示",
						text: "关注失败，您可能已经关注了作者。",
						icon: "info",
					});
				}
			}
		});
	}
}
async function all() {
	function main() {
		window.jQuery.noConflict()("*").off();
		window.jQuery.noConflict()(document).off();
		window.jQuery.noConflict()(window).off();
		window.jQuery
			.noConflict()("style")
			.each(function () {
				if (
					(this.innerHTML && this.className.includes("aml-")) ||
					this.className.includes("searchAnywhere") ||
					this.className.includes("welcomeContainer")
				) {
					this.remove();
				}
			});
		document
			.querySelectorAll(
				'[id^="aml-"], .searchAnywhere, .searchAnywhereSettings, .searchAnywhereEntrance',
			)
			.forEach((el) => el.remove());
		(function removeElementsWithAmlClass() {
			const allElements = document.querySelectorAll("*");
			const elementsArray = Array.from(allElements);
			elementsArray.forEach((element) => {
				const classList = element.classList;
				const hasAmlClass = Array.from(classList).some((className) => {
					return className.startsWith("aml-");
				});
				if (hasAmlClass) {
					element.remove();
				}
			});
		})();
		(function ($, undefined) {
			"use strict";
			if (
				window.location.pathname.startsWith("/chat") ||
				window.location.pathname === "/"
			) {
				GM_addStyle(GM_getResourceText("hljs"));
				GM_addStyle(`
					.align-left {
						text-align: left !important;
					}
					.align-center {
						text-align: center !important;
					}
					.align-right {
						text-align: right !important;
					}
					.epigraph {
						width: 40%;
						margin-left: 60%;
					}
					.epigraph>:last-child {
						margin-top: 0;
						border-top: 1px solid #888;
						text-align: right;
					}
					summary {
						list-style: none;
						-webkit-user-select: none;
						user-select: none;
						outline: 0;
						margin: 0;
						position: relative;
						padding-left: 24px;
						font-weight: 700;
						list-style: none;
						display: list-item;
						min-height: 1em;
					}
					.foldable {
						padding: .5em 1em;
						margin: 1em 0 1em .2em;
						border-left-width: 5px;
						border-left-style: solid;
						overflow: hidden;
					}
					.foldable.info {
						border-left-color: rgb(52, 152, 219);
					}
					.foldable.warning {
						border-left-color: rgb(255, 193, 22);
					}
					.foldable.success {
						border-left-color: rgb(82, 196, 26);
					}
					.foldable.error {
						border-left-color: rgb(231, 76, 60);
					}
					.foldable.bug {
						border-left-color: rgb(231, 76, 60);
					}
					.foldable.flask {
						border-left-color: rgb(155, 89, 182);
					}
					details.info>summary {
						color: rgb(52, 152, 219);
					}
					details.warning>summary {
						color: rgb(255, 193, 22);
					}
					details.success>summary {
						color: rgb(82, 196, 26);
					}
					details.error>summary {
						color: rgb(231, 76, 60);
					}
					details.bug>summary {
						color: rgb(231, 76, 60);
					}
					details.flask>summary {
						color: rgb(155, 89, 182);
					}
					details.info>summary::before {
						-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>');
						mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>');
					}
					details.success>summary::before {
						-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>');
						mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>');
					}
					details.warning>summary::before {
						-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>');
						mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>');
					}
					details.error>summary::before {
						-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>');
						mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"%20viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>');
					}
					details.bug>summary::before {
						-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>');
						mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>');
					}
					details.flask>summary::before {
						-webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 0L160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0zM192 196.8L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1L309.5 320l-171 0L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg>');
						mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 0L160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0zM192 196.8L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1L309.5 320l-171 0L173 263.9c12.4-20.2 19-43.4 19-67.1z"/></svg>');
					}
					summary::before {
						content: "";
						background-color: currentcolor;
						-webkit-mask-size: contain;
						mask-size: contain;
						-webkit-mask-repeat: no-repeat;
						mask-repeat: no-repeat;
						-webkit-mask-position: center;
						mask-position: center;
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 16px;
						height: 16px;
						margin-right: 8px;
					}
					summary:after {
						content: "";
						background-color: currentcolor;
						-webkit-mask-size: contain;
						mask-size: contain;
						mask-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20512%22%3E%3Cpath%20d%3D%22M246.6%20278.6c12.5-12.5%2012.5-32.8%200-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8%2016.6-19.8%2029.6l0%20256c0%2012.9%207.8%2024.6%2019.8%2029.6s25.7%202.2%2034.9-6.9l128-128z%22%2F%3E%3C%2Fsvg%3E");
						-webkit-mask-repeat: no-repeat;
						mask-repeat: no-repeat;
						-webkit-mask-position: center;
						mask-position: center;
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						width: 16px;
						height: 16px;
						transition: transform .2s ease
					}
					details[open]>summary::after {
						transform: translateY(-50%) rotate(90deg);
					}
					.aml-memo-content pre code,
					.aml-luogu-md-rendered pre code{
						font-family: 'Consolas' !important;
						display: block !important;
						padding: 12px !important;
						padding-left: 20px !important;
						margin: 0 0 !important;
						background: #f8fafc !important;
						border-radius: 10px !important;
						border: 1px solid #e2e8f0 !important;
						color: #1e1e1e !important;
						overflow-x: auto !important;
						overflow-y: auto !important;
						line-height: 1.6 !important;
						font-size: 0.95rem !important;
						box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
					}
					.codecopy-btn {
						opacity: 0.7 !important;
						min-height: 1em;
						outline: 0;
						vertical-align: baseline;
						position: absolute;
						top: 40px !important;
						right: 10px !important;
						background: #f8fafc;
						padding: 6px 10px !important;
						color: rgba(0, 0, 0, 0.6);
						border: 1px solid rgba(0, 0, 0, 0.1);
						box-shadow: transparent 0px 0px 0px 1px inset, rgba(34, 36, 38, 0.15) 0px 0px 0px 0px inset;
						cursor: pointer;
						z-index: 10;
						text-transform: none;
						text-shadow: none;
						font-weight: 700;
						line-height: 1em;
						font-style: normal;
						text-align: center;
						text-decoration: none;
						border-radius: .28571429rem;
						font-size: 0.8rem !important;
						display: inline-block !important;
						padding-block: 1px;
						padding-inline: 6px;
						margin: 0 .25em 0 0;
					}
					.codecopy-btn svg {
						font-weight: 0.8rem !important;
					}
					.codecopy-btn:active {
						background-color: rgb(186, 187, 188);
						color: rgba(0, 0, 0, 0.9);
					}
					.codecopy-btn:hover {
						background: #fff;
						transform: translateY(-1px);
						background-color: rgb(202, 203, 205);
						box-shadow: transparent 0px 0px 0px 1px inset, rgba(34, 36, 38, 0.15) 0px 0px 0px 0px inset;
						color: rgba(0, 0, 0, 0.8);
					}
					.codecopy-btn:focus {
						background-color: rgb(202, 203, 205);
						color: rgba(0, 0, 0, 0.8);
					}`);
			}
			function injectSvgSymbol() {
				const svgSpriteId = "ag-svg-sprite";
				if (document.getElementById(svgSpriteId)) {
					return;
				}
				const svgSprite = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"svg",
				);
				svgSprite.id = svgSpriteId;
				svgSprite.style.display = "none";
				svgSprite.innerHTML = `
					<symbol id="icon-drafts" viewBox="0 0 24 24">
						<path d="M12 12.984l8.25-5.156-8.25-4.828-8.25 4.828zM21.984 8.016v9.984q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-9.984q0-1.172 0.938-1.734l9.047-5.297 9.047 5.297q0.938 0.563 0.938 1.734z"></path>
					</symbol>
				`;
				if (document.body) {
					document.body.insertBefore(svgSprite, document.body.firstChild);
				} else {
					document.addEventListener("DOMContentLoaded", () => {
						document.body.insertBefore(svgSprite, document.body.firstChild);
					});
				}
			}
			GM_addStyle(`
				.icon-drafts-inline {
					width: 22px !important;
					height: 22px !important;
					margin-left: -5px;
					margin-top: -2px;
					vertical-align: middle !important;
				}
			`);
			injectSvgSymbol();
			const customExtensions = [
				{
					name: "alignBlock",
					level: "block",
					start(src) {
						return src.match(/^:::\s*align\s*\{([^}]+)\}/)?.index;
					},
					tokenizer(src, tokens) {
						const match = src.match(/^:::\s*align\s*\{([^}]+)\}([\s\S]*?)\n:::/);
						if (match) {
							return {
								type: "alignBlock",
								raw: match[0],
								align: match[1].trim(),
								content: match[2].trim(),
							};
						}
					},
					renderer(token) {
						return `<div class="align-${token.align}">${marked.parse(token.content)}</div>`;
					},
				},
				{
					name: "epigraph",
					level: "block",
					start(src) {
						return src.match(/^:::\s*epigraph(\[([^\]]+)\])?\s*:::/)?.index;
					},
					tokenizer(src, tokens) {
						const match = src.match(
							/^:::\s*epigraph(\[([^\]]+)\])?\s*([\s\S]*?)\s*:::/,
						);
						if (match) {
							return {
								type: "epigraph",
								raw: match[0],
								author: match[2] || "",
								content: match[3].trim(),
							};
						}
					},
					renderer(token) {
						const authorPart = `<p>${token.author ? token.author : "unknown author"}</p>`;
						return `<div class="epigraph">${marked.parse(token.content)}${authorPart}</div>`;
					},
				},
				{
					name: "foldable",
					level: "block",
					start(src) {
						return src.match(/^:{3,}/)?.index;
					},
					tokenizer(src, tokens) {
						const match = src.match(
							/^(:{3,})\s*(\w+)?(\[([^\]]+)\])?(\s*\{([^}]+)\})?\s*([\s\S]*?)\s*\1/,
						);
						if (
							match &&
							(match[2] === "info" ||
								match[2] === "warning" ||
								match[2] === "success" ||
								match[2] === "error" ||
								match[2] === "bug" ||
								match[2] === "flask")
						) {
							const colonCount = match[1].length;
							return {
								type: "foldable",
								raw: match[0],
								foldType: match[2] || "info",
								title: match[4] || "",
								options: match[6] || "",
								content: match[7].trim(),
								level: colonCount - 3,
							};
						}
					},
					renderer(token) {
						const isOpen = token.options.includes("open");
						const indentStyle = "";
						return `
								<details class="foldable ${token.foldType}" ${indentStyle} ${isOpen ? "open" : ""}>
									<summary>
										${token.title || "点击展开"}
									</summary>
									${marked.parse(token.content)}
								</details>
							`;
					},
				},
			];
			marked.use({ extensions: customExtensions });
			marked.setOptions({
				highlight: function (code, lang) {
					if (lang && hljs.getLanguage(lang)) {
						return hljs.highlight(code, { language: lang }).value;
					}
					return hljs.highlightAuto(code).value;
				},
				breaks: false,
				gfm: true,
				mangle: false,
				headerIds: false,
			});
			const renderMarkdown = (text) => {
				let tmp = document.createElement("div");
				tmp.innerHTML = marked.parse(text);
				renderMathInElement(tmp, {
					delimiters: [
						{ left: "$$", right: "$$", display: true },
						{ left: "$", right: "$", display: false },
					],
					errorCallback: (msg, err) => {
						console.error("MathJax Error:", msg, err);
					},
					errorSettings: {
						message: ["[MathJax error]"],
						style: {
							"font-size": "1.2em",
							color: "red",
						},
					},
				});
				return tmp.innerHTML;
			};
			function addCopyButtons(eee) {
				const preElements = eee.querySelectorAll("pre code");
				preElements.forEach((codeElement) => {
					if (!codeElement.parentElement.querySelector(".codecopy-btn")) {
						const button = document.createElement("button");
						button.innerHTML = '<i class="fa fa-copy"></i>';
						button.classList.add("codecopy-btn");
						const div = document.createElement("div");
						div.style = "width:100%; position:relative;";
						div.appendChild(button);
						codeElement.before(div);
						new ClipboardJS(button, {
							text: () => codeElement.innerText.replace(/\n/g, "\n"),
						})
							.on("success", (e) => {
								e.trigger.innerHTML = '<i class="fa fa-check"></i>';
								setTimeout(
									() => (e.trigger.innerHTML = '<i class="fa fa-copy"></i>'),
									1000,
								);
							})
							.on("error", (e) => {
								e.trigger.innerHTML = '<i class="fa fa-xmark"></i>';
								setTimeout(
									() => (e.trigger.innerHTML = '<i class="fa fa-copy"></i>'),
									1000,
								);
							});
					}
				});
			}
			const currentPath = window.location.pathname;
			let currentAMLSettings = {
				vscodeLuoguEnabled: GM_getValue("amlVscodeLuoguEnabled", false),
				codeforcesOriginDifEnabled: GM_getValue("amlCodeforcesOriginDifEnabled", true),
				userSearchEnabled: GM_getValue("amlUserSearchEnabled", true),
				autoSaveDiscussEnabled: GM_getValue("amlAutoSaveDiscussEnabled", false),
				showUserIntroductionEnabled: GM_getValue("amlShowUserIntroductionEnabled", true),
				extendTaskEnabled: GM_getValue("amlExtendTaskEnabled", true),
				benbenctrlenterEnabled: GM_getValue("amlBenbenctrlenterEnabled", true),
				autoO2Enabled: GM_getValue("amlAutoO2Enabled", false),
				slogenTimeFormat: GM_getValue(
					"amlSlogenTimeFormat",
					"{time} || {format}"
				),
				discussListLengthEnabled: GM_getValue("amlDiscussListLengthEnabled", false),
				slogenTimeEnabled: GM_getValue("amlSlogenTimeEnabled", false),
				nbnhhshEnabled: GM_getValue("amlNbnhhshEnabled", true),
				problemRandom: GM_getValue("amlProblemRandom", true),
				useLuoguMe: GM_getValue("amlUseLuoguMe", false),
				isOpen: GM_getValue("amlPanelOpen", true),
				chatMarkdown: GM_getValue("amlChatMarkdown", true),
				problemColors: GM_getValue("amlProblemColors", true),
				coverRemoval: GM_getValue("amlCoverRemoval", false),
				captchaAutofill: GM_getValue("amlCaptchaAutofill", false),
				problemJumper: GM_getValue("amlProblemJumper", true),
				saveStationJumper: GM_getValue("amlSaveStationJumper", true),
				codeFolding: GM_getValue("amlCodeFolding", true),
				autoCheckIn: GM_getValue("amlAutoCheckIn", true),
				captchaOCREndpoint: GM_getValue(
					"amlCaptchaOCREndpoint",
					"http://8.140.166.24:44963/?base64=",
				),
				vscodePort: GM_getValue("amlVscodePort", 1145),
				discussListLength: GM_getValue("amlDiscussListLength", 16),
				colorUpdateInterval: GM_getValue("amlColorUpdateInterval", 300),
				memoContent: GM_getValue(
					"amlMemoContent",
					"关注 zhangyimin12345 谢谢啦！",
				),
				memoEnabled: GM_getValue("amlMemoEnabled", true),
				buttonUnlocker: GM_getValue("amlButtonUnlocker", true),
				problemJumpStyling: GM_getValue("amlProblemJumpStyling", true),
				autoExpandBenben: GM_getValue("amlAutoExpandBenben", true),
				benbenBlockedUids: GM_getValue("amlBenbenBlockedUids", [""]),
				copyMarkdownEnabled: GM_getValue("amlCopyMarkdownEnabled", true),
				discussCopyButtonEnabled: GM_getValue(
					"amlDiscussCopyButtonEnabled",
					true,
				),
				customCSS: GM_getValue("amlCustomCSS", ""),
				customCSSPosition: GM_getValue("amlCustomCSSPosition", "head"),
				customFontURL: GM_getValue("amlCustomFontURL", ""),
				customFontEnabled: GM_getValue("amlCustomFontEnabled", true),
				customStyleEnabled: GM_getValue("amlCustomStyleEnabled", true),
				defaultCodeEnabled: GM_getValue("amlDefaultCodeEnabled", true),
				defaultCodeContent: GM_getValue("amlDefaultCodeContent", ""),
				autoReplyEnabled: GM_getValue("amlAutoReplyEnabled", false),
				autoReplyFocusModeMessage: GM_getValue(
					"amlAutoReplyFocusModeMessage",
					"该用户开启了专注模式认真学术，可能暂时无法回复您的私信！",
				),
				autoReplyNormalMessage: GM_getValue(
					"amlAutoReplyNormalMessage",
					"已经提示该用户，请耐心等待 TA 的回复！",
				),
				userFinderEnabled: GM_getValue("amlUserFinderEnabled", false),
				focusModeEnabled: GM_getValue("amlFocusModeEnabled", false),
				focusModeHideChat: GM_getValue("amlFocusModeHideChat", true),
				focusModeHideNotification: GM_getValue(
					"amlFocusModeHideNotification",
					true,
				),
				focusModeHideArticle: GM_getValue("amlFocusModeHideArticle", true),
				focusModeHidePaste: GM_getValue("amlFocusModeHidePaste", true),
				focusModeHideSolution: GM_getValue("amlFocusModeHideSolution", true),
				focusModeHideContest: GM_getValue("amlFocusModeHideContest", false),
				focusModeHideUser: GM_getValue("amlFocusModeHideUser", true),
				focusModeHideTicket: GM_getValue("amlFocusModeHideTicket", true),
				focusModeHideHelp: GM_getValue("amlFocusModeHideHelp", true),
				focusModeHideFooter: GM_getValue("amlFocusModeHideFooter", true),
				focusModeHideHome: GM_getValue("amlFocusModeHideHome", true),
				focusModeHideAD: GM_getValue("amlFocusModeHideAD", true),
				focusModeHidePunchAndAd: GM_getValue("amlFocusModeHidePunchAndAd", false),
				focusModeHidediscuss: GM_getValue("amlFocusModeHidediscuss", true),
				focusModeHideFriendLinks: GM_getValue(
					"amlFocusModeHideFriendLinks",
					true,
				),
				focusModeHideTeam: GM_getValue("amlFocusModeHideTeam", true),
				focusModeHideTag: GM_getValue("amlFocusModeHideTag", true),
				focusModeHideThemeList: GM_getValue("amlFocusModeHideThemeList", true),
				focusModeHideImageHosting: GM_getValue(
					"amlFocusModeHideImageHosting",
					true,
				),
				focusModeHideRank: GM_getValue("amlFocusModeHideRank", true),
				focusModeHideJudgement: GM_getValue("amlFocusModeHideJudgement", true),
				focusModeHidePage: GM_getValue("amlFocusModeHidePage", true),
				focusModeHideLinksButtons: GM_getValue(
					"amlFocusModeHideLinksButtons",
					true,
				),
				focusModeHideSidebarLeft: GM_getValue(
					"amlFocusModeHideSidebarLeft",
					true,
				),
				focusModeHideSidebarRight: GM_getValue(
					"amlFocusModeHideSidebarRight",
					true,
				),
				focusModeHideBenben: GM_getValue("amlFocusModeHideBenben", true),
				focusModeHideBenbenInput: GM_getValue(
					"amlFocusModeHideBenbenInput",
					true,
				),
				focusModeHideBenbenMore: GM_getValue("amlFocusModeHideBenbenMore", true),
				focusModeHideProblemStats: GM_getValue(
					"amlFocusModeHideProblemStats",
					true,
				),
				focusModeHideProblemSolutions: GM_getValue(
					"amlFocusModeHideProblemSolutions",
					true,
				),
				focusModeHideProblemTickets: GM_getValue(
					"amlFocusModeHideProblemTickets",
					true,
				),
				focusModeHideProblemProviders: GM_getValue(
					"amlFocusModeHideProblemProviders",
					true,
				),
				focusModeHideProblemPersonalList: GM_getValue(
					"amlFocusModeHideProblemPersonalList",
					true,
				),
				focusModeHideProblemTeamList: GM_getValue(
					"amlFocusModeHideProblemTeamList",
					true,
				),
				focusModeHideProblemDiscuss: GM_getValue(
					"amlFocusModeHideProblemDiscuss",
					true,
				),
				focusModeHideProblemTags: GM_getValue(
					"amlFocusModeHideProblemTags",
					true,
				),
				focusModeHideTrainingStats: GM_getValue(
					"amlFocusModeHideTrainingStats",
					true,
				),
				focusModeHideTrainingOperations: GM_getValue(
					"amlFocusModeHideTrainingOperations",
					true,
				),
				focusModeHideRecordFilters: GM_getValue(
					"amlFocusModeHideRecordFilters",
					true,
				),
				chatNotificationEnabled: GM_getValue("amlChatNotificationEnabled", true),
				emojiRenderingEnabled: GM_getValue("amlEmojiRenderingEnabled", true),
			};
			const settingKeyMap = {
				vscodeLuoguEnabled: "amlVscodeLuoguEnabled",
				autoSaveDiscussEnabled: "amlAutoSaveDiscussEnabled",
				showUserIntroductionEnabled: "amlShowUserIntroductionEnabled",
				extendTaskEnabled: "amlExtendTaskEnabled",
				benbenctrlenterEnabled: "amlBenbenctrlenterEnabled",
				autoO2Enabled: "amlAutoO2Enabled",
				codeforcesOriginDifEnabled: "amlCodeforcesOriginDifEnabled",
				slogenTimeFormat: "amlSlogenTimeFormat",
				slogenTimeEnabled: "amlSlogenTimeEnabled",
				discussListLengthEnabled: "amlDiscussListLengthEnabled",
				nbnhhshEnabled: "amlNbnhhshEnabled",
				problemRandom: "amlProblemRandom",
				useLuoguMe: "amlUseLuoguMe",
				isOpen: "amlPanelOpen",
				chatMarkdown: "amlChatMarkdown",
				problemColors: "amlProblemColors",
				coverRemoval: "amlCoverRemoval",
				captchaAutofill: "amlCaptchaAutofill",
				problemJumper: "amlProblemJumper",
				saveStationJumper: "amlSaveStationJumper",
				captchaOCREndpoint: "amlCaptchaOCREndpoint",
				vscodePort: "amlVscodePort",
				discussListLength: "amlDiscussListLength",
				colorUpdateInterval: "amlColorUpdateInterval",
				codeFolding: "amlCodeFolding",
				autoCheckIn: "amlAutoCheckIn",
				memoEnabled: "amlMemoEnabled",
				memoContent: "amlMemoContent",
				buttonUnlocker: "amlButtonUnlocker",
				problemJumpStyling: "amlProblemJumpStyling",
				userSearchEnabled: "amlUserSearchEnabled",
				benbenBlockedUids: "amlBenbenBlockedUids",
				autoExpandBenben: "amlAutoExpandBenben",
				copyMarkdownEnabled: "amlCopyMarkdownEnabled",
				discussCopyButtonEnabled: "amlDiscussCopyButtonEnabled",
				customCSS: "amlCustomCSS",
				customCSSPosition: "amlCustomCSSPosition",
				customFontURL: "amlCustomFontURL",
				customFontEnabled: "amlCustomFontEnabled",
				customStyleEnabled: "amlCustomStyleEnabled",
				defaultCodeEnabled: "amlDefaultCodeEnabled",
				defaultCodeContent: "amlDefaultCodeContent",
				autoReplyEnabled: "amlAutoReplyEnabled",
				autoReplyFocusModeMessage: "amlAutoReplyFocusModeMessage",
				autoReplyNormalMessage: "amlAutoReplyNormalMessage",
				userFinderEnabled: "amlUserFinderEnabled",
				focusModeEnabled: "amlFocusModeEnabled",
				focusModeHideChat: "amlFocusModeHideChat",
				focusModeHideNotification: "amlFocusModeHideNotification",
				focusModeHideArticle: "amlFocusModeHideArticle",
				focusModeHidePaste: "amlFocusModeHidePaste",
				focusModeHideSolution: "amlFocusModeHideSolution",
				focusModeHideContest: "amlFocusModeHideContest",
				focusModeHideUser: "amlFocusModeHideUser",
				focusModeHideTicket: "amlFocusModeHideTicket",
				focusModeHideHelp: "amlFocusModeHideHelp",
				focusModeHideFooter: "amlFocusModeHideFooter",
				focusModeHideHome: "amlFocusModeHideHome",
				focusModeHideAD: "amlFocusModeHideAD",
				focusModeHidePunchAndAd: "amlFocusModeHidePunchAndAd",
				focusModeHidediscuss: "amlFocusModeHidediscuss",
				focusModeHideFriendLinks: "amlFocusModeHideFriendLinks",
				focusModeHideTeam: "amlFocusModeHideTeam",
				focusModeHideTag: "amlFocusModeHideTag",
				focusModeHideThemeList: "amlFocusModeHideThemeList",
				focusModeHideImageHosting: "amlFocusModeHideImageHosting",
				focusModeHideRank: "amlFocusModeHideRank",
				focusModeHideJudgement: "amlFocusModeHideJudgement",
				focusModeHidePage: "amlFocusModeHidePage",
				focusModeHideLinksButtons: "amlFocusModeHideLinksButtons",
				focusModeHideSidebarLeft: "amlFocusModeHideSidebarLeft",
				focusModeHideSidebarRight: "amlFocusModeHideSidebarRight",
				focusModeHideBenben: "amlFocusModeHideBenben",
				focusModeHideBenbenInput: "amlFocusModeHideBenbenInput",
				focusModeHideBenbenMore: "amlFocusModeHideBenbenMore",
				focusModeHideProblemStats: "amlFocusModeHideProblemStats",
				focusModeHideProblemSolutions: "amlFocusModeHideProblemSolutions",
				focusModeHideProblemTickets: "amlFocusModeHideProblemTickets",
				focusModeHideProblemProviders: "amlFocusModeHideProblemProviders",
				focusModeHideProblemPersonalList: "amlFocusModeHideProblemPersonalList",
				focusModeHideProblemTeamList: "amlFocusModeHideProblemTeamList",
				focusModeHideProblemDiscuss: "amlFocusModeHideProblemDiscuss",
				focusModeHideProblemTags: "amlFocusModeHideProblemTags",
				focusModeHideTrainingStats: "amlFocusModeHideTrainingStats",
				focusModeHideTrainingOperations: "amlFocusModeHideTrainingOperations",
				focusModeHideRecordFilters: "amlFocusModeHideRecordFilters",
				chatNotificationEnabled: "amlChatNotificationEnabled",
				emojiRenderingEnabled: "amlEmojiRenderingEnabled",
			};
			const features = [
				{
					key: "slogenTimeEnabled",
					label: "签名与网站时间提示",
					desc: "在个人签名（仅 Amazing Luogu 用户可见，有延迟，不使用洛谷 API）与 amlg.top 处显示最后在线时间",
					tag: "功能",
					status: "stable",
				},
				{
					key: "discussListLengthEnabled",
					label: "限制首页讨论列表长度",
					desc: "限制首页讨论列表长度，默认 16 条",
					tag: "功能",
					status: "stable",
				},
				{
					key: "benbenctrlenterEnabled",
					label: "按 Ctrl+Enter 发送犇犇",
					desc: "当聚焦（focus）在犇犇输入框时按下 Ctrl(Windows)/Command(Mac) +Enter 快捷键可以发送犇犇",
					tag: "功能",
					status: "stable",
				},
				{
					key: "autoO2Enabled",
					label: "自动打开 O2 优化",
					desc: "在题目提交和 IDE 页面自动打开 O2 优化选项",
					tag: "功能",
					status: "stable"
				},
				{
					key: "vscodeLuoguEnabled",
					label: "跳转到 VSCode Luogu",
					desc: "在题目和比赛页面添加跳转到 VSCode Luogu 按钮（需要安装 VSCode 插件 AmazingLuoguDevTeam.vscode-luogu-api）",
					tag: "功能",
					status: "stable"
				},
				{
					key: "codeforcesOriginDifEnabled",
					label: "显示 Codeforces 原始难度",
					desc: "在题目页面显示 Codeforces 原始难度，缓存时间为 24 小时，首次访问题目不会更改，需要刷新页面才能看到效果",
					tag: "功能",
					status: "stable"
				},
				{
					key: "autoSaveDiscussEnabled",
					label: "在讨论页面添加保存按钮",
					desc: "在讨论页面添加保存按钮用于保存当前查看的讨论到 luogu.store",
					tag: "功能",
					status: "stable"
				},
				{
					key: "showUserIntroductionEnabled",
					label: "显示用户介绍",
					desc: "在用户介绍页面（原来显示的除外，如：管理员）显示用户介绍（仅支持标准 Markdown、Latex 格式，多余的空格等将导致渲染失败），并添加一些功能（复制、渲染为 HTML）",
					tag: "功能",
					status: "stable",
				},
				{
					key: "extendTaskEnabled",
					label: "任务计划增强",
					desc: "在任务计划中添加随机跳转功能，并自动不显示已完成的题目",
					tag: "功能",
					status: "stable",
				},
				{
					key: "nbnhhshEnabled",
					label: "缩写查询",
					desc: "集成“能不能好好说话”缩写查询",
					tag: "功能",
					status: "stable",
				},
				{
					key: "problemRandom",
					label: "随机跳题",
					desc: "根据筛选条件或题单随机跳转到一道题目",
					tag: "功能",
					status: "stable",
				},
				{
					key: "useLuoguMe",
					label: "保存站更换",
					desc: "使用 luogu.me 作为保存站网址",
					tag: "设置",
					status: "stable",
				},
				{
					key: "copyMarkdownEnabled",
					label: "复制 Markdown",
					desc: "页面右上角添加按钮复制当前内容 Markdown",
					tag: "功能",
					status: "stable",
				},
				{
					key: "discussCopyButtonEnabled",
					label: "讨论区复制",
					desc: "在讨论区帖子中添加复制 Markdown 按钮",
					tag: "功能",
					status: "stable",
				},
				{
					key: "chatNotificationEnabled",
					label: "私信通知",
					desc: "收到新私信时弹出桌面通知",
					tag: "功能",
					status: "stable",
				},
				{
					key: "emojiRenderingEnabled",
					label: "表情渲染",
					desc: "自动渲染聊天和评论中的 QQ 表情代码",
					tag: "阅读",
					status: "stable",
				},
				{
					key: "chatMarkdown",
					label: "聊天 Markdown",
					desc: "支持在聊天窗口渲染 Markdown 和 KaTeX 公式",
					tag: "阅读",
					status: "stable",
				},
				{
					key: "focusModeEnabled",
					label: "专注模式",
					desc: "隐藏干扰元素，营造沉浸式学习环境",
					tag: "阅读",
					status: "beta",
				},
				{
					key: "autoCheckIn",
					label: "自动签到",
					desc: "进入首页时自动完成每日签到",
					tag: "功能",
					status: "stable",
				},
				{
					key: "memoEnabled",
					label: "首页备忘录",
					desc: "在首页显示自定义备忘录内容",
					tag: "阅读",
					status: "stable",
				},
				{
					key: "autoExpandBenben",
					label: "犇犇优化",
					desc: "首页犇犇自动展开与屏蔽特定用户",
					tag: "功能",
					status: "beta",
				},
				{
					key: "buttonUnlocker",
					label: "报名解锁",
					desc: "解锁比赛报名按钮的倒计时限制",
					tag: "功能",
					status: "stable",
				},
				{
					key: "problemJumper",
					label: "题目跳转",
					desc: "双击题目编号或特定快捷键快速跳转",
					tag: "功能",
					status: "stable",
				},
				{
					key: "saveStationJumper",
					label: "保存站跳转",
					desc: "自动跳转至保存站",
					tag: "功能",
					status: "stable",
				},
				{
					key: "customStyleEnabled",
					label: "自定义样式",
					desc: "允许注入自定义 CSS 代码修改页面外观",
					tag: "阅读",
					status: "stable",
				},
				{
					key: "customFontEnabled",
					label: "自定义字体",
					desc: "加载并使用自定义网络字体",
					tag: "阅读",
					status: "beta",
				},
				{
					key: "problemColors",
					label: "难度颜色",
					desc: "在题目列表中显示题目难度颜色",
					tag: "阅读",
					status: "stable",
				},
				{
					key: "problemJumpStyling",
					label: "跳转样式",
					desc: "优化首页题目跳转输入框的样式",
					tag: "阅读",
					status: "stable",
				},
				{
					key: "userSearchEnabled",
					label: "用户搜索",
					desc: "在主页添加用户搜索功能",
					tag: "功能",
					status: "stable",
				},
				{
					key: "codeFolding",
					label: "代码折叠",
					desc: "自动折叠过长的代码块以便阅读",
					tag: "阅读",
					status: "beta",
				},
			];
			GM_addStyle(`
				.aml-tab-container {
					display: flex;
					height: 100%;
					gap: 16px;
				}
				.aml-tab-list {
					width: 120px;
					background: #f8fafc;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
					padding: 12px 0;
					display: flex;
					flex-direction: column;
					gap: 8px;
					flex-shrink: 0;
					margin-left: 5px;
					border-right: 2px #ddd solid;
					backdrop-filter: blur(10px);
					-webkit-backdrop-filter: blur(10px);
					margin-right: -10px;
				}
				.aml-tab-btn {
					padding: 14px 16px;
					border: none;
					background: none;
					color: #64748b;
					font-weight: 600;
					text-align: left;
					border-radius: 8px;
					border-top-right-radius: 0px;
					border-bottom-right-radius: 0px;
					cursor: pointer;
					transition: all 0.3s ease;
					display: flex;
					align-items: center;
					gap: 8px;
				}
				.aml-tab-btn:hover {
					background: #e2e8f0;
					color: #334155;
				}
				.aml-tab-btn.active {
					background: #6366f1;
					color: #fff;
					box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
					transform: translateX(4px);
				}
				.aml-tab-content-container {
					flex: 1;
					position: relative;
					overflow: hidden;
					background: #fff;
				}
				.aml-tab-content {
					position: absolute;
					inset: 0;
					width: 93%;
					padding: 20px;
					overflow-y: auto;
					opacity: 0;
					transform: translateX(20px);
					transition: opacity 0.4s ease, transform 0.4s ease;
					pointer-events: none;
				}
				.aml-tab-content.active {
					opacity: 1;
					transform: translateX(0);
					z-index: 2;
					pointer-events: auto;
				}
				.aml-tab-content h4 {
					margin: 0 0 8px;
					font-size: 1.15em;
					color: #1e293b;
					font-weight: 700;
					display: flex;
					align-items: center;
					gap: 8px;
					padding-bottom: 10px;
					border-bottom: 2px solid #6366f1;
				}
				.aml-tab-content p,
				.aml-tab-content li {
					line-height: 1.65;
					color: #334155;
				}
				.aml-tab-content a {
					color: #6366f1;
					text-decoration: none;
					transition: color 0.2s ease;
				}
				.aml-tab-content a:hover {
					color: #4f46e5;
					text-decoration: underline;
				}
				.features-section,
				.announcement-section {
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 20px;
					margin-top: 20px;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					gap: 12px;
				}
				.features-section::before,
				.announcement-section::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.features-section:hover,
				.announcement-section:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}
				.features-section:hover::before,
				.announcement-section:hover::before {
					opacity: 1;
				}
				.announcement-section { margin-bottom: 20px; }
				.features-section h3,
				.features-section h5,
				.announcement-section h3,
				.announcement-section h5 {
					margin: 0;
					font-size: 14px;
					color: #64748b;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 0.5px;
					padding-bottom: 8px;
					border-bottom: 1px dashed #cbd5e1;
					display: flex;
					align-items: center;
					gap: 6px;
				}
				.announcement-content p {
					margin: 8px 0;
					line-height: 1.6;
					color: #334155;
				}
				.announcement-content p strong {
					color: #6366f1;
					font-weight: 700;
				}
				.features-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
					gap: 14px;
					margin-top: 12px;
				}
				.feature-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 16px 12px;
					border: 1px solid #e2e8f0;
					border-radius: 10px;
					cursor: pointer;
					transition: all 0.25s ease;
					background: linear-gradient(145deg, #f8fafc, #fff);
					text-align: center;
				}
				.feature-card:hover {
					background: linear-gradient(145deg, #e0e7ff, #fff);
					border-color: #6366f1;
					transform: translateY(-3px);
					box-shadow: 0 6px 16px rgba(99, 102, 241, 0.15);
				}
				.feature-card i,
				.feature-card svg {
					font-size: 22px;
					color: #6366f1;
					margin-bottom: 8px;
					transition: transform 0.2s ease;
				}
				.feature-card:hover i { transform: scale(1.1); }
				.feature-card span {
					font-size: 13px;
					color: #1e293b;
					font-weight: 500;
				}
				.thanks-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
					gap: 20px;
					margin: 20px 0 30px;
				}
				.thanks-card {
					text-align: center;
					background: #fff;
					border-radius: 14px;
					padding: 22px 18px;
					box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
					transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
					opacity: 0;
					transform: translateY(20px);
					animation: fadeInUp 0.6s forwards;
					position: relative;
					overflow: hidden;
					border: 1px solid #f1f5f9;
				}
				@keyframes fadeInUp {
					to { opacity: 1; transform: translateY(0); }
				}
				.thanks-card:nth-child(1) { animation-delay: 0.05s; }
				.thanks-card:nth-child(2) { animation-delay: 0.1s; }
				.thanks-card:nth-child(3) { animation-delay: 0.15s; }
				.thanks-card:nth-child(4) { animation-delay: 0.2s; }
				.thanks-card:nth-child(5) { animation-delay: 0.25s; }
				.thanks-card:nth-child(n+6) { animation-delay: 0.3s; }
				.thanks-card:hover {
					transform: translateY(-6px) scale(1.02);
					box-shadow: 0 12px 28px rgba(99, 102, 241, 0.22);
					z-index: 3;
					border-color: #6366f1;
				}
				.thanks-avatar {
					width: 68px;
					height: 68px;
					border-radius: 50%;
					object-fit: cover;
					border: 3px solid #e2e8f0;
					transition: all 0.3s ease;
					margin: 0 auto 14px;
					display: block;
				}
				.thanks-card:hover .thanks-avatar {
					transform: scale(1.1);
					border-color: #6366f1;
					box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
				}
				.thanks-username {
					font-size: 1.2em;
					font-weight: 700;
					margin: 0 0 10px;
					color: #1e293b;
				}
				.thanks-contribution {
					font-size: 0.95em;
					line-height: 1.6;
					color: #475569;
					margin: 12px 0;
					min-height: 48px;
				}
				.thanks-action { margin-top: 14px; }
				.thanks-follow-btn {
					width: 100%;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 6px;
					padding: 9px 20px;
					background: linear-gradient(135deg, #6366f1, #8b5cf6);
					color: #fff;
					font-weight: 600;
					font-size: 14px;
					border: none;
					border-radius: 30px;
					cursor: pointer;
					transition: all 0.3s ease;
					box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
				}
				.thanks-follow-btn:hover {
					transform: scale(1.04) translateY(-2px);
					box-shadow: 0 8px 20px rgba(99, 102, 241, 0.45);
					background: linear-gradient(135deg, #7c3aed, #a78bfa);
				}
				.thanks-follow-btn:active { transform: scale(0.98); }
				.thanks-follow-btn:disabled {
					opacity: 0.7;
					cursor: not-allowed;
					transform: none;
					box-shadow: none;
				}
				.thanks-follow-btn i { font-size: 14px; }
				#submit-bug-btn {
					margin-top: 14px;
					padding: 11px 24px;
					background: linear-gradient(135deg, #ef4444, #f97316);
					color: #fff;
					border: none;
					border-radius: 8px;
					font-weight: 600;
					font-size: 14px;
					cursor: pointer;
					box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
					transition: all 0.25s ease;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 6px;
				}
				#submit-bug-btn:hover {
					transform: translateY(-2px);
					box-shadow: 0 6px 14px rgba(239, 68, 68, 0.25);
				}
				#submit-bug-btn:active { transform: translateY(0); }
				#submit-bug-btn:disabled { opacity: 0.7; cursor: not-allowed; }
				#bug-submit-status {
					margin-left: 12px;
					color: #475569;
					font-size: 14px;
					transition: color 0.2s ease;
				}
				.aml-bug-content {
					margin: 20px 0 30px;
				}
				.aml-bug-content label {
					display: block;
					margin: 14px 0 6px;
					color: #334155;
					font-weight: 600;
					font-size: 14px;
				}
				.aml-bug-content input[type="text"],
				.aml-bug-content textarea {
					width: 100%;
					padding: 10px 14px;
					border: 1px solid #cbd5e1;
					border-radius: 8px;
					font-size: 14px;
					color: #1e293b;
					background: #f8fafc;
					transition: border-color 0.2s ease, box-shadow 0.2s ease;
					box-sizing: border-box;
				}
				.aml-bug-content input[type="text"]:focus,
				.aml-bug-content textarea:focus {
					outline: none;
					border-color: #6366f1;
					box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
					background: #fff;
				}
				.aml-bug-content textarea { resize: vertical; min-height: 100px; }
				.aml-help-content h5 {
					color: #334155;
					font-size: 15px;
					font-weight: 600;
					margin: 18px 0 8px;
				}
				.aml-help-content code {
					background: #f1f5f9;
					padding: 2px 6px;
					border-radius: 4px;
					font-size: 13px;
					color: #dc2626;
				}
				.aml-help-content img {
					max-width: 100%;
					border-radius: 8px;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
					margin: 8px 0;
				}
				.aml-tab-content::-webkit-scrollbar { width: 6px; }
				.aml-tab-content::-webkit-scrollbar-track { background: transparent; }
				.aml-tab-content::-webkit-scrollbar-thumb {
					background: #cbd5e1;
					border-radius: 3px;
					transition: background 0.2s ease;
				}
				.aml-tab-content::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
				.aml-header {
					display: flex; align-items: center; justify-content: space-between;
					height: 44px; padding: 0 12px;
					color: #1e1e1e; border-radius: 12px 12px 0 0; flex-shrink: 0;
					background: #f8fafc;
					backdrop-filter: blur(10px);
					-webkit-backdrop-filter: blur(10px);
					border-bottom: 2px #ddd solid;
				}
				.aml-header-title { font-weight: 700; font-size: 14px; }
				.aml-header-btn {
					width: 28px; height: 28px; border: none; border-radius: 6px;
					background: rgba(255,255,255,.2); color: #1e1e1e; cursor: pointer;
					display: flex; align-items: center; justify-content: center;
					transition: .2s;
				}
				.aml-header-btn:hover { background: rgba(255,255,255,.3); }
				.aml-tab-list { transition: width .25s ease; overflow: hidden; }
				.aml-tab-list.collapsed { width: 52px !important; }
				.aml-tab-list.collapsed .aml-tab-btn span { display: none; }
				.aml-tab-btn { white-space: nowrap; }
				.aml-home-greeting {
					font-size: 1.6em;
					font-weight: 800;
					color: #1e293b;
					margin: 0 0 20px;
					letter-spacing: -0.5px;
				}
				.aml-home-grid {
					display: flex;
					align-items: stretch;
					gap: 20px;
					margin-bottom: 24px;
				}
				.aml-home-card {
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 20px;
					display: flex;
					flex-direction: column;
					gap: 12px;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					overflow: hidden;
				}
				.aml-home-card::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.aml-home-card:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}
				.aml-home-card:hover::before {
					opacity: 1;
				}
				.aml-home-card h5 {
					margin: 0;
					font-size: 14px;
					color: #64748b;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 0.5px;
					padding-bottom: 8px;
					border-bottom: 1px dashed #cbd5e1;
					display: flex;
					align-items: center;
					gap: 6px;
				}
				.aml-time-container {
					display: flex;
					align-items: center;
					gap: 10px;
					background: rgba(99, 102, 241, 0.05);
					padding: 8px 12px;
					border-radius: 8px;
					border: 1px solid rgba(99, 102, 241, 0.1);
				}
				.aml-time {
					font-size: 1.2em;
					font-weight: 700;
					color: #1e293b;
					font-family: 'Consolas', 'Monaco', monospace;
					letter-spacing: -0.5px;
				}
				.aml-time-icon {
					color: #6366f1;
					font-size: 1.1em;
				}
				.aml-yiyan {
					font-size: 14px;
					color: #334155;
					line-height: 1.6;
					flex: 1;
					font-style: italic;
					position: relative;
					padding: 0 4px;
				}
				.aml-yiyan::before {
					content: '“';
					color: #6366f1;
					font-size: 1.5em;
					position: absolute;
					left: -10px;
					top: -5px;
					opacity: 0.5;
				}
				.aml-yiyan::after {
					content: '”';
					color: #6366f1;
					font-size: 1.5em;
					position: absolute;
					right: -3px;
					bottom: -19px;
					opacity: 0.5;
				}
				.aml-yiyan-from {
					font-size: 12px;
					color: #64748b;
					text-align: right;
					margin-top: 6px;
					font-style: normal;
					font-weight: 600;
				}
				.aml-history {
					font-size: 13px;
					color: #334155;
					line-height: 1.6;
					max-height: 200px;
					overflow-y: auto;
					padding-right: 5px;
				}
				.aml-history::-webkit-scrollbar {
					width: 4px;
				}
				.aml-history::-webkit-scrollbar-thumb {
					background: #cbd5e1;
					border-radius: 2px;
				}
				.aml-history-item {
					margin: 10px 0;
					padding-left: 16px;
					position: relative;
					border-left: 2px solid #e2e8f0;
					transition: border-color 0.3s ease;
				}
				.aml-history-item:hover {
					border-left-color: #6366f1;
				}
				.aml-history-item::before {
					content: '';
					position: absolute;
					left: -5px;
					top: 6px;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: #cbd5e1;
					transition: background 0.3s ease;
				}
				.aml-history-item:hover::before {
					background: #6366f1;
				}
				.aml-history-year {
					font-weight: 700;
					color: #6366f1;
					font-size: 1.1em;
					margin-right: 6px;
				}
				.aml-loading { color: #64748b; font-style: italic; }
				.aml-error { color: #ef4444; font-size: 13px; }
				@media (max-width: 768px) { .aml-home-grid { grid-template-columns: 1fr; } }
				/* 设置页卡片风格 */
				.aml-settings-section {
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 20px;
					margin-bottom: 20px;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					overflow: hidden;
				}
				.aml-settings-section:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}
				.aml-settings-section::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.aml-settings-section:hover::before {
					opacity: 1;
				}
				.aml-settings-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
					gap: 12px;
				}
				.aml-focus-grid {
					grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
				}
				.aml-setting-item {
					display: flex;
					align-items: center;
					padding: 8px 12px;
					border-radius: 6px;
					transition: background 0.2s ease;
					cursor: pointer;
				}
				.aml-setting-item:hover {
					background: #f1f5f9;
				}
				.aml-setting-item input[type="checkbox"] {
					width: 16px;
					height: 16px;
					accent-color: #6366f1;
					cursor: pointer;
					margin-right: 10px;
				}
				.aml-setting-item label {
					font-size: 0.95em;
					color: #334155;
					cursor: pointer;
					flex: 1;
					margin: 0;
				}
				.aml-settings-group {
					display: flex;
					flex-direction: column;
					gap: 16px;
				}
				.aml-input-group {
					display: flex;
					flex-direction: column;
					gap: 6px;
				}
				.aml-input-group label {
					font-weight: 600;
					color: #1e293b;
					font-size: 0.95em;
				}
				.aml-settings-section input[type="text"],
				.aml-settings-section input[type="number"],
				.aml-settings-section textarea,
				.aml-settings-section select {
					width: 100%;
					padding: 8px 12px;
					border: 2px solid #e2e8f0;
					border-radius: 6px;
					font-size: 0.9em;
					color: #1e293b;
					background: #fff;
					transition: border-color 0.3s ease, box-shadow 0.3s ease;
					box-sizing: border-box;
				}
				.aml-settings-section input:focus,
				.aml-settings-section textarea:focus,
				.aml-settings-section select:focus {
					outline: none;
					border-color: #6366f1;
					box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
				}
				.aml-primary-btn {
					width: 100%;
					padding: 10px 16px;
					background: linear-gradient(135deg, #6366f1, #8b5cf6);
					color: #fff;
					font-weight: 600;
					border: none;
					border-radius: 6px;
					cursor: pointer;
					transition: all 0.3s ease;
					box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
				}
				.aml-primary-btn:hover {
					transform: translateY(-2px);
					box-shadow: 0 6px 16px rgba(99, 102, 241, 0.45);
				}
				.aml-primary-btn:active {
					transform: translateY(0);
				}
				.aml-tip {
					margin-top: 8px;
					font-size: 0.85em;
					color: #64748b;
					background: #f1f5f9;
					padding: 8px 12px;
					border-radius: 6px;
					border-left: 3px solid #6366f1;
				}
				.aml-status-msg {
					font-size: 0.9em;
				}
				.disabled-notice {
					color: #64748b;
					font-style: italic;
					text-align: center;
					padding: 20px;
					background: #f8fafc;
					border-radius: 8px;
					border: 2px dashed #cbd5e1;
					margin-top: 10px;
				}
				.aml-search-bar {
					width: 100%;
					padding: 10px 15px;
					margin-top: -10px !important;
					margin-bottom: -2px !important;
					border: 2px solid #e2e8f0;
					border-radius: 8px;
					font-size: 14px;
					transition: all 0.3s ease;
					box-sizing: border-box;
					background: #fff;
				}
				.aml-search-bar:focus {
					outline: none;
					border-color: #6366f1;
					box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
				}
				.aml-features-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
					gap: 16px;
				}
				.aml-feature-card {
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 16px;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					gap: 10px;
				}
				.aml-feature-card:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}
				.aml-feature-card::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.aml-feature-card:hover::before {
					opacity: 1;
				}
				.aml-card-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 4px;
				}
				.aml-feature-tag {
					font-size: 12px;
					padding: 2px 8px;
					border-radius: 4px;
					background: #e0e7ff;
					color: #4338ca;
					font-weight: 600;
				}
				.aml-feature-status {
					font-size: 11px;
					padding: 2px 6px;
					border-radius: 4px;
					font-weight: 600;
				}
				.aml-feature-status.stable { background: #dcfce7; color: #166534; }
				.aml-feature-status.beta { background: #fef9c3; color: #854d0e; }
				.aml-feature-status.deprecated { background: #fee2e2; color: #991b1b; }
				.aml-card-title {
					display: flex;
					align-items: center;
					gap: 8px;
					font-weight: 600;
					color: #1e293b;
					font-size: 15px;
				}
				.aml-card-title input[type="checkbox"] {
					width: 18px;
					height: 18px;
					accent-color: #6366f1;
					cursor: pointer;
					margin: 0;
				}
				.aml-card-title label {
					cursor: pointer;
					flex: 1;
					margin: 0;
					color: inherit;
				}
				.aml-card-desc {
					font-size: 13px;
					color: #64748b;
					line-height: 1.5;
					margin-top: 4px;
				}
				.aml-no-results {
					text-align: center;
					padding: 40px;
					color: #94a3b8;
					font-size: 14px;
					grid-column: 1 / -1;
					display: none;
				}
				/* ================= 鸣谢页样式美化 (匹配首页风格) ================= */
				/* 替换原有的 .thanks-grid 和 .thanks-card 相关样式 */

				.aml-tab-content#thanks-panel {
					padding: 20px; /* 确保面板内边距一致 */
				}

				.aml-tab-content#thanks-panel h4 {
					margin: 0 0 16px;
					font-size: 1.15em;
					color: #1e293b;
					font-weight: 700;
					display: flex;
					align-items: center;
					gap: 8px;
					padding-bottom: 10px;
					border-bottom: 2px solid #6366f1; /* 与设置页/首页标题一致 */
				}

				.aml-tab-content#thanks-panel > p {
					color: #64748b;
					margin-bottom: 20px;
					font-size: 0.95em;
				}

				.thanks-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* 保持卡片宽度 */
					gap: 16px; /* 与首页功能网格一致 */
					margin: 0;
				}

				.thanks-card {
					text-align: center;
					/* 匹配 .aml-home-card 背景与边框 */
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 20px 18px;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					overflow: hidden;
					opacity: 0;
					transform: translateY(20px);
					animation: fadeInUp 0.6s forwards;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				/* 添加左侧 accent 条，匹配 .aml-home-card::before */
				.thanks-card::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				.thanks-card:hover {
					/* 匹配 .aml-home-card:hover */
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}

				.thanks-card:hover::before {
					opacity: 1;
				}

				/* 保持动画 */
				@keyframes fadeInUp {
					to { opacity: 1; transform: translateY(0); }
				}

				/* 延迟动画，保持原有节奏 */
				.thanks-card:nth-child(1) { animation-delay: 0.05s; }
				.thanks-card:nth-child(2) { animation-delay: 0.1s; }
				.thanks-card:nth-child(3) { animation-delay: 0.15s; }
				.thanks-card:nth-child(4) { animation-delay: 0.2s; }
				.thanks-card:nth-child(5) { animation-delay: 0.25s; }
				.thanks-card:nth-child(n+6) { animation-delay: 0.3s; }

				.thanks-avatar {
					width: 68px;
					height: 68px;
					border-radius: 50%;
					object-fit: cover;
					/* 匹配首页卡片边框风格 */
					border: 3px solid #e2e8f0;
					transition: all 0.3s ease;
					margin: 0 auto 14px;
					display: block;
					background: #fff;
				}

				.thanks-card:hover .thanks-avatar {
					transform: scale(1.05);
					border-color: #6366f1;
					box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
				}

				.thanks-username {
					font-size: 1.1em; /* 稍微调小以适应卡片 */
					font-weight: 700;
					margin: 0 0 8px;
					color: #1e293b;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					max-width: 100%;
				}

				.thanks-contribution {
					font-size: 0.9em;
					line-height: 1.5;
					color: #64748b;
					margin: 8px 0 16px;
					flex: 1; /* 让按钮到底部 */
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.thanks-action {
					margin-top: auto; /* 确保按钮在底部 */
					width: 100%;
				}

				.thanks-follow-btn {
					width: 100%;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 6px;
					padding: 8px 16px;
					/* 匹配 .aml-primary-btn */
					background: linear-gradient(135deg, #6366f1, #8b5cf6);
					color: #fff;
					font-weight: 600;
					font-size: 13px;
					border: none;
					border-radius: 6px;
					cursor: pointer;
					transition: all 0.3s ease;
					box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
				}

				.thanks-follow-btn:hover {
					transform: translateY(-2px);
					box-shadow: 0 6px 16px rgba(99, 102, 241, 0.45);
					background: linear-gradient(135deg, #7c3aed, #a78bfa);
				}

				.thanks-follow-btn:active {
					transform: translateY(0);
				}

				.thanks-follow-btn:disabled {
					opacity: 0.7;
					cursor: not-allowed;
					transform: none;
					box-shadow: none;
					background: #cbd5e1;
				}

				.thanks-follow-btn i {
					font-size: 13px;
				}

				.aml-explore-top-grid {
					display: grid;
					grid-template-columns: 2fr 1fr;
					gap: 20px;
					margin-bottom: 20px;
				}
				.aml-explore-carousel {
					position: relative;
					border-radius: 12px;
					overflow: hidden;
					background: #fff;
					border: 1px solid #e2e8f0;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
					cursor: pointer;
					transition: all 0.3s ease;
				}
				.aml-explore-carousel:hover {
					transform: translateY(-3px);
					border-color: #6366f1;
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
				}
				.aml-carousel-track {
					display: flex;
					transition: transform 0.5s ease-in-out;
				}
				.aml-carousel-slide {
					min-width: 100%;
					position: relative;
				}
				.aml-carousel-slide img {
					width: 100%;
					height: 200px;
					object-fit: cover;
					display: block;
				}
				.aml-carousel-caption {
					padding: 12px 16px;
					background: #fff;
					border-top: 1px solid #f1f5f9;
					font-size: 14px;
					color: #334155;
					font-weight: 500;
					text-align: center;
				}
				.aml-carousel-indicators {
					position: absolute;
					bottom: 10px;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					gap: 6px;
					z-index: 10;
				}
				.aml-carousel-dot {
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: rgba(30, 30, 30, 0.5);
					cursor: pointer;
					transition: all 0.3s ease;
				}
				.aml-carousel-dot.active {
					background: #1e1e1e;
					transform: scale(1.2);
				}
				.aml-count-card {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text-align: center;
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 20px;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					overflow: hidden;
				}
				.aml-count-card::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.aml-count-card:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}
				.aml-count-card:hover::before {
					opacity: 1;
				}
				.aml-count-number {
					font-size: 3.5em;
					font-weight: 800;
					line-height: 1;
					margin-bottom: 8px;
					font-family: 'Consolas', monospace;
					background: linear-gradient(135deg, #6366f1, #a855f7);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
				}
				.aml-count-label {
					font-size: 14px;
					color: #64748b;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.5px;
				}
				.aml-scripts-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
					gap: 16px;
				}
				.aml-script-card {
					background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					padding: 16px;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					cursor: pointer;
					display: flex;
					flex-direction: column;
					gap: 10px;
					position: relative;
					overflow: hidden;
				}
				.aml-script-card::before {
					content: '';
					position: absolute;
					top: 0; left: 0; width: 4px; height: 100%;
					background: linear-gradient(to bottom, #6366f1, #a855f7);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.aml-script-card:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
					border-color: #6366f1;
				}
				.aml-script-card:hover::before {
					opacity: 1;
				}
				.aml-script-header {
					display: flex;
					align-items: center;
					gap: 12px;
				}
				.aml-script-icon {
					width: 40px;
					height: 40px;
					border-radius: 8px;
					background: #e0e7ff;
					color: #6366f1;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 20px;
					flex-shrink: 0;
				}
				.aml-script-info {
					flex: 1;
					min-width: 0;
				}
				.aml-script-name {
					font-size: 15px;
					font-weight: 700;
					color: #1e293b;
					margin: 0 0 4px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.aml-script-type {
					font-size: 11px;
					padding: 2px 6px;
					border-radius: 4px;
					font-weight: 600;
					display: inline-block;
				}
				.aml-script-type.stylus { background: #fee2e2; color: #991b1b; }
				.aml-script-type.tampermonkey { background: #e0e7ff; color: #3730a3; }
				.aml-script-type.scriptcat { background: #e0e7ff; color: #3730a3;
				.aml-script-type.software { background: #dcfce7; color: #166534; }
				.aml-script-type.website { background: #fef9c3; color: #854d0e; }
				.aml-script-desc {
					font-size: 13px;
					color: #64748b;
					line-height: 1.5;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					margin: 0;
				}
				#aml-explore-carousel {
					padding-bottom: 20px;
				}
			`);
			let my_info;
			async function initPanel() {
				const { yiyan, historyHtml } = ["", ""];

				my_info = `
	<div class="welcomeContainer">
		<div class="welcomeRight">
			<div class="aml-header">
				<div style="display:flex;align-items:center;gap:8px">
					<button class="aml-header-btn" id="aml-toggle-sidebar" title="折叠侧栏">
						<i class="fas fa-bars"></i>
					</button>
					<span class="aml-header-title">Amazing Luogu v${GM_info.script.version}</span>
				</div>
				<div style="display:flex;align-items:center;gap:8px">
					<button onclick="document.getElementById('aml-notification-drawer').classList.toggle('open');" class="aml-header-btn" id="aml-notification-btn" title="消息" style="position:relative;">
						<svg class="fa-bell svg-inline--fa" data-prefix="fas" data-icon="bell" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"></path></svg><!-- <i class="fa-solid fa-bell"></i> Font Awesome fontawesome.com -->
						<span id="aml-notification-badge" style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#ef4444;border-radius:50%;display:none;"></span>
					</button>
				</div>
			</div>
			<div class="aml-tab-container">
				<nav class="aml-tab-list" id="aml-sidebar">
					<button class="aml-tab-btn active" data-tab="announcement">
						<i class="fas fa-home"></i><span> 首页</span>
					</button>
					<button class="aml-tab-btn" data-tab="settings">
						<i class="fas fa-sliders-h"></i><span> 设置</span>
					</button>
					<button class="aml-tab-btn" data-tab="help">
						<i class="far fa-question-circle"></i><span> 帮助</span>
					</button>
					<button class="aml-tab-btn" data-tab="explore">
						<i class="fas fa-compass"></i><span> 探索</span>
					</button>
					<button class="aml-tab-btn" data-tab="thanks">
						<i class="fas fa-heart"></i><span> 鸣谢</span>
					</button>
					<button class="aml-tab-btn" data-tab="debug">
						<i class="fas fa-bug"></i><span> 反馈</span>
					</button>
					<button class="aml-tab-btn" data-tab="update">
						<i class="fas fa-list"></i><span> 日志</span>
					</button>
				</nav>
				<div class="aml-tab-content-container" role="tabpanel">
					<div class="aml-tab-content" data-tab-pane="settings" role="tabpanel" id="settings-panel">
						<div id="aml-settings-container"></div>
					</div>
					<div class="aml-tab-content" data-tab-pane="thanks" role="tabpanel" id="thanks-panel">
						<h4><i class="fas fa-heart" aria-hidden="true"></i> 鸣谢</h4>
						<p>🌟 感谢 TA 们为 Amazing Luogu 建设添砖加瓦！（排名不分先后）</p>
						<div class="thanks-grid" id="aml-thanks-grid" aria-live="polite"></div>
					</div>
					<div class="aml-tab-content" data-tab-pane="explore" role="tabpanel" id="explore-panel">
						<h4><i class="fas fa-compass" aria-hidden="true"></i> 探索</h4>
						<div class="aml-explore-top-grid">
							<div id="aml-explore-carousel" class="aml-explore-carousel">
								<div id="aml-carousel-track" class="aml-carousel-track"></div>
								<div id="aml-carousel-indicators" class="aml-carousel-indicators"></div>
							</div>
							<div class="aml-count-card aml-home-card">
								<div class="aml-count-number" id="aml-script-count">0</div>
								<div class="aml-count-label">收录数量</div>
							</div>
						</div>
						<div class="aml-home-card">
							<h5><i class="fas fa-puzzle-piece"></i> 推荐</h5>
							<div id="aml-scripts-grid" class="aml-scripts-grid"></div>
						</div>
					</div>
					<div class="aml-tab-content" data-tab-pane="update" role="tabpanel" id="update-panel">
						<h4><i class="fas fa-list" aria-hidden="true"></i> 日志</h4>
						<div class="announcement-section aml-home-card" style="margin-top: 20px;">
							<h5><i class="fas fa-rocket"></i> v0.8.6 - 2026/2/24</h5>
							<div class="announcement-content">
								<p><strong>Amazing Luogu 大更新，欢迎使用 Amazing Luogu 4 - Beta！</strong></p>
							</div>
							<div class="features-section aml-home-card" style="margin-top: 0px">
								<h5><i class="fas fa-paint-brush"></i> UI 重构，更加精细，提升插件美感</h5>
								<ul class="announcement-content" style="list-style: none; padding-left: 0;">
									<li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #6366f1; margin-right: 8px;"></i>新增顶栏、侧边栏可折叠</li>
									<li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #6366f1; margin-right: 8px;"></i>主题色更换、模态框样式重构</li>
								</ul>
							</div>
							<div class="features-section aml-home-card" style="margin-top: 10px">
								<h5><i class="fas fa-cogs"></i> 服务升级，更加完善，提升插件体验</h5>
								<ul class="announcement-content" style="list-style: none; padding-left: 0;">
									<li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #6366f1; margin-right: 8px;"></i>开放诸多网页服务</li>
									<li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #6366f1; margin-right: 8px;"></i>新增 <strong>探索</strong> 板块，促进插件交流</li>
									<li style="margin-bottom: 8px;"><i class="fas fa-check-circle" style="color: #6366f1; margin-right: 8px;"></i>修复 10+ 遗留问题</li>
								</ul>
							</div>
							<div class="announcement-section aml-home-card" style="border-left: 4px solid #f59e0b; margin-top: 10px">
								<h5><i class="fas fa-exclamation-triangle"></i> 注意事项</h5>
								<div class="announcement-content">
									<p>插件仍然存在诸多问题，如有发现，或有意见，欢迎咨询 <strong>zhangyimin12345</strong>（洛谷私信）！</p>
								</div>
							</div>
						</div>
					</div>
					<div class="aml-tab-content aml-help-content" data-tab-pane="help" role="tabpanel" id="help-panel">
						<style>
							.aml-help-content p { margin: 5px 0; }
							.aml-help-content h5 { color: #475569; font-size: 15px; margin: 0 0 4px; }
						</style>
						<h4><i class="far fa-question-circle" aria-hidden="true"></i> 帮助</h4>
						<p>还没写完。征集用户写的帮助。</p>
						<h5>Q：如何配置搜索使其可以搜索文章？</h5>
						<p>在 <a href="https://www.luogu.me/" target="_blank" rel="noopener">保存站</a> 打开控制台（按 <code>F12</code> 或 <code>Ctrl+Shift+I</code>）。<br>
						点击"Network"标签 → 刷新网页 → 点击第一条 <strong>document</strong> 类型请求 → 找到"Request Headers" → 复制 <code>cf_clearance</code> 值。<br>
						粘贴到 Amazing Luogu 搜索设置的最后一项，保存并刷新页面即可。</p>
						<p><img src="https://cdn.luogu.com.cn/upload/image_hosting/70dzgnv4.png" alt="配置示意" style="max-width:100%;border-radius:8px" /></p>
						<h5>Q：如何开启此面板？</h5>
						<p>A：<code>Ctrl + ;</code>（请勿与 Luogu Search Any Where 冲突，本插件已内置）</p>
						<h5>Q：如何开/关功能？</h5>
						<p>A：左侧「设置」面板中切换</p>
						<h5>Q：如何设置备忘录/自定义样式？</h5>
						<p>A：左侧「设置」→ 下滑至对应区域</p>
						<h5>Q：如何更新脚本？</h5>
						<p>A：支持自动更新；若关闭，可在「设置」底部手动检查更新</p>
						<h5>Q：自定义字体怎么用？</h5>
						<p>A：「设置」中填入字体链接，然后在「自定义样式」中使用 <code>font-family: "AML-CustomFont";</code></p>
						<h5>Q：可以加入这个项目吗？</h5>
						<p>A：暂不开放成员，但欢迎贡献代码～</p>
					</div>
					<div class="aml-tab-content" data-tab-pane="debug" role="tabpanel" id="debug-panel">
						<h4><i class="fas fa-bug" aria-hidden="true"></i> 反馈</h4>
						<p>请通过私信反馈问题，避免在 Amazing Luogu 全网犇犇留言（作者可能无法及时查看）。</p>
						<p><strong>反馈时请尽量包含：</strong></p>
						<ul>
							<li>插件版本（当前：<code>${GM_info.script.version}</code>）</li>
							<li>浏览器及版本（如：Chrome 125）</li>
							<li>复现步骤</li>
							<li>预期行为 vs 实际行为</li>
							<li>截图/录屏链接（如有）</li>
						</ul>
						<div class="aml-bug-content">
							<label for="bug-title"><strong>标题</strong>（20 字以内）</label>
							<input type="text" id="bug-title" placeholder="例如：扩展语法样式加载失败" maxlength="20">
							<label for="bug-content"><strong>详细描述</strong>（100 字以内）</label>
							<textarea id="bug-content" rows="6" placeholder="请在此详细描述 BUG……" maxlength="100"></textarea>
							<button id="submit-bug-btn" type="button">
								<i class="fas fa-paper-plane" aria-hidden="true"></i> 发送反馈
							</button>
							<span id="bug-submit-status" role="status" aria-live="polite"></span>
						</div>
					</div>
					<div class="aml-tab-content active" data-tab-pane="announcement">
						<h1 class="aml-home-greeting">👋 Hi !</h1>
						<div class="aml-home-grid">
							<div>
								<div class="aml-home-card">
									<h5><i class="fas fa-clock"></i> 当前时间</h5>
									<div class="aml-time-container">
										<i class="fas fa-clock aml-time-icon"></i>
										<div class="aml-time" id="aml-current-time">${new Date().toLocaleString("zh-CN", { hour12: false })}</div>
									</div>
									<div class="aml-yiyan">${"正在获取..."}</div>
									<div class="aml-yiyan-from">${yiyan?.tag ? "—— " + yiyan.tag : ""}</div>
								</div>
							</div>
							<div class="aml-home-card">
								<h5><i class="fas fa-history"></i> 历史上的今天</h5>
								<div class="aml-history">${"正在获取..."}</div>
							</div>
						</div>
						<div class="features-section aml-home-card">
							<h5><i class="fas fa-star"></i> 服务列表</h5>
							<div class="features-grid">
								<div class="feature-card" onclick="window.open('https://amlg.top/', '_blank')">
									<i class="fas fa-home"></i>
									<span>新版插件首页</span>
								</div>
								<div class="feature-card" onclick="window.open('https://dash.amlg.top/', '_blank')">
									<i class="fa-solid fa-gauge-high"></i>
									<span>新版插件面板</span>
								</div>
								<div class="feature-card" onclick="window.open('https://luogu.amlg.top/', '_blank')">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path fill="currentColor" d="M12.424 0c-.435-.005-.964.138-1.569.65c-.967.817-2.554 3.235-3.56 4.38s-2.002 1.65-2.48 2.493c-.477.844-.824 1.598-.385 2.568s2.308 2.592 3.018 3.247s.724.566 1.24.68c.517.113 1.38.188 1.857 0c.478-.19.993-.63 1.006-1.133s-.515-1.409-.928-1.887c-.413-.479-1.213-.769-1.549-.983s-.373-.076-.463-.303s-.413-.59-.078-1.056c.336-.466 1.38-1.033 2.09-1.738s1.625-1.61 2.167-2.492s1.06-2.064 1.085-2.794C13.901.902 13.603.285 13.1.12a2.2 2.2 0 0 0-.676-.12m-.397 6.936c-.243.008-.443.037-.566.097c-.492.24-.48.997-.151 1.515s1.618 1.223 2.124 1.59c.505.366.883.292.908.607c.026.316.102.315-.757 1.287c-.86.973-3.222 3.371-4.397 4.546c-1.175 1.174-1.77 1.503-2.654 2.5S4.259 21.78 3.88 22.563s-.15.997.38 1.212c.531.214 2.11.34 2.804.075c.695-.265.822-1.034 1.365-1.666c.543-.63.721-.859 1.896-2.122c.472-.507 1.242-1.32 1.998-2.118c.048.151.126.324.243.525c.423.727 1.922 2.219 2.537 3.009s.77 1.33 1.154 1.73c.384.402.55.564 1.152.677c.602.112 1.998.188 2.459 0c.461-.189.552-.576.308-1.127c-.243-.552-1.346-1.555-1.768-2.182c-.423-.627-1.243-2.095-1.845-2.71s-1.025-.776-1.768-.977c-.43-.115-.982-.11-1.444-.034c.769-.811 1.564-1.647 2.129-2.246c1.415-1.503 2.88-2.614 3.335-3.56c.455-.948-.214-1.492-.606-2.123c-.391-.631-1.124-1.363-1.743-1.666c-.62-.303-1.151-.1-1.972-.151c-.616-.038-1.737-.197-2.467-.173"></path>
									</svg>
									<span>新版洛谷国际</span>
								</div>
								<div class="feature-card" onclick="window.open('https://dash.amlg.top/services/list', '_blank')">
									<i class="fa-solid fa-ellipsis"></i>
									<span>更多服务</span>
								</div>
							</div>
						</div>
						<div class="announcement-section aml-home-card">
							<h5><i class="fas fa-bullhorn"></i> 重要公告</h5>
							<div class="announcement-content">
								<p><strong>新版外观</strong></p>
								<p>新版外观怎么样呢？有任何建议都可以私信 zhangyimin12345！</p>
								<p>目前新版外观只写完了框架与首页，其它外观的将在接下来的版本中陆续更换！</p>
							</div>
							<div class="announcement-content">
								<p><strong>广告位招租</strong></p>
								<p>Amazing Luogu 有新板块“探索”啦！支持公益学术/开发项目广告！</p>
								<p>审核较严格，目的是让其是“探索”而不是广告。</p>
								<p>了解更多请私信 zhangyimin12345！</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="aml-notification-drawer" class="aml-notification-drawer">
				<div class="aml-notification-header">
					<h5><svg class="svg-inline--fa fa-bell" data-prefix="fas" data-icon="bell" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"></path></svg><!-- <i class="fa-solid fa-bell"></i> Font Awesome fontawesome.com --> 消息中心</h5>
					<button id="aml-close-notification" onclick="document.getElementById('aml-notification-drawer').classList.remove('open');" class="aml-header-btn"><svg class="svg-inline--fa fa-xmark" data-prefix="fas" data-icon="xmark" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg><!-- <i class="fas fa-times"></i> Font Awesome fontawesome.com --></button>
				</div>
				<div id="aml-notification-list" class="aml-notification-list">
					<div style="text-align:center;padding:20px;color:#64748b;">正在加载...</div>
				</div>
			</div>
			<div id="aml-notification-modal" class="aml-notification-modal" style="display:none;">
				<div class="aml-modal-content">
					<div class="aml-modal-header">
						<h4 id="aml-modal-title">标题</h4>
						<button id="aml-close-modal" class="aml-header-btn"><svg class="svg-inline--fa fa-xmark" data-prefix="fas" data-icon="xmark" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg><!-- <i class="fas fa-times"></i> Font Awesome fontawesome.com --></button>
					</div>
					<div class="aml-modal-body" id="aml-modal-body"></div>
					<div class="aml-modal-footer">
						<span id="aml-modal-time" style="color:#64748b;font-size:0.9em;"></span>
					</div>
				</div>
			</div>
			<script>
				if(typeof exploreAds=='undefined'){
					exploreAds = [
						{ image: 'https://cdn.luogu.com.cn/upload/image_hosting/8ttmk18r.png', text: 'Amazing Luogu 面板，多功能', link: 'https://dash.amlg.top' },
						{ image: 'https://cdn.luogu.com.cn/upload/image_hosting/3s3czya0.png', text: 'GenGen 队', link: 'https://gengen.qzz.io' },
						{ image: '', text: '广告位招租', link: 'https://www.luogu.com.cn/chat?uid=1393230' }
					];
				}
				if(typeof exploreScripts=='undefined'){
					exploreScripts = [
						{ name: 'GenGen RMJ', icon: 'fas fa-rocket', type: 'scriptcat', desc: '新的 RMJ', link: 'https://gengen.qzz.io/projects/rmj/' },
						{ name: 'Better Luogu', icon: 'fas fa-puzzle-piece', type: 'tampermonkey', desc: '强大的洛谷插件', link: 'https://blg.volatiles.dpdns.org/' },
						{ name: 'Argon Luogu', icon: 'fa-brands fa-css', type: 'software', desc: '漂亮的洛谷样式', link: 'https://userstyles.world/style/24127/default-slug' },
						{ name: 'OI CPP', icon: 'fa-solid fa-code', type: 'software', desc: '强大的 IDE', link: 'https://oicpp.mywwzh.top/' },
						{ name: '洛谷仓库', icon: 'fa-regular fa-floppy-disk', type: 'website', desc: '强大的洛谷保存站。', link: 'https://luogu.store/' }
					];
				}
				function initExplorePage() {
					const carouselTrack = document.getElementById('aml-carousel-track');
					const carouselDots = document.getElementById('aml-carousel-indicators');
					const carouselContainer = document.getElementById('aml-explore-carousel');
					const scriptCountEl = document.getElementById('aml-script-count');
					const scriptsGrid = document.getElementById('aml-scripts-grid');

					if (!carouselTrack || !carouselDots || !scriptsGrid) return;

					let currentSlide = 0;
					const totalSlides = exploreAds.length;

					exploreAds.forEach((ad, index) => {
						const slide = document.createElement('div');
						slide.className = 'aml-carousel-slide';
						slide.innerHTML = \`<img src="\${ad.image}" alt="Ad \${index}"><div class="aml-carousel-caption">\${ad.text}</div>\`;
						slide.addEventListener('click', () => { window.open(ad.link, '_blank'); });
						carouselTrack.appendChild(slide);

						const dot = document.createElement('div');
						dot.className = \`aml-carousel-dot \${index === 0 ? 'active' : ''}\`;
						dot.addEventListener('click', () => {
							currentSlide = index;
							updateCarousel();
						});
						carouselDots.appendChild(dot);
					});

					function updateCarousel() {
						carouselTrack.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
						document.querySelectorAll('.aml-carousel-dot').forEach((dot, index) => {
							dot.classList.toggle('active', index === currentSlide);
						});
					}

					setInterval(() => {
						currentSlide = (currentSlide + 1) % totalSlides;
						updateCarousel();
					}, 5000);

					if (scriptCountEl) {
						scriptCountEl.textContent = exploreScripts.length;
					}

					exploreScripts.forEach(script => {
						const card = document.createElement('div');
						card.className = 'aml-script-card';
						card.innerHTML = \`
							<div class="aml-script-header">
								<div class="aml-script-icon"><i class="\${script.icon}"></i></div>
								<div class="aml-script-info">
									<div class="aml-script-name">\${script.name}</div>
									<span class="aml-script-type \${script.type}">\${script.type.toUpperCase()}</span>
								</div>
							</div>
							<p class="aml-script-desc">\${script.desc}</p>
						\`;
						card.addEventListener('click', () => { window.open(script.link, '_blank'); });
						scriptsGrid.appendChild(card);
					});
				}
				(function initAfterRender() {
					setTimeout(() => {
						if (document.getElementById('explore-panel')) {
							initExplorePage();
						}
						function updateTime() {
							const el = document.getElementById('aml-current-time');
							if (!el) return;
							const now = new Date();
							el.textContent = now.toLocaleString('zh-CN', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
						}
						updateTime(); setInterval(updateTime, 1000);
						if (typeof window.thanks === 'undefined') { window.thanks = null; }
						function gotolink(url) { window.location.href = url.trim(); }
						(function(){
							const toggleBtn = document.getElementById('aml-toggle-sidebar');
							const sidebar = document.getElementById('aml-sidebar');
							const closeBtn = document.getElementById('aml-close-panel');
							toggleBtn?.addEventListener('click', () => {
								sidebar?.classList.toggle('collapsed');
							});
							closeBtn?.addEventListener('click', () => {
								document.querySelector('.welcomeContainer')?.remove();
							});
						})();
						(function initTabs() {
							const tabBtns = document.querySelectorAll('.aml-tab-btn');
							const tabPanes = document.querySelectorAll('.aml-tab-content');
							function switchTab(targetId) {
								tabBtns.forEach(btn => {
									const isActive = btn.dataset.tab === targetId;
									btn.classList.toggle('active', isActive);
									btn.setAttribute('aria-selected', isActive);
								});
								tabPanes.forEach(pane => {
									const isActive = pane.dataset.tabPane === targetId;
									pane.classList.toggle('active', isActive);
									pane.setAttribute('aria-hidden', !isActive);
								});
							}
							tabBtns.forEach(btn => {
								btn.addEventListener('click', (e) => {
									e.preventDefault();
									switchTab(btn.dataset.tab);
								});
							});
						})();
						function getCurrentUserId() {
							let login = document.querySelector("[href='/auth/login']");
							if (login) return null;
							let avatarImg = document.querySelector(
								"img.avatar[data-v-0a5f98b2]",
							);
							if (!avatarImg) {
								avatarImg = document.querySelector(
									".user-nav .avatar img[data-v-65720dbc]",
								);
							}
							if (avatarImg && avatarImg.src) {
								const match = avatarImg.src.match(
									/\/upload\/usericon\/(\d+)\.png/,
								);
								if (match) {
									return match[1];
								}
							}
							return null;
						}
						(function initThanks() {
							const thanksBtn = document.querySelector('[data-tab="thanks"]');
							if (!thanksBtn) return;
							thanksBtn.addEventListener('click', function renderThanks() {
								const grid = document.getElementById('aml-thanks-grid');
								if (!grid || grid.querySelector('.thanks-card')) return;
								const contributors = [
									{ id: 749539, name: '__yun__', contribution: '报告许多 BUG 与提出许多建议' },
									{ id: 1157535, name: 'yangrenrui', contribution: '开发者之一' },
									{ id: 542128, name: 'wing_heart', contribution: '报告 BUG 与提出建议' },
									{ id: 613794, name: 'jianhe', contribution: '报告 BUG 与提出建议' },
									{ id: 365751, name: 'Mr_罗', contribution: '提供了删除广告并将运势居中的代码~' },
									{ id: 1676730, name: 'ZBXAPCY', contribution: '报告 BUG 或提出建议' },
									{ id: 934350, name: 'EasonLIkeMath', contribution: '报告 BUG 或提出建议' },
									{ id: 1047592, name: 'mondayrain', contribution: '报告 BUG 与提出建议' },
									{ id: 466596, name: 'MorningStarCzy', contribution: '报告 BUG 或提出建议' },
									{ id: 748015, name: '__Segment_Tree__', contribution: '报告 BUG 或提出建议' },
									{ id: 1293314, name: 'Lqs888', contribution: '报告 BUG 或提出建议' },
									{ id: 1015977, name: 'heyZZZ', contribution: '报告 BUG 或提出建议' },
									{ id: 1025097, name: 'koukou', contribution: '报告 BUG 或提出建议' },
									{ id: 681292, name: 'banglee', contribution: '报告 BUG 或提出建议' },
									{ id: 930718, name: 'Eason_lyx', contribution: '报告 BUG 或提出建议' },
								];
								const currentUid = getCurrentUserId();
								contributors.forEach(contrib => {
									const card = document.createElement('div');
									card.className = 'thanks-card';
									card.innerHTML = \`
										<img class="thanks-avatar" src="https://cdn.luogu.com.cn/upload/usericon/\${contrib.id}.png" alt="\${contrib.name}" loading="lazy">
										<div class="thanks-username">\${contrib.name}</div>
										<div class="thanks-contribution">\${contrib.contribution}</div>
										<div class="thanks-action">
											<button class="thanks-follow-btn" data-uid="\${contrib.id}" data-url="https://www.luogu.com.cn/user/\${contrib.id}">
												<i class="fas fa-user-plus" aria-hidden="true"></i> 关注 TA
											</button>
										</div>
									\`;
									grid.appendChild(card);
									const btn = card.querySelector('.thanks-follow-btn');
									const isSelf = contrib.id == currentUid;
									if (isSelf || currentUid === null) {
										btn.innerHTML = '<i class="fas fa-exclamation"></i> 无法关注';
										btn.disabled = true;
										return;
									}
									Promise.all([
										fetch(\`https://www.luogu.com.cn/api/user/info/\${contrib.id}\`).then(r => r.json()),
										fetch(\`https://www.luogu.com.cn/user/\${contrib.id}\`).then(r => r.text())
									]).then(([infoData, profileHtml]) => {
										if (infoData?.user?.userRelationship === 1 || profileHtml?.includes('该用户未通过实名认证')) {
											btn.innerHTML = '<i class="fas fa-check"></i> 已关注';
											btn.disabled = true;
										}
									}).catch(() => {});
									btn.addEventListener('click', async () => {
										btn.disabled = true;
										btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 关注中…';
										try {
											const res = await fetch('https://www.luogu.com.cn/api/user/updateRelationShip', {
												method: 'POST',
												headers: {
													'Content-Type': 'application/json',
													'Referer': 'https://www.luogu.com.cn/',
													'X-CSRF-Token': '${gettoken()}',
												},
												body: JSON.stringify({ uid: contrib.id, relationship: 1 }),
												credentials: 'include',
											});
											if (res.ok) {
												btn.innerHTML = '<i class="fas fa-check"></i> 已关注';
											} else {
												btn.innerHTML = '<i class="fas fa-exclamation"></i> 关注失败';
												btn.disabled = false;
											}
										} catch {
											btn.innerHTML = '<i class="fas fa-exclamation"></i> 网络错误';
											btn.disabled = false;
										}
									});
								});
								thanksBtn.removeEventListener('click', renderThanks);
							}, { once: false });
						})();
						(function initBugForm() {
							const submitBtn = document.getElementById('submit-bug-btn');
							const statusEl = document.getElementById('bug-submit-status');
							if (!submitBtn) return;
							submitBtn.addEventListener('click', async function () {
								const title = document.getElementById('bug-title').value.trim();
								const content = document.getElementById('bug-content').value.trim();
								if (!title) return showStatus('请输入标题', 'error');
								if (!content) return showStatus('请填写详细描述', 'error');
								if (title.length > 20) return showStatus('标题不超过 20 字', 'error');
								if (content.length > 100) return showStatus('描述不超过 100 字', 'error');
								const originalBtnText = submitBtn.innerHTML;
								submitBtn.disabled = true;
								submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中…';
								showStatus('', 'normal');
								try {
									async function sendMessage(content) {
										await fetch('https://www.luogu.com.cn/api/chat/new', {
											method: 'POST',
											headers: {
												'Content-Type': 'application/json',
												'Referer': 'https://www.luogu.com.cn/',
												'X-CSRF-Token': '${gettoken()}',
											},
											body: JSON.stringify({
												user: 1393230,
												content: content,
											}),
											credentials: 'include',
										});
									}
									const message = \`[BUG 反馈] \${title}\\n\\n\${content}\\n\\n---\\n插件版本：${GM_info.script.version}\\n提交时间：\${new Date().toLocaleString('zh-CN')}\`;
									await sendMessage(message);
									showStatus('提交成功，感谢反馈！✅', 'success');
									document.getElementById('bug-title').value = '';
									document.getElementById('bug-content').value = '';
								} catch (e) {
									showStatus('发送失败，请重试或私信作者', 'error');
								} finally {
									submitBtn.disabled = false;
									submitBtn.innerHTML = originalBtnText;
								}
							});
							function showStatus(text, type) {
								statusEl.textContent = text;
								statusEl.style.color = type === 'error' ? '#ef4444' : type === 'success' ? '#22c55e' : '#64748b';
							}
						})();
					}, 0);
				})();
			</script>
		</div>
	</div>`;
				console.log(my_info);
			}
			async function fetchHomeData() {
				const defaultYiyan = { text: "暂无内容", tag: "" };
				const defaultHistory = "";
				let yiyan = defaultYiyan;
				let historyHtml = defaultHistory;

				// ==================== 缓存配置 ====================
				const CACHE_KEY = {
					YIYAN: "aml_yiyan_cache",
					YIYAN_TIME: "aml_yiyan_cache_time",
					HISTORY: "aml_history_cache",
					HISTORY_TIME: "aml_history_cache_time",
				};
				const CACHE_DURATION = {
					YIYAN: 1 * 60 * 60 * 1000,   // 1小时
					HISTORY: 24 * 60 * 60 * 1000 // 1天
				};

				// ==================== 工具函数：获取缓存 ====================
				function getCache(key, timeKey, duration) {
					try {
						const cacheTime = GM_getValue(timeKey, 0);
						const now = Date.now();
						// 缓存未过期
						if (now - cacheTime < duration) {
							return GM_getValue(key, null);
						}
					} catch (e) {}
					return null;
				}

				// ==================== 工具函数：设置缓存 ====================
				function setCache(key, timeKey, data) {
					try {
						GM_setValue(key, data);
						GM_setValue(timeKey, Date.now());
					} catch (e) {}
				}

				// ==================== 1. 获取一言（带1小时缓存） ====================
				if (typeof GM_xmlhttpRequest !== "undefined") {
					// 先读缓存
					const cacheYiyan = getCache(CACHE_KEY.YIYAN, CACHE_KEY.YIYAN_TIME, CACHE_DURATION.YIYAN);
					if (cacheYiyan) {
						yiyan = cacheYiyan;
					} else {
						// 无缓存/缓存过期 → 请求接口
						try {
							const res = await new Promise((resolve, reject) => {
								GM_xmlhttpRequest({
									method: "GET",
									url: "https://uapis.cn/api/v1/saying",
									timeout: 4000,
									onload: (r) => resolve(r),
									onerror: reject,
									ontimeout: reject,
								});
							});
							const data = JSON.parse(res.responseText);
							if (data?.text) {
								yiyan = { text: data.text, tag: data.tag || "" };
								// 写入缓存
								setCache(CACHE_KEY.YIYAN, CACHE_KEY.YIYAN_TIME, yiyan);
							}
						} catch {
							// 请求失败，尝试读取过期缓存兜底
							const fallback = GM_getValue(CACHE_KEY.YIYAN, defaultYiyan);
							yiyan = fallback;
						}
					}
				}

				// ==================== 2. 获取历史上的今天（带1天缓存） ====================
				if (typeof GM_xmlhttpRequest !== "undefined") {
					// 先读缓存
					const cacheHistory = getCache(CACHE_KEY.HISTORY, CACHE_KEY.HISTORY_TIME, CACHE_DURATION.HISTORY);
					if (cacheHistory) {
						historyHtml = cacheHistory;
					} else {
						// 无缓存/缓存过期 → 请求接口
						try {
							const res = await new Promise((resolve, reject) => {
								GM_xmlhttpRequest({
									method: "GET",
									url: "https://uapis.cn/api/v1/history/programmer/today",
									timeout: 5000,
									onload: (r) => resolve(r),
									onerror: reject,
									ontimeout: reject,
								});
							});
							const data = JSON.parse(res.responseText);
							let tempHtml = "";

							if ((data?.code === 200 && Array.isArray(data?.events)) || Array.isArray(data?.events)) {
								tempHtml = data.events
									.slice(0, 5)
									.map(
										(item) =>
											`<div class="aml-history-item"><span class="aml-history-year">${item.year}年</span>：${item.title ? (item.title == item.description ? item.title : item.title + "<br>" + item.description) : "无描述"}</div>`,
									)
									.join("");
							}

							if (tempHtml) {
								historyHtml = tempHtml;
								// 写入缓存
								setCache(CACHE_KEY.HISTORY, CACHE_KEY.HISTORY_TIME, historyHtml);
							}
						} catch (e) {
							console.warn("History API error:", e);
							// 请求失败，尝试读取过期缓存兜底
							const fallback = GM_getValue(CACHE_KEY.HISTORY, defaultHistory);
							historyHtml = fallback;
						}
					}
				}

				// ==================== 渲染到页面 ====================
				let yiyan_ = document.getElementsByClassName("aml-yiyan")[0];
				if (yiyan_) {
					yiyan_.innerHTML = yiyan?.text || "暂无内容";
				}
				let tagyiyan_ = document.getElementsByClassName("aml-yiyan-from")[0];
				if (tagyiyan_) {
					tagyiyan_.innerHTML = yiyan?.tag ? "—— " + yiyan.tag : "";
				}
				let history = document.getElementsByClassName("aml-history")[0];
				if (history) {
					history.innerHTML = historyHtml || "暂无记录";
				}

				return { yiyan, historyHtml };
			}
			function gettoken() {
				return (
					document.querySelector("meta[name=csrf-token]") || { content: "" }
				).content;
			}
			function getuid() {
				let login = document.querySelector("[href='/auth/login']");
				if (login) return null;
				let avatarImg = document.querySelector(
					"img.avatar[data-v-0a5f98b2]",
				);
				if (!avatarImg) {
					avatarImg = document.querySelector(
						".user-nav .avatar img[data-v-65720dbc]",
					);
				}
				if (avatarImg && avatarImg.src) {
					const match = avatarImg.src.match(
						/\/upload\/usericon\/(\d+)\.png/,
					);
					if (match) {
						return match[1];
					}
				}
				return null;
			}
			async function getusername(uid) {
				if (uid == null) {
					return null;
				}
				if (uid == getuid()) {
					let a = document.querySelector('span[data-v-1ecbf760]');
					let b = document.querySelector('a[data-v-aef5ecde][data-v-0640126c]');
					if (a) {
						return a.textContent.trim();
					} else {
						return b ? b.textContent.trim() : null;
					}
				}
				console.log(`https://www.luogu.com.cn/api/user/search?keyword=${uid}`);
				const response = await fetch(
					`https://www.luogu.com.cn/api/user/search?keyword=${uid}`,
				);
				const data = await response.json();
				if (data.users && data.users.length > 0) {
					return data.users[0].name;
				}
				return null;
			}
			async function getusernameandset(uid) {
				const username = await getusername(uid);
				const greeting = document.getElementsByClassName("aml-home-greeting")[0];
				if (greeting) {
					greeting.innerHTML = `👋 Hi, ${username} !`;
				}
			}
			if (window.location.href.includes("www.luogu.com")) {
				let uid = getuid();
				GM_setValue("aml-uid", uid);
				(async () => {
					if (uid) {
						let username = await getusername(uid);
						GM_setValue("aml-username", username);
					}
				})();
				const defaultSettings = {
					amlAutoSaveDiscussEnabled: false,
					amlShowUserIntroductionEnabled: true,
					amlExtendTaskEnabled: true,
					amlSlogenTimeEnabled: true,
					amlDiscussListLengthEnabled: false,
					amlAutoO2Enabled: false,
					amlVscodeLuoguEnabled: false,
					amlCodeforcesOriginDifEnabled: true,
					amlBenbenctrlenterEnabled: true,
					amlNbnhhshEnabled: true,
					amlProblemRandom: true,
					amlUseLuoguMe: false,
					amlPanelOpen: true,
					amlChatMarkdown: true,
					amlProblemColors: true,
					amlCoverRemoval: false,
					amlCaptchaAutofill: false,
					amlProblemJumper: true,
					amlSaveStationJumper: true,
					amlCodeFolding: true,
					amlAutoCheckIn: true,
					amlCaptchaOCREndpoint: "http://8.140.166.24:44963/?base64=",
					amlColorUpdateInterval: 300,
					amlVscodePort: 1145,
					amlDiscussListLength: 16,
					amlMemoContent: "关注 zhangyimin12345 谢谢啦！",
					amlMemoEnabled: true,
					amlButtonUnlocker: true,
					amlProblemJumpStyling: true,
					amlUserSearchEnabled: true,
					amlAutoExpandBenben: true,
					amlBenbenBlockedUids: [""],
					amlCopyMarkdownEnabled: true,
					amlDiscussCopyButtonEnabled: true,
					amlCustomCSS: "",
					amlCustomCSSPosition: "head",
					amlCustomFontURL: "",
					amlCustomFontEnabled: true,
					amlCustomStyleEnabled: true,
					amlDefaultCodeEnabled: true,
					amlDefaultCodeContent: "",
					amlAutoReplyEnabled: false,
					amlAutoReplyFocusModeMessage:
						"该用户开启了专注模式认真学术，可能暂时无法回复您的私信！",
					amlAutoReplyNormalMessage: "已经提示该用户，请耐心等待 TA 的回复！",
					amlUserFinderEnabled: false,
					amlFocusModeEnabled: false,
					amlFocusModeHideChat: true,
					amlFocusModeHideNotification: true,
					amlFocusModeHideArticle: true,
					amlFocusModeHidePaste: true,
					amlFocusModeHideSolution: true,
					amlFocusModeHideContest: false,
					amlFocusModeHideUser: true,
					amlFocusModeHideTicket: true,
					amlFocusModeHideHelp: true,
					amlFocusModeHideFooter: true,
					amlFocusModeHideHome: true,
					amlFocusModeHideAD: true,
					amlFocusModeHidePunchAndAd: false,
					amlFocusModeHidediscuss: true,
					amlFocusModeHideFriendLinks: true,
					amlFocusModeHideTeam: true,
					amlFocusModeHideTag: true,
					amlFocusModeHideThemeList: true,
					amlFocusModeHideImageHosting: true,
					amlFocusModeHideRank: true,
					amlFocusModeHideJudgement: true,
					amlFocusModeHidePage: true,
					amlFocusModeHideLinksButtons: true,
					amlFocusModeHideSidebarLeft: true,
					amlFocusModeHideSidebarRight: true,
					amlFocusModeHideBenben: true,
					amlFocusModeHideBenbenInput: true,
					amlFocusModeHideBenbenMore: true,
					amlFocusModeHideProblemStats: true,
					amlFocusModeHideProblemSolutions: true,
					amlFocusModeHideProblemTickets: true,
					amlFocusModeHideProblemProviders: true,
					amlFocusModeHideProblemPersonalList: true,
					amlFocusModeHideProblemTeamList: true,
					amlFocusModeHideProblemDiscuss: true,
					amlFocusModeHideProblemTags: true,
					amlFocusModeHideTrainingStats: true,
					amlFocusModeHideTrainingOperations: true,
					amlFocusModeHideRecordFilters: true,
					amlChatNotificationEnabled: true,
					amlEmojiRenderingEnabled: true,
				};
				function exportSettings() {
					const settings_ = getAMLSettings();
					const settings = defaultSettings;
					for (const key in settings) {
						if (!settings_[key]) {
							settings[key] = settings_[key];
						}
					}
					const dataStr = JSON.stringify(settings, null, 2);
					const dataBlob = new Blob([dataStr], { type: "application/json" });
					const url = URL.createObjectURL(dataBlob);
					const link = document.createElement("a");
					link.href = url;
					link.download = "aml_settings_backup.json";
					link.click();
					URL.revokeObjectURL(url);
				}
				document.addEventListener("exportsettings", function (e) {
					exportSettings();
				});
			} else {
				const Event = new CustomEvent("giveuid", {
					detail: { type: "data", content: GM_getValue("aml-uid") },
				});
				document.dispatchEvent(Event);
				const Event2 = new CustomEvent("giveusername", {
					detail: { type: "data", content: GM_getValue("aml-username") },
				});
				document.dispatchEvent(Event2);
				const allGM = {};
				GM_listValues().forEach((k) => (allGM[k] = GM_getValue(k)));
				const Event3 = new CustomEvent("givesettings", {
					detail: { type: "data", content: allGM },
				});
				document.dispatchEvent(Event3);
				document.addEventListener("pageMessage", function (e) {
					GM_settings = e.detail.data;
					if (GM_settings) {
						for (const key in GM_settings) {
							if (GM_settings.hasOwnProperty(key)) {
								GM_setValue(key, GM_settings[key]);
							}
						}
					}
				});
			}
			if (!window.location.href.includes("www.luogu.com")) return;
			function getAMLSettings() {
				const allGM = {};
				GM_listValues().forEach((k) => (allGM[k] = GM_getValue(k)));
				return allGM;
			}
			function createAMLSettingsHTML(currentSettings) {
				let featuresHTML = `
					<div class="aml-settings-section aml-home-card">
						<h4><i class="fas fa-wrench"></i> &nbsp;功能开关</h4>
						<input type="text" id="aml-feature-search" class="aml-search-bar" placeholder="搜索功能、标签或描述...">
						<div id="aml-features-container" class="aml-features-grid">`;

				features.forEach((feature) => {
					const statusText =
						feature.status === "stable"
							? "稳定"
							: feature.status === "beta"
								? "Beta"
								: "弃用";
					featuresHTML += `<div class="aml-feature-card" data-search-text="${feature.label} ${feature.desc} ${feature.tag} ${statusText}">
				<div class="aml-card-header">
					<span class="aml-feature-tag">${feature.tag}</span>
					<span class="aml-feature-status ${feature.status}">${statusText}</span>
				</div>
				<div class="aml-card-body">
					<div class="aml-card-title">
						<input type="checkbox" id="aml-${feature.key}" ${currentSettings[feature.key] ? "checked" : ""}>
						<label for="aml-${feature.key}">${feature.label}</label>
					</div>
					<div class="aml-card-desc">${feature.desc}</div>
				</div>
			</div>`;
				});

				featuresHTML += `<div class="aml-no-results" id="aml-no-results">未找到匹配的功能项</div></div></div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fa-solid fa-brush"></i> &nbsp;难度颜色</h4>
			<div id="aml-problemcolors-section" style="display: ${currentSettings.problemColors ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-color-interval">难度颜色请求间隔 (ms):</label>
					<input type="number" id="aml-color-interval" value="${currentSettings.colorUpdateInterval}">
				</div>
			</div>
			<div id="aml-problemcolors-disabled-notice" class="disabled-notice" style="display: ${currentSettings.problemColors ? "none" : "block"};">难度颜色功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fa-solid fa-code"></i> &nbsp;VSCode Luogu API</h4>
			<div id="aml-vscode-luogu-section" style="display: ${currentSettings.vscodeLuoguEnabled ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-vscode-port">VSCode Luogu API 端口号:</label>
					<input type="number" min="1" max="65535" id="aml-vscode-port" value="${currentSettings.vscodePort || 1145}">
				</div>
			</div>
			<div id="aml-vscode-luogu-disabled-notice" class="disabled-notice" style="display: ${currentSettings.vscodeLuoguEnabled ? "none" : "block"};">VSCode Luogu API 功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fa-regular fa-comment-dots"></i> &nbsp;犇犇优化</h4>
			<div id="aml-benben-section" style="display: ${currentSettings.autoExpandBenben ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-benben-blocked-uids">屏蔽的用户 UID (逗号分隔):</label>
					<input type="text" id="aml-benben-blocked-uids" value="${currentSettings.benbenBlockedUids.join(",")}">
				</div>
			</div>
			<div id="aml-benben-disabled-notice" class="disabled-notice" style="display: ${currentSettings.autoExpandBenben ? "none" : "block"};">犇犇优化功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fa-regular fa-comments"></i> &nbsp;首页讨论个数限制</h4>
			<div id="aml-discuss-section" style="display: ${currentSettings.discussListLengthEnabled ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-discuss-length">讨论列表长度限制:</label>
					<input type="number" min="4" max="16" id="aml-discuss-length" value="${currentSettings.discussListLength || 16}">
				</div>
			</div>
			<div id="aml-discuss-disabled-notice" class="disabled-notice" style="display: ${currentSettings.discussListLengthEnabled ? "none" : "block"};">讨论列表长度限制功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fa-regular fa-clock"></i> &nbsp;签名时间提示</h4>
			<div id="aml-slogentime-section" style="display: ${currentSettings.slogenTimeEnabled ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-slogen-time-format">自定义签名时间显示格式 ({time} 表示当前时间，{slogan} 表示当前用户签名):</label>
					<input type="text" id="aml-slogen-time-format" value="${currentSettings.slogenTimeFormat}">
				</div>
			</div>
			<div id="aml-slogentime-disabled-notice" class="disabled-notice" style="display: ${currentSettings.slogenTimeEnabled ? "none" : "block"};">签名时间提示功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fas fa-user-secret"></i> &nbsp;专注模式设置</h4>
			<div id="aml-focusmode-section" style="display: ${currentSettings.focusModeEnabled ? "block" : "none"};">
				<div class="aml-settings-grid aml-focus-grid">
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHidePage" ${currentSettings.focusModeHidePage ? "checked" : ""}><label for="aml-focusModeHidePage">禁用一些页面</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideLinksButtons" ${currentSettings.focusModeHideLinksButtons ? "checked" : ""}><label for="aml-focusModeHideLinksButtons">隐藏导航栏链接/按钮</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideSidebarLeft" ${currentSettings.focusModeHideSidebarLeft ? "checked" : ""}><label for="aml-focusModeHideSidebarLeft">隐藏左侧边栏</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideSidebarRight" ${currentSettings.focusModeHideSidebarRight ? "checked" : ""}><label for="aml-focusModeHideSidebarRight">隐藏右侧边栏</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideChat" ${currentSettings.focusModeHideChat ? "checked" : ""}><label for="aml-focusModeHideChat">隐藏私信</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideNotification" ${currentSettings.focusModeHideNotification ? "checked" : ""}><label for="aml-focusModeHideNotification">隐藏消息</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideArticle" ${currentSettings.focusModeHideArticle ? "checked" : ""}><label for="aml-focusModeHideArticle">隐藏专栏</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHidePaste" ${currentSettings.focusModeHidePaste ? "checked" : ""}><label for="aml-focusModeHidePaste">隐藏剪贴板</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideSolution" ${currentSettings.focusModeHideSolution ? "checked" : ""}><label for="aml-focusModeHideSolution">隐藏题解</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideContest" ${currentSettings.focusModeHideContest ? "checked" : ""}><label for="aml-focusModeHideContest">隐藏比赛</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideUser" ${currentSettings.focusModeHideUser ? "checked" : ""}><label for="aml-focusModeHideUser">隐藏用户主页/设置</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideTicket" ${currentSettings.focusModeHideTicket ? "checked" : ""}><label for="aml-focusModeHideTicket">隐藏工单</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideHelp" ${currentSettings.focusModeHideHelp ? "checked" : ""}><label for="aml-focusModeHideHelp">隐藏帮助中心</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideFooter" ${currentSettings.focusModeHideFooter ? "checked" : ""}><label for="aml-focusModeHideFooter">隐藏页脚</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideHome" ${currentSettings.focusModeHideHome ? "checked" : ""}><label for="aml-focusModeHideHome">隐藏首页内容</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideAD" ${currentSettings.focusModeHideAD ? "checked" : ""}><label for="aml-focusModeHideAD">隐藏首页广告</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHidePunchAndAd" ${currentSettings.focusModeHidePunchAndAd ? "checked" : ""}><label for="aml-focusModeHidePunchAndAd">隐藏运势和广告</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHidediscuss" ${currentSettings.focusModeHidediscuss ? "checked" : ""}><label for="aml-focusModeHidediscuss">隐藏讨论</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideFriendLinks" ${currentSettings.focusModeHideFriendLinks ? "checked" : ""}><label for="aml-focusModeHideFriendLinks">隐藏友情链接</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideTeam" ${currentSettings.focusModeHideTeam ? "checked" : ""}><label for="aml-focusModeHideTeam">隐藏团队</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideTag" ${currentSettings.focusModeHideTag ? "checked" : ""}><label for="aml-focusModeHideTag">隐藏标签</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideThemeList" ${currentSettings.focusModeHideThemeList ? "checked" : ""}><label for="aml-focusModeHideThemeList">隐藏主题商店</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideImageHosting" ${currentSettings.focusModeHideImageHosting ? "checked" : ""}><label for="aml-focusModeHideImageHosting">隐藏图床</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideRank" ${currentSettings.focusModeHideRank ? "checked" : ""}><label for="aml-focusModeHideRank">隐藏排名</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideJudgement" ${currentSettings.focusModeHideJudgement ? "checked" : ""}><label for="aml-focusModeHideJudgement">隐藏桃片</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideBenben" ${currentSettings.focusModeHideBenben ? "checked" : ""}><label for="aml-focusModeHideBenben">隐藏犇犇列表</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemStats" ${currentSettings.focusModeHideProblemStats ? "checked" : ""}><label for="aml-focusModeHideProblemStats">隐藏题目统计</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemSolutions" ${currentSettings.focusModeHideProblemSolutions ? "checked" : ""}><label for="aml-focusModeHideProblemSolutions">隐藏题目题解</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemTickets" ${currentSettings.focusModeHideProblemTickets ? "checked" : ""}><label for="aml-focusModeHideProblemTickets">隐藏题目反馈</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemProviders" ${currentSettings.focusModeHideProblemProviders ? "checked" : ""}><label for="aml-focusModeHideProblemProviders">隐藏题目提供者</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemPersonalList" ${currentSettings.focusModeHideProblemPersonalList ? "checked" : ""}><label for="aml-focusModeHideProblemPersonalList">隐藏个人题单</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemTeamList" ${currentSettings.focusModeHideProblemTeamList ? "checked" : ""}><label for="aml-focusModeHideProblemTeamList">隐藏团队题单</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemDiscuss" ${currentSettings.focusModeHideProblemDiscuss ? "checked" : ""}><label for="aml-focusModeHideProblemDiscuss">隐藏题目讨论</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideProblemTags" ${currentSettings.focusModeHideProblemTags ? "checked" : ""}><label for="aml-focusModeHideProblemTags">隐藏题目标签</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideTrainingStats" ${currentSettings.focusModeHideTrainingStats ? "checked" : ""}><label for="aml-focusModeHideTrainingStats">隐藏题单信息</label></div>
					<div class="aml-setting-item"><input type="checkbox" id="aml-focusModeHideTrainingOperations" ${currentSettings.focusModeHideTrainingOperations ? "checked" : ""}><label for="aml-focusModeHideTrainingOperations">隐藏题单按钮</label></div>
				</div>
			</div>
			<div id="aml-focusmode-disabled-notice" class="disabled-notice" style="display: ${currentSettings.focusModeEnabled ? "none" : "block"};">专注模式功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fas fa-sticky-note"></i> &nbsp;备忘录设置</h4>
			<div id="aml-memo-section" style="display: ${currentSettings.memoEnabled ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-memo-content">备忘录内容：</label>
					<textarea id="aml-memo-content" placeholder="输入备忘录内容...">${currentSettings.memoContent}</textarea>
				</div>
				<button id="aml-save-memo-btn" class="aml-primary-btn">保存内容</button>
				<div id="aml-memo-status" class="aml-status-msg" style="margin-top: 10px; font-weight: bold;"></div>
			</div>
			<div id="aml-memo-disabled-notice" class="disabled-notice" style="display: ${currentSettings.memoEnabled ? "none" : "block"};">备忘录功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fas fa-paint-brush"></i> &nbsp;自定义样式</h4>
			<div id="aml-customcss-section" style="display: ${currentSettings.customStyleEnabled ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-custom-css-input">自定义 CSS 代码：</label>
					<textarea id="aml-custom-css-input" placeholder="在此处输入你的自定义 CSS 代码……">${currentSettings.customCSS}</textarea>
				</div>
				<div class="aml-input-group">
					<label for="aml-css-position-select">CSS 注入位置:</label>
					<select id="aml-css-position-select">
						<option value="head" ${currentSettings.customCSSPosition === "head" ? "selected" : ""}>head</option>
						<option value="body" ${currentSettings.customCSSPosition === "body" ? "selected" : ""}>body</option>
					</select>
				</div>
			</div>
			<div id="aml-customcss-disabled-notice" class="disabled-notice" style="display: ${currentSettings.customStyleEnabled ? "none" : "block"};">自定义样式功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4><i class="fas fa-font"></i> &nbsp;自定义字体</h4>
			<div id="aml-customfont-section" style="display: ${currentSettings.customFontEnabled ? "block" : "none"};">
				<div class="aml-input-group">
					<label for="aml-custom-font-input">字体文件 URL：</label>
					<input type="text" id="aml-custom-font-input" placeholder="输入字体文件的完整 URL……" value="${currentSettings.customFontURL}">
				</div>
				<div class="aml-tip">提示：并不是所有的字体链接都支持，目前只支持引用一个字体，加载后可在「自定义样式」中使用 <code>font-family: "AML-CustomFont";</code></div>
			</div>
			<div id="aml-customfont-disabled-notice" class="disabled-notice" style="display: ${currentSettings.customFontEnabled ? "none" : "block"};">自定义字体功能已关闭，请在功能开关中开启。</div>
		</div>
		<div class="aml-settings-section aml-home-card">
			<h4 id="aml-update-section-title"><i class="fas fa-sync-alt"></i> &nbsp;检查更新</h4>
			<div>
				<div class="aml-tip" style="margin-top: 0px; margin-bottom: 8px">建议：前往 <a href="https://dash.amlg.top/download">https://dash.amlg.top/download</a> 以获得最佳体验。</div>
				<button id="aml-check-update-btn" class="aml-primary-btn" style="width: 100%;">
					<i class="fas fa-sync-alt"></i> 手动检查更新
				</button>
				<div id="aml-update-status" class="aml-status" style="margin-top: 10px; font-weight: 500;"></div>
			</div>
		</div>`;
				return featuresHTML;
			}
			function saveAMLSetting(key, value) {
				const storageKey = settingKeyMap[key];
				if (storageKey) {
					GM_setValue(storageKey, value);
				}
			}
			function qwq() {
				const amlSettingsHTML = createAMLSettingsHTML(currentAMLSettings);
				document.getElementById("aml-settings-container").innerHTML =
					amlSettingsHTML;
				const chatNotificationToggle = document.getElementById(
					"aml-chatNotificationEnabled",
				);
				if (chatNotificationToggle) {
					chatNotificationToggle.addEventListener("change", function (e) {
						const newValue = e.target.checked;
						saveAMLSetting("chatNotificationEnabled", newValue);
						currentAMLSettings.chatNotificationEnabled = newValue;
						const section = document.getElementById(
							"aml-chatNotification-section",
						);
						const notice = document.getElementById(
							"aml-chatNotification-disabled-notice",
						);
						if (section && notice) {
							section.style.display = newValue ? "block" : "none";
							notice.style.display = newValue ? "none" : "block";
						}
					});
				}
				const searchInput = document.getElementById("aml-feature-search");
				const featureCards = document.querySelectorAll(".aml-feature-card");
				const noResults = document.getElementById("aml-no-results");

				if (searchInput) {
					searchInput.addEventListener("input", function (e) {
						const query = e.target.value.toLowerCase().trim();
						let visibleCount = 0;

						featureCards.forEach((card) => {
							const searchText = card
								.getAttribute("data-search-text")
								.toLowerCase();
							if (searchText.includes(query)) {
								card.style.display = "flex";
								visibleCount++;
							} else {
								card.style.display = "none";
							}
						});

						if (noResults) {
							noResults.style.display = visibleCount === 0 ? "block" : "none";
						}
					});
				}
				const focusModeSettingsKeys = [
					"focusModeHidePage",
					"focusModeHideLinksButtons",
					"focusModeHideSidebarLeft",
					"focusModeHideSidebarRight",
					"focusModeHideChat",
					"focusModeHideNotification",
					"focusModeHideArticle",
					"focusModeHidePaste",
					"focusModeHideSolution",
					"focusModeHideContest",
					"focusModeHideUser",
					"focusModeHideTicket",
					"focusModeHideHelp",
					"focusModeHideFooter",
					"focusModeHideHome",
					"focusModeHideAD",
					"focusModeHidePunchAndAd",
					"focusModeHidediscuss",
					"focusModeHideFriendLinks",
					"focusModeHideTeam",
					"focusModeHideTag",
					"focusModeHideThemeList",
					"focusModeHideImageHosting",
					"focusModeHideRank",
					"focusModeHideJudgement",
					"focusModeHideBenben",
					"focusModeHideBenbenInput",
					"focusModeHideBenbenMore",
					"focusModeHideProblemStats",
					"focusModeHideProblemSolutions",
					"focusModeHideProblemTickets",
					"focusModeHideProblemProviders",
					"focusModeHideProblemPersonalList",
					"focusModeHideProblemTeamList",
					"focusModeHideProblemDiscuss",
					"focusModeHideProblemTags",
					"focusModeHideTrainingStats",
					"focusModeHideTrainingOperations",
					"focusModeHideRecordFilters",
				];
				focusModeSettingsKeys.forEach((key) => {
					const element = document.getElementById(`aml-${key}`);
					if (element) {
						element.addEventListener("change", function (e) {
							const newValue = e.target.checked;
							saveAMLSetting(key, newValue);
							currentAMLSettings[key] = newValue;
						});
					}
				});
				document
					.getElementById("aml-focusModeEnabled")
					?.addEventListener("change", function (e) {
						const newValue = e.target.checked;
						saveAMLSetting("focusModeEnabled", newValue);
						currentAMLSettings.focusModeEnabled = newValue;
						const focusModeSection = document.getElementById(
							"aml-focusmode-section",
						);
						if (focusModeSection) {
							focusModeSection.style.display = newValue ? "block" : "none";
						}
					});
				[
					"focusModeHidePassedProblems",
					"focusModeHideUserNav",
					"focusModeHideDiscussions",
					"focusModeHideSolutions",
					"focusModeHideBenben",
					"focusModeHideArticle",
					"focusModeHidePaste",
				].forEach((key) => {
					document
						.getElementById(`aml-${key}`)
						?.addEventListener("change", function (e) {
							const newValue = e.target.checked;
							saveAMLSetting(key, newValue);
							currentAMLSettings[key] = newValue;
						});
				});
				document
					.getElementById("aml-check-update-btn")
					?.addEventListener("click", function (e) {
						e.preventDefault();
						const statusDiv = document.getElementById("aml-update-status");
						if (statusDiv) {
							statusDiv.textContent = "正在检查更新...";
							statusDiv.style.color = "";
							statusDiv.style.display = "block";
						}
						checkScriptVersion(0)
							.then(() => {
								if (statusDiv && statusDiv.textContent.includes("正在检查更新")) {
									statusDiv.textContent = "检查完成。";
									Swal.fire({
										title: "提示",
										text: "检查完成。",
										icon: "info",
										confirmButtonText: "确定",
									});
									statusDiv.style.color = "green";
									setTimeout(() => {
										if (statusDiv.textContent === "正在检查更新...") {
											statusDiv.textContent = "";
										}
									}, 3000);
								}
							})
							.catch((error) => {
								if (statusDiv) {
									statusDiv.textContent = "检查更新时发生错误或取消了更新。";
									statusDiv.style.color = "red";
								}
								Swal.fire({
									title: "错误",
									text: "检查更新时发生错误或取消了更新。",
									icon: "error",
									confirmButtonText: "确定",
								});
							});
					});
				const customCSSInput = document.getElementById("aml-custom-css-input");
				const cssPositionSelect = document.getElementById(
					"aml-css-position-select",
				);
				const customFontInput = document.getElementById("aml-custom-font-input");
				customCSSInput?.addEventListener("input", () => {
					saveAMLSetting("customCSS", customCSSInput.value);
					if (currentAMLSettings.customStyleEnabled) injectCustomCSS();
				});
				cssPositionSelect?.addEventListener("change", () => {
					saveAMLSetting("customCSSPosition", cssPositionSelect.value);
					if (currentAMLSettings.customStyleEnabled) injectCustomCSS();
				});
				customFontInput?.addEventListener("input", () => {
					saveAMLSetting("customFontURL", customFontInput.value);
					if (currentAMLSettings.customFontEnabled && customFontInput.value) {
						loadCustomFont();
					}
				});
				document
					.getElementById("aml-customStyleEnabled")
					?.addEventListener("change", function () {
						saveAMLSetting("customStyleEnabled", this.checked);
						if (this.checked) {
							injectCustomCSS();
						} else {
							removeCustomCSS();
						}
					});
				document
					.getElementById("aml-custom-css-input")
					?.addEventListener("input", function () {
						saveAMLSetting("customCSS", this.value);
						if (document.getElementById("aml-customStyleEnabled")?.checked) {
							injectCustomCSS();
						}
					});
				document
					.getElementById("aml-css-position-select")
					?.addEventListener("change", function () {
						saveAMLSetting("customCSSPosition", this.value);
						if (document.getElementById("aml-customStyleEnabled")?.checked) {
							injectCustomCSS();
						}
					});
				document
					.getElementById("aml-customFontEnabled")
					?.addEventListener("change", function () {
						saveAMLSetting("customFontEnabled", this.checked);
						if (this.checked && currentAMLSettings.customFontURL) {
							loadCustomFont();
						} else {
							removeCustomFontFace();
						}
					});
				$(".welcomeContainer").click(function (event) {
					event.stopPropagation();
				});
				features.forEach((feature) => {
					const checkbox = document.querySelector(`#aml-${feature.key}`);
					if (checkbox) {
						checkbox.onchange = (e) => {
							const newValue = e.target.checked;
							saveAMLSetting(feature.key, newValue);
							if (feature.key === "memoEnabled") {
								const memoSection = document.getElementById("aml-memo-section");
								const memoNotice = document.getElementById(
									"aml-memo-disabled-notice",
								);
								if (newValue) {
									memoSection.style.display = "block";
									memoNotice.style.display = "none";
								} else {
									memoSection.style.display = "none";
									memoNotice.style.display = "block";
								}
							}
							if (feature.key === "vscodeLuoguEnabled") {
								const vscodeLuoguSection = document.getElementById(
									"aml-vscode-luogu-section",
								);
								const vscodeLuoguNotice = document.getElementById(
									"aml-vscode-luogu-disabled-notice",
								);
								if (newValue) {
									vscodeLuoguSection.style.display = "block";
									vscodeLuoguNotice.style.display = "none";
								} else {
									vscodeLuoguSection.style.display = "none";
									vscodeLuoguNotice.style.display = "block";
								}
							}
							if (feature.key === "discussListLengthEnabled") {
								const discussSection = document.getElementById(
									"aml-discuss-section",
								);
								const discussNotice = document.getElementById(
									"aml-discuss-disabled-notice",
								);
								if (newValue) {
									discussSection.style.display = "block";
									discussNotice.style.display = "none";
								} else {
									discussSection.style.display = "none";
									discussNotice.style.display = "block";
								}
							}
							if (feature.key === "slogenTimeEnabled") {
								const focusmodeSection = document.getElementById(
									"aml-slogentime-section",
								);
								const focusmodeNotice = document.getElementById(
									"aml-slogentime-disabled-notice",
								);
								if (newValue) {
									focusmodeSection.style.display = "block";
									focusmodeNotice.style.display = "none";
								} else {
									focusmodeSection.style.display = "none";
									focusmodeNotice.style.display = "block";
								}
								function getCurrentUserId() {
									let login = document.querySelector("[href='/auth/login']");
									if (login) return null;
									let avatarImg = document.querySelector(
										"img.avatar[data-v-0a5f98b2]",
									);
									if (!avatarImg) {
										avatarImg = document.querySelector(
											".user-nav .avatar img[data-v-65720dbc]",
										);
									}
									if (avatarImg && avatarImg.src) {
										const match = avatarImg.src.match(
											/\/upload\/usericon\/(\d+)\.png/,
										);
										if (match) {
											return match[1];
										}
									}
									return null;
								}
								fetch(
									"https://www.luogu.com.cn/api/user/info/" + getCurrentUserId(),
									{},
								)
									.then((response) => response.json())
									.then((data) => {
										if (data && data.user && data.user.slogan) {
											GM_setValue("amlSlogenTimeFormat", data.user.slogan);
										} else {
											GM_setValue("amlSlogenTimeFormat", "{time} || {slogan}");
										}
										document.querySelector("#aml-slogen-time-format").value =
											GM_getValue("amlSlogenTimeFormat");
									});
							}
							if (feature.key === "customFontEnabled") {
								const customfontSection = document.getElementById(
									"aml-customfont-section",
								);
								const customfontNotice = document.getElementById(
									"aml-customfont-disabled-notice",
								);
								if (newValue) {
									customfontSection.style.display = "block";
									customfontNotice.style.display = "none";
								} else {
									customfontSection.style.display = "none";
									customfontNotice.style.display = "block";
								}
							}
							if (feature.key === "customStyleEnabled") {
								const customcssSection = document.getElementById(
									"aml-customcss-section",
								);
								const customcssNotice = document.getElementById(
									"aml-customcss-disabled-notice",
								);
								if (newValue) {
									customcssSection.style.display = "block";
									customcssNotice.style.display = "none";
								} else {
									customcssSection.style.display = "none";
									customcssNotice.style.display = "block";
								}
							}
							if (feature.key === "focusModeEnabled") {
								const focusmodeSection = document.getElementById(
									"aml-focusmode-section",
								);
								const focusmodeNotice = document.getElementById(
									"aml-focusmode-disabled-notice",
								);
								if (newValue) {
									focusmodeSection.style.display = "block";
									focusmodeNotice.style.display = "none";
								} else {
									focusmodeSection.style.display = "none";
									focusmodeNotice.style.display = "block";
								}
							}
							if (feature.key === "autoExpandBenben") {
								const focusmodeSection =
									document.getElementById("aml-benben-section");
								const focusmodeNotice = document.getElementById(
									"aml-benben-disabled-notice",
								);
								if (newValue) {
									focusmodeSection.style.display = "block";
									focusmodeNotice.style.display = "none";
								} else {
									focusmodeSection.style.display = "none";
									focusmodeNotice.style.display = "block";
								}
							}
							if (feature.key === "problemColors") {
								const focusmodeSection = document.getElementById(
									"aml-problemcolors-section",
								);
								const focusmodeNotice = document.getElementById(
									"aml-problemcolors-disabled-notice",
								);
								if (newValue) {
									focusmodeSection.style.display = "block";
									focusmodeNotice.style.display = "none";
								} else {
									focusmodeSection.style.display = "none";
									focusmodeNotice.style.display = "block";
								}
							}
						};
					}
				});
				const colorIntervalInput = document.querySelector("#aml-color-interval");
				if (colorIntervalInput) {
					colorIntervalInput.oninput = (e) => {
						const newValue = parseInt(e.target.value) || 300;
						saveAMLSetting("colorUpdateInterval", newValue);
					};
				}
				const vscodePortInput = document.querySelector("#aml-vscode-port");
				if (vscodePortInput) {
					vscodePortInput.oninput = (e) => {
						const newValue = Math.min(Math.max(parseInt(e.target.value) || 1145, 1), 65535);
						saveAMLSetting("vscodePort", newValue);
						vscodePortInput.value = newValue;
					};
				}
				const discussLengthInput = document.querySelector(
					"#aml-discuss-length",
				);
				if (discussLengthInput) {
					discussLengthInput.oninput = (e) => {
						const newValue = Math.min(Math.max(parseInt(e.target.value) || 16, 4), 16);
						saveAMLSetting("discussListLength", newValue);
						discussLengthInput.value = newValue;
					};
				}
				const benbenUidsInput = document.querySelector(
					"#aml-benben-blocked-uids",
				);
				if (benbenUidsInput) {
					benbenUidsInput.oninput = (e) => {
						const newValue = e.target.value
							.split(",")
							.map((uid) => uid.trim())
							.filter((uid) => uid !== "");
						saveAMLSetting("benbenBlockedUids", newValue);
					};
				}
				const slogenTimeFormatInput = document.querySelector(
					"#aml-slogen-time-format",
				);
				if (slogenTimeFormatInput) {
					slogenTimeFormatInput.oninput = (e) => {
						const newValue = e.target.value;
						saveAMLSetting("slogenTimeFormat", newValue);
					};
				}

				const memoContentInput = document.querySelector("#aml-memo-content");
				const saveMemoBtn = document.querySelector("#aml-save-memo-btn");
				if (memoContentInput && saveMemoBtn) {
					saveMemoBtn.onclick = () => {
						const newValue = memoContentInput.value;
						saveAMLSetting("memoContent", newValue);
						const statusDiv = document.getElementById("aml-memo-status");
						statusDiv.textContent = "备忘录内容已保存！";
						statusDiv.style.color = "green";
						setTimeout(() => (statusDiv.textContent = ""), 2000);
					};
				}
				if (currentAMLSettings.customStyleEnabled) injectCustomCSS();
				if (
					currentAMLSettings.customFontEnabled &&
					currentAMLSettings.customFontURL
				)
					loadCustomFont();
			}
			$(async function () {
				Date.prototype.pattern = function (format) {
					let date = {
						"y+": this.getYear(),
						"M+": this.getMonth() + 1,
						"d+": this.getDate(),
						"h+": this.getHours(),
						"m+": this.getMinutes(),
						"s+": this.getSeconds(),
						"q+": Math.floor((this.getMonth() + 3) / 3),
						"S+": this.getMilliseconds(),
					};
					if (/(y+)/i.test(format)) {
						format = format.replace(
							RegExp.$1,
							(this.getFullYear() + "").substr(4 - RegExp.$1.length),
						);
					}
					for (let k in date) {
						if (new RegExp("(" + k + ")").test(format)) {
							format = format.replace(
								RegExp.$1,
								RegExp.$1.length == 1
									? date[k]
									: ("00" + date[k]).substr(("" + date[k]).length),
							);
						}
					}
					return format;
				};
				let settings = localStorage.getItem("lsaw_settings");
				if (settings == undefined || settings == "undefined") settings = {};
				else settings = JSON.parse(settings);
				let majorSettings = [
					["lsawUserDisplay", true],
					["lsawProblemDisplay", true],
					["lsawDiscussDisplay", true],
					["lsawArticleDisplay", true],
					["lsawOfficialListDisplay", false],
					["lsawSelectListDisplay", false],
					["lsawProblemDisplayNumber", 50],
					["lsawListDisplayNumber", 50],
					["lsawArticleDisplayNumber", 10],
					["lsawLuoguMeCf", ""],
				];
				for (let i = 0; i < majorSettings.length; i++) {
					let key = majorSettings[i][0],
						val = majorSettings[i][1];
					if (settings[key] == undefined || typeof settings[key] != typeof val)
						settings[key] = val;
				}
				localStorage.setItem("lsaw_settings", JSON.stringify(settings));
				await initPanel();
				$("head").append(`
		<style>
		.welcomeContainer ::-webkit-scrollbar {
			width: 6px;
		}

		.welcomeLeft ::-webkit-scrollbar {
			width: 3px !important;
		}

		.welcomeContainer ::-webkit-scrollbar-track {
			background: rgba(0, 0, 0, 0.1) !important;
			border-radius: 3px !important;
		}

		.welcomeLeft ::-webkit-scrollbar-track {
			background: rgba(0, 0, 0, 0.1) !important;
			border-radius: 3px !important;
		}

		.welcomeLeft ::-webkit-scrollbar-thumb {
			background: #9c9 !important;
			border-radius: 3px !important;
		}

		.welcomeContainer ::-webkit-scrollbar-thumb {
			background: rgba(102, 126, 234, 0.6);
			border-radius: 3px;
		}

		.welcomeContainer {
			display: flex;
			gap: 15px;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		.welcomeLeft {
			flex: 2;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			padding: 10px;
			box-sizing: border-box;
			background: #fff;
			backdrop-filter: blur(3px);
			border-radius: 10px;
			border: 1px solid #888;
		}

		.welcomeRight {
			flex: 5;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			box-sizing: border-box;
			background: #fff;
			backdrop-filter: blur(3px);
			border-radius: 10px;
			border: 1px solid #888;
			overflow-y: auto;
		}

		.welcomeTitle {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: 10px;
			color: #ddd;
			text-align: center;
		}

		.welcomeContent {
			flex: 1;
			overflow-y: auto;
			color: #ccc;
			font-size: 14px;
			line-height: 1.5;
			padding-bottom: 10px;
			padding-right: 10px;
		}

		.welcomeContent ul,
		.welcomeContent ol {
			padding-left: 20px;
			margin: 5px 0;
		}

		.welcomeContent li {
			margin-bottom: 5px;
		}

		.welcomeItem {
			margin-bottom: 15px;
			padding-bottom: 10px;
			border-bottom: 1px solid #777;
		}

		.welcomeItem:last-child {
			border-bottom: none;
			margin-bottom: 0;
			padding-bottom: 0;
		}

		.eventYear {
			font-weight: bold;
			color: #bbb;
		}

		.eventTitle {
			color: #9c9;
		}

		.eventDescription {
			color: #aaa;
			font-size: 12px;
			margin-top: 5px;
			display: block;
		}

		.poetryContent {
			font-size: 18px;
			font-style: italic;
			text-align: center;
			margin-bottom: 10px;
			color: #e0e0e0;
		}

		.poetryOrigin {
			font-size: 14px;
			text-align: right;
			color: #aaa;
			margin-bottom: 10px;
		}

		.poetryOrigin a {
			color: #9c9;
			text-decoration: none;
		}

		.poetryOrigin a:hover {
			text-decoration: underline;
		}

		.poetryTranslation {
			font-size: 14px;
			color: #aaa;
			margin-top: 10px;
			padding-top: 10px;
			border-top: 1px solid #777;
		}

		.poetryTranslationTitle {
			font-weight: bold;
			color: #bbb;
			margin-bottom: 5px;
		}

		.poetryTranslationItem {
			margin-bottom: 5px;
		}

		.poetryTranslationItem:last-child {
			margin-bottom: 0;
		}

		#poetryContent {
			border-bottom: 1px solid #777;
		}

		#chajianinfo {
			margin-bottom: 10px;
			color: #1e1e1e;
			line-height: 1.8;
		}
		</style>
				`);
				$("body").append(`
		<style>
		.searchAnywhere {
			position: fixed;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.8);
			z-index: 999;
			transition: 0.2s;
			color: white;
			font-family: LXGW Wenkai Screen;
		}

		.searchAnywhereMain {
			height: min(600px, 100% - 10px);
			width: min(750px, 100% - 10px);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
		}

		.inputArea {
			display: block;
			width: 100%;
			height: 48px;
			color: #aaa;
			position: relative;
			transition: 0.2s;
			margin-bottom: 10px;
		}

		.inputArea>input {
			border-radius: 5px;
			border: 2px solid #aaa;
			height: 48px;
			width: 100%;
			font-size: 18px;
			color: #aaa;
			padding: 14px 24px;
			outline: 0;
			background: transparent;
			box-sizing: border-box;
		}

		.inputArea.onHover>input,
		.inputArea.onFocus>input {
			border: 2px solid white;
		}

		.inputArea.onHover,
		.inputArea.onFocus,
		.inputArea.withContent {
			color: white !important;
		}

		.inputArea.onHover>input,
		.inputArea.onFocus>input,
		.inputArea.withContent>input {
			color: white !important;
		}

		.inputArea.withIconLeft>input {
			padding-left: 42px;
		}

		.inputArea.withIconRight>input {
			padding-right: 42px;
		}

		.inputArea>div.iconLeft {
			height: 48px;
			width: 48px;
			position: absolute;
			display: grid;
			place-items: center;
			top: 0px;
			left: 0px;
		}

		.inputArea>div.iconRight {
			height: 48px;
			width: 48px;
			position: absolute;
			display: grid;
			place-items: center;
			top: 0px;
			right: 0px;
		}

		.inputArea>div.iconLeft>svg {
			width: 20px !important;
			height: 20px !important;
		}

		.inputArea>div.iconRight>svg {
			width: 20px !important;
			height: 20px !important;
		}

		.inputAreaSmall {
			display: block;
			width: 100%;
			height: 30px;
			color: #aaa;
			position: relative;
			transition: 0.2s;
		}

		.inputAreaSmall>input {
			border-radius: 5px;
			border: 2px solid #aaa;
			height: 30px;
			width: 100%;
			font-size: 18px;
			color: #aaa;
			padding: 5px 10px;
			outline: 0;
			background: transparent;
			box-sizing: border-box;
		}

		.inputAreaSmall.onHover>input,
		.inputAreaSmall.onFocus>input {
			border: 2px solid white;
		}

		.inputAreaSmall.onHover,
		.inputAreaSmall.onFocus,
		.inputAreaSmall.withContent {
			color: white !important;
		}

		.inputAreaSmall.onHover>input,
		.inputAreaSmall.onFocus>input,
		.inputAreaSmall.withContent>input {
			color: white !important;
		}

		.userPurple {
			color: #cf5bff;
			font-weight: bold;
		}

		.userRed {
			color: #e74c3c;
			font-weight: bold;
		}

		.userOrange {
			color: #e67e22;
			font-weight: bold;
		}

		.userYellow {
			color: #d9a71d;
			font-weight: bold;
		}

		.userGreen {
			color: #5eb95e;
			font-weight: bold;
		}

		.userGray {
			color: #aaa;
			font-weight: bold;
		}

		.userCheater {
			color: #d3961c;
			font-weight: bold;
		}

		.userBlue {
			color: #07a2f1;
			font-weight: bold;
		}

		.userGold {
			color: #f1c40f;
			font-weight: bold;
		}

		.badgePurple {
			background-color: #cf5bff;
		}

		.badgeRed {
			background-color: #e74c3c;
		}

		.badgeOrange {
			background-color: #e67e22;
		}

		.badgeYellow {
			background-color: #d9a71d;
		}

		.badgeGreen {
			background-color: #5eb95e;
		}

		.badgeGray {
			background-color: #999;
		}

		.badgeCheater {
			background-color: #d3961c;
		}

		.badgeBlue {
			background-color: #07a2f1;
		}

		.badgeBlack {
			background-color: #0e1d69;
		}

		.badgeGold {
			background-color: #f1c40f;
		}

		.searchAnywhereContent {
			color: white;
			flex: 1;
			scrollbar-width: none;
			-ms-overflow-style: none;
			overflow-x: hidden;
			overflow-y: auto;
		}

		.searchAnywhereContent::-webkit-scrollbar {
			width: 0 !important;
		}

		.searchUserCard {
			background: #444;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			cursor: pointer;
			color: white;
			padding: 10px;
			line-height: 1;
			margin-bottom: 10px;
			border: 2px solid #888;
			box-sizing: border-box;
		}

		.searchCard.light {
			border: 2px solid white;
		}

		.searchUserCard>div {
			width: 100%;
		}

		.searchUserCardBody {
			display: flex;
			flex-direction: row;
		}

		.searchUserCardImg {
			height: 36px;
			width: 36px;
			border-radius: 50%;
			margin-right: 10px;
		}

		.searchUserCardInfo>span:first-child {
			font-size: 14px;
			margin-bottom: 3px;
			display: inline-block;
			color: #bbb;
		}

		.searchUserCardInfo>span:last-child {
			font-size: 20px;
		}

		.searchUserCardMedia {
			display: flex;
			flex-direction: row;
		}

		.searchUserCardMedia>div {
			margin-top: 5px;
			flex: 1;
			display: inline-block;
			height: 23px;
			verticle-align: center;
		}

		.searchUserCardMedia>div>div {
			padding: 4px;
			position: relative;
			display: inline-block;
			background: #777;
			margin-right: 15px;
		}

		.searchUserCardMedia>div>div:after {
			width: 10px;
			height: 100%;
			content: "";
			border: 5px;
			position: absolute;
			top: 0px;
			left: 100%;
			clip-path: polygon(0 0, 100% 50%, 0 100%);
			background-color: inherit;
		}

		.userBadgeInfo {
			font-size: 14px;
			padding: 2px 5px;
			border-radius: 5px;
			color: white;
			font-weight: bold;
			margin: 0px 3px;
			display: inline-block;
		}

		.searchProblemCard {
			background: #444;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			cursor: pointer;
			color: white;
			padding: 10px;
			line-height: 1;
			margin-bottom: 10px;
			border: 2px solid #888;
			box-sizing: border-box;
		}

		.searchProblemCard>div {
			width: 100%;
			display: flex;
			flex-direction: row;
		}

		.searchProblemCard>div:last-child {
			margin-top: 5px;
		}

		.searchProblemCardTag {
			margin-right: 12px;
			display: inline-flex;
			flex-direction: row;
			line-height: 24px;
			height: 24px;
			overflow: hidden;
		}

		.searchProblemCardTag>div {
			padding: 2px;
			position: relative;
			display: inline-block;
			margin-right: 5px;
		}

		.searchListCardTag {
			margin-right: 12px;
			display: inline-flex;
			flex-direction: row;
			line-height: 24px;
			height: 24px;
			overflow: hidden;
		}

		.searchListCardTag>div {
			padding: 2px;
			position: relative;
			display: inline-block;
			margin-right: 5px;
		}

		.searchListCardTag svg,
		.searchProblemCardTag svg {
			height: 20px !important;
			width: 20px !important;
		}

		.problemTagInfo {
			font-size: 16px;
			padding: 4px 7px;
			border-radius: 5px;
			color: white;
			display: inline-block;
		}

		.searchProblemCardBody>div:first-child {
			margin-right: 5px;
		}

		.searchListCard {
			background: #444;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			cursor: pointer;
			color: white;
			padding: 10px;
			line-height: 1;
			margin-bottom: 10px;
			border: 2px solid #888;
			box-sizing: border-box;
			position: relative;
		}

		.searchListCard>div {
			width: 100%;
			display: flex;
			flex-direction: row;
		}

		.searchListCardBody>div:first-child {
			margin-right: 5px;
		}

		.searchListCardBody {
			margin-bottom: 5px;
		}

		.searchAnywhereSettings {
			position: fixed;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.8);
			z-index: 1000;
			transition: 0.2s;
			color: white;
		}

		.searchAnywhereSettingsMain {
			height: min(300px, 100% - 10px);
			width: min(450px, 100% - 10px);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
		}

		.searchAnywhereSettingsContent {
			flex: 1;
			scrollbar-width: none;
			-ms-overflow-style: none;
			overflow-x: hidden;
			overflow-y: auto;
		}

		.searchAnywhereSettingsBag {
			margin-bottom: 8px;
			user-select: none;
			font-size: 20px;
			position: relative;
			line-height: 30px;
		}

		.searchAnywhereClicky {
			position: relative;
			height: 30px;
			width: 30px;
		}

		.searchAnywhereClicky div {
			transition: 0.2s;
			position: absolute;
			top: 0px;
			left: 0px;
			cursor: pointer;
		}

		.searchAnywhereClicky div svg {
			height: 30px;
			width: 30px;
		}

		.searchAnywhereClicky[flag=false] .falseBlock {
			opacity: 1;
		}

		.searchAnywhereClicky[flag=true] .falseBlock {
			opacity: 0;
		}

		.searchAnywhereClicky[flag=true] .trueBlock {
			opacity: 1;
		}

		.searchAnywhereClicky[flag=false] .trueBlock {
			opacity: 0;
		}

		.searchAnywhereSettingsContent::-webkit-scrollbar {
			width: 0 !important;
		}

		.searchAnywhereCloseSettings {
			display: inline-grid;
			place-items: center;
			width: 32px;
			height: 32px;
			cursor: pointer;
			border-radius: 50%;
			background: white;
		}

		.searchAnywhereCloseSettings:hover {
			background: #aaa;
		}

		.searchAnywhereEntrance {
			z-index: 99;
			background: white;
			display: grid;
			place-items: center;
			width: 50px;
			height: 50px;
			position: fixed;
			right: 20px;
			bottom: 30px;
			transition: 0.2s;
			border-radius: 5px;
			cursor: pointer;
		}

		.searchAnywhereEntrance:hover {
			background: #ccc;
		}

		.searchAnywhereEntrance svg {
			height: 30px;
			width: 30px;
		}

		.searchCard.light,
		.searchCard {
			color: white !important;
		}

		.searchAnywhereContent>div>div>a:hover {
			color: #83c4ef;
		}
		.aml-notification-drawer {
			position: fixed;
			top: 0; right: -350px;
			width: 350px; height: 100%;
			background: #fff;
			box-shadow: -2px 0 10px rgba(0,0,0,0.1);
			z-index: 10001;
			transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			display: flex; flex-direction: column;
			border-left: 1px solid #e2e8f0;
		}
		.aml-notification-drawer.open { right: 0; }
		.aml-notification-header {
			padding: 15px; border-bottom: 1px solid #e2e8f0;
			display: flex; justify-content: space-between; align-items: center;
			background: #f8fafc;
		}
		.aml-notification-header h5 { margin: 0; color: #1e293b; font-size: 16px; }
		.aml-notification-list { flex: 1; overflow-y: auto; padding: 10px; }
		.aml-notification-item {
			padding: 12px; border-bottom: 1px solid #f1f5f9;
			cursor: pointer; transition: background 0.2s;
			border-radius: 6px; margin-bottom: 5px;
		}
		.aml-notification-item:hover { background: #f8fafc; }
		.aml-notification-item.unread {
			background: #eff6ff; border-left: 3px solid #6366f1;
		}
		.aml-notif-title { font-weight: 600; color: #1e293b; font-size: 14px; margin-bottom: 4px; }
		.aml-notif-time { font-size: 12px; color: #94a3b8; }
		.aml-notification-modal {
			position: fixed; top: 0; left: 0; width: 100%; height: 100%;
			background: rgba(0,0,0,0.5); z-index: 10002;
			display: flex; justify-content: center; align-items: center;
			opacity: 0; transition: opacity 0.3s;
		}
		.aml-notification-modal.show { opacity: 1; }
		.aml-modal-content {
			background: #fff; width: 90%; max-width: 600px;
			border-radius: 12px; overflow: hidden;
			box-shadow: 0 10px 25px rgba(0,0,0,0.2);
			transform: translateY(20px); transition: transform 0.3s;
			max-height: 85%; display: flex; flex-direction: column;
		}
		.aml-notification-modal.show .aml-modal-content { transform: translateY(0); }
		.aml-modal-header {
			padding: 15px 20px; border-bottom: 1px solid #e2e8f0;
			display: flex; justify-content: space-between; align-items: center;
		}
		.aml-modal-header h4 { margin: 0; color: #1e293b; }
		.aml-modal-body {
			padding: 20px; overflow-y: auto;
			font-family: LXGW Wenkai Screen, sans-serif;
			line-height: 1.6; color: #334155;
		}
		.aml-modal-footer {
			padding: 10px 20px; border-top: 1px solid #e2e8f0;
			background: #f8fafc; text-align: right;
		}
		</style>
		<div class='searchAnywhere' style="opacity: 0; display: none;">
		<div class='searchAnywhereMain'>
			<div class='inputArea withIconLeft withIconRight searchAnywhereMainInput'>
			<input spellcheck="false" placeholder="Search AnyWhere" />
			<div class="iconLeft"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-24">
				<path data-v-1ad550c8="" data-v-303bbf52="" fill="currentColor"
					d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
					class=""></path>
				</svg></div>
			<div class="iconRight"><svg style="cursor: pointer" class="searchAnywhereSettingsLink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"
				role="img"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
				<path fill="currentColor"
					d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
				</svg></div>
			</div>
			<div class='searchAnywhereContent'>${my_info}
			</div>
		</div>
		</div>
		<div class='searchAnywhereSettings' style="opacity: 0; display: none;">
		<div class='searchAnywhereSettingsMain'>
			<div class="searchAnywhereSettingsContent">
			<div>
				<div class="searchAnywhereSettingsBag" for="lsawUserDisplay"> 显示用户 <div style="float: right" class="searchAnywhereClicky" flag="${settings.lsawUserDisplay}">
					<div class="falseBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
					</svg>
					</div>
					<div class="trueBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor"
						d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z" />
					</svg>
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawProblemDisplay"> 显示题目 <div style="float: right" class="searchAnywhereClicky" flag="${settings.lsawProblemDisplay}">
					<div class="falseBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
					</svg>
					</div>
					<div class="trueBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor"
						d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z" />
					</svg>
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawDiscussDisplay"> 显示讨论 <div style="float: right" class="searchAnywhereClicky" flag="${settings.lsawDiscussDisplay}">
					<div class="falseBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
					</svg>
					</div>
					<div class="trueBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor"
						d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z" />
					</svg>
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawOfficialListDisplay"> 显示官方题单 <div style="float: right" class="searchAnywhereClicky" flag="${settings.lsawOfficialListDisplay}">
					<div class="falseBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
					</svg>
					</div>
					<div class="trueBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor"
						d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z" />
					</svg>
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawSelectListDisplay"> 显示用户题单 <div style="float: right" class="searchAnywhereClicky" flag="${settings.lsawSelectListDisplay}">
					<div class="falseBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
					</svg>
					</div>
					<div class="trueBlock">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path fill="currentColor"
						d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM339.8 211.8C350.7 200.9 350.7 183.1 339.8 172.2C328.9 161.3 311.1 161.3 300.2 172.2L192 280.4L147.8 236.2C136.9 225.3 119.1 225.3 108.2 236.2C97.27 247.1 97.27 264.9 108.2 275.8L172.2 339.8C183.1 350.7 200.9 350.7 211.8 339.8L339.8 211.8z" />
					</svg>
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawProblemDisplayNumber"> 题目展示数量 <div style="float: right; width: 150px">
					<div class="inputAreaSmall withContent">
					<input type="number" min="1" max="50" value="${settings.lsawProblemDisplayNumber}" class="withContent" />
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawListDisplayNumber"> 题单展示数量 <div style="float: right; width: 150px">
					<div class="inputAreaSmall withContent">
					<input type="number" min="1" max="50" value="${settings.lsawListDisplayNumber}" class="withContent" />
					</div>
				</div>
				</div>
				<div class="searchAnywhereSettingsBag" for="lsawArticleDisplayNumber"> 文章展示数量 <div style="float: right; width: 150px">
					<div class="inputAreaSmall withContent">
					<input type="number" min="1" max="10" value="${settings.lsawArticleDisplayNumber}" class="withContent" />
					</div>
				</div>
				</div>
				<style>
				.inputAreaSmall > input[disabled]::placeholder {
				color: #ccc;
				}
				</style>
				<div class="searchAnywhereSettingsBag" for="lsawLuoguMeCf"> 洛谷保存站的 CF Cookie <div style="float: right; width: 150px">
					<div class="inputAreaSmall withContent">
					<input type="text" value="${settings.lsawLuoguMeCf}" class="withContent"  />
					</div>
				</div>
				</div>
			</div>
			</div>
			<div style="margin-top: 10px; text-align: center; width: 100%;">
			<div class="searchAnywhereCloseSettings">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="icon svg-inline--fa fa-times fa-w-11" data-v-303bbf52="" style="transform: scale(1.2); width: 16px; height: 16px; color: rgb(231, 76, 60);">
				<path data-v-1b44b3e6="" fill="currentColor"
					d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
					class=""></path>
				</svg>
			</div>
			</div>
		</div>
		</div>
		<div class="searchAnywhereEntrance">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
			<path fill="black"
			d="M236 176c0 15.46-12.54 28-28 28S180 191.5 180 176S192.5 148 208 148S236 160.5 236 176zM500.3 500.3c-15.62 15.62-40.95 15.62-56.57 0l-119.7-119.7c-40.41 27.22-90.9 40.65-144.7 33.46c-91.55-12.23-166-87.28-177.6-178.9c-17.24-136.2 97.29-250.7 233.4-233.4c91.64 11.6 166.7 86.07 178.9 177.6c7.19 53.8-6.236 104.3-33.46 144.7l119.7 119.7C515.9 459.3 515.9 484.7 500.3 500.3zM294.1 182.2C294.1 134.5 255.6 96 207.1 96C160.4 96 121.9 134.5 121.9 182.2c0 38.35 56.29 108.5 77.87 134C201.8 318.5 204.7 320 207.1 320c3.207 0 6.26-1.459 8.303-3.791C237.8 290.7 294.1 220.5 294.1 182.2z" />
		</svg>
		</div>
			`);
				setTimeout(() => {
					getNotification();
					getusernameandset(getuid());
					fetchHomeData();
					qwq();
				})
				$(".inputArea > input").focus(function () {
					$(this).parent().addClass("onFocus");
				});
				$(".inputArea > input").blur(function () {
					$(this).parent().removeClass("onFocus");
					if ($(this).val().length != 0) $(this).parent().addClass("withContent");
					else $(this).parent().removeClass("withContent");
				});
				$(".inputArea").mouseenter(function () {
					$(this).addClass("onHover");
				});
				$(".inputArea").mouseleave(function () {
					$(this).removeClass("onHover");
				});
				$(".inputAreaSmall > input").focus(function () {
					$(this).parent().addClass("onFocus");
				});
				$(".inputAreaSmall > input").blur(function () {
					$(this).parent().removeClass("onFocus");
					if ($(this).val().length != 0) $(this).parent().addClass("withContent");
					else $(this).parent().removeClass("withContent");
				});
				$(".searchAnywhereSettings").on(
					"click keydown keypress input",
					function (e) {
						e.stopPropagation();
					},
				);
				$(".searchAnywhereSettings input")
					.on("focus", function () {
						$(this).parent().addClass("onFocus");
					})
					.on("blur", function () {
						$(this).parent().removeClass("onFocus");
					});
				$(".inputAreaSmall").mouseenter(function () {
					$(this).addClass("onHover");
				});
				$(".inputAreaSmall").mouseleave(function () {
					$(this).removeClass("onHover");
				});
				$(".searchAnywhereClicky").click(function () {
					let a = $(this).attr("flag");
					if (a == "false") {
						a = true;
						$(this).attr("flag", a);
					} else {
						a = false;
						$(this).attr("flag", a);
					}
					let settingsName = $(this).parent().attr("for");
					settings[settingsName] = a;
					localStorage.setItem("lsaw_settings", JSON.stringify(settings));
				});
				$(".inputAreaSmall input").change(function () {
					let a = Number($(this).val()) || $(this).val();
					let settingsName = $(this).parent().parent().parent().attr("for");
					let minVal = Number($(this).attr("min")) || null;
					let maxVal = Number($(this).attr("max")) || null;
					if (minVal != null && a < minVal) {
						a = minVal;
						$(this).val(a);
					}
					if (maxVal != null && a > maxVal) {
						a = maxVal;
						$(this).val(a);
					}
					settings[settingsName] = a;
					localStorage.setItem("lsaw_settings", JSON.stringify(settings));
				});
				$(".searchAnywhereCloseSettings").click(function () {
					$(".searchAnywhereSettings").css("opacity", "0");
					setTimeout(() => {
						$(".searchAnywhereSettings").css("display", "none");
					}, 200);
				});
				$(".searchAnywhereSettingsLink").click(function () {
					$(".searchAnywhereSettings").css("display", "block");
					setTimeout(() => {
						$(".searchAnywhereSettings").css("opacity", "1");
					}, 20);
				});
				const getColorFromPercent = (x, opa) => {
					let r = 0,
						g = 0,
						b = 0;
					let rr = 231,
						gg = 76,
						bb = 60;
					let rrr = 82,
						ggg = 196,
						bbb = 26;
					r = rr + (rrr - rr) * x;
					g = gg + (ggg - gg) * x;
					b = bb + (bbb - bb) * x;
					r += (60 - r) * (1 - opa);
					g += (60 - g) * (1 - opa);
					b += (60 - b) * (1 - opa);
					r = Math.floor(r);
					g = Math.floor(g);
					b = Math.floor(b);
					return `rgb(${r}, ${g}, ${b})`;
				};
				const problemColors = [
					"Gray",
					"Red",
					"Orange",
					"Yellow",
					"Green",
					"Blue",
					"Purple",
					"Black",
				];
				const problemNames = [
					"暂无评定",
					"入门",
					"普及-",
					"普及/提高-",
					"普及+/提高",
					"提高+/省选-",
					"省选/NOI-",
					"NOI/NOI+/CTSC",
				];
				let searchTimeout = null;
				let currentHoverCard = undefined;
				const changeHoverCard = (x, scroll = true, align = false) => {
					$(".searchCard.light").removeClass("light");
					if (x != undefined && scroll)
						$(".searchAnywhereMainInput > input").blur();
					if (x != undefined) {
						x.addClass("light").focus(align);
						if (scroll) {
							let heg = x[0].offsetTop;
							let prr = x.parent().parent();
							let scr = prr.scrollTop();
							let r = heg - x.outerHeight() + 5,
								l = r - prr.outerHeight() + x.outerHeight() + 10;
							scr = Math.max(l, Math.min(r, scr));
							prr.scrollTop(scr);
						}
					}
					if (scroll) {
						$(".searchCard").unbind("mouseenter").unbind("mouseleave");
						$(document).mousemove(() => {
							$(document).unbind("mousemove");
							$(".searchCard")
								.unbind("mouseenter")
								.unbind("mouseleave")
								.hover(
									function () {
										changeHoverCard($(this), false);
									},
									function () {
										changeHoverCard(undefined, false);
									},
								);
						});
					}
					currentHoverCard = x;
				};
				const searchInfo = () => {
					searchTimeout = null;
					let info = $(".inputArea > input").val();
					info = $.trim(info);
					if (info == "") {
						$(".searchAnywhereContent").html(my_info);
						setTimeout(() => {
							getNotification();
							getusernameandset(getuid());
							fetchHomeData();
							qwq();
						})
						return;
					}
					$(".searchAnywhereContent").html(
						`<div><div style='text-align: center; margin-bottom: 10px; width: 100%; font-size: 20px;'>加载中……</div></div>`,
					);
					$(".searchAnywhereContent > div")
						.unbind("click")
						.click((event) => {
							event.stopPropagation();
						});
					let userHtml = "";
					let problemHtml = "";
					let officialHtml = "";
					let selectHtml = "";
					let articleHtml = "";
					let finishWorks = 0;
					let networkError = false;
					let workCnt =
						(settings.lsawUserDisplay != false) +
						(settings.lsawProblemDisplay != false) +
						(settings.lsawOfficialListDisplay != false) +
						(settings.lsawSelectListDisplay != false);
					const finishWork = () => {
						++finishWorks;
						if (networkError)
							$(".searchAnywhereContent").html(
								`<div><div style='text-align: center; margin-bottom: 10px; width: 100%; font-size: 20px;'>网络错误</div></div>`,
							);
						else if (
							userHtml == "" &&
							problemHtml == "" &&
							officialHtml == "" &&
							selectHtml == "" &&
							articleHtml == ""
						)
							$(".searchAnywhereContent").html(
								`<div><div style='text-align: center; margin-bottom: 10px; width: 100%; font-size: 20px;'>未搜索到相关内容</div></div>`,
							);
						else {
							changeHoverCard(undefined, false);
							$(".searchAnywhereContent").html(
								`<div>` +
								userHtml +
								problemHtml +
								articleHtml +
								officialHtml +
								selectHtml +
								`</div>`,
							);
							$(".searchAnywhereContent > div")
								.unbind("click")
								.click((event) => {
									event.stopPropagation();
								});
							$(".searchCard")
								.unbind("mouseenter")
								.unbind("mouseleave")
								.hover(
									function () {
										changeHoverCard($(this), false);
									},
									function () {
										changeHoverCard(undefined, false);
									},
								);
						}
					};
					const getProblemStatus = (x, y) => {
						if (!x && !y)
							return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon svg-inline--fa fa-minus fa-w-14" data-v-303bbf52="" style="width: 16px; height: 16px; color: #aaa"><path data-v-1b44b3e6="" fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>`;
						if (!y)
							return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="icon svg-inline--fa fa-times fa-w-11" data-v-303bbf52="" style="transform: scale(1.2); width: 16px; height: 16px; color: rgb(231, 76, 60);"><path data-v-1b44b3e6="" fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>`;
						return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon svg-inline--fa fa-check fa-w-16" data-v-303bbf52="" style="width: 16px; height: 16px; color: rgb(82, 196, 26);"><path data-v-1b44b3e6="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg>`;
					};
					const getCCFLevel = (x) => {
						if (x == null || x < 3) return "";
						let color = "";
						if (x <= 5) color = "#5eb95e";
						else if (x <= 7) color = "#07a2f1";
						else color = "#f1c40f";
						return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" style="margin: 0px 3px;" fill="${color}" style="margin-bottom: -3px;"><path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z"></path></svg>`;
					};
					if (settings.lsawUserDisplay != false)
						GM_xmlhttpRequest({
							method: "GET",
							url: `https://www.luogu.com.cn/api/user/search?keyword=${info}`,
							withCredentials: true,
							onload: function (response) {
								let json;
								try {
									json = JSON.parse(response.responseText);
								} catch (e) {
									networkError = true;
									finishWork();
									return;
								}
								json = json.users;
								if (json.length != 0 && json[0] != null) {
									userHtml = `
							<div style='text-align: left; margin-bottom: 10px; width: 100%; font-size: 18px; font-weight: bold'>用户</div>
						`;
									json.forEach((item) => {
										if (item == null) return;
										if (item.color == "Cheater") item.badge = "作弊者";
										userHtml += `
								<a class="searchCard searchUserCard" href='https://www.luogu.com.cn/user/${item.uid}'>
								<div class="searchUserCardBody">
									<div class="searchUserCardImg" style="background: url(https://cdn.luogu.com.cn/upload/usericon/${item.uid}.png); background-size: 36px 36px;"></div>
									<div class="searchUserCardInfo"><span>UID ${item.uid}</span><br/><div style='display: flex; flex-direction: row'><span class="user${item.color}" style="line-height: 20px">${item.name}</span>${getCCFLevel(item.ccfLevel)}${item.badge != null && item.badge != "" ? `<div class='userBadgeInfo badge${item.color}'>${item.badge}</div>` : ""}</div></div>
								</div>
							</a>`;
									});
								}
								finishWork();
							},
							onerror: function () {
								networkError = true;
								finishWork();
							},
						});
					if (settings.lsawProblemDisplay != false)
						GM_xmlhttpRequest({
							method: "GET",
							url: `https://www.luogu.com.cn/problem/list?keyword=${info}&page=1&type=P|B|CF|SP|AT|UVA`,
							withCredentials: true,
							headers: {
								"x-luogu-type": "content-only",
								Accept: "application/json, text/plain, */*",
								"x-lentille-request": "content-only",
							},
							onload: function (response) {
								let json;
								try {
									json = JSON.parse(response.responseText);
								} catch (e) {
									networkError = true;
									finishWork();
									return;
								}
								if (json.status != 200) {
									finishWork();
									return;
								}
								json = json.data.problems;
								if (json.count != 0) {
									problemHtml = `
								<div style='text-align: left; margin-bottom: 10px; width: 100%; font-size: 18px; font-weight: bold'>题目<a href="https://www.luogu.com.cn/problem/list?keyword=${info}&page=1&type=P%7CB%7CCF%7CSP%7CAT%7CUVA" style="cursor: pointer; float: right; font-weight: normal !important" class="searchShowProblems">查看所有 ${json.count} 道题目</a></div>
							`;
									for (
										let i = 0;
										i < json.result.length &&
										i < settings.lsawProblemDisplayNumber;
										i++
									) {
										let item = json.result[i];
										problemHtml += `
									<a class="searchCard searchProblemCard" href='https://www.luogu.com.cn/problem/${item.pid}'>
										<div class="searchProblemCardBody">
											<div>${getProblemStatus(item.submitted, item.accepted)}</div>
											<div>${item.title}</div>
										</div>
										<div>
											<div class='searchProblemCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-book fa-w-14"><path data-v-639bc19b="" fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" class=""></path></svg></div>${item.pid}</div>
											<div class='searchProblemCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" class="svg-inline--fa fa-chart-pie fa-w-17"><path data-v-639bc19b="" fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" class=""></path></svg></div>${item.totalSubmit}</div>
											<div class='searchProblemCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon svg-inline--fa fa-check fa-w-16" data-v-303bbf52="" style="width: 16px; height: 16px; color: rgb(82, 196, 26);"><path data-v-1b44b3e6="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg></div>${item.totalAccepted}</div>
											<div style='flex: 1; text-align: right'>
												<div class="problemTagInfo badge${problemColors[item.difficulty]}">${problemNames[item.difficulty]}</div>
											</div>
										</div>
									</a>
								`;
									}
								}
								finishWork();
							},
							onerror: function () {
								networkError = true;
								finishWork();
							},
						});
					if (settings.lsawOfficialListDisplay != false)
						GM_xmlhttpRequest({
							method: "GET",
							url: `https://www.luogu.com.cn/training/list?keyword=${info}&page=1&type=official`,
							withCredentials: true,
							headers: {
								"x-luogu-type": "content-only",
							},
							onload: function (response) {
								let json;
								try {
									json = JSON.parse(response.responseText);
								} catch (e) {
									networkError = true;
									finishWork();
									return;
								}
								if (json.code != 200) {
									finishWork();
									return;
								}
								json = json.currentData;
								if (json.trainings.result.length != 0) {
									officialHtml = `<div style='text-align: left; margin-bottom: 10px; width: 100%; font-size: 18px; font-weight: bold'>官方题单<a href="https://www.luogu.com.cn/training/list?keyword=${info}&page=1&type=official" style="cursor: pointer; float: right; font-weight: normal !important" class="searchShowProblems">查看所有 ${json.trainings.count} 份题单</a></div>`;
									for (
										let i = 0;
										i < json.trainings.result.length &&
										i < settings.lsawListDisplayNumber;
										i++
									) {
										let item = json.trainings.result[i];
										let acs = json.acceptedCounts[item.id];
										if (acs == undefined) acs = 0;
										officialHtml += `
									<a class="searchCard searchListCard" href='https://www.luogu.com.cn/training/${item.id}' style="background: ${getColorFromPercent(acs / item.problemCount, 0.4)} !important">
										<div class="searchListCardProgress" style="height: 5px; position: absolute; top: -1px; left: 0px; overflow: hidden; border-top-left-radius: 5px; border-top-right-radius: 5px">
											<div style="width: ${(acs / item.problemCount) * 100}%; background: ${getColorFromPercent(acs / item.problemCount, 1)}; height: 5px; content: ""></div>
											<div style="flex: 1"></div>
										</div>
										<div class="searchListCardBody">
											<div>#${item.id}</div>
											<div>${item.title}</div>
										</div>
										<div>
											<div class='searchListCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-book fa-w-14"><path data-v-639bc19b="" fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" class=""></path></svg></div>${acs} / ${item.problemCount}</div>
											<div class='searchListCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="#f1c40f" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg></div>${item.markCount}</div>
										</div>
									</a>
								`;
									}
								}
								finishWork();
							},
							onerror: function () {
								networkError = true;
								finishWork();
							},
						});
					if (settings.lsawSelectListDisplay != false)
						GM_xmlhttpRequest({
							method: "GET",
							url: `https://www.luogu.com.cn/training/list?keyword=${info}&page=1&type=select`,
							withCredentials: true,
							headers: {
								"x-luogu-type": "content-only",
							},
							onload: function (response) {
								let json;
								try {
									json = JSON.parse(response.responseText);
								} catch (e) {
									networkError = true;
									finishWork();
									return;
								}
								if (json.code != 200) {
									finishWork();
									return;
								}
								json = json.currentData;
								if (json.trainings.result.length != 0) {
									selectHtml = `<div style='text-align: left; margin-bottom: 10px; width: 100%; font-size: 18px; font-weight: bold'>用户题单<a href="https://www.luogu.com.cn/training/list?keyword=${info}&page=1&type=select" style="cursor: pointer; float: right; font-weight: normal !important" class="searchShowProblems">查看所有 ${json.trainings.count} 份题单</a></div>`;
									for (
										let i = 0;
										i < json.trainings.result.length &&
										i < settings.lsawListDisplayNumber;
										i++
									) {
										let item = json.trainings.result[i];
										if (item.provider.color == "Cheater")
											item.provider.badge = "作弊者";
										selectHtml += `
									<a class="searchCard searchListCard" href='https://www.luogu.com.cn/training/${item.id}'>
										<div class="searchListCardBody">
											<div>#${item.id}</div>
											<div>${item.title}</div>
										</div>
										<div>
											<div class='searchListCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-book fa-w-14"><path data-v-639bc19b="" fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" class=""></path></svg></div>${item.problemCount}</div>
											<div class='searchListCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg></div>${new Date(item.createTime * 1000).pattern("yyyy/MM/dd")}</div>
											<div class='searchListCardTag'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="#f1c40f" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg></div>${item.markCount}</div>
											<div style='flex: 1; text-align: right'>
												<object style='display: inline-block'><a href="https://www.luogu.com.cn/user/${item.provider.uid}">
													<div style='display: flex; flex-direction: row'>
														<span class="user${item.provider.color}" style="line-height: 20px">${item.provider.name}</span>
														${getCCFLevel(item.provider.ccfLevel)}
														${item.provider.badge != null && item.provider.badge != "" ? `<div class='userBadgeInfo badge${item.provider.color}'>${item.provider.badge}</div>` : ""}
													</div>
												</a></object>
											</div>
										</div>
									</a>
								`;
									}
								}
								finishWork();
							},
							onerror: function () {
								networkError = true;
								finishWork();
							},
						});
					if (settings.lsawArticleDisplay != false) {
						GM_xmlhttpRequest({
							method: "GET",
							url: `https://api-v2.luogu.me/api/search?q=${info}&page=1`,
							withCredentials: true,
							cookies: `cf_clearance=${settings.lsawLuoguMeCf}; `,
							headers: {
								Host: "api-v2.luogu.me",
								"sec-ch-ua-platform": '"Windows"',
								"user-agent":
									"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0",
								"sec-ch-ua":
									'"Not(A:Brand";v="8", "Chromium";v="144", "Microsoft Edge";v="144"',
								"sec-ch-ua-mobile": "?0",
								accept: "*/*",
								"sec-fetch-site": "none",
								"sec-fetch-mode": "cors",
								"sec-fetch-dest": "empty",
								"sec-fetch-storage-access": "active",
								"accept-encoding": "gzip, br",
								"accept-language":
									"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
								priority: "u=1, i",
								cookie: `cf_clearance=${settings.lsawLuoguMeCf}`,
							},
							onload: function (response) {
								let json;
								try {
									json = JSON.parse(response.responseText);
								} catch (e) {
									finishWork();
									return;
								}
								if (json.success != true) {
									finishWork();
									return;
								}
								json = json.data;
								if (json.total != 0) {
									articleHtml = `<div style='text-align: left; margin-bottom: 10px; width: 100%; font-size: 18px; font-weight: bold'>文章<a href="https://www.luogu.me/search?q=${info}" style="cursor: pointer; float: right; font-weight: normal !important" class="searchShowArticles">查看所有 ${json.total} 份文章</a></div>`;
									for (
										let i = 0;
										i < json.size && i < settings.lsawListDisplayNumber;
										i++
									) {
										let item = json.results[i];
										articleHtml += `
								<a class="searchCard searchListCard" href='https://www.luogu.com/article/${item.id}' style="">
									<div class="searchListCardProgress" style="height: 5px; position: absolute; top: -1px; left: 0px; overflow: hidden; border-top-left-radius: 5px; border-top-right-radius: 5px">
										<div style="height: 5px; content: ""></div>
										<div style="flex: 1"></div>
									</div>
									<div class="searchListCardBody">
										<div>#${item.id}</div>
										<div>${item.title}</div>
									</div>
								</a>
								`;
									}
									finishWork();
								}
							},
							onerror: function () {
								networkError = true;
								finishWork();
							},
						});
					}
				};
				$(".searchAnywhereMainInput > input")
					.unbind("input propertychange")
					.on("input propertychange", function () {
						if (searchTimeout != null) clearTimeout(searchTimeout);
						searchTimeout = setTimeout(searchInfo, 1000);
					});
				let searchAnywhereOpen = false;
				$(".searchAnywhereEntrance")
					.unbind("click")
					.click(function () {
						if (!searchAnywhereOpen) {
							$(".searchAnywhere").css("display", "block");
							setTimeout(() => {
								$(".searchAnywhere").css("opacity", "1");
								$(".searchAnywhereMainInput > input").focus();
							}, 20);
						} else {
							$(".searchAnywhere").css("opacity", "0");
							setTimeout(() => {
								$(".searchAnywhere").css("display", "none");
							}, 200);
						}
						searchAnywhereOpen = !searchAnywhereOpen;
					});
				$(".searchAnywhere")
					.unbind("click")
					.click(() => {
						$(".searchAnywhere").css("opacity", "0");
						setTimeout(() => {
							$(".searchAnywhere").css("display", "none");
						}, 200);
						searchAnywhereOpen = false;
					});
				$(".searchAnywhereMainInput")
					.unbind("click")
					.click((event) => {
						event.stopPropagation();
					});
				$(document).keydown(function (event) {
					if (event.keyCode == 186 && (event.ctrlKey || event.metaKey)) {
						if (!searchAnywhereOpen) {
							$(".searchAnywhere").css("display", "block");
							setTimeout(() => {
								$(".searchAnywhere").css("opacity", "1");
								$(".searchAnywhereMainInput > input").focus();
							}, 20);
						} else {
							$(".searchAnywhere").css("opacity", "0");
							setTimeout(() => {
								$(".searchAnywhere").css("display", "none");
							}, 200);
						}
						searchAnywhereOpen = !searchAnywhereOpen;
						event.preventDefault();
					}
					if (searchAnywhereOpen) {
						const activeElement = document.activeElement;
						const searchInput = $(".searchAnywhereMainInput > input")[0];
						if (activeElement !== searchInput) {
							return;
						}
						if (event.keyCode == 38) {
							if (currentHoverCard == undefined) {
								let lis = $(".searchCard");
								if (lis.length == 0)
									$(".searchAnywhereMainInput > input").focus();
								else {
									currentHoverCard = lis.eq(lis.length - 1);
									changeHoverCard(currentHoverCard);
								}
							} else {
								currentHoverCard = currentHoverCard.prev();
								while (1) {
									if (
										currentHoverCard.length == 0 ||
										currentHoverCard.hasClass("searchCard")
									)
										break;
									currentHoverCard = currentHoverCard.prev();
								}
								if (currentHoverCard.length == 0) {
									$(".searchAnywhereMainInput > input").focus();
									currentHoverCard = undefined;
								}
								changeHoverCard(currentHoverCard);
							}
							event.preventDefault();
						} else if (event.keyCode == 40) {
							if (currentHoverCard == undefined) {
								let lis = $(".searchCard");
								if (lis.length == 0)
									$(".searchAnywhereMainInput > input").focus();
								else {
									currentHoverCard = lis.eq(0);
									changeHoverCard(currentHoverCard);
								}
							} else {
								currentHoverCard = currentHoverCard.next();
								while (1) {
									if (
										currentHoverCard.length == 0 ||
										currentHoverCard.hasClass("searchCard")
									)
										break;
									currentHoverCard = currentHoverCard.next();
								}
								if (currentHoverCard.length == 0) {
									$(".searchAnywhereMainInput > input").focus();
									currentHoverCard = undefined;
								}
								changeHoverCard(currentHoverCard);
							}
							event.preventDefault();
						} else if (event.keyCode == 13) {
							if (currentHoverCard != undefined)
								window.open(currentHoverCard.attr("href"), "_blank");
							event.preventDefault();
						} else if (event.keyCode == 9) event.preventDefault();
						else $(".searchAnywhereMainInput > input").focus();
					}
				});
			});
			function injectCustomCSS() {
				removeCustomCSS();
				const customCSSInput = document.getElementById("aml-custom-css-input");
				const cssCode = customCSSInput ? customCSSInput.value.trim() : "";
				const cssPositionSelect = document.getElementById(
					"aml-css-position-select",
				);
				const position = cssPositionSelect ? cssPositionSelect.value : "head";
				if (!cssCode) {
					return;
				}
				const styleElement = document.createElement("style");
				styleElement.id = "aml-custom-css";
				styleElement.textContent = cssCode;
				const targetElement = position === "head" ? document.head : document.body;
				if (targetElement) {
					targetElement.appendChild(styleElement);
				} else {
				}
			}
			function removeCustomCSS() {
				const existing = document.getElementById("aml-custom-css");
				if (existing && existing.parentNode) {
					existing.parentNode.removeChild(existing);
				}
			}
			function loadCustomFont() {
				removeCustomFontFace();
				const customFontInput = document.getElementById("aml-custom-font-input");
				const fontUrl = customFontInput ? customFontInput.value.trim() : "";
				if (!currentAMLSettings.customFontEnabled || !fontUrl) {
					return;
				}
				GM_xmlhttpRequest({
					method: "GET",
					url: fontUrl,
					responseType: "arraybuffer",
					onload: function (response) {
						if (response.status === 200 && response.response) {
							try {
								const bytes = new Uint8Array(response.response);
								let binary = "";
								for (let i = 0; i < bytes.byteLength; i++) {
									binary += String.fromCharCode(bytes[i]);
								}
								const base64 = btoa(binary);
								const mimeType = getMimeTypeFromUrl(fontUrl);
								const fontName = "AML-CustomFont";
								const fontFaceCSS = `
								@font-face {
									font-family: '${fontName}';
									src: url(data:${mimeType};base64,${base64}) format('${getFontFormat(mimeType)}');
									font-display: swap;
								}
							`;
								const styleElement = document.createElement("style");
								styleElement.id = "aml-custom-font-face";
								styleElement.textContent = fontFaceCSS;
								document.head.appendChild(styleElement);
							} catch (e) { }
						} else {
						}
					},
					onerror: function (error) { },
					ontimeout: function () { },
				});
			}
			function getMimeTypeFromUrl(url) {
				if (url.endsWith(".woff2")) return "font/woff2";
				if (url.endsWith(".woff")) return "font/woff";
				if (url.endsWith(".ttf")) return "font/ttf";
				if (url.endsWith(".otf")) return "font/otf";
				return "font/ttf";
			}
			function getFontFormat(mimeType) {
				switch (mimeType) {
					case "font/woff2":
						return "woff2";
					case "font/woff":
						return "woff";
					case "font/ttf":
						return "truetype";
					case "font/otf":
						return "opentype";
					default:
						return "truetype";
				}
			}
			function removeCustomFontFace() {
				const existing = document.getElementById("aml-custom-font-face");
				if (existing && existing.parentNode) {
					existing.parentNode.removeChild(existing);
				}
			}
			GM_addStyle(`
				.welcomeContainer {
					line-height: 1 !important;
				}
			`);
			if (
				currentAMLSettings.codeFolding &&
				!window.location.pathname.includes("/record/")
			) {
				const threshold = 1500;
				function wrapPreInFoldable(preElement) {
					if (preElement.closest(".aml-code-foldable-wrapper")) {
						return;
					}
					if (preElement.classList.contains("aml-code-processed")) {
						return;
					}
					const codeContainer = preElement.closest(".code-container");
					let elementToWrap = preElement;
					let parentElement = preElement.parentNode;
					let insertBeforeElement = preElement;
					if (codeContainer && codeContainer.parentNode) {
						elementToWrap = codeContainer;
						parentElement = codeContainer.parentNode;
						insertBeforeElement = codeContainer;
					} else if (!preElement.parentNode) {
						return;
					}
					const wrapper = document.createElement("div");
					wrapper.className = "aml-code-foldable-wrapper";
					let language = "PLAIN";
					const codeElement = preElement.querySelector("code");
					if (codeElement && codeElement.className) {
						const match = codeElement.className.match(/(?:language|lang)-(\w+)/i);
						if (match && match[1]) {
							language = match[1].toUpperCase();
						}
					}
					const header = document.createElement("div");
					header.className = "aml-code-fold-header";
					header.innerHTML = `<span class="aml-code-title">${language}</span><div class="aml-toggle-icon-wrapper"><i class="fas fa-chevron-down aml-toggle-icon"></i></div>`;
					const content = document.createElement("div");
					content.className = "aml-code-content";
					const nextSibling = elementToWrap.nextSibling;
					content.appendChild(elementToWrap);
					wrapper.appendChild(header);
					wrapper.appendChild(content);
					if (nextSibling) {
						parentElement.insertBefore(wrapper, nextSibling);
					} else {
						parentElement.appendChild(wrapper);
					}
					if (codeContainer) {
						codeContainer.classList.add("aml-code-processed");
					} else {
						preElement.classList.add("aml-code-processed");
					}
					const code = preElement.querySelector("code");
					const shouldFold = code && code.textContent.length > threshold;
					if (shouldFold) {
						content.classList.add("aml-collapsed");
						header
							.querySelector(".aml-toggle-icon-wrapper")
							.classList.add("aml-folded-icon");
						wrapper.classList.add("aml-folded");
						const copyButton = codeContainer
							? codeContainer.querySelector(".copy-button")
							: null;
						if (copyButton) {
							copyButton.style.display = "none";
						}
					} else {
						content.classList.add("aml-expanded");
						wrapper.classList.add("aml-unfolded");
						const copyButton = codeContainer
							? codeContainer.querySelector(".copy-button")
							: null;
						if (copyButton) {
							copyButton.style.display = "";
						}
					}
					header.addEventListener("click", (event) => {
						event.stopPropagation();
						const isFolded = content.classList.contains("aml-collapsed");
						if (isFolded) {
							content.classList.remove("aml-collapsed");
							content.classList.add("aml-expanded");
							wrapper.classList.remove("aml-folded");
							wrapper.classList.add("aml-unfolded");
							header
								.querySelector(".aml-toggle-icon-wrapper")
								.classList.remove("aml-folded-icon");
							const copyButton = codeContainer
								? codeContainer.querySelector(".copy-button")
								: null;
							if (copyButton) {
								copyButton.style.display = "";
							}
						} else {
							content.classList.remove("aml-expanded");
							content.classList.add("aml-collapsed");
							wrapper.classList.remove("aml-unfolded");
							wrapper.classList.add("aml-folded");
							header
								.querySelector(".aml-toggle-icon-wrapper")
								.classList.add("aml-folded-icon");
							const copyButton = codeContainer
								? codeContainer.querySelector(".copy-button")
								: null;
							if (copyButton) {
								copyButton.style.display = "none";
							}
						}
					});
				}
				function processNewCodeBlocks() {
					const codePres = document.querySelectorAll(
						"pre:has(> code):not(.aml-code-processed)",
					);
					codePres.forEach((pre) => {
						if (pre.closest(".aml-code-foldable-wrapper")) {
							pre.classList.add("aml-code-processed");
							return;
						}
						try {
							wrapPreInFoldable(pre);
						} catch (e) { }
					});
				}
				GM_addStyle(`
					.aml-code-foldable-wrapper {
						margin: 0;
						border: 1px solid #e0e0e0;
						border-radius: 8px;
						overflow: hidden;
						background: #fafafa;
						font-family: LXGW Wenkai Screen;
						box-shadow: 0 2px 6px rgba(0,0,0,0.05);
						transition: box-shadow 0.2s ease;
						margin-bottom: 15px;
					}
					.aml-code-foldable-wrapper:hover {
						box-shadow: 0 4px 12px rgba(0,0,0,0.1);
					}
					.aml-code-fold-header {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 10px 14px;
						background: #fdfdfd;
						cursor: pointer;
						user-select: none;
						font-weight: 600;
						color: #333;
					}
					.aml-code-fold-header:hover {
						background: #f9f9f9;
					}
					.aml-toggle-icon {
						font-size: 14px;
						color: #666;
					}
					.aml-toggle-icon-wrapper {
						display: inline-flex;
						align-items: center;
						justify-content: center;
						transition: transform 0.5s ease !important;
					}
					.aml-toggle-icon-wrapper.aml-folded-icon {
						transform: rotate(-90deg) !important;
					}
					.aml-code-content {
						padding: 0;
						background: white;
						overflow: hidden;
						transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
					}
					.aml-code-content.aml-collapsed {
						max-height: 0;
					}
					.aml-code-content.aml-expanded {
						max-height: 800px;
						overflow-x: auto;
						overflow-y: auto;
					}
					.code-container[data-v-6e0a2e13] {
						margin: 0 !important;
					}
				`);
				processNewCodeBlocks();
				const foldingInterval = setInterval(processNewCodeBlocks, 1000);
				document.addEventListener("visibilitychange", () => {
					if (document.hidden) {
						clearInterval(foldingInterval);
					} else {
						setInterval(processNewCodeBlocks, 50);
						processNewCodeBlocks();
					}
				});
			}
			const difficultyColors = [
				[0xbf, 0xbf, 0xbf],
				[0xfe, 0x4c, 0x61],
				[0xf3, 0x9c, 0x11],
				[0xff, 0xc1, 0x16],
				[0x52, 0xc4, 0x1a],
				[0x34, 0x98, 0xdb],
				[0x9d, 0x3d, 0xcf],
				[0x0e, 0x1d, 0x69],
			];
			GM_addStyle(`
				@import url('https://cdn.jsdmirror.cn/npm/lxgw-wenkai-screen-webfont@1.7.0/style.min.css');
				[data-v-0a593618],
				[data-v-fdcd5a58] {
					display: none;
				}
				@font-face {
					font-family: 'Caveat';
					src: url('https://cdn.jsdmirror.cn/gh/googlefonts/caveat/fonts/ttf/Caveat-Regular.ttf') format('truetype');
					font-weight: 400;
					font-style: normal;
					font-display: swap
				}
				.aml-caveat {
					font-family: 'Caveat';
				}
				.aml-panel-content {
					padding: 24px;
					height: 500px;
					overflow-y: auto;
					background: rgba(255,255,255,0.95);
					border-radius: 0 0 16px 16px;
				}
				.aml-setting-item label {
					margin-left: 12px;
					font-size: 0.95em;
					color: #1e1e1e !important;
					font-weight: 500;
					cursor: pointer;
					flex: 1;
				}
				.welcomeRight h4 {
					margin: 0 0 8px 0;
					font-size: 1.1em;
					color: #1e1e1e !important;
					font-weight: 600;
					display: flex;
					align-items: center;
					padding-bottom: 10px;
					padding-bottom: 10px;
					padding-left: 5px;
					border-bottom: #6366f1 2px solid;
				}
				.aml-status {
					margin-top: 12px;
					font-weight: 600;
					padding: 8px 12px;
					border-radius: 6px;
					text-align: center;
				}
				.aml-status[style*="green"] {
					background: #c6f6d5;
					color: #22543d;
				}
				.aml-status[style*="red"] {
					background: #fed7d7;
					color: #742a2a;
				}
				.disabled-notice {
					color: #718096;
					font-style: italic;
					text-align: center;
					padding: 20px;
					background: #f7fafc;
					border-radius: 8px;
					border: 2px dashed #cbd5e0;
				}
				.aml-settings-section label {
					font-weight: 600;
					color: #1e1e1e !important;
					margin-bottom: 4px;
					display: block;
				}
				.welcomeRight input[type="text"],
				.welcomeRight input[type="number"],
				.welcomeRight textarea {
					width: 100%;
					padding: 8px 12px;
					margin-top: 6px;
					margin-bottom: 12px;
					box-sizing: border-box;
					border: 2px solid #e2e8f0;
					border-radius: 6px;
					font-size: 0.9em;
					font-family: inherit;
					background-color: #fff;
					backdrop-filter: blur(3px);
					color: #1e1e1e !important;
					transition: border-color 0.3s ease, box-shadow 0.3s ease;
				}
				.welcomeRight input[type="text"]:focus,
				.welcomeRight input[type="number"]:focus,
				.welcomeRight textarea:focus {
					outline: none;
					border-color: #667eea;
					box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
				}
				.welcomeRight input[type="text"]:hover,
				.welcomeRight input[type="number"]:hover,
				.welcomeRight textarea:hover {
					border-color: #b0b8d6;
				}
				.welcomeRight input[type="checkbox"] {
					width: 16px;
					height: 16px;
					accent-color: #667eea;
					cursor: pointer;
				}
				#aml-settings-container label {
					margin-left: 5px;
					font-size: 0.95em;
					color: #c4c6c9;
					font-weight: 500;
					cursor: pointer;
					flex: 1;
					display: inline-flex;
					align-items: center;
					margin-top: 0;
					margin-bottom: 0;
				}
				#aml-settings-container #aml-features-container {
					display: flex;
					flex-direction: column;
					gap: 8px;
				}
				#aml-settings-container #aml-memo-section textarea,
				#aml-settings-container #aml-pm-section textarea {
					min-height: 180px;
					border: 2px solid #e2e8f0 !important;
				}
				#aml-settings-container #aml-memo-section textarea:focus,
				#aml-settings-container #aml-pm-section textarea:focus {
					border-color: #667eea !important;
					box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
				}
				#aml-settings-container button {
					padding: 8px 16px;
					margin: 4px 2px;
					border: none;
					border-radius: 6px;
					cursor: pointer;
					font-size: 0.9em;
					font-weight: 500;
					text-align: center;
					display: inline-block;
					background-color: #667eea;
					color: white;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
					transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
				}
				#aml-settings-container button:hover {
					background-color: #5a6fd8;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
					transform: translateY(-1px);
				}
				#aml-settings-container button:active {
					transform: translateY(0);
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}
				#aml-settings-container button:focus {
					outline: 2px solid #667eea;
					outline-offset: 2px;
				}
			`);
			if (currentAMLSettings.copyMarkdownEnabled) {
				const routes = [
					{
						name: "article_show",
						match: (path) =>
							/^\/(article)\/(?!mine$|_?new$)[A-Za-z0-9]+$/.test(path),
						getContent: async () => {
							let ele = document.querySelector("script#lentille-context");
							let json = JSON.parse(ele.textContent.trim());
							let url = location.href;
							if (url.endsWith("/")) url = url.slice(0, -1);
							if (
								json.template !== "article.show" ||
								json.data.article.lid !== url.split("/").pop()
							) {
								const res = await fetch(location.href, {
									credentials: "include",
									headers: {
										"x-requested-with": "XMLHttpRequest",
										"x-lentille-request": "content-only",
									},
								});
								const html = await res.text();
								json = JSON.parse(html.trim());
							}
							const content = json.data?.article?.content || "复制失败";
							if (typeof content !== "string") {
								throw new Error("未找到文章内容或格式不正确");
							}
							return content;
						},
					},
					{
						name: "user_detail",
						match: (path) => /^\/user\/\d+$/.test(path),
						test: (url) =>
							!(url.hash && url.hash.length > 1 && url.hash !== "#main"),
						getContent: async () => {
							return (
								JSON.parse(document.getElementById("lentille-context").innerHTML)
									.data.user.introduction || "复制失败"
							);
						},
					},
					{
						name: "contest_detail",
						match: (path) => /^\/contest\/\d+$/.test(path),
						test: (url) =>
							!(url.hash && url.hash.length > 1 && url.hash !== "#description"),
						getContent: async () => {
							return JSON.parse(document.getElementById("lentille-context").innerHTML)
								.data.contest.description || "复制失败";
						},
					},
					{
						name: "training_detail",
						match: (path) => /^\/training\/\d+$/.test(path),
						test: (url) =>
							!(url.hash && url.hash.length > 1 && url.hash !== "#information"),
						getContent: async () => {
							return _feInstance.currentData.training.description || "复制失败";
						},
					},
					{
						name: "paste_show",
						match: (path) => /^\/paste\/[A-Za-z0-9]+$/.test(path),
						test: (url) =>
							!(url.hash && url.hash.length > 1 && url.hash !== "#information"),
						getContent: async () => {
							return _feInstance.currentData.paste.data || "复制失败";
						},
					},
				];
				function getRoute() {
					const path = location.pathname;
					return (
						routes.find((r) => {
							const hasTestFunction = typeof r.test === "function";
							const testResult = hasTestFunction ? r.test(location) : true;
							const matchesPath = r.match(path);
							return testResult && matchesPath;
						}) || null
					);
				}
				function isValidUrl() {
					const valid = !!getRoute();
					return valid;
				}
				async function handleCopyMarkdown() {
					if (!isValidUrl()) {
						Swal.fire({
							title: "不支持",
							text: "当前页面不支持复制 Markdown 内容。",
							icon: "info",
							confirmButtonText: "确定",
						});
						return;
					}
					const route = getRoute();
					if (!route) {
						Swal.fire({
							title: "错误",
							text: "内部错误：未找到匹配的路由。",
							icon: "error",
							confirmButtonText: "确定",
						});
						return;
					}
					try {
						const content = await route.getContent();
						await navigator.clipboard.writeText(content);
						Swal.fire({
							title: "复制成功",
							text: "Markdown 内容已复制到剪贴板！",
							icon: "success",
							confirmButtonText: "确定",
							timer: 2000,
							timerProgressBar: true,
							allowOutsideClick: false,
						}).then(() => { });
					} catch (error) {
						Swal.fire({
							title: "复制失败",
							text: `获取或复制内容时出错: ${error.message}`,
							icon: "error",
							confirmButtonText: "确定",
						});
					}
				}
				(function () {
					if (isValidUrl()) {
						var style = document.createElement("style");
						style.id = "aml-lgcm-style";
						style.textContent = `
							.aml-button-lgcm {
								outline:none !important;
								cursor: pointer;
								line-height: 1.25;
								position: relative;
								display: block;
								margin-left: -.0625rem;
								padding: .5rem .75rem;
								color: #fff !important;
								border: .0625rem solid #dee2e6;
								font-size: 15px;
								font-weight: unset;
								display: flex;
								min-width: 36px;
								height: 36px;
								margin: 0 3px;
								border-radius: 100px!important;
								align-items: center;
								justify-content: center;
								transition:all 0s;
								background-color: #5e72e4;
							}
							.aml-button-lgcm:hover {
								box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
								transform: translateY(-1px);
							}
							`;
						document.head.appendChild(style);
						var button = document.createElement("button");
						button.textContent = "复制Md";
						button.style.position = "absolute";
						button.style.top = "100px";
						button.style.right = "100px";
						window.addEventListener("scroll", function () {
							var scrollY = window.scrollY;
							button.style.top = 100 + scrollY + "px";
						});
						button.classList.add("aml-button-lgcm");
						button.addEventListener("click", async function () {
							handleCopyMarkdown();
						});
						document.body.appendChild(button);
					}
				})();
			}
			if (
				currentAMLSettings.discussCopyButtonEnabled &&
				window.location.pathname.startsWith("/discuss/")
			) {
				GM_addStyle(`
					.aml-copy-md-btn-main {
						--l-button--real-color: var(--lcolor-rgb, var(--lcolor--primary, var(--lcolor--primary, 52, 152, 219)));
						display: inline-block;
						outline: none;
						cursor: pointer;
						font-weight: inherit;
						line-height: 1.5;
						text-align: center;
						vertical-align: middle;
						border-radius: 3px;
						border: 1px solid rgb(var(--l-button--real-color));
						background: rgba(var(--l-button--real-color), 0) none;
						color: rgb(var(--l-button--real-color));
						padding: .125em .5em;
						font-size: .875em;
						margin-left: 5px;
					}
				`);
				function waitForElement(selector, callback, timeout = 10000) {
					const startTime = Date.now();
					const interval = setInterval(() => {
						const element = document.querySelector(selector);
						if (element) {
							clearInterval(interval);
							callback(element);
						} else if (Date.now() - startTime > timeout) {
							clearInterval(interval);
							Swal.fire({
								title: "错误",
								text: "超时",
								icon: "error",
								confirmButtonText: "确定",
							});
						}
					}, 100);
				}
				function createCopyButton(
					content,
					label = "复制 Md",
					fontcolor,
					type = "a",
				) {
					const button = document.createElement(type);
					if (type != "button") {
						button.href = "javascript:void(0)";
						button.textContent = label;
						button.setAttribute("disabled", "false");
						button.classList.add("aml-copy-md-btn");
					} else {
						button.textContent = label;
						button.classList.add("lform-size-small");
						button.setAttribute("data-v-7fb6e9ed", "");
						button.setAttribute("data-v-505b6a97", "");
						button.setAttribute("type", "button");
					}
					button.addEventListener("click", (e) => {
						e.stopPropagation();
						e.preventDefault();
						if (typeof GM_setClipboard === "function") {
							GM_setClipboard(content, "text/plain");
						} else {
							navigator.clipboard.writeText(content).catch((err) => {
								Swal.fire({
									title: "错误",
									text: "复制失败",
									icon: "error",
									confirmButtonText: "确定",
								});
							});
						}
						const originalText = button.textContent;
						button.textContent = "已复制";
						const originalColor = button.style.color;
						button.style.color = "#4CAF50";
						setTimeout(() => {
							button.textContent = originalText;
							button.style.color = originalColor || fontcolor;
						}, 2000);
					});
					return button;
				}
				function getPageDataFromScript() {
					try {
						const scriptTag = document.getElementById("lentille-context");
						if (scriptTag) {
							const jsonString = scriptTag.textContent.trim();
							const jsonStr = jsonString
								.replace(/^window\._feInjectionData\s*=\s*/, "")
								.replace(/;$/, "");
							return JSON.parse(jsonStr);
						}
					} catch (e) {
						Swal.fire({
							title: "错误",
							text: "解析 lentille-context 数据失败， 无法获取 Markdown 内容",
							icon: "error",
							confirmButtonText: "确定",
						});
					}
					return null;
				}
				function processMainContent() {
					waitForElement(".lfe-marked-wrap.marked", (markedWrap) => {
						if (markedWrap.closest(".comment")) return;
						const pageData = getPageDataFromScript();
						let postContent = null;
						if (pageData && pageData.data && pageData.data.post) {
							postContent = pageData.data.post.content;
						}
						if (postContent) {
							if (document.querySelector(".aml-copy-md-btn-main")) {
								return;
							}
							const button = createCopyButton(
								postContent,
								"复制内容",
								"rgb(var(--l-button--real-color))",
								"button",
							);
							button.classList.add("aml-copy-md-btn-main");
							const cardElement = markedWrap.closest(".l-card");
							if (cardElement) {
								let targetContainer = null;
								const rowElement = cardElement.querySelector(
									"div.row.row-space-between",
								);
								if (rowElement) {
									const rowChildren = rowElement.querySelectorAll(":scope > div");
									if (rowChildren.length >= 2) {
										targetContainer = rowChildren[rowChildren.length - 1];
									} else {
									}
								} else {
								}
								if (!targetContainer) {
									const allButtonsInCard = Array.from(
										cardElement.querySelectorAll("button"),
									);
									const replyButton = allButtonsInCard.find(
										(btn) => btn.textContent.trim() === "回复楼主",
									);
									if (replyButton) {
										targetContainer = replyButton.parentElement;
									} else {
									}
								}
								if (targetContainer) {
									targetContainer.appendChild(button);
								} else {
									Swal.fire({
										title: "错误",
										text: "未找到主内容的“回复楼主”按钮容器，将复制按钮添加到内容区域末尾。",
										icon: "info",
										confirmButtonText: "确定",
									});
									markedWrap.appendChild(button);
								}
							} else {
								Swal.fire({
									title: "错误",
									text: "未找到主内容卡片 .l-card，将复制按钮添加到内容区域末尾。",
									icon: "info",
									confirmButtonText: "确定",
								});
								markedWrap.appendChild(button);
							}
						}
					});
				}
				function processReplies() {
					const observer = new MutationObserver((mutationsList) => {
						for (let mutation of mutationsList) {
							if (mutation.type === "childList") {
								mutation.addedNodes.forEach((node) => {
									if (node.nodeType === Node.ELEMENT_NODE) {
										const commentWraps = node.querySelectorAll
											? node.querySelectorAll(".comment")
											: [];
										commentWraps.forEach(processSingleReply);
										if (node.classList && node.classList.contains("comment")) {
											processSingleReply(node);
										}
									}
								});
							}
						}
					});
					document.querySelectorAll(".comment").forEach(processSingleReply);
					observer.observe(document.body, { childList: true, subtree: true });
				}
				function getContentAfterFirstReportReply(str) {
					const keyword = "举报回复";
					// 查找“举报回复”首次出现的起始索引
					const index = str.indexOf(keyword);
					if (index === -1) {
						// 若不存在该子串，返回空字符串或自定义提示
						return "";
						// 也可返回原字符串：return str;
					}
					// 截取从“举报回复”结束位置到字符串末尾的内容
					// index + keyword.length 是“举报回复”后的第一个字符索引
					return str.slice(index + keyword.length);
				}
				function processSingleReply(commentWrap) {
					const actionContainer = commentWrap.querySelector(".action");
					if (!actionContainer) {
						return;
					}
					if (actionContainer.querySelector(".aml-copy-md-btn-reply")) return;
					const allCommentWraps = Array.from(
						document.querySelectorAll(".comment"),
					);
					const replyIndex = allCommentWraps.indexOf(commentWrap);
					const pageData = getPageDataFromScript();
					let replyContent = null;
					if (
						pageData &&
						pageData.data &&
						pageData.data.replies &&
						Array.isArray(pageData.data.replies.result)
					) {
						const replies = pageData.data.replies.result;
						if (
							replyIndex >= 0 &&
							replyIndex <= replies.length &&
							pageData.data.post.pinnedReply
						) {
							if (!replyIndex) {
								replyContent = pageData.data.post.pinnedReply.content;
							} else {
								replyContent = replies[replyIndex - 1].content;
							}
						} else if (replyIndex >= 0 && replyIndex <= replies.length) {
							replyContent = replies[replyIndex].content;
						}
					}
					if (replyContent) {
						const button = createCopyButton(
							replyContent,
							"复制",
							"rgba(0,0,0,.5)",
						);
						button.classList.add("aml-copy-md-btn-reply");
						actionContainer.appendChild(button);
					}
				}
				processMainContent();
				processReplies();
				let lastUrl = location.href;
				const urlObserver = new MutationObserver(() => {
					if (location.href !== lastUrl) {
						lastUrl = location.href;
						if (window.location.pathname.startsWith("/discuss/"))
							location.reload();
						processMainContent();
						processReplies();
					}
				});
				urlObserver.observe(document, { childList: true, subtree: true });
				if (document.readyState === "loading") {
					document.addEventListener("DOMContentLoaded", function () {
						processMainContent();
						processReplies();
					});
				} else {
					setTimeout(() => {
						processMainContent();
						processReplies();
					}, 500);
				}
			}
			if (currentAMLSettings.benbenctrlenterEnabled && !benbenctrlenterInited) {
				benbenctrlenterInited = true;
				document.addEventListener('keyup', function (event) {
					// 统一判断：Ctrl (Win/Linux) 或 Command (Mac) + Enter
					const isCtrlOrCommand = event.ctrlKey || event.metaKey;

					if (
						isCtrlOrCommand
						&& event.key === "Enter"
						&& document.activeElement
						&& document.activeElement.id === 'feed-content'
					) {
						document.getElementById("feed-submit").click();
					}
				});
			}
			if (currentAMLSettings.extendTaskEnabled && location.pathname == '/') {
				if (document.querySelector(".tasklist-item")) {
					let pidList = [];
					let tasklist = document.querySelectorAll(".tasklist-item");
					for (let i = 0; i < tasklist.length; i++) {
						let task = tasklist[i];
						let pid = task.getAttribute("data-pid");
						if (!pidList.includes(pid)) {
							pidList.push(pid);
						}
						let accepted = task.children[0].children[0].children[0].className == 'lg-fg-green';
						if (accepted) {
							console.log("Task " + pid + " accepted.");
							task.remove();
							pidList.remove(pid);
						}
					}
					if (pidList.length != 0) {
						const parser = new DOMParser();
						const doc = parser.parseFromString(
							`<button name="task-random" style="margin-left: .5em;" class="am-btn am-btn-sm am-btn-primary lg-right">随机</button>`,
							"text/html"
						).body.firstElementChild;
						doc.onclick = async function () {
							Swal.fire({
								title: "正在跳题",
								text: "请稍候",
								allowOutsideClick: false,
								didOpen: () => {
									Swal.showLoading();
								},
							});
							let pid = pidList[Math.floor(Math.random() * pidList.length)];
							location.replace("https://www.luogu.com.cn/problem/" + pid);
						}
						document.querySelector(".tasklist-item").parentElement.children[0].children[0].before(doc);
					}
				}
			}
			if (currentAMLSettings.autoSaveDiscussEnabled && location.pathname.startsWith("/discuss/")) {
				let discussId = location.pathname.split("/discuss/")[1].split("/")[0];
				let parser = new DOMParser();
				let doc = parser.parseFromString(`<button data-v-505b6a97="" data-v-216447b8="" class="lform-size-middle lcolor-var-green-3" type="button">保存<!----></button>`, 'text/html').body.firstElementChild;
				doc.onclick = function () {
					try {
						const url = 'https://luogu.store/';
						GM_xmlhttpRequest({
							method: 'POST',
							url: url,
							headers: {
								'accept': 'text/x-component',
								'accept-encoding': 'gzip, deflate, br, zstd',
								'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
								'content-type': 'text/plain;charset=UTF-8',
								'next-action': '406ba16943dc068f983622e6001d07cd2c45e7aea5',
								'next-router-state-tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2Cnull%2Cnull%5D%2C%22modal%22%3A%5B%22__DEFAULT__%22%2C%7B%7D%2Cnull%2Cnull%5D%7D%2Cnull%2Cnull%2Ctrue%5D'
							},
							data: '[' + discussId + ']',
							onload: function (response) {
								if (response.status >= 200 && response.status < 300) {
									console.log('请求成功，返回数据：', response.responseText);
									Swal.fire({
										title: "保存成功",
										html: "讨论数据已保存到 luogu.store ！",
										showCancelButton: false,
										confirmButtonText: "确定",
										icon: "success",
									});
								} else {
									console.error(`HTTP error! Status: ${response.status}`);
									Swal.fire({
										title: "保存失败",
										html: "保存到 luogu.store 时发生错误！",
										showCancelButton: false,
										confirmButtonText: "确定",
										icon: "error",
									});
								}
							},
							onerror: function (error) {
								Swal.fire({
									title: "保存失败",
									html: "保存到 luogu.store 时发生错误！",
									showCancelButton: false,
									confirmButtonText: "确定",
									icon: "error",
								});
							},
							ontimeout: function () {
								console.error('请求超时');
								Swal.fire({
									title: "保存失败",
									html: "保存到 luogu.store 时发生错误！",
									showCancelButton: false,
									confirmButtonText: "确定",
									icon: "error",
								});
							},
							timeout: 10000
						});
					} catch (error) {
						Swal.fire({
							title: "保存失败",
							html: "保存到 luogu.store 时发生错误！",
							showCancelButton: false,
							confirmButtonText: "确定",
							icon: "error",
						});
					}
				}
				let area = document.getElementsByClassName("btn-actions")[0];
				area.lastElementChild.after(doc);
			}
			if (currentAMLSettings.discussListLengthEnabled && location.pathname == '/') {
				let removenum = 16 - currentAMLSettings.discussListLength;
				for (let i = 0; i < removenum; i++) {
					document.getElementsByClassName("am-panel lg-index-contest am-panel-primary")[document.getElementsByClassName("am-panel lg-index-contest am-panel-primary").length - 1].remove();
				}
			}
			if (currentAMLSettings.vscodeLuoguEnabled && location.pathname.startsWith("/problem/") && location.pathname.replaceAll('/', '') != 'problemlist' && !location.hash) {
				let search = new URLSearchParams(location.search);
				let cpbtn = document.querySelector("[data-v-f265fec6]").querySelector("[data-v-f265fec6]").querySelector("[data-v-f265fec6]").lastChild.firstChild.lastChild;
				const parser = new DOMParser();
				const doc = parser.parseFromString(`<button data-v-505b6a97="" data-v-f265fec6-s="" class="aml-vscode lform-size-middle button-transparent" type="button">跳转到 VSCode Luogu<!----></button>`, 'text/html').body.firstChild;
				doc.onclick = function () {
					Swal.fire({
						icon: "info",
						title: "正在跳转",
						html: "请稍后...",
						showLoading: true
					})
					if (search.get("contestId")) {
						GM_xmlhttpRequest({
							method: "GET",
							url: "http://127.0.0.1:" + currentAMLSettings.vscodePort + "/problem/" + location.pathname.split("/")[2] + "/" + search.get("contestId"),
							timeout: 10000,
							onload: function () {
								Swal.fire({
									title: "跳转成功",
									html: "请打开 VSCode 查看",
									icon: "success",
									showCancelButton: true,
									confirmButtonText: "确定",
									cancelButtonText: "取消",
								});
							},
							ontimeout: function () {
								Swal.fire({
									title: "跳转失败",
									html: "请检查 VSCode 插件是否已安装且 VSCode 已启动",
									icon: "error",
									showCancelButton: true,
									confirmButtonText: "确定",
									cancelButtonText: "取消",
								});
							},
							onerror: function () {
								Swal.fire({
									title: "跳转失败",
									html: "请检查 VSCode 插件是否已安装且 VSCode 已启动",
									icon: "error",
									showCancelButton: true,
									confirmButtonText: "确定",
									cancelButtonText: "取消",
								});
							}
						});
					} else {
						GM_xmlhttpRequest({
							method: "GET",
							url: "http://127.0.0.1:" + currentAMLSettings.vscodePort + "/problem/" + location.pathname.split("/")[2],
							timeout: 10000,
							onload: function () {
								Swal.fire({
									title: "跳转成功",
									html: "请打开 VSCode 查看",
									icon: "success",
									showCancelButton: true,
									confirmButtonText: "确定",
									cancelButtonText: "取消",
								});
							},
							ontimeout: function () {
								Swal.fire({
									title: "跳转失败",
									html: "请检查 VSCode 插件是否已安装且 VSCode 已启动",
									icon: "error",
									showCancelButton: true,
									confirmButtonText: "确定",
									cancelButtonText: "取消",
								});
							},
							onerror: function () {
								Swal.fire({
									title: "跳转失败",
									html: "请检查 VSCode 插件是否已安装且 VSCode 已启动",
									icon: "error",
									showCancelButton: true,
									confirmButtonText: "确定",
									cancelButtonText: "取消",
								});
							}
						});
					}
				}
				cpbtn.parentNode.insertBefore(doc, null);
			}
			if (currentAMLSettings.vscodeLuoguEnabled && location.pathname.startsWith("/contest/") && location.pathname.replaceAll('/', '') != 'contestlist') {
				let cpbtn = document.getElementsByClassName("title lfe-h2")[0];
				const parser = new DOMParser();
				const doc = parser.parseFromString(`<button data-v-7ade990c="" data-v-9f9431e6="" type="button" class="aml-vscode lfe-form-sz-middle" data-v-2dfcfd35="" style="
    font-size: small;
    border: 1px solid;
    border-color: rgb(52, 152, 219);
    background-color: rgb(52, 152, 219);
    display: inline-block;
    flex: none;
    outline: 0;
    cursor: pointer;
    color: #fff;
    font-weight: inherit;
    line-height: 1.5;
    text-align: center;
    vertical-align: middle;
    border-radius: 3px;
    ">跳转到 VSCode Luogu</button>`, 'text/html').body.firstChild;
				const spaceNode = parser.parseFromString(
					'<l class="aml-space">&nbsp;</l>',
					"text/html",
				).body.firstElementChild;
				doc.onclick = function () {
					Swal.fire({
						icon: "info",
						title: "正在跳转",
						html: "请稍后...",
						showLoading: true
					})
					GM_xmlhttpRequest({
						method: "GET",
						url: "http://127.0.0.1:" + currentAMLSettings.vscodePort + "/contest/" + location.pathname.split("/")[2],
						timeout: 10000,
						onload: function () {
							Swal.fire({
								title: "跳转成功",
								html: "请打开 VSCode 查看",
								icon: "success",
								showCancelButton: true,
								confirmButtonText: "确定",
								cancelButtonText: "取消",
							});
						},
						ontimeout: function () {
							Swal.fire({
								title: "跳转失败",
								html: "请检查 VSCode 插件是否已安装且 VSCode 已启动",
								icon: "error",
								showCancelButton: true,
								confirmButtonText: "确定",
								cancelButtonText: "取消",
							});
						},
						onerror: function () {
							Swal.fire({
								title: "跳转失败",
								html: "请检查 VSCode 插件是否已安装且 VSCode 已启动",
								icon: "error",
								showCancelButton: true,
								confirmButtonText: "确定",
								cancelButtonText: "取消",
							});
						}
					});
				}
				cpbtn.appendChild(spaceNode);
				cpbtn.appendChild(doc);
			}
			if (currentAMLSettings.codeforcesOriginDifEnabled) {
				let CFProblem = GM_getValue("CFProblemCache", {});
				let CacheTime = GM_getValue("CFProblemCacheTime", 0);
				function getUTCTime() {
					let d1 = new Date();
					let d2 = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
					return Date.parse(d2);
				}
				if (getUTCTime() - 24 * 60 * 60 * 1000 >= CacheTime) {
					GM_xmlhttpRequest({
						method: "GET",
						url: "https://codeforces.com/api/problemset.problems",
						timeout: 10000,
						responseType: "json",
						onload: function (response) {
							if (response.status >= 200 && response.status < 300) {
								const result__ = response.response;
								console.log("数据获取成功：", result__);
								if (result__["status"] == 'OK') {
									let result = result__.result.problems;
									GM_setValue("CFProblemCache", result);
									GM_setValue("CFProblemCacheTime", getUTCTime());
								} else {
									console.error("Codeforce API 异常");
								}
							} else {
								console.error("请求返回错误状态码：", response.status);
							}
						},
						onerror: function (error) {
							console.error("请求失败：", error);
						},
						ontimeout: function () {
							console.error("请求超时");
						}
					});
				}
			}
			if (currentAMLSettings.codeforcesOriginDifEnabled && location.pathname.startsWith("/problem/CF")) {
				console.log("Codeforces 原题难度显示功能触发");
				console.log(JSON.parse(document.getElementById("lentille-context").innerHTML).data.problem.vjudge.id);
				let CFProblem = GM_getValue("CFProblemCache", {});
				for (let i of CFProblem) {
					if (i.contestId + i.index == JSON.parse(document.getElementById("lentille-context").innerHTML).data.problem.vjudge.id) {
						console.log(i);
						if (i.rating) {
							console.log(i);
							async function rrr(i) {
								console.log("正在等待题单加载...");
								while (!document.querySelector('a[data-v-12b24cc3][data-v-0b63fe2e][href^="/problem/list"]') || !document.querySelector('a[data-v-12b24cc3][data-v-0b63fe2e][href^="/problem/list"]').querySelector('span') || !document.querySelector('a[data-v-12b24cc3][data-v-0b63fe2e][href^="/problem/list"]').querySelector('span').innerHTML) {
									await new Promise((resolve) => setTimeout(resolve, 500));
								}
								console.log("开始显示难度");
								document.querySelector('a[data-v-12b24cc3][data-v-0b63fe2e][href^="/problem/list"]').querySelector('span').innerHTML = i.rating;
							}
							rrr(i);
						}
						break;
					}
				}
			}
			if (currentAMLSettings.autoO2Enabled && location.pathname.startsWith("/problem/")) {
				try {
					if (location.hash == '#ide' && !document.querySelector("[id=LCheck-4]").checked) {
						let O2INPUT = document.querySelector("[for=LCheck-4]");
						O2INPUT.click();
					} else if (location.hash == '#submit' && !document.querySelector("[id=LCheck-5]").checked) {
						let O2INPUT = document.querySelector("[for=LCheck-5]");
						O2INPUT.click();
					}
				} catch (error) {

				}
			}
			if (currentAMLSettings.nbnhhshEnabled && !nbnhhshInited) {
				nbnhhshInited = true;
				let Nbnhhsh = ((htmlText, cssText) => {
					const API_URL = "https://lab.magiconch.com/api/nbnhhsh/";

					const request = (method, url, data, onOver) => {
						// GM_xmlhttpRequest返回的对象支持abort，兼容原脚本的中止逻辑
						return GM_xmlhttpRequest({
							method: method,
							url: url,
							headers: {
								"content-type": "application/json",
							},
							data: JSON.stringify(data),
							withCredentials: true,
							onload: (res) => {
								let result = null;
								// 修复点1：JSON解析加try/catch，避免返回非JSON内容时报错卡死
								try {
									result = res.responseText ? JSON.parse(res.responseText) : null;
								} catch (e) {
									console.error("NBnhhsh解析数据失败：", e);
								}
								onOver(result);
							},
							onerror: () => {
								onOver(null);
							},
							// 修复点2：添加超时回调，避免请求挂起无响应
							ontimeout: () => {
								onOver(null);
							},
						});
					};

					const Guess = {};
					const guess = (text, onOver) => {
						// 修复点3：match加判空（|| []），避免无匹配内容时调用join报错
						text = text.match(/[a-z0-9]{2,}/gi) || [];
						text = text.join(",");
						// 空内容直接返回，不发起请求
						if (!text) return onOver([]);

						if (Guess[text]) {
							return onOver(Guess[text]);
						}

						if (guess._request) {
							guess._request.abort();
						}

						app.loading = true;
						guess._request = request(
							"POST",
							API_URL + "guess",
							{ text },
							(data) => {
								// 修复点4：无论是否成功，都重置loading状态（核心解决一直加载中）
								app.loading = false;
								Guess[text] = data || [];
								onOver(data || []);
							},
						);
					};

					const submitTran = (name) => {
						let text = prompt(
							"输入缩写对应文字 末尾可通过括号包裹（简略注明来源）",
							"",
						);

						if (!text || !text.trim || !text.trim()) {
							return;
						}

						request("POST", API_URL + "translation/" + name, { text }, () => {
							alert("感谢对好好说话项目的支持！审核通过后这条对应将会生效");
						});
					};

					const transArrange = (trans) => {
						return trans.map((tran) => {
							const match = tran.match(/^(.+?)([（\(](.+?)[）\)])?$/);
							// 修复点5：match加判空，避免匹配失败时match为null报错
							if (!match) return { text: tran };

							if (match.length === 4) {
								return {
									text: match[1],
									sub: match[3],
								};
							} else {
								return {
									text: tran,
								};
							}
						});
					};

					const getSelectionText = (_) => {
						let text = getSelection().toString().trim();
						if (!!text && /[a-z0-9]/i.test(text)) {
							return text;
						} else {
							return null;
						}
					};

					const fixPosition = (_) => {
						// 修复点6：Range加判空，避免无选中内容时getRangeAt(0)报错
						if (!getSelection().rangeCount) return;
						let rect = getSelection().getRangeAt(0).getBoundingClientRect();

						const activeEl = document.activeElement;
						if (["TEXTAREA", "INPUT"].includes(activeEl?.tagName))
							rect = activeEl.getBoundingClientRect();

						let scrollTop =
							document.documentElement.scrollTop || document.body.scrollTop;
						let top = Math.floor(scrollTop + rect.top + rect.height);
						let left = Math.floor(rect.left);

						if (top === 0 && left === 0) {
							app.show = false;
						}
						app.top = top;
						app.left = left;
					};

					const timer = (_) => {
						if (getSelectionText()) {
							setTimeout(timer, 300);
						} else {
							app.show = false;
						}
					};

					const nbnhhsh = (_) => {
						let text = getSelectionText();
						app.show = !!text && /[a-z0-9]/i.test(text);

						if (!app.show) {
							return;
						}

						fixPosition();

						guess(text, (data) => {
							// 修复点7：data加判空，避免data为null时判断data.length报错
							if (!data || !data.length) {
								app.show = false;
							} else {
								app.tags = data;
							}
						});

						setTimeout(timer, 300);
					};

					const _nbnhhsh = (_) => {
						setTimeout(nbnhhsh, 1);
					};

					document.body.addEventListener("mouseup", _nbnhhsh);
					document.body.addEventListener("keyup", _nbnhhsh);

					const createEl = (html) => {
						createEl._el.innerHTML = html;
						let el = createEl._el.children[0];
						document.body.appendChild(el);
						return el;
					};
					createEl._el = document.createElement("div");

					createEl(`<style>${cssText}</style>`);
					const el = createEl(htmlText);

					const app = new Vue({
						el,
						data: {
							tags: [],
							show: false,
							loading: false,
							top: 0,
							left: 0,
						},
						methods: {
							submitTran,
							transArrange,
						},
					});

					return {
						guess,
						submitTran,
						transArrange,
					};
				})(
					`
				<div class="nbnhhsh-box nbnhhsh-box-pop" v-if="show" :style="{top:top+'px',left:left+'px'}" @mousedown.prevent>
					<div class="nbnhhsh-loading" v-if="loading">
						加载中…
					</div>
					<div class="nbnhhsh-tag-list" v-else-if="tags.length">
						<div class="nbnhhsh-tag-item" v-for="tag in tags">
							<h4>{{tag.name}}</h4>
							<div class="nbnhhsh-tran-list" v-if="tag.trans">
								<span class="nbnhhsh-tran-item" v-for="tran in transArrange(tag.trans)">
									{{tran.text}}<sub v-if="tran.sub">{{tran.sub}}</sub>
								</span>
							</div>
							<div class="nbnhhsh-notran-box" v-else-if="tag.trans===null">
								无对应文字
							</div>
							<div v-else-if="tag.inputting && tag.inputting.length !==0">
								<div class="nbnhhsh-inputting-list">
									<h5>有可能是</h5>
									<span class="nbnhhsh-inputting-item" v-for="input in tag.inputting">{{input}}</span>
								</div>
							</div>
							<div class="nbnhhsh-notran-box" v-else @click.prevent="submitTran(tag.name)">
								尚未录入，我来提交对应文字
							</div>
							<a v-if="tag.trans!==null" @click.prevent="submitTran(tag.name)" class="nbnhhsh-add-btn" title="我来提交对应文字"></a>
						</div>
					</div>
				</div>
				`,
					`
				.nbnhhsh-box{
					font:400 14px/1.4 sans-serif;
					color:#333;
				}
				.nbnhhsh-box-pop{
					position: absolute;
					z-index:99999999999;
					width: 340px;
					background:#FFF;
					box-shadow: 0 3px 30px -4px rgba(0,0,0,.3);
					margin: 10px 0 100px 0;
				}
				.nbnhhsh-box-pop::before{
					content: '';
					position: absolute;
					top:-7px;
					left:8px;
					width: 0;
					height: 0;
					border:7px solid transparent;
					border-top:1px;
					border-bottom-color:#FFF;
				}
				.nbnhhsh-box sub{
					vertical-align: middle;
					background: rgba(0,0,0,.07);
					color: #777;
					font-size: 12px;
					line-height:16px;
					display: inline-block;
					padding: 0 3px;
					margin:-2px 0 0 2px;
					border-radius: 2px;
					letter-spacing: -0.6px;
					bottom:0;
				}
				.nbnhhsh-tag-list{
					/*padding:4px 0;*/
				}
				.nbnhhsh-tag-item{
					padding:4px 14px;
					position: relative;
				}
				.nbnhhsh-tag-item:nth-child(even){
					background: rgba(0, 99, 255, 0.06);
				}
				.nbnhhsh-tag-item h4{
					font-weight:bold;
					font-size:20px;
					line-height:28px;
					letter-spacing: 1.5px;
					margin:0;
				}
				.nbnhhsh-tran-list{
					color:#444;
					padding: 0 0 4px 0;
					line-height:18px;
				}
				.nbnhhsh-tran-item{
					display: inline-block;
					padding: 2px 15px 2px 0;
				}
				.nbnhhsh-inputting-list{
					color:#222;
					padding: 0 0 4px 0;
				}
				.nbnhhsh-inputting-list h5{
					font-size:12px;
					line-height:24px;
					color:#999;
					margin:0;
				}
				.nbnhhsh-inputting-item{
					margin-right:14px;
					display:inline-block;
				}
				.nbnhhsh-notran-box{
					padding:4px 0;
					color:#999;
					cursor: pointer;
				}
				.nbnhhsh-add-btn{
					position: absolute;
					top:0;
					right:0;
					width: 30px;
					line-height: 30px;
					text-align: center;
					color: #0059ff;
					font-size: 16px;
					font-weight: bold;
					cursor: pointer;
				}
				.nbnhhsh-add-btn:after{
					content: '+';
				}
				.nbnhhsh-loading{
					text-align: center;
					color:#999;
					padding:20px 0;
				}
				`,
				);
			}
			// if (currentAMLSettings.slogenTimeEnabled) {
			// 	function updateSlogenTime() {
			// 		if (!getCurrentUserId()) {
			// 			return;
			// 		}
			// 		let time = new Date();
			// 		let timestring = currentAMLSettings.slogenTimeFormat.replace(
			// 			"{time}",
			// 			time.getFullYear().toString() +
			// 			"年" +
			// 			(time.getMonth() + 1).toString() +
			// 			"月" +
			// 			time.getDate().toString() +
			// 			"日 " +
			// 			time.getHours().toString() +
			// 			"时" +
			// 			time.getMinutes().toString() +
			// 			"分",
			// 		);
			// 		if (GM_getValue("aml-slogan-time-string", "") != timestring) {
			// 			GM_setValue("aml-slogan-time-string", timestring);
			// 			fetch("/api/user/updateSlogan", {
			// 				method: "POST",
			// 				headers: [
			// 					["content-type", "application/json"],
			// 					["referer", "https://www.luogu.com.cn/"],
			// 					["x-csrf-token", gettoken()],
			// 				],
			// 				body: JSON.stringify({
			// 					slogan: timestring,
			// 				}),
			// 			});
			// 		}
			// 	}
			// 	if (!slogenFunctionRunned) {
			// 		slogenFunctionRunned = true;
			// 		setInterval(updateSlogenTime, 1000);
			// 	}
			// }
			// 洛谷个人介绍增强 - 结构100%还原原生 + 不破坏Vue虚拟DOM
			if (currentAMLSettings.showUserIntroductionEnabled && location.pathname.match(/^\/user\/\d+$/)) {
				console.log("洛谷个人介绍增强功能触发");
				let userUid = location.pathname.split("/")[2];
				const res = JSON.parse(document.getElementById("lentille-context").innerHTML).data;
				let isAdmin = res.user.isAdmin;
				let verified = res.user.verified;
				if (!isAdmin && !verified) {
					console.log("增强功能启动")
					const it = res.user.introduction;
					const introduction = marked.parse(it);

					// ==============================================
					// ✅ 1:1 还原洛谷原生 l-card 结构、属性、样式
					// ==============================================
					const jsCard = document.createElement('div');
					jsCard.setAttribute('data-v-c3407962', '');
					jsCard.setAttribute('data-v-f4fefeb2', '');
					jsCard.setAttribute('data-v-754e1ea4-s', '');
					jsCard.className = 'l-card';

					jsCard.innerHTML = `
			<div data-v-f4fefeb2="" class="header aml-user-introduction-header">
			<h3 data-v-f4fefeb2="" style="margin: 0px;">个人介绍</h3>
			<span data-v-f4fefeb2="" class="edit-button">
			</span>
			</div>
			<br>
			<div data-v-f4fefeb2="" class="lfe-marked-wrap introduction">
			<div class="lfe-marked">${introduction}</div>
			</div>
					`.trim();

					// ==============================================
					// ✅ 核心安全修复：不删除任何Vue DOM，只安全插入
					// ==============================================
					const mainContent = document.querySelectorAll('.main')[2];
					if (mainContent) {
						mainContent.appendChild(jsCard);
					}

					// 仅渲染当前卡片内的公式
					if (typeof katex !== 'undefined') {
						renderMathInElement(jsCard, {
							delimiters: [
								{ left: "$$", right: "$$", display: true },
								{ left: "$", right: "$", display: false },
							],
							throwOnError: false
						});
					}
				}
			}

			// ==============================================
			// 👇 只有注释的按钮逻辑 放到 IF 外面（全页面生效）
			// ==============================================
			if (location.pathname.match(/^\/user\/\d+$/)) {
				const mainContents = document.querySelectorAll('.main');
				if (mainContents.length >= 3) {
					const mainContent = mainContents[2];
					const lCards = mainContent.querySelectorAll('.l-card');
					if (lCards.length > 0) {
						// 取第三个main里最后一个l-card（个人介绍卡片）
						const targetCard = lCards[lCards.length - 1];
						const cardHeader = targetCard.querySelector('.header');
						const resData = JSON.parse(document.getElementById("lentille-context").innerHTML).data;
						const it = resData.user.introduction;
						const introduction = marked.parse(it);

						if (cardHeader) {
							// 没有edit-tab就自动创建，带上 aml-deltab
							let editTab = cardHeader.querySelector('.edit-tab');
							if (!editTab) {
								editTab = document.createElement('span');
								editTab.className = 'edit-button edit-tab aml-deltab';
								cardHeader.appendChild(editTab);
							}

							// 插入按钮
							editTab.innerHTML = `
			<button data-v-505b6a97="" class="lform-size-small" type="button">复制</button>
			<button data-v-505b6a97="" class="lform-size-small" type="button" alt="渲染为 HTML，请小心鉴别">渲染为 HTML</button>
							`.trim();

							const [copyBtn, renderBtn] = editTab.querySelectorAll('button');
							const renderContent = targetCard.querySelector('.lfe-marked');

							// 复制功能
							copyBtn.addEventListener('click', function () {
								GM_setClipboard(it);
								Swal.fire({
									title: "Amazing Luogu",
									text: "用户信息已复制到剪贴板",
									icon: "success",
									topLayer: true
								});
							});

							// 渲染切换
							renderBtn.onclick = function () {
								const isHtml = renderBtn.innerHTML.includes('HTML');
								if (isHtml) {
									Swal.fire({
										title: "渲染为 HTML",
										html: "确定要将个人介绍渲染为 HTML 吗？请小心鉴别内容，避免 XSS 攻击。",
										icon: "warning",
										showCancelButton: true,
										confirmButtonText: "确定",
										cancelButtonText: "取消"
									}).then((result) => {
										if (result.isConfirmed) {
											renderContent.innerHTML = it;
											renderBtn.innerHTML = '渲染为 Markdown';
										}
									});
								} else {
									Swal.fire({
										title: "渲染为 Markdown",
										html: "确定要将个人介绍渲染为 Markdown 吗（只支持标准 Markdown、Latex 格式，多余的空格等将导致渲染失败）？",
										icon: "warning",
										showCancelButton: true,
										confirmButtonText: "确定",
										cancelButtonText: "取消"
									}).then((result) => {
										if (result.isConfirmed) {
											renderContent.innerHTML = introduction;
											renderBtn.innerHTML = '渲染为 HTML';
											if (typeof katex !== 'undefined') {
												renderMathInElement(targetCard, {
													delimiters: [
														{ left: "$$", right: "$$", display: true },
														{ left: "$", right: "$", display: false },
													],
													throwOnError: false
												});
											}
										}
									});
								}
							};
						}
					}
				}
			}
			if (currentPath.match(/^\/user\/\d+(\/.*)?$/)) {
				try {
					const SUPABASE_URL = "https://ktwhwvafywwekfkvskbk.supabase.co";
					const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0d2h3dmFmeXd3ZWtma3Zza2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2OTU1NDgsImV4cCI6MjA4NDI3MTU0OH0.tSCRz7ENeCT3NXt891equmSBfW_UsXHUdKSVMoxveKQ";

					// 获取 uid
					const uid = Number(currentPath.split('/')[2]);

					// 拼接 Supabase 原生 REST API 地址
					const apiUrl = `${SUPABASE_URL}/rest/v1/user_status?uid=eq.${uid}&select=*`;
					// console.log(apiUrl,uid,SUPABASE_ANON_KEY);
					// GM_xmlhttpRequest 请求
					GM_xmlhttpRequest({
						method: "GET",
						url: apiUrl,
						headers: {
							"apikey": SUPABASE_ANON_KEY,
							"Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
							"Content-Type": "application/json"
						},
						onload: function (response) {
							try {
								const data = JSON.parse(response.responseText);
								console.log("查询成功：", data);
								const user = data[0];
								const { last_seen, format } = user;
								const time = new Date(last_seen);
								const context = JSON.parse(document.getElementById("lentille-context").innerHTML)
								const slogan = context.data.user.slogan || "这个家伙很懒，什么也没有留下"
								const newslogan = format.replace(
									"{time}",
									time.getFullYear().toString() +
									"年" +
									(time.getMonth() + 1).toString() +
									"月" +
									time.getDate().toString() +
									"日 " +
									time.getHours().toString() +
									"时" +
									time.getMinutes().toString() +
									"分",
								).replace("{slogan}", slogan);
								console.log(newslogan);
								try {
									if (document.getElementsByClassName("lfe-caption slogan")[0].childNodes[2].data)
										document.getElementsByClassName("lfe-caption slogan")[0].childNodes[2].data = newslogan;
								} catch (e) {
									console.error(e);
								}
								try {
									if (document.getElementsByClassName("lfe-caption slogan")[0].childNodes[1].data)
										document.getElementsByClassName("lfe-caption slogan")[0].childNodes[1].data = newslogan;
								} catch (e) {
									console.error(e);
								}
							} catch (e) {
								console.error("解析数据失败：", e);
							}
						},
						onerror: function (err) {
							console.error("请求失败：", err);
						}
					});
				} catch (e) {
					console.error("全局错误：", e);
				}
			}
			if (currentPath.startsWith("/user/mine")) {
				try {
					const SUPABASE_URL = "https://ktwhwvafywwekfkvskbk.supabase.co";
					const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0d2h3dmFmeXd3ZWtma3Zza2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2OTU1NDgsImV4cCI6MjA4NDI3MTU0OH0.tSCRz7ENeCT3NXt891equmSBfW_UsXHUdKSVMoxveKQ";

					// 获取 uid
					const uid = getCurrentUserId();

					// 拼接 Supabase 原生 REST API 地址
					const apiUrl = `${SUPABASE_URL}/rest/v1/user_status?uid=eq.${uid}&select=*`;
					console.log(apiUrl, uid, SUPABASE_ANON_KEY);
					// GM_xmlhttpRequest 请求
					GM_xmlhttpRequest({
						method: "GET",
						url: apiUrl,
						headers: {
							"apikey": SUPABASE_ANON_KEY,
							"Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
							"Content-Type": "application/json"
						},
						onload: function (response) {
							try {
								const data = JSON.parse(response.responseText);
								console.log("查询成功：", data);
								const user = data[0];
								const { last_seen, format } = user;
								const time = new Date(last_seen);
								const context = JSON.parse(document.getElementById("lentille-context").innerHTML)
								const slogan = context.data.user.slogan || "这个家伙很懒，什么也没有留下"
								const newslogan = format.replace(
									"{time}",
									time.getFullYear().toString() +
									"年" +
									(time.getMonth() + 1).toString() +
									"月" +
									time.getDate().toString() +
									"日 " +
									time.getHours().toString() +
									"时" +
									time.getMinutes().toString() +
									"分",
								).replace("{slogan}", slogan);
								document.getElementsByClassName("lfe-caption slogan")[0].innerHTML = newslogan;
							} catch (e) {
								console.error("解析数据失败：", e);
							}
						},
						onerror: function (err) {
							console.error("请求失败：", err);
						}
					});
				} catch (e) {
					console.error("全局错误：", e);
				}
			}
			if (
				currentAMLSettings.problemRandom &&
				currentPath.match(/^\/training\/\d+$/)
			) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(
					`<span data-v-1f03983a="" data-v-19949a64="" data-v-2dfcfd35=""><span data-v-1f03983a=""><button data-v-cc52fb5c="" data-v-19949a64="" type="button" class="aml-training button-in-anchor lfe-form-sz-middle" data-v-1f03983a="" style="border-color: rgba(255, 255, 255, 0.5); color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0.5);">
        随机跳题
      </button></span> </span>`,
					"text/html"
				).body.firstElementChild;
				let trainingId = location.pathname.replace("/training/", "");
				doc.onclick = async function () {
					Swal.fire({
						title: "正在跳题",
						text: "请稍候",
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading();
						},
					});
					const res = await fetch("/training/" + trainingId + "#problems", {
						headers: [["x-lentille-request", "content-only"], ["x-luogu-type", "content-only"]],
					});
					const json = await res.json();
					const problems = json.currentData.training.problems;
					const problem = problems[Math.floor(Math.random() * problems.length)];
					location.replace("https://www.luogu.com.cn/problem/" + problem.problem.pid);
				}
				if (document.getElementsByClassName("operation")[0]) {
					document.getElementsByClassName("operation")[0].appendChild(doc);
				}
			}
			if (
				currentAMLSettings.problemRandom &&
				currentPath.startsWith("/problem/list")
			) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(
					`<button class="aml-problem-random-button solid lform-size-middle aml-random-problem-btn" style="background-color: rgba(var(--l-button--real-color), 1);color: #fff;scroll-margin-top: 3.5rem;--l-button--real-color: var(--lcolor-rgb, var(--lcolor--primary, var(--lcolor--primary)));    display: inline-block;outline: none;cursor: pointer;font-weight: inherit;line-height: 1.5;text-align: center;vertical-align: middle;border-radius: 3px;border: 1px solid rgb(var(--l-button--real-color));background: rgba(var(--l-button--real-color), 0) none;color: rgb(var(--l-button--real-color));" type="button">随机跳题<!----></button>`,
					"text/html",
				).body.firstElementChild;
				doc.onclick = async function () {
					Swal.fire({
						title: "正在跳题",
						text: "请稍候",
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading();
						},
					});
					const type = {
						全部: "all",
						洛谷: "luogu",
						所有: "all",
						主题库: "P",
						入门与面试: "B",
						Codeforces: "CF",
						SPOJ: "SP",
						AtCoder: "AT",
						UVa: "UVA",
					};
					const dif = {
						暂无评定: 0,
						入门: 1,
						"普及−": 2,
						"普及/提高−": 3,
						"普及+/提高": 4,
						"提高+/省选−": 5,
						"省选/NOI−": 6,
						"NOI/NOI+/CTSC": 7,
					};
					const tags_response = await fetch(
						"https://www.luogu.com.cn/_lfe/tags/zh-CN",
					);
					const tags_json = await tags_response.json();
					const tags_list = tags_json.tags;
					let tags = {};
					for (const tag of tags_list) {
						tags[tag["name"]] = tag["id"];
					}
					const type_now =
						type[
						document
							.getElementsByClassName("block-item category")[0]
							.getElementsByClassName("selected")[0].textContent
						];
					const tags_now_ = document.getElementsByClassName(
						"toggle-tag selected",
					);
					let tags_now = [];
					let dif_now = -1;
					for (const tag_now_ of tags_now_) {
						if (tags[tag_now_.textContent.trim()]) {
							tags_now.push(tags[tag_now_.textContent.trim()]);
						} else {
							dif_now = dif[tag_now_.textContent.trim()];
						}
					}
					tags_now = [...new Set(tags_now)];
					const keyword_now = document
						.querySelectorAll('[placeholder="算法、标题或题目编号"]')[0]
						.value.trim();
					const content_now = document.getElementById("LCheck-1").checked;
					let url_now = "https://www.luogu.com.cn/problem/list?";
					url_now += "type=" + type_now;
					if (dif_now != -1) {
						url_now += "&difficulty=" + dif_now.toString();
					}
					if (tags_now.length != 0) {
						url_now += "&tag=" + tags_now.join(",");
					}
					if (keyword_now != "") {
						url_now += "&keyword=" + keyword_now;
					}
					if (content_now) {
						url_now += "&content=true";
					}
					const res = await fetch(url_now, {
						headers: [["x-lentille-request", "content-only"]],
					});
					const json = await res.json();
					const pages = Math.ceil(
						json.data.problems.count / json.data.problems.perPage,
					);
					const page = Math.floor(Math.random() * pages) + 1;
					let problems = [];
					const res_page = await fetch(url_now + "&page=" + page.toString(), {
						headers: [["x-lentille-request", "content-only"]],
					});
					const json_page = await res_page.json();
					for (const problem of json_page.data.problems.result) {
						problems.push(problem["pid"]);
					}
					if (problems.length == 0) {
						Swal.fire({
							title: "错误",
							text: "未找到符合条件的题目",
							icon: "error",
							confirmButtonText: "确定",
						});
						return;
					}
					location.replace(
						"https://www.luogu.com.cn/problem/" +
						problems[Math.floor(Math.random() * problems.length)],
					);
				};
				const spaceNode = parser.parseFromString(
					'<l class="aml-space">&nbsp;</l>',
					"text/html",
				).body.firstElementChild;
				document
					.getElementsByClassName("solid lform-size-middle")[0]
					.parentNode.insertBefore(
						doc,
						document.getElementsByClassName("solid lform-size-middle")[0]
							.nextElementSibling,
					);
				document
					.getElementsByClassName("solid lform-size-middle")[0]
					.parentNode.insertBefore(spaceNode, doc);
			}
			if (currentAMLSettings.chatMarkdown && currentPath.startsWith("/chat")) {
				GM_addStyle(`
			/* Markdown + Katex 渲染承接容器 */
			.aml-luogu-md-rendered {
				font-family: LXGW WenKai Screen;
				word-wrap: break-word;
				white-space: normal;
			}
			.aml-luogu-md-rendered img {
				max-width: 100%;
				height: auto;
				border-radius: 4px;
				margin: 5px 0;
				cursor: zoom-in;
			}
			.aml-luogu-md-rendered p {
				margin: 0;
			}
			.aml-luogu-md-rendered pre {
				border-radius: 4px;
				padding: 12px;
				overflow: auto;
				margin: 10px 0;
			}
			.aml-luogu-md-rendered code:not(.katex-mathml code) {
				font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
				border-radius: 3px;
				padding: 0.2em 0.4em;
				font-size: 0.9em;
			}
			.aml-luogu-md-rendered blockquote {
				padding: 0 1em;
				margin: 0.8em 0;
				border-left: 5px solid #ccc;
				color: #7e7e7e;
			}
			.message-block > .message[data-v-5c0627c6] {
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
				background-color: #fff !important;
				font-family: LXGW WenKai Screen !important;
			}
			/* Katex 样式 */
			.katex-display {
				overflow-x: auto;
				overflow-y: auto;
			}
		`);
				marked.setOptions({
					gfm: true,
					smartypants: true,
				});
				function rrenderMarkdown(element) {
					if (element.classList.contains("lfe-caption")) return;
					const rawMarkdown = element.textContent.trim();
					if (!rawMarkdown) return;
					if (element.classList.contains("md-processed")) return;
					element.classList.add("md-processed");
					element.textContent = "";
					const container = document.createElement("div");
					container.className = "aml-luogu-md-rendered";
					try {
						const html = renderMarkdown(rawMarkdown);
						container.innerHTML = DOMPurify.sanitize(html);
						setTimeout(() => {
							addCopyButtons(container);
						}, 500);
						container.querySelectorAll("img").forEach((img) => {
							img.addEventListener("click", () => {
								window.open(img.src, "_blank");
							});
							img.onerror = function () {
								this.style.display = "none";
								const errorSpan = document.createElement("span");
								errorSpan.textContent =
									"[Amazing Luogu] [Message Rendering] 图片加载失败：" +
									(this.alt || "无描述");
								errorSpan.style.color = "#999";
								this.parentNode.insertBefore(errorSpan, this);
							};
						});
						element.appendChild(container);
						container.addEventListener("dblclick", () => {
							const input = document.querySelector(".editor textarea");
							if (input) {
								input.value += rawMarkdown;
								input.focus();
							}
						});
					} catch (error) {
						Swal.fire({
							title: "错误",
							text: "渲染错误",
							icon: "error",
							confirmButtonText: "确定",
						});
						element.textContent = rawMarkdown;
						element.classList.remove("md-processed");
					}
				}
				function processNewMessages() {
					document
						.querySelectorAll(".message:not(.md-processed):not(.lfe-caption)")
						.forEach(rrenderMarkdown);
				}
				function startMessageObserver() {
					let observerInterval = setInterval(() => {
						processNewMessages();
					}, 500);
					document.addEventListener("visibilitychange", () => {
						if (document.hidden) {
							if (observerInterval) {
								clearInterval(observerInterval);
							}
						} else {
							observerInterval = setInterval(() => processNewMessages(), 500);
							processNewMessages();
						}
					});
					processNewMessages();
				}
				function waitForLibraries() {
					if (
						typeof marked !== "undefined" &&
						typeof DOMPurify !== "undefined" &&
						typeof katex !== "undefined" &&
						typeof renderMathInElement !== "undefined"
					) {
						startMessageObserver();
					} else {
						setTimeout(waitForLibraries, 100);
					}
				}
				waitForLibraries();
			}
			if (currentAMLSettings.problemColors) {
				async function color() {
					let lastUpdate = GM_getValue("AMLG_PROBLEM_COLORS_LAST_UPDATE", 0);
					console.log("lastUpdate:", lastUpdate);
					if (Date.now() - lastUpdate > 31 * 24 * 60 * 60 * 1000) {
						console.log("需要更新问题颜色");
						GM_xmlhttpRequest({
							method: "GET",
							url: "https://problems.amlg.top/api/all",
							timeout: 200000,
							onload: function (response) {
								console.log("✅ 请求成功");
								console.log("状态码：", response.status);
								console.log("返回数据：", response.responseText);

								// 如果返回的是JSON数据，可以直接解析
								try {
									const data = JSON.parse(response.responseText);
									if (Array.isArray(data)) {
										GM_setValue("AMLG_PROBLEM_COLORS", data);
										GM_setValue("AMLG_PROBLEM_COLORS_LAST_UPDATE", Date.now());
									}
									console.log("解析后的JSON数据：", data);
								} catch (e) {
									console.log("数据不是标准JSON格式", e);
								}
							},
							onerror: function (error) {
								console.error("❌ 请求失败：", error);
							},
							ontimeout: function () {
								console.error("⏱️ 请求超时");
							}
						});
					}
				}
				color();
			}
			if (currentAMLSettings.problemColors) {
				console.log(Date.now(), "Starting to set up problem color map...");
				const problemColorMap = new Map(
					GM_getValue('AMLG_PROBLEM_COLORS', []).map(p =>
						[p.id, `rgb(${difficultyColors[Number(p.difficulty)]?.join(',')})`]
					).filter(Boolean)
				);
				console.log(Date.now(), "Problem color map set up.");
				let lgbot2Visited = false;
				let lgbot2Fetching = false;
				async function getProblemColor(problemPid, isPriority = false) {
					if (
						window.location.href.startsWith(
							"https://www.luogu.com.cn/record/list",
						)
					) {
						const records = _feInstance.currentData.records.result;
						if (!records.lgbot1Visited) {
							for (const record of records) {
								problemColorMap.set(
									record.problem.pid,
									`rgb(${difficultyColors[record.problem.difficulty].join(",")})`,
								);
							}
							records.lgbot1Visited = true;
						}
					}
					if (
						!lgbot2Visited &&
						/^https:\/\/www\.luogu\.com\.cn\/user\/\d+\/practice$/.test(
							window.location.href,
						)
					) {
						if (!lgbot2Fetching) {
							lgbot2Fetching = true;
							let jjssoonn = JSON.parse(document.getElementById('lentille-context').innerHTML);
							let submitted = jjssoonn.data.submitted;
							for (const p of submitted) {
								problemColorMap.set(
									p.pid,
									`rgb(${difficultyColors[p.difficulty].join(",")})`,
								);
							}
							let passed = jjssoonn.data.passed;
							for (const p of passed) {
								problemColorMap.set(
									p.pid,
									`rgb(${difficultyColors[p.difficulty].join(",")})`,
								);
							}
						} else {
							while (lgbot2Fetching) {
								await new Promise((resolve) => setTimeout(resolve, 500));
							}
						}
						lgbot2Fetching = false;
						lgbot2Visited = true;
					}
					if (problemColorMap.has(problemPid)) {
						return problemColorMap.get(problemPid);
					}
					// const url = `/problem/${problemPid}`;
					// let htmlText;
					// try {
					// 	htmlText = await fetchQueue.push(url, isPriority);
					// } catch (error) {
					// 	return;
					// }
					// const parser = new DOMParser();
					// const doc = parser.parseFromString(htmlText, "text/html");
					// let scriptText = "";
					// for (const script of doc.querySelectorAll("script")) {
					// 	scriptText += script.textContent;
					// }
					// const difficultyMatch = scriptText.match(/"difficulty":(\d)/);
					// if (!difficultyMatch) return;
					// const difficulty = Number(difficultyMatch[1]);
					// const color = `rgb(${difficultyColors[difficulty].join(",")})`;
					// problemColorMap.set(problemPid, color);
					return "rgb(null)";
				}
				function isValidProblemPid(pid) {
					if (pid.startsWith("T")) return false;
					if (pid.startsWith("U")) return false;
					if (pid.startsWith("AT_")) return true;
					if (!/[a-zA-Z]/.test(pid)) return false;
					if (!/[0-9]/.test(pid)) return false;
					return true;
				}
				async function colorizeProblemLink(linkElement) {
					let pid = linkElement.href.split("/").pop();
					let isPriority = false;
					if (pid.includes("?forum=")) {
						pid = pid.split("=").pop();
						isPriority = true;
					}
					pid = pid.split("?")[0];
					pid = pid.split("=").pop();
					if (linkElement.matches("a[data-v-bade3303][data-v-4842157a]")) {
						if (pid === "javascript:void 0") {
							pid = linkElement.innerText.split(" ")[0];
						}
					}
					if (!isValidProblemPid(pid)) return;
					if (linkElement.innerText.startsWith(pid)) {
						const firstChild = linkElement.children[0];
						if (
							firstChild &&
							firstChild.matches("span.pid") &&
							firstChild.innerText === pid
						) {
							const color = await getProblemColor(pid, isPriority);
							firstChild.style.color = color;
							firstChild.style.fontWeight = "bold";
						} else {
							const color = await getProblemColor(pid, isPriority);
							const innerHTML = linkElement.innerHTML;
							linkElement.innerHTML = innerHTML.replace(
								pid,
								`<b style="color: ${color};">${pid}</b>`,
							);
						}
					}
				}
				async function startColorizing() {
					const observer = new MutationObserver(async (mutations) => {
						for (const mutation of mutations) {
							if (mutation.type === "childList") {
								for (const node of mutation.addedNodes) {
									if (node.nodeType === Node.ELEMENT_NODE) {
										const links = node.querySelectorAll("a[href]");
										if (node.matches("a[href]")) {
											colorizeProblemLink(node);
										}
										for (const link of links) {
											colorizeProblemLink(link);
										}
									}
								}
							} else if (mutation.type === "characterData") {
								if (mutation.target.parentElement.matches("span.pid")) {
									const pid = mutation.target.textContent;
									mutation.target.parentElement.style.color =
										await getProblemColor(pid);
									mutation.target.parentElement.style.fontWeight = "bold";
								}
							}
						}
					});
					observer.observe(document, {
						childList: true,
						subtree: true,
						characterData: true,
					});
					const allLinks = document.querySelectorAll("a[href]");
					for (const link of allLinks) {
						colorizeProblemLink(link);
					}
				}
				setTimeout(startColorizing, 1500);
			}
			if (currentAMLSettings.problemJumper) {
				function cleanPidForAT(pid) {
					while (true) {
						const original = pid;
						pid = pid.replace(/[ #【】\[\]（）\t\.。\r\n]/g, "");
						pid = pid.replace(/\-/g, "_");
						if (original === pid) break;
					}
					return pid;
				}
				function cleanPidForNormal(pid) {
					while (true) {
						const original = pid;
						pid = pid.replace(/[ 【】\[\]（）_\-#\t\.。\r\n]/g, "");
						if (original === pid) break;
					}
					return pid;
				}
				function isAllDigits(str) {
					for (let char of str) {
						const code = char.codePointAt(0);
						if (code < 0x30 || code > 0x39) {
							return false;
						}
					}
					return true;
				}
				function jumpToProblem(rawProblemName) {
					let problemName = rawProblemName;
					let isFound = false;
					let processedPid;
					problemName = problemName.toUpperCase();
					problemName = cleanPidForAT(problemName);
					if (problemName.startsWith("AT_") && problemName.includes("_")) {
						const lastUnderscoreIndex = problemName.lastIndexOf("_");
						if (lastUnderscoreIndex > 3) {
							const contestPart = problemName.substring(3, lastUnderscoreIndex);
							const taskPart = problemName.substring(lastUnderscoreIndex + 1);
							if (
								isAllDigits(contestPart.replace(/[a-zA-Z_]/g, "")) &&
								taskPart.length > 0 &&
								taskPart.length <= 2
							) {
								const finalPid = "AT_" + contestPart + "_" + taskPart;
								window.open("https://www.luogu.com.cn/problem/" + finalPid);
								return;
							}
							if (
								isAllDigits(contestPart.replace(/[a-zA-Z_]/g, "")) &&
								taskPart.length > 2 &&
								taskPart.length <= 10 &&
								/^[a-zA-Z]+$/.test(taskPart)
							) {
								const finalPid = "AT_" + contestPart + "_" + taskPart;
								window.open("https://www.luogu.com.cn/problem/" + finalPid);
								return;
							}
						}
					}
					const atContestMatch = problemName.match(/^AT(\d+)CONTEST_([A-Z])$/);
					if (atContestMatch) {
						const contestId = atContestMatch[1];
						const taskId = atContestMatch[2];
						window.open(
							"https://www.luogu.com.cn/problem/AT" +
							contestId +
							"Contest_" +
							taskId,
						);
						return;
					}
					const cfMatch = problemName.match(/^CF(\d+)([A-Z][0-9]?)$/);
					if (cfMatch) {
						const contestId = cfMatch[1];
						const taskId = cfMatch[2];
						window.open(
							"https://www.luogu.com.cn/problem/CF" + contestId + taskId,
						);
						return;
					}
					problemName = cleanPidForNormal(problemName);
					const prefixMap = { P: "P", T: "T", U: "U", B: "B" };
					for (const [prefix, fullPrefix] of Object.entries(prefixMap)) {
						if (problemName.startsWith(prefix)) {
							processedPid = problemName.substr(prefix.length);
							if (isAllDigits(processedPid) && processedPid.length >= 1) {
								isFound = true;
								const finalPid = fullPrefix + processedPid;
								window.open("https://www.luogu.com.cn/problem/" + finalPid);
								return;
							}
						}
					}
					if (
						isAllDigits(problemName) &&
						problemName.length >= 4 &&
						problemName.length <= 5
					) {
						const finalPid = "P" + problemName;
						window.open("https://www.luogu.com.cn/problem/" + finalPid);
						return;
					}
					if (!isFound) {
					}
				}
				function getSelectedText() {
					const activeElement = document.activeElement;
					let selectedText = "";
					if (!activeElement) return "";
					if (
						activeElement.tagName === "INPUT" ||
						activeElement.tagName === "TEXTAREA"
					) {
						selectedText = activeElement.value.substring(
							activeElement.selectionStart,
							activeElement.selectionEnd,
						);
					} else {
						selectedText = window.getSelection().toString();
					}
					return selectedText.trim();
				}
				function handleJumpRequest() {
					const selectedText = getSelectedText();
					if (selectedText === "" || selectedText === null) return;
					jumpToProblem(selectedText);
				}
				document.addEventListener("dblclick", function (event) {
					if (window.location.hostname === "www.luogu.com.cn") {
						handleJumpRequest();
					}
				});
				document.addEventListener("keydown", function (event) {
					if (window.location.hostname !== "www.luogu.com.cn") return;
					if (event.code === "KeyJ" && event.ctrlKey && event.shiftKey) {
						handleJumpRequest();
					} else if (
						event.code === "KeyJ" &&
						event.ctrlKey &&
						event.shiftKey &&
						event.altKey
					) {
						handleJumpRequest();
					} else if (event.code === "KeyG" && event.ctrlKey && event.shiftKey) {
						handleJumpRequest();
					} else if (event.code === "KeyM" && event.ctrlKey && event.shiftKey) {
						handleJumpRequest();
					} else if (event.code === "KeyV" && event.ctrlKey && event.shiftKey) {
						handleJumpRequest();
					} else if (event.code === "KeyL" && event.ctrlKey && event.shiftKey) {
						handleJumpRequest();
					}
				});
			}
			if (currentAMLSettings.saveStationJumper) {
				if (window.location.hostname === "www.luogu.com") {
					if (
						window.location.pathname.startsWith("/article/") ||
						window.location.pathname.startsWith("/paste/")
					) {
						let newUrl = `https://luogu.amlg.top${window.location.pathname}`;
						if (currentAMLSettings.useLuoguMe) {
							newUrl = `https://www.luogu.me${window.location.pathname}`;
						}
						window.location.replace(newUrl);
						return;
					}
				}
				setTimeout(function () {
					if (
						window.location.hostname === "www.luogu.com.cn" &&
						(window.location.pathname.startsWith("/article/") ||
							window.location.pathname.startsWith("/paste/"))
					) {
						const warningTitle = document.querySelector(
							"body > div:nth-child(2) > div > h3",
						);
						if (document.title == "安全访问中心 - 洛谷") {
							const urlElement = document.querySelector("#url");
							if (urlElement) {
								if (currentAMLSettings.useLuoguMe) {
									urlElement.textContent = urlElement.textContent
										.replace("luogu.com", "luogu.me")
										.replace("luogu.com.cn", "luogu.me");
								} else {
									urlElement.textContent = urlElement.textContent
										.replace("www.luogu.com", "luogu.amlg.top")
										.replace("www.luogu.com.cn", "luogu.amlg.top");
								}
							}
							const continueLink = document.querySelector(
								"body > div:nth-child(2) > div > p:nth-child(5) > a",
							);
							if (continueLink) {
								if (currentAMLSettings.useLuoguMe) {
									continueLink.href = continueLink.href
										.replace("luogu.com", "luogu.me")
										.replace("luogu.com.cn", "luogu.me");
								} else {
									continueLink.href = continueLink.href
										.replace("www.luogu.com", "luogu.amlg.top")
										.replace("www.luogu.com.cn", "luogu.amlg.top");
								}
							}
						}
						return;
					}
				}, 500);
			}
			if (currentAMLSettings.autoCheckIn && window.location.pathname === "/") {
				function performCheckIn() {
					const punchButtons = document.getElementsByName("punch");
					if (punchButtons && punchButtons.length > 0) {
						const button = punchButtons[0];
						if (!button.disabled) {
							button.click();
							if (
								"Notification" in window &&
								Notification.permission === "granted"
							) {
								new Notification("洛谷自动签到", { body: "签到成功！" });
							} else if (
								"Notification" in window &&
								Notification.permission !== "denied"
							) {
								Notification.requestPermission().then((permission) => {
									if (permission === "granted") {
										new Notification("洛谷自动签到", { body: "签到成功！" });
									}
								});
							}
						}
					}
				}
				setTimeout(performCheckIn, 1000);
			}
			if (currentAMLSettings.memoEnabled && window.location.pathname === "/") {
				GM_addStyle(`
					.aml-memo-content pre {
						padding: 0;
						margin: 0;
						border: none;
						border-radius: 0;
					}
					.aml-memo-content pre code {
						font-size: 1em !important;
						font-weight: normal !important;
					}
					.aml-memo-content {
						font-family: LXGW Wenkai Screen;
					}
					.aml-memo-content .codecopy-btn {
						top: 10px !important;
					}
				`);
				function renderMemoContent(content) {
					if (typeof content !== "string" || content === "") return "";
					const container = document.createElement("div");
					container.className = "aml-memo-content";
					try {
						const html = renderMarkdown(content);
						container.innerHTML = DOMPurify.sanitize(html);
						setTimeout(() => {
							addCopyButtons(container);
						}, 500);
					} catch (error) {
						Swal.fire({
							title: "错误",
							text: "渲染错误，",
							icon: "error",
							confirmButtonText: "确定",
						});
						container.innerHTML = content;
					}
					return container;
				}
				function createMemoElement() {
					if (!currentAMLSettings.memoEnabled) return;
					const memoDiv = document.createElement("div");
					memoDiv.id = "aml-memo-container";
					memoDiv.className = "lg-article";
					const renderedContent = renderMemoContent(
						currentAMLSettings.memoContent,
					);
					memoDiv.appendChild(renderedContent);
					let targetDiv = document.querySelector(
						"div.lg-index-benben > div:nth-child(2)",
					);
					if (targetDiv) {
						targetDiv.insertAdjacentElement("afterend", memoDiv);
					}
				}
				if (document.readyState === "loading") {
					document.addEventListener("DOMContentLoaded", createMemoElement);
				} else {
					setTimeout(createMemoElement, 100);
				}
			}
			if (currentAMLSettings.buttonUnlocker) {
				const config = {
					buttonSelector: "button.swal2-confirm.swal2-styled[disabled]",
					textRegex: /报名 \(\d+s\)/,
					unlockedText: "报名",
					processedMark: "data-luogu-unlocker-processed",
				};
				const protectButton = (button) => {
					button.disabled = false;
					button.innerText = config.unlockedText;
					const protector = new MutationObserver(() => {
						protector.disconnect();
						button.disabled = false;
						button.innerText = config.unlockedText;
						observe();
					});
					const observe = () => {
						protector.observe(button, {
							attributes: true,
							childList: true,
							characterData: true,
							subtree: true,
						});
					};
					observe();
					const parent = button.parentNode;
					if (parent) {
						const removalObserver = new MutationObserver((mutations) => {
							mutations.forEach((mutation) => {
								mutation.removedNodes.forEach((removedNode) => {
									if (removedNode === button) {
										protector.disconnect();
										removalObserver.disconnect();
									}
								});
							});
						});
						removalObserver.observe(parent, { childList: true });
					}
				};
				const bodyObserver = new MutationObserver(() => {
					const button = document.querySelector(config.buttonSelector);
					if (
						button &&
						config.textRegex.test(button.innerText) &&
						!button.hasAttribute(config.processedMark)
					) {
						button.setAttribute(config.processedMark, "true");
						protectButton(button);
					}
				});
				bodyObserver.observe(document.body, {
					childList: true,
					subtree: true,
				});
			}
			if (currentAMLSettings.userSearchEnabled &&
				window.location.pathname === "/") {
				(function () {
					var tar = document.getElementsByClassName("lg-index-content")[0].getElementsByClassName("lg-article lg-index-stat")[0].parentNode;
					var ele = "<div class='am-u-md-3'><div class='lg-article lg-index-stat'><h2>用户搜索</h2><div class='am-input-group am-input-group-primary am-input-group-sm'><input type='text' class='am-form-field' placeholder='输入要搜索的用户名或用户 UID' id='usernamesearchbox'></div><p><button class='am-btn am-btn-danger am-btn-sm' id='usernamesearch'>进入用户主页</button></p></div></div>";
					unsafeWindow.$(tar).after(ele);
					document.getElementsByClassName("lg-index-content")[0].getElementsByClassName("am-u-md-9")[0].setAttribute("class", "am-u-md-6");
					function searchname() {
						var username = document.getElementById("usernamesearchbox").value;
						unsafeWindow.$.get("https://www.luogu.com.cn/api/user/search?keyword=" + username,
							function (data) {
								var arr = eval(data);
								if (arr["users"][0] == null) {
									show_alert("提示", "找不到用户");
									return;
								}
								var tarid = arr["users"][0].uid;
								location.href = "https://www.luogu.com.cn/user/" + tarid;
							}
						);
					}
					document.getElementById("usernamesearch").onclick = function () {
						searchname();
					};
					unsafeWindow.$(document.getElementById("usernamesearchbox")).keydown(function (e) {
						if (e.keyCode == 13) {
							searchname();
						}
					});
					try {
						unsafeWindow.$('#container').highcharts().reflow();
						unsafeWindow.$('#container2').highcharts().reflow();
					} catch (e) {
						console.error("Highcharts reflow error:", e);
					}
				})();
			}
			if (
				currentAMLSettings.problemJumpStyling &&
				window.location.pathname === "/"
			) {
				const applyJumpStyling = () => {
					const inputGroup = document.querySelector(".am-input-group");
					const jumpBtn = document.getElementsByName("goto")[0];
					const inputField = document.getElementsByClassName("am-form-field")[0];
					if (inputGroup && jumpBtn && inputField) {
						inputGroup.appendChild(jumpBtn);
						inputGroup.style.whiteSpace = "nowrap";
						inputField.style.width = "82.7565%";
						jumpBtn.innerHTML =
							'<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-magnifying-glass"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" class=""></path></svg>';
						jumpBtn.style.marginLeft = "6px";
						jumpBtn.style.padding = "8px 10px";
					} else {
						setTimeout(applyJumpStyling, 500);
					}
				};
				if (document.readyState === "loading") {
					document.addEventListener("DOMContentLoaded", applyJumpStyling);
				} else {
					setTimeout(applyJumpStyling, 500);
				}
			}
			if (
				currentAMLSettings.autoExpandBenben &&
				window.location.pathname === "/"
			) {
				const blockedUids = currentAMLSettings.benbenBlockedUids;
				const filterBenben = (uid) => {
					const links = document.querySelectorAll(
						`#feed a[href="/user/${uid}"]:not(.center)`,
					);
					links.forEach((link) => {
						let parentElement = link;
						for (let i = 0; i < 5; i++) {
							if (parentElement.parentElement) {
								parentElement = parentElement.parentElement;
							} else {
								return;
							}
						}
						if (
							parentElement &&
							parentElement.tagName &&
							parentElement.tagName.toLowerCase() !== "body"
						) {
							parentElement.remove();
						}
					});
				};
				let isCooldown = false;
				let noMoreContent = false;
				const clickExpand = () => {
					if (
						noMoreContent ||
						isCooldown
					) {
						return;
					}
					const endMarkers = document.querySelectorAll(".lg-article");
					let foundEnd = false;
					for (let el of endMarkers) {
						const h2 = el.querySelector("h2");
						if (h2 && h2.innerText.trim() === "没有更多动态了") {
							foundEnd = true;
							h2.innerText = "动态到底啦！";
							h2.style.color = "#6366f1";
							h2.style.textAlign = "center";
							break;
						}
					}
					if (foundEnd) {
						noMoreContent = true;
						return;
					}
					const expandButton = document.querySelector(
						"div.lg-article.am-text-center > a",
					);
					if (expandButton) {
						const rect = expandButton.getBoundingClientRect();
						const isVisible =
							rect.top >= 0 &&
							rect.left >= 0 &&
							rect.bottom <=
							(window.innerHeight || document.documentElement.clientHeight) &&
							rect.right <=
							(window.innerWidth || document.documentElement.clientWidth);
						if (isVisible) {
							expandButton.click();
							isCooldown = true;
							setTimeout(() => {
								isCooldown = false;
							}, 1000);
						}
					}
				};
				blockedUids.forEach((uid) => {
					setInterval(() => {
						if (currentAMLSettings.autoExpandBenben) {
							filterBenben(uid);
						}
					}, 20);
				});
				setTimeout(() => {
					setInterval(() => {
						if (currentAMLSettings.autoExpandBenben) {
							clickExpand();
						}
					}, 200);
				}, 500);
			}
			function escapeHtml(unsafe) {
				if (typeof unsafe !== "string") {
					return String(unsafe || "");
				}
				return unsafe
					.replace(/&/g, "&amp;")
					.replace(/</g, "<")
					.replace(/>/g, ">")
					.replace(/"/g, "&quot;")
					.replace(/'/g, "&#039;");
			}
			if (
				window.location.pathname.includes("/problem/") &&
				window.location.hash === "#ide" &&
				currentAMLSettings.defaultCodeEnabled
			) {
				const checkAndFillEditor = () => {
					const editorElement = document.querySelector(".cm-content");
					if (
						editorElement &&
						editorElement.innerHTML.trim() ===
						'<div class="cm-activeLine cm-line"><br></div>'
					) {
						const defaultCode = GM_getValue("amlDefaultCodeContent", "");
						if (defaultCode) {
							const tempDiv = document.createElement("div");
							tempDiv.textContent = defaultCode;
							const escapedHtmlString = tempDiv.innerHTML;
							const escapedCode = defaultCode
								.replace(/&/g, "&amp;")
								.replace(/</g, "&lt;")
								.replace(/>/g, "&gt;")
								.replace(/\n/g, "<br>");
							editorElement.innerHTML = escapedCode;
						}
					}
				};
				const intervalId = setInterval(() => {
					if (document.querySelector(".cm-content")) {
						checkAndFillEditor();
						clearInterval(intervalId);
					}
				}, 500);
			}
			if (currentAMLSettings.chatNotificationEnabled) {
				function getCurrentUserId() {
					let login = document.querySelector("[href='/auth/login']");
					if (login) return null;
					let avatarImg = document.querySelector(
						"img.avatar[data-v-0a5f98b2]",
					);
					if (!avatarImg) {
						avatarImg = document.querySelector(
							".user-nav .avatar img[data-v-65720dbc]",
						);
					}
					if (avatarImg && avatarImg.src) {
						const match = avatarImg.src.match(
							/\/upload\/usericon\/(\d+)\.png/,
						);
						if (match) {
							return match[1];
						}
					}
					return null;
				}
				let userId = getCurrentUserId();
				if (userId && !chatWSRD) {
					chatWSRD = true;
					try {
						const ws = new WebSocket("wss://ws.luogu.com.cn/ws");
						ws.onopen = () => {
							ws.send(JSON.stringify({
								channel: "chat",
								channel_param: `${userId}`,
								type: "join_channel",
							}));
							console.log("[Chat] 已加入聊天频道");
						};
						ws.onmessage = (event) => {
							console.log("[Chat] 收到消息:", event);
							const data = JSON.parse(event.data);
							switch (data._ws_type) {
								case "server_broadcast": {
									const { message } = data;
									let latestMessage = message;
									let snippet =
										latestMessage.content.length > 15
											? latestMessage.content.substring(0, 15) + "..."
											: latestMessage.content;
									if (latestMessage.sender.uid != userId) {
										iziToast.show({
											title: `<svg class="icon-drafts-inline" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: text-bottom; fill: currentColor;"><use xlink:href="#icon-drafts"></use></svg> ${latestMessage.sender.name}`,
											message: `${snippet}`,
											position: "bottomRight",
											theme: "light",
											image: `https://cdn.luogu.com.cn/upload/usericon/${latestMessage.sender.uid}.png`,
											imageWidth: 54,
											balloon: true,
											messageEscape: false,
											progressBar: true,
											pauseOnHover: true,
											timeout: 10000,
											buttons: [
												[
													'<button style="margin: 0 2px; margin-top: 3px !important;">回复私信</button>',
													function (instance, toast) {
														window.open(
															`https://www.luogu.com.cn/chat?uid=${latestMessage.sender.uid}`,
														);
													},
													true,
												],
											],
											onClick: function () {
												window.open(
													`https://www.luogu.com.cn/chat?uid=${latestMessage.sender.uid}`,
												);
											},
										});
										break;
									}
								}
							}
						};
					} catch (e) {
						Swal.fire({
							title: "私信通知 WebSocket 已断开",
							text: "请检查网络连接并刷新页面",
							icon: "error",
						})
					}
				}
			}
			if (currentAMLSettings.emojiRenderingEnabled) {
				// ========== 新代码核心常量 & 工具函数 ==========
				var R = "color: #E67E22;";
				// 控制台日志工具
				function s(e, ...t) {
					console.log(`%c[lgse] ${e}`, R, ...t);
				}

				// 页面匹配规则（决定哪些区域需要渲染表情）
				var d = [
					[".am-comment-bd", [/^\/$/]],
					[".collapsed-wrapper", [/^\/discuss\/.*$/]],
					[".content", [/^\/user\/.*$/]],
					[".message", [/^\/chat.*$/]],
				];
				// 判断当前页面是否需要渲染表情
				function V() {
					for (let e = 0; e < d.length; e++)
						for (let t = 0; t < d[e][1].length; t++)
							if (d[e][1][t].test(document.location.pathname)) return !0;
					return !1;
				}
				// 获取需要渲染表情的DOM元素
				function U() {
					let e = [];
					for (let t = 0; t < d.length; t++)
						for (let n = 0; n < d[t][1].length; n++)
							d[t][1][n].test(document.location.pathname) &&
								(e[e.length] = document.querySelectorAll(d[t][0]));
					return e;
				}

				// ========== 新代码表情数据（核心） ==========
				// 表情ID-描述映射（新数据）
				var r = [
					["aini", "\u7231\u4F60"],
					["aiq", "\u7231\u60C5"],
					["am", "\u50B2\u6162"],
					["azgc", "\u6697\u4E2D\u89C2\u5BDF"],
					["baiy", "\u767D\u773C"],
					["bangbangt", "\u68D2\u68D2\u7CD6"],
					["banzz", "\u642C\u7816\u4E2D"],
					["baojin", "\u7206\u7B4B"],
					["bb", "\u4FBF\u4FBF"],
					["bkx", "\u4E0D\u5F00\u5FC3"],
					["bl", "\u98D9\u6CEA"],
					["bp", "\u97AD\u70AE"],
					["bq", "\u62B1\u62F3"],
					["bs", "\u9119\u89C6"],
					["bt", "\u62DC\u6258"],
					["bu", "\u4E0D"],
					["bx", "\u62DC\u8C22"],
					["bz", "\u95ED\u5634"],
					["cd", "\u83DC\u5200"],
					["cg", "\u5403\u74DC"],
					["ch", "\u64E6\u6C57"],
					["cha", "\u8336"],
					["chi", "\u5403"],
					["cj", "\u5DEE\u52B2"],
					["cp", "\u949E\u7968"],
					["cs", "\u6CA7\u6851"],
					["cy", "\u5472\u7259"],
					["dan", "\u86CB"],
					["dao", "\u5200"],
					["dax", "\u5927\u7B11"],
					["db", "\u60A0\u95F2"],
					["dg", "\u86CB\u7CD5"],
					["dk", "\u5927\u54ED"],
					["dl", "\u706F\u7B3C"],
					["doge", "\u72D7\u5934"],
					["dx", "\u51CB\u8C22"],
					["dy", "\u5F97\u610F"],
					["dz", "\u70B9\u8D5E"],
					["ee", "\u5443"],
					["emm", "\u55EF..."],
					["fad", "\u53D1\u6296"],
					["fan", "\u996D"],
					["fd", "\u53D1\u5446"],
					["fendou", "\u594B\u6597"],
					["fj", "\u98DE\u673A"],
					["fn", "\u6124\u6012"],
					["fw", "\u98DE\u543B"],
					["gg", "\u5C34\u5C2C"],
					["gun", "\u8BF7\uFF08\u6EDA\uFF09"],
					["gy", "\u52FE\u5F15"],
					["gz", "\u9F13\u638C"],
					["hanx", "\u61A8\u7B11"],
					["haob", "\u597D\u68D2"],
					["hb", "\u7EA2\u5305"],
					["hc", "\u82B1\u75F4"],
					["hd", "\u597D\u7684"],
					["hec", "\u559D\u5F69"],
					["hhd", "\u5475\u5475\u54D2"],
					["hn", "\u559D\u5976"],
					["hp", "\u5BB3\u6015"],
					["hq", "\u54C8\u6B20"],
					["hsh", "\u6325\u624B"],
					["ht", "\u56DE\u5934"],
					["huaix", "\u574F\u7B11"],
					["hx", "\u5BB3\u7F9E"],
					["jd", "\u6FC0\u52A8"],
					["jh", "\u83CA\u82B1"],
					["jiaybb", "\u52A0\u6CB9\u62B1\u62B1"],
					["jiaybs", "\u52A0\u6CB9\u5FC5\u80DC"],
					["jie", "\u9965\u997F"],
					["jk", "\u60CA\u6050"],
					["jw", "\u8857\u821E"],
					["jx", "\u60CA\u559C"],
					["jy", "\u60CA\u8BB6"],
					["ka", "\u53EF\u7231"],
					["kb", "\u62A0\u9F3B"],
					["kel", "\u53EF\u601C"],
					["kf", "\u5496\u5561"],
					["kg", "K\u6B4C"],
					["kk", "\u5FEB\u54ED\u4E86"],
					["kl", "\u9AB7\u9AC5"],
					["kt", "\u78D5\u5934"],
					["kuk", "\u9177"],
					["kun", "\u56F0"],
					["kzht", "\u53E3\u7F69\u62A4\u4F53"],
					["lb", "\u6CEA\u5954"],
					["lengh", "\u51B7\u6C57"],
					["lh", "\u6D41\u6C57"],
					["ll", "\u6D41\u6CEA"],
					["lm", "\u51B7\u6F20"],
					["lq", "\u7BEE\u7403"],
					["lw", "\u793C\u7269"],
					["lyj", "\u8FA3\u773C\u775B"],
					["mdfq", "\u5FD9\u5230\u98DE\u8D77"],
					["mg", "\u73AB\u7470"],
					["mjl", "\u6478\u9526\u9CA4"],
					["mm", "\u5356\u840C"],
					["mwbq", "\u9762\u65E0\u8868\u60C5"],
					["my", "\u6478\u9C7C"],
					["ng", "\u96BE\u8FC7"],
					["nkt", "\u8111\u58F3\u75BC"],
					["oh", "\u6004\u706B"],
					["oy", "\u5662\u54DF"],
					["pch", "\u74E2\u866B"],
					["pj", "\u5564\u9152"],
					["pp", "\u4E52\u4E53"],
					["px", "\u55B7\u8840"],
					["pz", "\u6487\u5634"],
					["qd", "\u7CD7\u5927\u4E86"],
					["qiang", "\u5F3A"],
					["qiao", "\u6572"],
					["qidao", "\u7948\u7977"],
					["qq", "\u4EB2\u4EB2"],
					["qt", "\u62F3\u5934"],
					["ruo", "\u8E29"],
					["sa", "\u793A\u7231"],
					["se", "\u8272"],
					["sh", "\u9001\u82B1"],
					["shd", "\u95EA\u7535"],
					["shl", "\u80DC\u5229"],
					["shq", "\u624B\u67AA"],
					["shuai", "\u8870"],
					["shui", "\u7761"],
					["shxi", "\u53CC\u559C"],
					["sr", "\u9A9A\u6270"],
					["tiao", "\u8DF3\u8DF3"],
					["tl", "\u6258\u8138"],
					["tnl", "\u592A\u96BE\u4E86"],
					["tp", "\u8C03\u76AE"],
					["ts", "\u6258\u816E"],
					["tsh", "\u8DF3\u7EF3"],
					["tt", "\u5934\u79C3"],
					["tuu", "\u5410"],
					["tx", "\u5077\u7B11"],
					["ty", "\u592A\u9633"],
					["wbk", "\u6211\u4E0D\u770B"],
					["whl", "\u95EE\u53F7\u8138"],
					["wl", "\u65E0\u804A"],
					["wn", "\u65E0\u5948"],
					["wosl", "\u6211\u9178\u4E86"],
					["wq", "\u59D4\u5C48"],
					["ws", "\u63E1\u624B"],
					["wul", "\u6342\u8138"],
					["wx", "\u5FAE\u7B11"],
					["wzm", "\u6211\u6700\u7F8E"],
					["xhx", "\u5C0F\u6CB3\u87F9"],
					["xia", "\u5413"],
					["xig", "\u897F\u74DC"],
					["xin", "\u7231\u5FC3"],
					["xjj", "\u5C0F\u7EA0\u7ED3"],
					["xk", "\u7B11\u54ED"],
					["xs", "\u5FC3\u788E"],
					["xu", "\u5618"],
					["xw", "\u732E\u543B"],
					["xy", "\u5C0F\u6837"],
					["xyx", "\u659C\u773C\u7B11"],
					["yao", "\u836F"],
					["yb", "\u62E5\u62B1"],
					["ybyb", "\u5143\u5B9D"],
					["yhh", "\u53F3\u54FC\u54FC"],
					["yiw", "\u7591\u95EE"],
					["yl", "\u6708\u4EAE"],
					["youl", "\u5E7D\u7075"],
					["youtj", "\u53F3\u592A\u6781"],
					["yt", "\u7F8A\u9A7C"],
					["yun", "\u6655"],
					["yx", "\u9634\u9669"],
					["zhd", "\u70B8\u5F39"],
					["zhem", "\u6298\u78E8"],
					["zhh", "\u5DE6\u54FC\u54FC"],
					["zhm", "\u5492\u9A82"],
					["zhq", "\u8F6C\u5708"],
					["zj", "\u518D\u89C1"],
					["zk", "\u6293\u72C2"],
					["zq", "\u8DB3\u7403"],
					["zt", "\u732A\u5934"],
					["zuotj", "\u5DE6\u592A\u6781"],
					["zyj", "\u7728\u773C\u775B"],
				];
				// 表情渲染正则模板
				var A = "/%EMOJI%([^<A-Za-z][^>]*<)",
					E =
						'<span style="color: #c8c8c8; font-size: 0.3em;">/%EMOJI%</span><img src="%SOURCE%" alt="%NAME%" title="%NAME%" class="lgse-emoji-image" width="28px" height="28px">$1';

				// ========== 新代码核心渲染逻辑 ==========
				// 递归渲染DOM中的表情
				function M(e) {
					if (e.nodeType === 1) {
						if (e.tagName === "A" || e.tagName === "CODE")
							return [!1, e.outerHTML];
						let t = e.childNodes,
							n = !1,
							c = "";
						for (let i = 0; i < t.length; i++) {
							let l = M(t[i]);
							((n = n || l[0]), (c += l[1]));
						}
						return (n && (e.innerHTML = c), [n, e.outerHTML]);
					}
					if (e.nodeType === 3) {
						let t = !1,
							n = `>${e.data} <`;
						for (let c = 0; c < r.length; c++) {
							let i = new RegExp(A.replace(/%EMOJI%/g, r[c][0]), "g"),
								l = E.replace(/%EMOJI%/g, r[c][0]).replace(/%NAME%/g, r[c][1]);
							for (; i.test(n);) ((n = n.replace(i, l)), (t = !0));
						}
						return [t, n.substring(1, n.length - 2)];
					}
					return [!1, ""];
				}
				// 批量渲染表情（替代旧的scanAndReplace）
				function q() {
					let e = U(),
						t = !1;
					for (let n = 0; n < e.length; n++)
						for (let c = 0; c < e[n].length; c++)
							if (e[n][c].lgse_replaced !== "true") {
								let i = M(e[n][c]);
								((t = t || i[0]), (e[n][c].lgse_replaced = "true"));
							}
					t && s("Replaced");
				}

				// ========== 旧代码面板相关常量（保留） ==========
				const SCAN_INTERVAL = 1000;
				const SEARCH_PANEL_ID = "qq-emoji-search-panel";
				const SEARCH_BUTTON_ID = "qq-emoji-search-toggle";
				let emojiList = []; // 基于新数据重构
				let searchPanelOpen = false;

				// ========== 新代码表情图片源配置 ==========
				var g = [
					"https://cdn.jsdelivr.net/gh/hyc1230/qqemoji/56x56/%EMOJI%.gif",
					"https://mirror.ghproxy.com/https://raw.githubusercontent.com/hyc1230/qqemoji/master/56x56/%EMOJI%.gif",
					"https://qqemoji.heyc.eu.org/56x56/%EMOJI%.gif",
					"https://qqemoji.netlify.app/56x56/%EMOJI%.gif",
				];
				// 默认设置
				var T = {
					"rep-emj": !0,
					"srh-emj": !0,
					"img-src": 2, // 默认使用第三个图片源
					"chk-upd": !0,
				};
				var m = ["rep-emj", "srh-emj", "img-src", "chk-upd"];
				var o = T; // 全局设置对象

				// ========== 适配旧面板的表情列表构建 ==========
				function buildEmojiList() {
					const list = [];
					// 基于新的r数组构建表情列表
					r.forEach(([id, describe]) => {
						list.push({
							id: id,
							describe: describe,
							isGif: true, // 新表情均为GIF
							isGif2: false,
							isSpecial: false,
							type: "Dynamic (Non-Numeric)",
						});
					});
					return list;
				}

				// ========== 旧代码面板相关函数（适配新数据） ==========
				function toggleSearchPanel() {
					const panel = document.getElementById(SEARCH_PANEL_ID);
					if (panel) {
						if (searchPanelOpen) {
							panel.style.display = "none";
							searchPanelOpen = false;
						} else {
							panel.style.display = "block";
							document.getElementById("qq-emoji-search-input").focus();
							searchPanelOpen = true;
							displaySearchResults("");
						}
					}
				}

				function displaySearchResults(query) {
					const resultsDiv = document.getElementById("qq-emoji-search-results");
					if (!resultsDiv) return;
					resultsDiv.innerHTML = "";
					let filtered;
					if (query.trim() === "") {
						filtered = emojiList;
					} else {
						const lowerQuery = query.trim().toLowerCase();
						filtered = emojiList.filter(
							(emoji) =>
								emoji.id.toLowerCase().includes(lowerQuery) ||
								emoji.describe.toLowerCase().includes(lowerQuery),
						);
					}
					if (filtered.length > 0) {
						const gridContainer = document.createElement("div");
						gridContainer.style.display = "grid";
						gridContainer.style.gridTemplateColumns =
							"repeat(auto-fill, minmax(60px, 1fr))";
						gridContainer.style.gap = "5px";
						gridContainer.style.maxHeight = "400px";
						gridContainer.style.overflowY = "auto";
						filtered.forEach((emoji) => {
							const item = document.createElement("div");
							item.style.textAlign = "center";
							item.style.padding = "5px";
							item.style.border = "1px solid #eee";
							item.style.borderRadius = "3px";
							item.style.cursor = "pointer";
							// 点击插入表情代码
							item.onclick = () => {
								const activeElement = document.activeElement;
								if (
									activeElement &&
									(activeElement.tagName === "INPUT" ||
										activeElement.tagName === "TEXTAREA")
								) {
									const startPos = activeElement.selectionStart || 0;
									const endPos = activeElement.selectionEnd || 0;
									const before = activeElement.value.substring(0, startPos);
									const after = activeElement.value.substring(endPos);
									const emojiCode = `/${emoji.id}`;
									activeElement.value = before + emojiCode + after;
									activeElement.dispatchEvent(
										new Event("input", { bubbles: true }),
									);
								}
							};
							// 适配新的图片源
							const imgSrc = g[o["img-src"]].replace(/%EMOJI%/g, emoji.id);
							item.innerHTML = `
								<img src="${imgSrc}" style="width: 48px; height: 48px; vertical-align: middle;">
								<div style="font-size: 10px; margin-top: 2px;">${emoji.describe}</div>
								<div style="font-size: 10px; margin-top: 1px; color: gray;">/${emoji.id}</div>
							`;
							gridContainer.appendChild(item);
						});
						resultsDiv.appendChild(gridContainer);
					} else {
						resultsDiv.innerHTML =
							'<p style="text-align: center;">未找到匹配的表情。</p>';
					}
				}

				function initSearchPanelAndButton() {
					if (document.getElementById(SEARCH_BUTTON_ID)) {
						return;
					}
					// 创建搜索按钮（旧样式保留）
					const button = document.createElement("button");
					button.id = SEARCH_BUTTON_ID;
					button.innerHTML = `<img src="${g[o["img-src"]].replace(/%EMOJI%/g, "tiao")}" width="32" height="32">`;
					button.style.position = "fixed";
					button.style.bottom = "20px";
					button.style.left = "20px";
					button.style.zIndex = "9999";
					button.style.padding = "8px 12px";
					button.style.backgroundColor = "#fff";
					button.style.color = "white";
					button.style.border = "none";
					button.style.borderRadius = "5px";
					button.style.cursor = "pointer";
					button.onclick = toggleSearchPanel;
					document.body.appendChild(button);

					if (document.getElementById(SEARCH_PANEL_ID)) {
						return;
					}
					// 创建搜索面板（旧样式保留）
					const panel = document.createElement("div");
					panel.id = SEARCH_PANEL_ID;
					panel.style.cssText = `
						padding: 10px;
						border: 1px solid #ccc;
						border-radius: 5px;
						background-color: #f9f9f9;
						position: fixed;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 10000;
						width: 600px;
						max-height: 80vh;
						overflow-y: auto;
						display: none;
					`;
					panel.innerHTML = `
						<h3 style="margin-top: 0;">表情</h3>
						<input type="text" id="qq-emoji-search-input" placeholder="输入 ID 或描述（如 &quot;微笑&quot;，&quot;bx&quot;）" style="width: calc(100% - 10px); padding: 5px; margin-bottom: 10px;">
						<div id="qq-emoji-search-results" style="max-height: 400px; overflow-y: auto;"></div>
						<button id="qq-emoji-search-close" style="margin-top: 10px; padding: 5px 10px;">关闭</button>
					`;
					document.body.appendChild(panel);

					const input = document.getElementById("qq-emoji-search-input");
					const closeBtn = document.getElementById("qq-emoji-search-close");
					input.addEventListener("input", () => {
						displaySearchResults(input.value);
					});
					closeBtn.addEventListener("click", toggleSearchPanel);
					panel.addEventListener("click", (e) => {
						if (e.target === panel) {
							toggleSearchPanel();
						}
					});
					// 快捷键支持（旧逻辑保留）
					document.addEventListener("keydown", (e) => {
						if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") {
							e.preventDefault();
							toggleSearchPanel();
						}
					});
				}

				// ========== 初始化逻辑（整合新旧） ==========
				function loadSettings() {
					try {
						let e = GM_getValue(`LGSE_settings`, "{}");
						s("Settings", e);
						o = JSON.parse(e);
					} catch (e) {
						s(`ERROR ${e}`);
						s("Using default settings");
						o = T;
					}
					// 补全缺失的设置项
					for (let e = 0; e < m.length; e++)
						o[m[e]] == null && (o[m[e]] = T[m[e]]);
					// 初始化表情渲染模板的图片源
					E = E.replace(/%SOURCE%/g, g[o["img-src"]]);
				}

				async function init() {
					try {
						// 加载设置
						loadSettings();
						// 构建基于新数据的表情列表
						emojiList = buildEmojiList();
						// 初始化搜索面板
						initSearchPanelAndButton();
						// 启动定时渲染（替代旧的scanAndReplace）
						if (o["rep-emj"] && V()) {
							setInterval(q, SCAN_INTERVAL);
							// 首次立即执行一次
							q();
						}
					} catch (error) {
						s("初始化失败:", error);
					}
				}

				// ========== 入口执行 ==========
				if (document.readyState === "loading") {
					document.addEventListener("DOMContentLoaded", init);
				} else {
					init();
				}
			}
			function compareVersions(v1, v2) {
				const a = v1.split(".").map(Number);
				const b = v2.split(".").map(Number);
				for (let i = 0; i < Math.max(a.length, b.length); i++) {
					const numA = i < a.length ? a[i] : 0;
					const numB = i < b.length ? b[i] : 0;
					if (numA > numB) return 1;
					if (numA < numB) return -1;
				}
				return 0;
			}
			async function checkScriptVersion(op) {
				const sources = [
					{
						name: "GitHub Raw Mirror 1",
						versionUrl:
							"https://raw.bgithub.xyz/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"https://bgithub.xyz/Snow-Domain-Smart-Fox/Amazing-Luogu/raw/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 2",
						versionUrl:
							"http://kr2-proxy.gitwarp.com:9980/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://kr2-proxy.gitwarp.com:9980/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 3",
						versionUrl:
							"http://jp-proxy.gitwarp.com:3000/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://jp-proxy.gitwarp.com:3000/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 4",
						versionUrl:
							"http://gh.catmak.name/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://gh.catmak.name/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 5",
						versionUrl:
							"http://kr1-proxy.gitwarp.com:8081/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://kr1-proxy.gitwarp.com:8081/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 6",
						versionUrl:
							"https://proxy.gitwarp.com/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"https://proxy.gitwarp.com/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 7",
						versionUrl:
							"http://jp1-proxy.gitwarp.com:8123/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://jp1-proxy.gitwarp.com:8123/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 8",
						versionUrl:
							"http://gh.halonice.com/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://gh.halonice.com/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "GitHub Raw Mirror 9",
						versionUrl:
							"http://hk-yd-proxy.gitwarp.com:6699/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"http://hk-yd-proxy.gitwarp.com:6699/https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
					{
						name: "jsDmirror",
						versionUrl:
							"https://cdn.jsdmirror.cn/gh/Snow-Domain-Smart-Fox/Amazing-Luogu@refs/heads/main/versions.json",
						downloadUrl:
							"https://cdn.jsdmirror.cn/gh/Snow-Domain-Smart-Fox/Amazing-Luogu@refs/heads/main/index.user.js",
					},
					{
						name: "jsDelivr",
						versionUrl:
							"https://cdn.jsdelivr.net/gh/Snow-Domain-Smart-Fox/Amazing-Luogu@refs/heads/main/versions.json",
						downloadUrl:
							"https://cdn.jsdelivr.net/gh/Snow-Domain-Smart-Fox/Amazing-Luogu@refs/heads/main/index.user.js",
					},
					{
						name: "Github Raw",
						versionUrl:
							"https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/versions.json",
						downloadUrl:
							"https://raw.githubusercontent.com/Snow-Domain-Smart-Fox/Amazing-Luogu/refs/heads/main/index.user.js",
					},
				];
				const scriptName = "Amazing Luogu";
				const currentVersion = GM_info.script.version;
				let latestVersion = null;
				let downloadUrl = null;
				let sourceUsed = null;
				let allVersionData = [];
				const lastSnoozeTime = GM_getValue("aml_last_snooze_time", 0);
				const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
				const now = Date.now();
				if (op) {
					if (now - lastSnoozeTime < oneWeekInMs) {
						return;
					}
				}
				const promises = sources.map(
					(source) =>
						new Promise((resolve) => {
							GM_xmlhttpRequest({
								method: "GET",
								url: source.versionUrl.trim(),
								timeout: 1000,
								onload: (response) => {
									try {
										const versionData = JSON.parse(response.responseText);
										const version =
											versionData[scriptName]?.release ||
											versionData[scriptName]?.dev;
										if (version) {
											resolve({
												version,
												downloadUrl: source.downloadUrl.trim(),
												sourceName: source.name,
												error: null,
											});
										} else {
											resolve({
												version: null,
												downloadUrl: null,
												sourceName: source.name,
												error: "no_version",
											});
										}
									} catch (error) {
										resolve({
											version: null,
											downloadUrl: null,
											sourceName: source.name,
											error: error,
										});
									}
								},
								onerror: (error) => {
									resolve({
										version: null,
										downloadUrl: null,
										sourceName: source.name,
										error: error,
									});
								},
								ontimeout: () => {
									resolve({
										version: null,
										downloadUrl: null,
										sourceName: source.name,
										error: "timeout",
									});
								},
							});
						}),
				);
				const results = await Promise.all(promises);
				for (const result of results) {
					if (
						result.version &&
						(!latestVersion ||
							compareVersions(result.version, latestVersion) === 1)
					) {
						latestVersion = result.version;
						downloadUrl = result.downloadUrl;
						sourceUsed = result.sourceName;
					}
				}
				if (!latestVersion) {
					return;
				}
				if (compareVersions(latestVersion, currentVersion) === 1) {
					const result = await Swal.fire({
						title: "发现新版本！",
						html: `你的 ${scriptName} 当前版本是 v${currentVersion}，最新版本是 v${latestVersion} (来自 ${sourceUsed})。是否立即更新？`,
						icon: "info",
						showCancelButton: true,
						confirmButtonText: "立即更新",
						cancelButtonText: "稍后提醒",
						reverseButtons: true,
						allowOutsideClick: false,
						allowEscapeKey: false,
					});
					if (result.isConfirmed) {
						window.location.href = downloadUrl;
					} else {
						GM_setValue("aml_last_snooze_time", now);
					}
				} else {
					GM_deleteValue("aml_last_snooze_time");
				}
			}
			setTimeout(checkScriptVersion(1), 1500);
			// ================= 专注模式核心逻辑 (替换原有 if (currentAMLSettings.focusModeEnabled) 块) =================
			if (currentAMLSettings.focusModeEnabled) {
				const path = window.location.pathname;

				// 1. 页面禁用逻辑 (总开关: focusModeHidePage)
				if (currentAMLSettings.focusModeHidePage) {
					const hidePagePaths = {
						focusModeHideChat: "/chat",
						focusModeHideNotification: "/user/notification",
						focusModeHideArticle: "/article",
						focusModeHidePaste: "/paste",
						focusModeHideSolution: "/problem/solution",
						focusModeHideContest: "/contest",
						focusModeHideUser: "/user",
						focusModeHideTicket: "/ticket",
						focusModeHidediscuss: "/discuss",
						focusModeHideThemeList: "/theme/list",
						focusModeHideImageHosting: "/image",
						focusModeHideTeam: "/team",
						focusModeHideRank: "/ranking",
						focusModeHideJudgement: "/judgement",
						focusModeHideHelp: "/help",
					};
					for (const [key, val] of Object.entries(hidePagePaths)) {
						if (currentAMLSettings[key] && path.startsWith(val)) {
							document.body.innerHTML = "";
							document.body.style = "";
							document.head.innerHTML = "";
							const newdiv = document.createElement("div");
							newdiv.style.display = "flex";
							newdiv.style.flexDirection = "column";
							newdiv.style.justifyContent = "center";
							newdiv.style.alignItems = "center";
							newdiv.style.height = "100vh";
							newdiv.style.textAlign = "center";
							newdiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
							const message = document.createElement("h1");
							message.textContent = "请认真学习哦！";
							message.style.marginBottom = "20px";
							message.style.fontWeight = "bold";
							message.style.color = "#333";
							message.style.fontSize = "2em";
							const newcount = document.createElement("p");
							newcount.style.fontSize = "1.5em";
							newcount.style.color = "#666";
							let cnt = 3;
							newcount.textContent = `页面关闭倒计时：${cnt} 秒`;
							newdiv.appendChild(message);
							newdiv.appendChild(newcount);
							document.body.appendChild(newdiv);
							const setIntervaldiv = setInterval(() => {
								cnt--;
								if (cnt > 0) newcount.textContent = `页面关闭倒计时：${cnt} 秒`;
								else {
									newcount.textContent = "即将关闭……";
									clearInterval(setIntervaldiv);
									setTimeout(() => {
										window.location.href = "about:blank";
										if (window.close) window.close();
									}, 500);
								}
							}, 1000);
							return; // 直接结束脚本运行
						}
					}
				}

				// 2. 导航栏链接/按钮隐藏 (总开关: focusModeHideLinksButtons)
				if (currentAMLSettings.focusModeHideLinksButtons) {
					const hideButtonPaths = {
						focusModeHideChat: "/chat",
						focusModeHideNotification: "/user/notification",
						focusModeHideArticle: "/article",
						focusModeHidePaste: "/paste",
						focusModeHideSolution: "/problem/solution",
						focusModeHideContest: "/contest/list",
						focusModeHideTicket: "/ticket",
						focusModeHidediscuss: "/discuss",
						focusModeHideThemeList: "/theme/list",
						focusModeHideImageHosting: "/image",
						focusModeHideRank: "/ranking",
						focusModeHideRank2: "/ranking/elo",
						focusModeHideJudgement: "/judgement",
					};
					setInterval(function () {
						for (const [key, val] of Object.entries(hideButtonPaths)) {
							if (currentAMLSettings[key]) {
								const link = document.querySelector(`a[href="${val}"]`);
								if (link) link.remove();
								const button = document.querySelector(`button[href="${val}"]`);
								if (button) button.remove();
							}
						}
						// 特殊处理 ELO 排名
						if (currentAMLSettings.focusModeHideRank) {
							const eloLink = document.querySelector('a[href="/ranking/elo"]');
							if (eloLink) eloLink.remove();
						}
					}, 200);
				}

				// 3. 左侧边栏隐藏 (总开关: focusModeHideSidebarLeft)
				if (currentAMLSettings.focusModeHideSidebarLeft) {
					let tmp = document.querySelector("nav.sidebar");
					if (tmp) {
						let targetdiv = tmp.querySelectorAll("div.nav-group");
						if (targetdiv.length > 3) targetdiv[3].remove();
					}
				}

				// 4. 右侧边栏隐藏 (总开关: focusModeHideSidebarRight)
				if (currentAMLSettings.focusModeHideSidebarRight) {
					setInterval(function () {
						let tmp = document.querySelector("div.rside");
						if (tmp && tmp.classList.contains("show")) {
							setTimeout(() => {
								if (tmp) {
									let targetdiv = tmp.querySelectorAll("div.nav-group");
									if (currentAMLSettings.focusModeHideUser && targetdiv.length)
										targetdiv[0].style.setProperty(
											"display",
											"none",
											"important",
										);
									if (
										currentAMLSettings.focusModeHideTeam &&
										targetdiv.length > 1
									)
										targetdiv[1].style.setProperty(
											"display",
											"none",
											"important",
										);
									if (
										currentAMLSettings.focusModeHideContest &&
										targetdiv.length > 2
									)
										targetdiv[2].style.setProperty(
											"display",
											"none",
											"important",
										);
								}
							}, 300);
						}
					}, 300);
				}

				// 5. 首页内容隐藏 (总开关: focusModeHideHome)
				if (path == "/" && currentAMLSettings.focusModeHideHome) {
					setTimeout(() => {
						// 广告与运势
						if (
							currentAMLSettings.focusModeHideAD &&
							!currentAMLSettings.focusModeHidePunchAndAd
						) {
							const adEl = document.getElementsByClassName("am-u-md-8")[0];
							if (adEl) adEl.remove();
							var Fortune = document.getElementsByClassName(
								"am-u-md-4 lg-punch am-text-center",
							)[0];
							if (Fortune)
								Fortune.style = "left: 50%; transform: translateX(-50%);";
						}
						if (currentAMLSettings.focusModeHidePunchAndAd) {
							let targetdiv = document.querySelector("div.am-g");
							if (targetdiv)
								targetdiv.style.setProperty("display", "none", "important");
						}

						// 右侧公告/友情链接
						let targetdiv = document.querySelector("div.lg-right");
						if (targetdiv) {
							let lgArticles = targetdiv.querySelectorAll(".lg-article");
							if (lgArticles.length) {
								let tmp = lgArticles[0];
								tmp.style.setProperty("display", "none", "important");
							}
							if (
								lgArticles.length >= 3 &&
								currentAMLSettings.focusModeHideFriendLinks
							) {
								let tmp = lgArticles[2];
								tmp.style.setProperty("display", "none", "important");
							}
						}

						// 犇犇区域
						let targetdiv2 = document.querySelector("div.lg-index-benben");
						if (targetdiv2) {
							let lgArticles = targetdiv2.querySelectorAll(".lg-article");
							if (lgArticles.length && currentAMLSettings.focusModeHideContest) {
								let tmp = lgArticles[0];
								tmp.style.setProperty("display", "none", "important");
							}
							if (
								lgArticles.length >= 2 &&
								currentAMLSettings.focusModeHidediscuss
							) {
								let tmp = lgArticles[1];
								tmp.style.setProperty("display", "none", "important");
							}
							// 隐藏犇犇列表本身
							if (currentAMLSettings.focusModeHideBenben) {
								let isaml = currentAMLSettings.memoEnabled ? 1 : 0;
								// 隐藏输入框、按钮块等
								let tmp2 = lgArticles[2 + isaml];
								if (tmp2) tmp2.style.setProperty("display", "none", "important");
								let tmp3 = lgArticles[3 + isaml];
								if (tmp3) tmp3.style.setProperty("display", "none", "important");
								let tmp4 = lgArticles[4 + isaml];
								if (tmp4) tmp4.style.setProperty("display", "none", "important");

								const benbenList = document.querySelector("ul.am-comments-list");
								if (benbenList) benbenList.remove();
							}
						}
					}, 200);
				}

				// 全局 CSS 隐藏 (犇犇展开按钮)
				if (
					currentAMLSettings.focusModeHideBenbenMore ||
					currentAMLSettings.focusModeHideBenben
				) {
					GM_addStyle(`#feed-more { display: none !important; }`);
				}

				// 6. 页脚隐藏 (总开关: focusModeHideFooter)
				if (currentAMLSettings.focusModeHideFooter) {
					GM_addStyle(`
				.weixin,
				.qr-img,
				.info[data-v-95701c92],
				.content-wrap .links[data-v-1bb3d6f7] {
					display: none !important;
				}
			`);
				}

				// 7. 【新增】题目详情页隐藏逻辑 (路径: /problem/Pxxx)
				// 排除题解页、统计页等子页面
				if (
					path.startsWith("/problem/") &&
					!path.startsWith("/problem/solution") &&
					!path.startsWith("/problem/statistics") &&
					!path.startsWith("/problem/discuss")
				) {
					setTimeout(function () {
						setInterval(function () {
							// A. 隐藏右侧卡片中的链接 (题解、反馈)
							let targetdiv = document.querySelector("div.l-card");
							if (targetdiv) {
								let links = targetdiv.querySelectorAll("a");
								// 隐藏题解 (需开启 focusModeHideProblemSolutions)
								if (currentAMLSettings.focusModeHideProblemSolutions) {
									links.forEach((link) => {
										if (link.innerText.includes("题解"))
											link.style.setProperty("display", "none", "important");
									});
								}
								// 隐藏反馈 (需开启 focusModeHideProblemTickets)
								if (currentAMLSettings.focusModeHideProblemTickets) {
									links.forEach((link) => {
										if (
											link.innerText.includes("反馈") ||
											link.innerText.includes("Report")
										)
											link.style.setProperty("display", "none", "important");
									});
								}

								// 隐藏提供者 (需开启 focusModeHideProblemProviders)
								if (currentAMLSettings.focusModeHideProblemProviders) {
									let infoRows = targetdiv.querySelectorAll(
										"div.l-flex-info-row",
									);
									if (infoRows.length > 1)
										infoRows[1].style.setProperty("display", "none", "important");
								}
							}

							// B. 隐藏提交/通过统计 (需开启 focusModeHideProblemStats)
							if (currentAMLSettings.focusModeHideProblemStats) {
								let statsDiv = document.querySelector("div.color-inv");
								if (statsDiv) {
									let fields = statsDiv.querySelectorAll("div.field");
									fields.forEach((f) =>
										f.style.setProperty("display", "none", "important"),
									);
								}
							}

							// C. 隐藏复制题目按钮
							let copyBtns = document.querySelectorAll(
								"button.lform-size-middle",
							);
							copyBtns.forEach((btn) => {
								if (btn.innerText.includes("复制"))
									btn.style.setProperty("display", "none", "important");
							});

							// D. 隐藏加入题单 (需开启对应开关)
							if (
								currentAMLSettings.focusModeHideProblemPersonalList ||
								currentAMLSettings.focusModeHideProblemTeamList
							) {
								let labels = Array.from(document.querySelectorAll("label"));
								if (currentAMLSettings.focusModeHideProblemPersonalList) {
									let pLabel = labels.find(
										(l) => l.textContent.trim() === "加入个人题单",
									);
									if (pLabel)
										pLabel.style.setProperty("display", "none", "important");
								}
								if (currentAMLSettings.focusModeHideProblemTeamList) {
									let tLabel = labels.find(
										(l) => l.textContent.trim() === "加入团队题单",
									);
									if (tLabel)
										tLabel.style.setProperty("display", "none", "important");
								}
							}

							// E. 隐藏讨论区、标签卡片 (需开启对应开关)
							let cards = document.querySelectorAll("div.l-card");
							cards.forEach((card) => {
								let text = card.innerText;
								if (
									currentAMLSettings.focusModeHideProblemDiscuss &&
									text.includes("讨论")
								) {
									card.style.setProperty("display", "none", "important");
								}
								if (
									currentAMLSettings.focusModeHideProblemTags &&
									text.includes("标签")
								) {
									card.style.setProperty("display", "none", "important");
								}
							});
						}, 500);
					}, 50);
				}

				// 8. 题单页隐藏逻辑 (总开关: focusModeHideTrainingStats/Operations)
				if (
					path.startsWith("/training/") &&
					(currentAMLSettings.focusModeHideTrainingStats ||
						currentAMLSettings.focusModeHideTrainingOperations)
				) {
					setTimeout(function () {
						setInterval(function () {
							if (currentAMLSettings.focusModeHideTrainingStats) {
								let tmp = document.querySelector("section.side");
								if (tmp) {
									let targetdiv = tmp.querySelector("div.padding-default");
									if (targetdiv)
										targetdiv.style.setProperty("display", "none", "important");
								}
							}
							if (currentAMLSettings.focusModeHideTrainingOperations) {
								let targetdiv = document.querySelector("div.operation");
								if (targetdiv)
									targetdiv.style.setProperty("display", "none", "important");
							}
						}, 500);
					}, 50);
				}

				// 9. 记录页隐藏逻辑 (总开关: focusModeHideRecordFilters)
				if (
					path.startsWith("/record/list") &&
					currentAMLSettings.focusModeHideRecordFilters
				) {
					GM_addStyle(`
				div.mobile-body div.dropdown {
					display: none !important;
				}
			`);
				}
			}
		})(window.jQuery.noConflict());
	}

	main();
	if (supabaseRunned) return;
	supabaseRunned = true;
	const SUPABASE_URL = "https://ktwhwvafywwekfkvskbk.supabase.co";
	const SUPABASE_ANON_KEY =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0d2h3dmFmeXd3ZWtma3Zza2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2OTU1NDgsImV4cCI6MjA4NDI3MTU0OH0.tSCRz7ENeCT3NXt891equmSBfW_UsXHUdKSVMoxveKQ";

	function getCurrentUserId() {
		let login = document.querySelector("[href='/auth/login']");
		if (login) return null;
		let avatarImg = document.querySelector(
			"img.avatar[data-v-0a5f98b2]",
		);
		if (!avatarImg) {
			avatarImg = document.querySelector(
				".user-nav .avatar img[data-v-65720dbc]",
			);
		}
		if (avatarImg && avatarImg.src) {
			const match = avatarImg.src.match(
				/\/upload\/usericon\/(\d+)\.png/,
			);
			if (match) {
				return match[1];
			}
		}
		return null;
	}
	let currentAMLSettings = {
		extendTaskEnabled: GM_getValue("amlExtendTaskEnabled", true),
		vscodeLuoguEnabled: GM_getValue("amlVscodeLuoguEnabled", false),
		codeforcesOriginDifEnabled: GM_getValue("amlCodeforcesOriginDifEnabled", true),
		autoSaveDiscussEnabled: GM_getValue("amlAutoSaveDiscussEnabled", false),
		showUserIntroductionEnabled: GM_getValue("amlShowUserIntroductionEnabled", true),
		benbenctrlenterEnabled: GM_getValue("amlBenbenctrlenterEnabled", true),
		autoO2Enabled: GM_getValue("amlAutoO2Enabled", false),
		slogenTimeFormat: GM_getValue("amlSlogenTimeFormat", "{time} || {slogan}"),
		slogenTimeEnabled: GM_getValue("amlSlogenTimeEnabled", false),
		discussListLengthEnabled: GM_getValue("amlDiscussListLengthEnabled", false),
		nbnhhshEnabled: GM_getValue("amlNbnhhshEnabled", true),
		problemRandom: GM_getValue("amlProblemRandom", true),
		useLuoguMe: GM_getValue("amlUseLuoguMe", false),
		isOpen: GM_getValue("amlPanelOpen", true),
		chatMarkdown: GM_getValue("amlChatMarkdown", true),
		problemColors: GM_getValue("amlProblemColors", true),
		coverRemoval: GM_getValue("amlCoverRemoval", false),
		captchaAutofill: GM_getValue("amlCaptchaAutofill", false),
		problemJumper: GM_getValue("amlProblemJumper", true),
		saveStationJumper: GM_getValue("amlSaveStationJumper", true),
		codeFolding: GM_getValue("amlCodeFolding", true),
		autoCheckIn: GM_getValue("amlAutoCheckIn", true),
		captchaOCREndpoint: GM_getValue(
			"amlCaptchaOCREndpoint",
			"http://8.140.166.24:44963/?base64=",
		),
		userSearchEnabled: GM_getValue("amlUserSearchEnabled", true),
		vscodePort: GM_getValue("amlVscodePort", 1145),
		discussListLength: GM_getValue("amlDiscussListLength", 16),
		colorUpdateInterval: GM_getValue("amlColorUpdateInterval", 300),
		memoContent: GM_getValue("amlMemoContent", "关注 zhangyimin12345 谢谢啦！"),
		memoEnabled: GM_getValue("amlMemoEnabled", true),
		buttonUnlocker: GM_getValue("amlButtonUnlocker", true),
		problemJumpStyling: GM_getValue("amlProblemJumpStyling", true),
		autoExpandBenben: GM_getValue("amlAutoExpandBenben", true),
		benbenBlockedUids: GM_getValue("amlBenbenBlockedUids", [""]),
		copyMarkdownEnabled: GM_getValue("amlCopyMarkdownEnabled", true),
		discussCopyButtonEnabled: GM_getValue("amlDiscussCopyButtonEnabled", true),
		customCSS: GM_getValue("amlCustomCSS", ""),
		customCSSPosition: GM_getValue("amlCustomCSSPosition", "head"),
		customFontURL: GM_getValue("amlCustomFontURL", ""),
		customFontEnabled: GM_getValue("amlCustomFontEnabled", true),
		customStyleEnabled: GM_getValue("amlCustomStyleEnabled", true),
		defaultCodeEnabled: GM_getValue("amlDefaultCodeEnabled", true),
		defaultCodeContent: GM_getValue("amlDefaultCodeContent", ""),
		autoReplyEnabled: GM_getValue("amlAutoReplyEnabled", false),
		autoReplyFocusModeMessage: GM_getValue(
			"amlAutoReplyFocusModeMessage",
			"该用户开启了专注模式认真学术，可能暂时无法回复您的私信！",
		),
		autoReplyNormalMessage: GM_getValue(
			"amlAutoReplyNormalMessage",
			"已经提示该用户，请耐心等待 TA 的回复！",
		),
		userFinderEnabled: GM_getValue("amlUserFinderEnabled", false),
		focusModeEnabled: GM_getValue("amlFocusModeEnabled", false),
		focusModeHideChat: GM_getValue("amlFocusModeHideChat", true),
		focusModeHideNotification: GM_getValue("amlFocusModeHideNotification", true),
		focusModeHideArticle: GM_getValue("amlFocusModeHideArticle", true),
		focusModeHidePaste: GM_getValue("amlFocusModeHidePaste", true),
		focusModeHideSolution: GM_getValue("amlFocusModeHideSolution", true),
		focusModeHideContest: GM_getValue("amlFocusModeHideContest", false),
		focusModeHideUser: GM_getValue("amlFocusModeHideUser", true),
		focusModeHideTicket: GM_getValue("amlFocusModeHideTicket", true),
		focusModeHideHelp: GM_getValue("amlFocusModeHideHelp", true),
		focusModeHideFooter: GM_getValue("amlFocusModeHideFooter", true),
		focusModeHideHome: GM_getValue("amlFocusModeHideHome", true),
		focusModeHideAD: GM_getValue("amlFocusModeHideAD", true),
		focusModeHidePunchAndAd: GM_getValue("amlFocusModeHidePunchAndAd", false),
		focusModeHidediscuss: GM_getValue("amlFocusModeHidediscuss", true),
		focusModeHideFriendLinks: GM_getValue("amlFocusModeHideFriendLinks", true),
		focusModeHideTeam: GM_getValue("amlFocusModeHideTeam", true),
		focusModeHideTag: GM_getValue("amlFocusModeHideTag", true),
		focusModeHideThemeList: GM_getValue("amlFocusModeHideThemeList", true),
		focusModeHideImageHosting: GM_getValue("amlFocusModeHideImageHosting", true),
		focusModeHideRank: GM_getValue("amlFocusModeHideRank", true),
		focusModeHideJudgement: GM_getValue("amlFocusModeHideJudgement", true),
		focusModeHidePage: GM_getValue("amlFocusModeHidePage", true),
		focusModeHideLinksButtons: GM_getValue("amlFocusModeHideLinksButtons", true),
		focusModeHideSidebarLeft: GM_getValue("amlFocusModeHideSidebarLeft", true),
		focusModeHideSidebarRight: GM_getValue("amlFocusModeHideSidebarRight", true),
		focusModeHideBenben: GM_getValue("amlFocusModeHideBenben", true),
		focusModeHideBenbenInput: GM_getValue("amlFocusModeHideBenbenInput", true),
		focusModeHideBenbenMore: GM_getValue("amlFocusModeHideBenbenMore", true),
		focusModeHideProblemStats: GM_getValue("amlFocusModeHideProblemStats", true),
		focusModeHideProblemSolutions: GM_getValue(
			"amlFocusModeHideProblemSolutions",
			true,
		),
		focusModeHideProblemTickets: GM_getValue(
			"amlFocusModeHideProblemTickets",
			true,
		),
		focusModeHideProblemProviders: GM_getValue(
			"amlFocusModeHideProblemProviders",
			true,
		),
		focusModeHideProblemPersonalList: GM_getValue(
			"amlFocusModeHideProblemPersonalList",
			true,
		),
		focusModeHideProblemTeamList: GM_getValue(
			"amlFocusModeHideProblemTeamList",
			true,
		),
		focusModeHideProblemDiscuss: GM_getValue(
			"amlFocusModeHideProblemDiscuss",
			true,
		),
		focusModeHideProblemTags: GM_getValue("amlFocusModeHideProblemTags", true),
		focusModeHideTrainingStats: GM_getValue(
			"amlFocusModeHideTrainingStats",
			true,
		),
		focusModeHideTrainingOperations: GM_getValue(
			"amlFocusModeHideTrainingOperations",
			true,
		),
		focusModeHideRecordFilters: GM_getValue(
			"amlFocusModeHideRecordFilters",
			true,
		),
		chatNotificationEnabled: GM_getValue("amlChatNotificationEnabled", true),
		emojiRenderingEnabled: GM_getValue("amlEmojiRenderingEnabled", true),
	};
	if (currentAMLSettings.slogenTimeEnabled) {
		let heartbeatInterval = null;
		let pollInterval = null;
		async function register(uid) {
			let updated1 = false;
			let introdution;
			let registerSuccess = false;

			try {
				// 1. 获取用户原始简介
				const api_response = await fetch("https://www.luogu.com.cn/api/user/info/" + uid);
				const api_data = await api_response.json();
				introdution = api_data.user.introduction || "";

				// 2. 临时修改简介（标记验证中）
				const edit_introdution_1 = await fetch("https://www.luogu.com.cn/api/user/updateIntroduction", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-csrf-token": gettoken()
					},
					body: JSON.stringify({
						introduction: "Amazing Luogu Verifying: " + uid + "\n" + introdution,
					}),
				});

				if (!edit_introdution_1.ok) {
					throw new Error("首次修改简介失败");
				}
				updated1 = true;

				// 3. 执行register请求（无论成败，后续都会恢复简介）
				const result = await new Promise((resolve, reject) => {
					GM_xmlhttpRequest({
						method: "POST",
						url: "https://online.amlg.top/api/register",
						headers: {
							"Content-Type": "application/json"
						},
						data: JSON.stringify({
							luoguuid: uid
						}),
						onload: function (response) {
							try {
								const data = JSON.parse(response.responseText);
								resolve(data);
							} catch (e) {
								reject(new Error("解析响应数据失败: " + e.message));
							}
						},
						onerror: function (error) {
							reject(new Error("register请求失败: " + error));
						},
						onabort: function () {
							reject(new Error("register请求被中止"));
						},
						ontimeout: function () {
							reject(new Error("register请求超时"));
						}
					});
				});

				// 4. 仅当register请求成功时，保存用户信息
				if (result.success) {
					GM_setValue("amlgEmail_" + uid, result.luoguInfo.email);
					GM_setValue("amlgPassword_" + uid, result.temporaryPassword);
					registerSuccess = true;
				}

			} catch (e) {
				console.error("注册过程出错:", e);
			} finally {
				// 5. 最终必执行：恢复用户原始简介（无论前面成功/失败）
				if (updated1) { // 只有首次修改简介成功，才需要恢复
					try {
						const edit_introdution_2 = await fetch("https://www.luogu.com.cn/api/user/updateIntroduction", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								"x-csrf-token": gettoken()
							},
							body: JSON.stringify({
								introduction: introdution,
							}),
						});
						if (!edit_introdution_2.ok) {
							console.error("恢复简介失败");
						}
					} catch (restoreErr) {
						console.error("恢复简介时发生异常:", restoreErr);
					}
				}
			}

			// 6. 返回最终结果（仅当register请求成功时返回true）
			return registerSuccess;
		}
		async function supabaseUpsert(uid) {
			console.log(GM_getValue("amlSlogenTimeFormat", "{time} || {slogan}"))
			return new Promise((resolve, reject) => {
				GM_xmlhttpRequest({
					method: "POST",
					url: "https://online.amlg.top/api/update",
					// 请求体（和原代码一致）
					data: JSON.stringify({
						email: GM_getValue("amlgEmail_" + uid, ""),
						password: GM_getValue("amlgPassword_" + uid, ""),
						format: GM_getValue("amlSlogenTimeFormat", "{time} || {slogan}"),
					}),
					// 成功回调
					onload: function (response) {
						// 模拟 fetch 的 ok 逻辑（状态码 2xx 为成功）
						if (response.status >= 200 && response.status < 300) {
							resolve(response); // 成功则 resolve
						} else {
							reject(new Error("HTTP " + response.status + " " + response.response)); // 非 2xx 抛错
						}
					},
					// 网络错误/超时回调
					onerror: function (error) {
						reject(new Error("Network error: " + error.message));
					},
					ontimeout: function () {
						reject(new Error("Request timeout"));
					},
				});
			});
		}

		async function reportActive(uid) {
			try {
				await supabaseUpsert(uid);
			} catch (e) {
				console.warn("Supabase 心跳失败:", e);
			}
		}
		function checkUpdate(uid) {
			let a = new Date();
			let GM_Date = GM_getValue("amlgDate_" + uid, 0);
			if (GM_Date < a.getTime() - a.getSeconds() * 1000 || GM_Date > a.getTime() + (60 - a.getSeconds()) * 1000) {
				reportActive(uid);
				GM_setValue("amlgDate_" + uid, a.getTime());
				console.log("User " + uid + " updated.");
				return;
			}
		}
		async function initOnlineModule() {
			if (onlineInitialized) return;
			const uid = getCurrentUserId();
			if (!uid) {
				return;
			}
			onlineInitialized = true;
			if (!GM_getValue("amlgEmail_" + uid) || !GM_getValue("amlgPassword_" + uid)) {
				console.log("用户" + uid + "未注册，开始注册");
				if (!await register(uid)) {
					console.error("用户" + uid + "注册失败");
					return;
				}
			} else {
				// console.log(GM_getValue("amlgEmail_"+uid));
				// console.log(GM_getValue("amlgPassword_"+uid));
			}
			checkUpdate(uid);
			if (heartbeatInterval) clearInterval(heartbeatInterval);
			heartbeatInterval = setInterval(() => checkUpdate(uid), 300_000);

		}
		initOnlineModule();
	}
}
(function patch() {
	const raw = {};
	["log", "warn", "error", "info", "debug"].forEach(type => {
		raw[type] = console[type];

		unsafeWindow.console[type] = function (...args) {
			const record = {
				type,
				args,
				time: new Date().toISOString(),
				stack: new Error().stack
			};

			unsafeWindow.dispatchEvent(new CustomEvent("console-capture", { detail: record }));
			raw[type].apply(console, args);
		};
	});
})();

window.addEventListener("load", function () {
	setTimeout(follow, 500);
	setTimeout(all, 500);
});
unsafeWindow.addEventListener("console-capture", e => {
	if (e.detail.args[1] == "Navigated to ") {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				setTimeout(all, 500);
			});
		});
	}
});
let lastHash = location.hash;
function hashreload() {
	if (lastHash != location.hash) {
		lastHash = location.hash;
		setTimeout(all, 500);
	}
}
setInterval(hashreload, 500);
function patchXHR(eventName = 'luogu-xhr-intercept') {

	// 保存原生方法
	const originalOpen = XMLHttpRequest.prototype.open;
	const originalSend = XMLHttpRequest.prototype.send;
	const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

	// 重写 open：存储基础请求信息
	XMLHttpRequest.prototype.open = function(method, url) {
		this._interceptData = {
			method: method,
			url: url,
			requestHeaders: {},
			requestBody: null
		};
		return originalOpen.apply(this, arguments);
	};

	// 重写请求头
	XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
		if (this._interceptData) {
			this._interceptData.requestHeaders[header] = value;
		}
		return originalSetRequestHeader.apply(this, arguments);
	};

	// 重写 send：捕获请求体 + 响应后派发事件
	XMLHttpRequest.prototype.send = function(body) {
		if (this._interceptData && body !== undefined) {
			this._interceptData.requestBody = body;
		}

		// 请求完成
		this.addEventListener('load', () => {
			try {
				// 解析响应
				let responseData;
				try {
					responseData = JSON.parse(this.responseText);
				} catch {
					responseData = this.responseText || null;
				}

				// 构造完整数据
				const result = {
					xhr: this,
					request: this._interceptData,
					response: {
						status: this.status,
						statusText: this.statusText,
						data: responseData,
						raw: this.responseText
					}
				};

				// ✅ 派发自定义事件
				const event = new CustomEvent(eventName, { detail: result });
				window.dispatchEvent(event);
			} catch (err) {
				console.error('XHR拦截解析失败：', err);
			}
		});

		return originalSend.apply(this, arguments);
	};

	console.log(`✅ XHR 拦截已启动，事件名：${eventName}`);
}

patchXHR();

// ==============================================
// 新增：自动监听事件并替换 #lentille-context 内容
// ==============================================
window.addEventListener('luogu-xhr-intercept', (e) => {
  const { data } = e.detail.response;

  // 只处理满足条件的响应数据
  if (data && data.instance && data.template && data.status) {
    const target = document.getElementById('lentille-context');
    if (target) {
      console.log('✅ 找到 lentille-context，开始替换内容');
      target.innerHTML = JSON.stringify(data, null, 2);
	  console.log('✅ 替换完成，新的内容：', target.innerHTML);
    }
  }
});