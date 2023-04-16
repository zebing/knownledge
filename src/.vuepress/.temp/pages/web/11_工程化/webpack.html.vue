<template><div><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<p><a href="https://webpack.docschina.org/concepts/" target="_blank" rel="noopener noreferrer">webpack 中文文档<ExternalLinkIcon/></a>
<a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">webpack 英文文档<ExternalLinkIcon/></a>
<a href="https://github.com/zebing/code-webpack" target="_blank" rel="noopener noreferrer">手写一个 webpack<ExternalLinkIcon/></a></p>
<h2 id="tapable" tabindex="-1"><a class="header-anchor" href="#tapable" aria-hidden="true">#</a> tapable</h2>
<p><a href="https://github.com/webpack/tapable" target="_blank" rel="noopener noreferrer">tapable github<ExternalLinkIcon/></a></p>
<h2 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h2>
<p><a href="https://webpack.docschina.org/concepts/modules/" target="_blank" rel="noopener noreferrer">module 是什么<ExternalLinkIcon/></a></p>
<h2 id="chunk" tabindex="-1"><a class="header-anchor" href="#chunk" aria-hidden="true">#</a> chunk</h2>
<p><a href="https://webpack.docschina.org/concepts/under-the-hood/#chunks" target="_blank" rel="noopener noreferrer">chunk<ExternalLinkIcon/></a></p>
<h2 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> assets</h2>
<p>存储要输出的文件对象</p>
<h2 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> compile</h2>
<p><a href="https://webpack.docschina.org/api/compiler-hooks/" target="_blank" rel="noopener noreferrer">compile hooks<ExternalLinkIcon/></a></p>
<h2 id="compilation" tabindex="-1"><a class="header-anchor" href="#compilation" aria-hidden="true">#</a> compilation</h2>
<p><a href="https://webpack.docschina.org/api/compilation-object/" target="_blank" rel="noopener noreferrer">compilation 对象<ExternalLinkIcon/></a>
<a href="https://webpack.docschina.org/api/compilation-hooks/" target="_blank" rel="noopener noreferrer">compilation hooks<ExternalLinkIcon/></a></p>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2>
<p><a href="https://webpack.docschina.org/concepts/loaders/" target="_blank" rel="noopener noreferrer">loader 官方文档<ExternalLinkIcon/></a>
<a href="https://webpack.docschina.org/api/loaders/" target="_blank" rel="noopener noreferrer">loader 接口原理<ExternalLinkIcon/></a></p>
<h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h2>
<p><a href="https://webpack.docschina.org/concepts/plugins/" target="_blank" rel="noopener noreferrer">plugins 文档<ExternalLinkIcon/></a></p>
<h2 id="构建提速" tabindex="-1"><a class="header-anchor" href="#构建提速" aria-hidden="true">#</a> 构建提速</h2>
<ul>
<li>分析打包速度</li>
</ul>
<p><a href="https://www.npmjs.com/package/speed-measure-webpack-plugin" target="_blank" rel="noopener noreferrer">speed-measure-webpack-plugin<ExternalLinkIcon/></a></p>
<ul>
<li>多进程打包</li>
</ul>
<p><a href="https://www.npmjs.com/package/thread-loader" target="_blank" rel="noopener noreferrer">thread-loader<ExternalLinkIcon/></a></p>
<p><a href="https://www.npmjs.com/package/happypack" target="_blank" rel="noopener noreferrer">happypack<ExternalLinkIcon/></a></p>
<ul>
<li>缓存</li>
</ul>
<p><a href="https://www.npmjs.com/package/cache-loader" target="_blank" rel="noopener noreferrer">cache-loader<ExternalLinkIcon/></a></p>
<ul>
<li>抽取公共块</li>
</ul>
<p><a href="https://webpack.js.org/plugins/dll-plugin/" target="_blank" rel="noopener noreferrer">dll-plugin<ExternalLinkIcon/></a></p>
<ul>
<li>多进程压缩</li>
</ul>
<p><a href="https://www.npmjs.com/package/terser" target="_blank" rel="noopener noreferrer">terser<ExternalLinkIcon/></a></p>
<ul>
<li>优化loader配置</li>
</ul>
<p>使用 Loader 时可以通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件</p>
<ul>
<li>使用 swc-loader 代替 babel-loader</li>
</ul>
<p><a href="https://www.npmjs.com/package/swc-loader" target="_blank" rel="noopener noreferrer">swc-loader<ExternalLinkIcon/></a></p>
<h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> tree shaking</h2>
<p><a href="https://zhuanlan.zhihu.com/p/472733451" target="_blank" rel="noopener noreferrer">Webpack | TreeShaking 工作原理<ExternalLinkIcon/></a></p>
<h3 id="webpack-遍历依赖-打上标记。" tabindex="-1"><a class="header-anchor" href="#webpack-遍历依赖-打上标记。" aria-hidden="true">#</a> webpack 遍历依赖，打上标记。</h3>
<p>Make 阶段，收集导出变量并记录到模块依赖图ModuleGraph 变量中。</p>
<p>Seal 阶段，遍历ModuleGraph 标记模块导出变量有没有被使用。</p>
<p>生成产物时，若变量没有被其他模块使用时则删除对应的导出语句。</p>
<p><strong>标记效果</strong>
webpack 负责对代码进行标记，把import &amp; export 标记为3类：</p>
<ol>
<li>
<p>所有 import 标记为 /* harmony import */</p>
</li>
<li>
<p>被使用过的 export 标记为/* harm export([type])*/ ，其中[type] 和 webpack 内部相关，可能是 binding，immutable 等等。</p>
</li>
<li>
<p>未被使用过的 import 标记为 /* unused harmony export [FuncName] */，其中[FuncName] 为export 的方法名称</p>
</li>
</ol>
<h3 id="使用-terser-删除无用代码" tabindex="-1"><a class="header-anchor" href="#使用-terser-删除无用代码" aria-hidden="true">#</a> 使用 terser 删除无用代码</h3>
<p><a href="https://www.npmjs.com/package/terser" target="_blank" rel="noopener noreferrer">terser<ExternalLinkIcon/></a></p>
<h3 id="webpack-如何识别未被使用变量" tabindex="-1"><a class="header-anchor" href="#webpack-如何识别未被使用变量" aria-hidden="true">#</a> webpack 如何识别未被使用变量</h3>
<p><a href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#bindings" target="_blank" rel="noopener noreferrer">binding 参考<ExternalLinkIcon/></a></p>
<p>通过babel travers，通过 作用域 scope binding referenced 判断
单个绑定如下所示：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  identifier: node,
  scope: scope,
  path: path,
  kind: 'var',

  referenced: true,
  references: 3,
  referencePaths: [path, path, path],

  constant: false,
  constantViolations: [path]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


