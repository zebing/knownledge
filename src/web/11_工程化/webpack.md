# webpack
[webpack 中文文档](https://webpack.docschina.org/concepts/)
[webpack 英文文档](https://webpack.js.org/concepts/)
[手写一个 webpack](https://github.com/zebing/code-webpack)

## tapable
[tapable github](https://github.com/webpack/tapable)

## module
[module 是什么](https://webpack.docschina.org/concepts/modules/)

## chunk
[chunk](https://webpack.docschina.org/concepts/under-the-hood/#chunks)

## assets
存储要输出的文件对象

## compile
[compile hooks](https://webpack.docschina.org/api/compiler-hooks/)

## compilation
[compilation 对象](https://webpack.docschina.org/api/compilation-object/)
[compilation hooks](https://webpack.docschina.org/api/compilation-hooks/)

## loader
[loader 官方文档](https://webpack.docschina.org/concepts/loaders/)
[loader 接口原理](https://webpack.docschina.org/api/loaders/)

## plugins
[plugins 文档](https://webpack.docschina.org/concepts/plugins/)

## 构建提速
* 分析打包速度

[speed-measure-webpack-plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin)
* 多进程打包

[thread-loader](https://www.npmjs.com/package/thread-loader) 

[happypack](https://www.npmjs.com/package/happypack)
* 缓存

[cache-loader](https://www.npmjs.com/package/cache-loader)

* 抽取公共块

[dll-plugin](https://webpack.js.org/plugins/dll-plugin/)

* 多进程压缩

[terser](https://www.npmjs.com/package/terser)

* 优化loader配置

使用 Loader 时可以通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件

* 使用 swc-loader 代替 babel-loader

[swc-loader](https://www.npmjs.com/package/swc-loader)

## tree shaking

[Webpack | TreeShaking 工作原理](https://zhuanlan.zhihu.com/p/472733451)

### webpack 遍历依赖，打上标记。
Make 阶段，收集导出变量并记录到模块依赖图ModuleGraph 变量中。

Seal 阶段，遍历ModuleGraph 标记模块导出变量有没有被使用。

生成产物时，若变量没有被其他模块使用时则删除对应的导出语句。

**标记效果**
webpack 负责对代码进行标记，把import & export 标记为3类：

1. 所有 import 标记为 /* harmony import */

2. 被使用过的 export 标记为/* harm export([type])*/ ，其中[type] 和 webpack 内部相关，可能是 binding，immutable 等等。

3. 未被使用过的 import 标记为 /* unused harmony export [FuncName] */，其中[FuncName] 为export 的方法名称

### 使用 terser 删除无用代码

