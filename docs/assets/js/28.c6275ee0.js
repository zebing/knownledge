(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{430:function(n,t,e){"use strict";e.r(t);var i=e(56),o=Object(i.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"rem-适配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rem-适配"}},[this._v("#")]),this._v(" rem 适配")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/* eslint-disable */\n/*\n * REM 计算方法，不直接使用\n * 使用 https://tool.lu/js/ 混淆后直接内联至 HTML\n */\n(function (doc, win) {\n  var designWidth = 720;\n  var maxWidth = 640;\n  var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';\n  var rootFontSize;\n  function calc() {\n    var docEl = doc.documentElement;\n    var clientWidth = docEl.clientWidth;\n    if (!clientWidth) {\n      // 预期外行为\n      rootFontSize = 50;\n    } else {\n      // 放大100倍，使得设计稿宽度 720 时，7.2rem === 100% 设计稿宽\n      // 设置 640 的最大值，使得 pad 打开时仍有基本比例（配合 body max-width 限制）\n      rootFontSize = Math.min(maxWidth, clientWidth) / designWidth * 100;\n    }\n    docEl.style.fontSize = rootFontSize + 'px';\n  }\n  calc();\n  win.addEventListener(resizeEvt, calc, false);\n  win.rem2px = function (rem) {\n    return rem * rootFontSize;\n  };\n  win.px2rem = function (px) {\n    return px / rootFontSize\n  };\n})(document, window);\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);