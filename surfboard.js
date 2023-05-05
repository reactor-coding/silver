/**
 * @name surfboard
 * @description
 * ### 作るのに情報を得た元
 * 
 * URLに含まれるとGoogle Chromeがクラッシュする文字列
 * > https://it.srad.jp/story/15/09/19/2352204/
 */

/**
 * @type {object}
 */
const ExtensionIDs = {
    "Office Editing for Docs, Sheets & Slides": "bpmcpldpdmajfigpchkicefoigmkfalc"
}

(window.document.domain == ExtensionIDs["Office Editing for Docs, Sheets & Slides"] && location.href == "about:blank#blocked") ? "" : alert("移動");
