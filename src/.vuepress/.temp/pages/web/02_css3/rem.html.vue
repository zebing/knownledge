<template><div><h1 id="rem-适配" tabindex="-1"><a class="header-anchor" href="#rem-适配" aria-hidden="true">#</a> rem 适配</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* eslint-disable */
/*
 * REM 计算方法，不直接使用
 * 使用 https://tool.lu/js/ 混淆后直接内联至 HTML
 */
(function (doc, win) {
  var designWidth = 720;
  var maxWidth = 640;
  var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
  var rootFontSize;
  function calc() {
    var docEl = doc.documentElement;
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      // 预期外行为
      rootFontSize = 50;
    } else {
      // 放大100倍，使得设计稿宽度 720 时，7.2rem === 100% 设计稿宽
      // 设置 640 的最大值，使得 pad 打开时仍有基本比例（配合 body max-width 限制）
      rootFontSize = Math.min(maxWidth, clientWidth) / designWidth * 100;
    }
    docEl.style.fontSize = rootFontSize + 'px';
  }
  calc();
  win.addEventListener(resizeEvt, calc, false);
  win.rem2px = function (rem) {
    return rem * rootFontSize;
  };
  win.px2rem = function (px) {
    return px / rootFontSize
  };
})(document, window);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


