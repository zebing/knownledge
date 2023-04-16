<template><div><h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1>
<p><a href="https://web.dev/metrics/" target="_blank" rel="noopener noreferrer">技术 MDN<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance" target="_blank" rel="noopener noreferrer">web性能 MDN<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Performance/web_performance_basics" target="_blank" rel="noopener noreferrer">web性能基础 MDN<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Tools/Performance" target="_blank" rel="noopener noreferrer">web性能工具 MDN<ExternalLinkIcon/></a></p>
<h2 id="指标" tabindex="-1"><a class="header-anchor" href="#指标" aria-hidden="true">#</a> 指标</h2>
<p><a href="https://web.dev/metrics/" target="_blank" rel="noopener noreferrer">指标 MDN<ExternalLinkIcon/></a>
<img src="@source/web/10_性能优化/images/640.jpg" alt="指标"></p>
<h2 id="chrome-devtools" tabindex="-1"><a class="header-anchor" href="#chrome-devtools" aria-hidden="true">#</a> Chrome DevTools</h2>
<h3 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h3>
<p><a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance?hl=zh-cn" target="_blank" rel="noopener noreferrer">chrome performance<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-TW/docs/Mozilla/Performance" target="_blank" rel="noopener noreferrer">peformance MDN<ExternalLinkIcon/></a></p>
<h3 id="lighthouse" tabindex="-1"><a class="header-anchor" href="#lighthouse" aria-hidden="true">#</a> Lighthouse</h3>
<p><a href="https://developers.google.com/web/tools/lighthouse/?utm_source=devtools" target="_blank" rel="noopener noreferrer">使用 Lighthouse 审查网络应用<ExternalLinkIcon/></a></p>
<h3 id="memory" tabindex="-1"><a class="header-anchor" href="#memory" aria-hidden="true">#</a> Memory</h3>
<p><a href="https://developers.google.com/web/tools/chrome-devtools/memory-problems?hl=zh-cn" target="_blank" rel="noopener noreferrer">解决内存问题<ExternalLinkIcon/></a></p>
<h2 id="首屏优化指标" tabindex="-1"><a class="header-anchor" href="#首屏优化指标" aria-hidden="true">#</a> 首屏优化指标</h2>
<ol>
<li>图片懒加载</li>
<li>适当尺寸的图片</li>
<li>删除无用的javascript代码</li>
<li>删除无用的css代码</li>
<li>使用http/2</li>
<li>缓存静态资源</li>
<li>给图片设置宽高，减少累积偏移布局</li>
<li>避免巨大的网络有效负载</li>
<li>尽量减少dom的数量和深度</li>
<li>减少主线程工作</li>
<li>减少请求数量，减小传输体积</li>
<li>尽量不使用内联js/css</li>
<li>压缩js/css</li>
<li>优化/压缩图片</li>
<li>css文件放在head,js文件放在body末尾</li>
<li>避免多个页面重定向</li>
<li>使用transform和opacity来实现动画</li>
</ol>
<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2>
<p>前端性能优化有很多维度，我们可以归类为几个环节：构建环节、网络环节、渲染环节、应用环节。</p>
<h3 id="构建环节优化" tabindex="-1"><a class="header-anchor" href="#构建环节优化" aria-hidden="true">#</a> 构建环节优化</h3>
<p><img src="@source/web/10_性能优化/images/640-1.jpg" alt="构建环节优化"></p>
<h3 id="网络环节优化" tabindex="-1"><a class="header-anchor" href="#网络环节优化" aria-hidden="true">#</a> 网络环节优化</h3>
<p><img src="@source/web/10_性能优化/images/640-2.jpg" alt="网络环节优化"></p>
<h3 id="渲染环节优化" tabindex="-1"><a class="header-anchor" href="#渲染环节优化" aria-hidden="true">#</a> 渲染环节优化</h3>
<p><img src="@source/web/10_性能优化/images/640-3.jpg" alt="渲染环节优化">
<img src="@source/web/10_性能优化/images/640-4.jpg" alt="渲染环节优化"></p>
<h3 id="应用环节优化" tabindex="-1"><a class="header-anchor" href="#应用环节优化" aria-hidden="true">#</a> 应用环节优化</h3>
<p><img src="@source/web/10_性能优化/images/640-5.jpg" alt="应用环节优化"></p>
<p><strong>参考：</strong></p>
<p><a href="https://mp.weixin.qq.com/s/WUKrZ0dQzMg_C_cXvHPnxA" target="_blank" rel="noopener noreferrer">万字长文：分享前端性能优化知识体系<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/FG0CTP6N7vF7UrLfhvGw5w" target="_blank" rel="noopener noreferrer">前端性能优化4大环节最佳实践与研发流程<ExternalLinkIcon/></a></p>
</div></template>


