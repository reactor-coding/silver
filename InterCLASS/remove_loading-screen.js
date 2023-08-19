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