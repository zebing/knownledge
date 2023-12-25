import{_ as t,M as n,p as s,q as l,R as e,t as r,N as a,a1 as i}from"./framework-5866ffd3.js";const h="/knownledge/assets/640-945fdf85.jpg",d="/knownledge/assets/640-1-85716973.jpg",c="/knownledge/assets/640-2-d6c433b2.jpg",p="/knownledge/assets/640-3-38670143.jpg",_="/knownledge/assets/640-4-bf8c0c60.jpg",m="/knownledge/assets/640-5-e2adf20c.jpg",f={},g=e("h1",{id:"性能优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#性能优化","aria-hidden":"true"},"#"),r(" 性能优化")],-1),b={href:"https://web.dev/metrics/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developer.mozilla.org/zh-CN/docs/Web/Performance",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Performance/web_performance_basics",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developer.mozilla.org/zh-CN/docs/Tools/Performance",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"指标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#指标","aria-hidden":"true"},"#"),r(" 指标")],-1),w={href:"https://web.dev/metrics/",target:"_blank",rel:"noopener noreferrer"},N=e("img",{src:h,alt:"指标"},null,-1),z=e("h2",{id:"chrome-devtools",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chrome-devtools","aria-hidden":"true"},"#"),r(" Chrome DevTools")],-1),j=e("h3",{id:"performance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#performance","aria-hidden":"true"},"#"),r(" Performance")],-1),M={href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},C={href:"https://developer.mozilla.org/zh-TW/docs/Mozilla/Performance",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"lighthouse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lighthouse","aria-hidden":"true"},"#"),r(" Lighthouse")],-1),P={href:"https://developers.google.com/web/tools/lighthouse/?utm_source=devtools",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"memory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#memory","aria-hidden":"true"},"#"),r(" Memory")],-1),L={href:"https://developers.google.com/web/tools/chrome-devtools/memory-problems?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},q=i('<h2 id="首屏优化指标" tabindex="-1"><a class="header-anchor" href="#首屏优化指标" aria-hidden="true">#</a> 首屏优化指标</h2><ol><li>图片懒加载</li><li>适当尺寸的图片</li><li>删除无用的javascript代码</li><li>删除无用的css代码</li><li>使用http/2</li><li>缓存静态资源</li><li>给图片设置宽高，减少累积偏移布局</li><li>避免巨大的网络有效负载</li><li>尽量减少dom的数量和深度</li><li>减少主线程工作</li><li>减少请求数量，减小传输体积</li><li>尽量不使用内联js/css</li><li>压缩js/css</li><li>优化/压缩图片</li><li>css文件放在head,js文件放在body末尾</li><li>避免多个页面重定向</li><li>使用transform和opacity来实现动画</li></ol><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>前端性能优化有很多维度，我们可以归类为几个环节：构建环节、网络环节、渲染环节、应用环节。</p><h3 id="构建环节优化" tabindex="-1"><a class="header-anchor" href="#构建环节优化" aria-hidden="true">#</a> 构建环节优化</h3><p><img src="'+d+'" alt="构建环节优化"></p><h3 id="网络环节优化" tabindex="-1"><a class="header-anchor" href="#网络环节优化" aria-hidden="true">#</a> 网络环节优化</h3><p><img src="'+c+'" alt="网络环节优化"></p><h3 id="渲染环节优化" tabindex="-1"><a class="header-anchor" href="#渲染环节优化" aria-hidden="true">#</a> 渲染环节优化</h3><p><img src="'+p+'" alt="渲染环节优化"><img src="'+_+'" alt="渲染环节优化"></p><h3 id="应用环节优化" tabindex="-1"><a class="header-anchor" href="#应用环节优化" aria-hidden="true">#</a> 应用环节优化</h3><p><img src="'+m+'" alt="应用环节优化"></p><p><strong>参考：</strong></p>',13),T={href:"https://mp.weixin.qq.com/s/WUKrZ0dQzMg_C_cXvHPnxA",target:"_blank",rel:"noopener noreferrer"},V={href:"https://mp.weixin.qq.com/s/FG0CTP6N7vF7UrLfhvGw5w",target:"_blank",rel:"noopener noreferrer"};function B(E,W){const o=n("ExternalLinkIcon");return s(),l("div",null,[g,e("p",null,[e("a",b,[r("技术 MDN"),a(o)])]),e("p",null,[e("a",u,[r("web性能 MDN"),a(o)])]),e("p",null,[e("a",v,[r("web性能基础 MDN"),a(o)])]),e("p",null,[e("a",x,[r("web性能工具 MDN"),a(o)])]),k,e("p",null,[e("a",w,[r("指标 MDN"),a(o)]),N]),z,j,e("p",null,[e("a",M,[r("chrome performance"),a(o)])]),e("p",null,[e("a",C,[r("peformance MDN"),a(o)])]),D,e("p",null,[e("a",P,[r("使用 Lighthouse 审查网络应用"),a(o)])]),y,e("p",null,[e("a",L,[r("解决内存问题"),a(o)])]),q,e("p",null,[e("a",T,[r("万字长文：分享前端性能优化知识体系"),a(o)])]),e("p",null,[e("a",V,[r("前端性能优化4大环节最佳实践与研发流程"),a(o)])])])}const G=t(f,[["render",B],["__file","index.html.vue"]]);export{G as default};
