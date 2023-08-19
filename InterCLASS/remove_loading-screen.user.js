// ==UserScript==
// @name         InterCLASS Screen Cleaner
// @namespace    https://blogbooks.net
// @version      1.1
// @author       reactor-coding
// @description  InterCLASS Filtering Serviceの「設定読み込み中」の画面を消します
// @match        *://*/*
// @icon         https://blogbooks.net/wp-content/uploads/2021/12/logo-2.png
// @updateURL    https://github.com/reactor-coding/silver/raw/main/InterCLASS/remove_loading-screen.user.js
// @downloadURL  https://github.com/reactor-coding/silver/raw/main/InterCLASS/remove_loading-screen.user.js
// @supportURL   https://blogbooks.net/shortlinks/discord/bbs-community
// ==/UserScript==

const excludeRewriteContextmenu = [
  "discord.com",
  "ptb.discord.com",
  "canary.discord.com",
  "vscode.dev",
  "insider.vscode.dev",
  "replit.com"
]

/**
 * @file contentScripts/content.js:L4-9, L108-128
 */
document.querySelector("[id^=\"jbddgjglgkkneonnineaohdhabjbgopi\"]").remove();

/**
 * - [フィルタリング側のコードが機能してないからいらないけど一応] HTML全体を透明化解除
 * - 検証(devtools)を開くためのショートカットキーの無効化解除
 * - 右クリック無効化解除
 * @file contentScripts/content.js:L12-22
 */
document.documentElement.style.opacity = 1;
document.addEventListener("keydown", (e) => {
  if ((e.key === "i" && e.ctrlKey && e.shiftKey) || e.key === "F12") {
    e.stopImmediatePropagation();
  }
}, true);

document.addEventListener("contextmenu", (e) => {
  if (!excludeRewriteContextmenu.includes(location.hostname)) {
    e.stopImmediatePropagation();
  }
}, true);