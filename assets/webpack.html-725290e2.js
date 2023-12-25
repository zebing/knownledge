import{_ as t,M as s,p as l,q as i,R as e,t as r,N as a,a1 as o}from"./framework-5866ffd3.js";const c={},d=e("h1",{id:"webpack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),r(" webpack")],-1),h={href:"https://webpack.docschina.org/concepts/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://webpack.js.org/concepts/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/zebing/code-webpack",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"tapable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tapable","aria-hidden":"true"},"#"),r(" tapable")],-1),b={href:"https://github.com/webpack/tapable",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"module",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#module","aria-hidden":"true"},"#"),r(" module")],-1),m={href:"https://webpack.docschina.org/concepts/modules/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"chunk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chunk","aria-hidden":"true"},"#"),r(" chunk")],-1),g={href:"https://webpack.docschina.org/concepts/under-the-hood/#chunks",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"assets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#assets","aria-hidden":"true"},"#"),r(" assets")],-1),v=e("p",null,"存储要输出的文件对象",-1),x=e("h2",{id:"compile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compile","aria-hidden":"true"},"#"),r(" compile")],-1),j={href:"https://webpack.docschina.org/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"compilation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compilation","aria-hidden":"true"},"#"),r(" compilation")],-1),y={href:"https://webpack.docschina.org/api/compilation-object/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://webpack.docschina.org/api/compilation-hooks/",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"loader",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loader","aria-hidden":"true"},"#"),r(" loader")],-1),M={href:"https://webpack.docschina.org/concepts/loaders/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://webpack.docschina.org/api/loaders/",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),r(" plugins")],-1),E={href:"https://webpack.docschina.org/concepts/plugins/",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"构建提速",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建提速","aria-hidden":"true"},"#"),r(" 构建提速")],-1),F=e("ul",null,[e("li",null,"分析打包速度")],-1),G={href:"https://www.npmjs.com/package/speed-measure-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},I=e("ul",null,[e("li",null,"多进程打包")],-1),T={href:"https://www.npmjs.com/package/thread-loader",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.npmjs.com/package/happypack",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,"缓存")],-1),P={href:"https://www.npmjs.com/package/cache-loader",target:"_blank",rel:"noopener noreferrer"},R=e("ul",null,[e("li",null,"抽取公共块")],-1),W={href:"https://webpack.js.org/plugins/dll-plugin/",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,"多进程压缩")],-1),D={href:"https://www.npmjs.com/package/terser",target:"_blank",rel:"noopener noreferrer"},H=e("ul",null,[e("li",null,"优化loader配置")],-1),J=e("p",null,"使用 Loader 时可以通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件",-1),K=e("ul",null,[e("li",null,"使用 swc-loader 代替 babel-loader")],-1),O={href:"https://www.npmjs.com/package/swc-loader",target:"_blank",rel:"noopener noreferrer"},Q=e("h2",{id:"tree-shaking",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tree-shaking","aria-hidden":"true"},"#"),r(" tree shaking")],-1),U={href:"https://zhuanlan.zhihu.com/p/472733451",target:"_blank",rel:"noopener noreferrer"},X=o('<h3 id="webpack-遍历依赖-打上标记。" tabindex="-1"><a class="header-anchor" href="#webpack-遍历依赖-打上标记。" aria-hidden="true">#</a> webpack 遍历依赖，打上标记。</h3><p>Make 阶段，收集导出变量并记录到模块依赖图ModuleGraph 变量中。</p><p>Seal 阶段，遍历ModuleGraph 标记模块导出变量有没有被使用。</p><p>生成产物时，若变量没有被其他模块使用时则删除对应的导出语句。</p><p><strong>标记效果</strong> webpack 负责对代码进行标记，把import &amp; export 标记为3类：</p><ol><li><p>所有 import 标记为 /* harmony import */</p></li><li><p>被使用过的 export 标记为/* harm export([type])*/ ，其中[type] 和 webpack 内部相关，可能是 binding，immutable 等等。</p></li><li><p>未被使用过的 import 标记为 /* unused harmony export [FuncName] */，其中[FuncName] 为export 的方法名称</p></li></ol><h3 id="使用-terser-删除无用代码" tabindex="-1"><a class="header-anchor" href="#使用-terser-删除无用代码" aria-hidden="true">#</a> 使用 terser 删除无用代码</h3>',7),Y={href:"https://www.npmjs.com/package/terser",target:"_blank",rel:"noopener noreferrer"},Z=e("h3",{id:"webpack-如何识别未被使用变量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack-如何识别未被使用变量","aria-hidden":"true"},"#"),r(" webpack 如何识别未被使用变量")],-1),$={href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#bindings",target:"_blank",rel:"noopener noreferrer"},ee=o(`<p>通过babel travers，通过 作用域 scope binding referenced 判断 单个绑定如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  identifier: node,
  scope: scope,
  path: path,
  kind: &#39;var&#39;,

  referenced: true,
  references: 3,
  referencePaths: [path, path, path],

  constant: false,
  constantViolations: [path]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function re(ne,ae){const n=s("ExternalLinkIcon");return l(),i("div",null,[d,e("p",null,[e("a",h,[r("webpack 中文文档"),a(n)]),e("a",p,[r("webpack 英文文档"),a(n)]),e("a",_,[r("手写一个 webpack"),a(n)])]),u,e("p",null,[e("a",b,[r("tapable github"),a(n)])]),k,e("p",null,[e("a",m,[r("module 是什么"),a(n)])]),f,e("p",null,[e("a",g,[r("chunk"),a(n)])]),w,v,x,e("p",null,[e("a",j,[r("compile hooks"),a(n)])]),N,e("p",null,[e("a",y,[r("compilation 对象"),a(n)]),e("a",V,[r("compilation hooks"),a(n)])]),L,e("p",null,[e("a",M,[r("loader 官方文档"),a(n)]),e("a",z,[r("loader 接口原理"),a(n)])]),B,e("p",null,[e("a",E,[r("plugins 文档"),a(n)])]),S,F,e("p",null,[e("a",G,[r("speed-measure-webpack-plugin"),a(n)])]),I,e("p",null,[e("a",T,[r("thread-loader"),a(n)])]),e("p",null,[e("a",q,[r("happypack"),a(n)])]),C,e("p",null,[e("a",P,[r("cache-loader"),a(n)])]),R,e("p",null,[e("a",W,[r("dll-plugin"),a(n)])]),A,e("p",null,[e("a",D,[r("terser"),a(n)])]),H,J,K,e("p",null,[e("a",O,[r("swc-loader"),a(n)])]),Q,e("p",null,[e("a",U,[r("Webpack | TreeShaking 工作原理"),a(n)])]),X,e("p",null,[e("a",Y,[r("terser"),a(n)])]),Z,e("p",null,[e("a",$,[r("binding 参考"),a(n)])]),ee])}const te=t(c,[["render",re],["__file","webpack.html.vue"]]);export{te as default};