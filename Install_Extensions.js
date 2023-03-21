/**
 * @name Silver-ExInstaller
 * @author react#1507
 * @description
 *  for Install Something Extensions Bypass blocks
 */

document.documentElement.innerHTML = "";

let boxicons = document.createElement("link");
boxicons.setAttribute("rel", "stylesheet");
boxicons.setAttribute("href", "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
boxicons.setAttribute("integrity", "sha512-cn16Qw8mzTBKpu08X0fwhTSv02kK/FojjNLz0bwp2xJ4H+yalwzXKFw/5cLzuBZCxGWIA+95X4skzvo8STNtSg==");
boxicons.setAttribute("crossorigin", "anonymous");
document.head.appendChild(boxicons);

let style = document.createElement("style");
style.innerHTML = `
/* original */
.warning {
  border: 1px solid #f2ca00;
  padding: 10px;
}

/*
  No original - Use https://qiita.com/KengoShimizu/items/22c14b282fa9f53f4bd8
*/
.password_box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid lightgray;
}

.password_inner{
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
}

#id{
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0; left: 0; bottom: 0; right: 0;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  background-color: transparent;
  box-sizing: border-box;
}

.password_string{
  position: absolute;
  height: 100%;
  width: 140px;
  top: 0; left: 0; bottom: 0; right: 0;
  padding-left: 10px;
  font-size: 16px;
  line-height: 50px;
  background-color: transparent;
  color: #80868b;
  box-sizing: border-box;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
}
#id:focus + .password_string{
  font-size: 10px;
  line-height: 10px;
  width: 85px;
  height: 10px;
  padding: 0 2px;
  background-color: white;
  transform:translate3d(5px, -6px, 0);
}

/*
  No original - Use https://jajaaan.co.jp/css/button/
*/

.btn--orange, a.btn--orange {
  color: #fff;
  background-color: #eb6100;
}
.btn--orange:hover, a.btn--orange:hover {
  color: #fff;
  background: #f56500;
}
`;
document.body.appendChild(style);

document.body.innerHTML += "<div class='warning'><i class='bx bx-edit-alt'></i>Extension IDを入力したらEnter<br>注意: 使えない人もいるらしい</div><div class='group'><div class='password_box'><div class='password_inner'><input id='id' type='text'><div class='password_string'>Extension ID</div></div></div></div>";

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Enter":
      if (document.querySelector(".password_inner > #id").value == ("" || null)) return alert("Please input Extension ID");
      
      chrome.webstorePrivate.beginInstallWithManifest3({
          esbAllowlist: true,
          iconUrl: "https://blogbooks.net/wp-content/uploads/2021/09/cropped-logo-2.png",
          id: document.querySelector(".password_inner > #id").value,
          localizedName: `Extension: ${document.querySelector(".password_inner > #id").value}`,
          manifest: '{\n"update_url": "https://clients2.google.com/service/update2/crx",\n\n    "manifest_version": 2,\n    "content_security_policy": "script-src \'self\'; object-src \'self\';",\n    "minimum_chrome_version": "71.0.0.0",\n    "offline_enabled": true,\n    "content_scripts":\n    [\n        {\n            "js": [\n                "page.js",\n                "content.js"\n            ],\n            "matches": [ "file:///*", "http://*/*", "https://*/*" ],\n            "run_at": "document_start",\n            "all_frames": true\n        }\n    ],\n    "browser_action": {\n        "default_icon": {\n            "19": "images/icon_grey19.png",\n            "38": "images/icon_grey38.png",\n            "16": "images/icon_grey16.png",\n            "24": "images/icon_grey24.png",\n            "32": "images/icon_grey32.png"\n        },\n        "default_title": "Tampermonkey",\n        "default_popup": "action.html"\n    },\n    "icons": {\n        "32": "images/icon.png",\n        "48": "images/icon48.png",\n        "128": "images/icon128.png"\n    },\n    "incognito": "split",\n    "name": "Tampermonkey",\n    "short_name": "Tampermonkey",\n    "version": "4.18.0",\n    "description": "The world\'s most popular userscript manager",\n    "default_locale": "en",\n    "background": {\n       "page": "background.html"\n    },\n    "options_page": "options.html",\n    "options_ui": {\n        "page": "options.html",\n        "chrome_style": false,\n        "open_in_tab": true\n    },\n    "commands": {\n        "toggle-enable": {\n            "description": "Toggle enable state"\n        },\n        "open-dashboard": {\n            "description": "Open dashboard"\n        },\n        "open-dashboard-with-running-scripts": {\n            "description": "Open dashboard with the current tab\'s URL used as filter"\n        },\n        "open-new-script": {\n            "description": "Open new script tab"\n        }\n    },\n    "permissions": [\n        "notifications",\n        "unlimitedStorage",\n        "tabs",\n        "idle",\n        "webNavigation",\n        "webRequest", "webRequestBlocking",\n        "storage",\n        "contextMenus",\n        "chrome://favicon/",\n        "clipboardWrite",\n        "cookies",\n        "declarativeContent",\n        "<all_urls>"\n    ],\n    "optional_permissions" : [ "downloads" ]\n}\n',
        }
      );

      document.querySelector(".password_inner > #id").value
      break;
  
    default:
      break;
  }
})