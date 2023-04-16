<template><div><h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h1>
<p><a href="https://zh-hans.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">react 文档<ExternalLinkIcon/></a></p>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<h3 id="挂载" tabindex="-1"><a class="header-anchor" href="#挂载" aria-hidden="true">#</a> 挂载</h3>
<ul>
<li>constructor</li>
<li>getDerivedStateFromProps</li>
<li>render</li>
<li>componentDidMount</li>
</ul>
<h3 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h3>
<ul>
<li>getDerivedStateFromProps</li>
<li>shouldComponentUpdate</li>
<li>render</li>
<li>getSnapshotBeforeUpdate</li>
<li>componentDidUpdate</li>
</ul>
<h3 id="销毁" tabindex="-1"><a class="header-anchor" href="#销毁" aria-hidden="true">#</a> 销毁</h3>
<ul>
<li>componentWillUnMount</li>
</ul>
<p><strong>参考</strong></p>
<p><a href="https://zh-hans.reactjs.org/docs/react-component.html" target="_blank" rel="noopener noreferrer">react 生命周期<ExternalLinkIcon/></a></p>
<h2 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> react hooks</h2>
<h3 id="动机" tabindex="-1"><a class="header-anchor" href="#动机" aria-hidden="true">#</a> 动机</h3>
<ol>
<li>在组件之间复用状态逻辑很难</li>
</ol>
<p>React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）。如果你使用过 React 一段时间，你也许会熟悉一些解决此类问题的方案，比如 render props 和 高阶组件。但是这类方案需要重新组织你的组件结构，这可能会很麻烦，使你的代码难以理解。如果你在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”。尽管我们可以在 DevTools 过滤掉它们，但这说明了一个更深层次的问题：React 需要为共享状态逻辑提供更好的原生途径。</p>
<p>你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷。</p>
<p><strong>参考</strong></p>
<p><a href="https://zhuanlan.zhihu.com/p/64602922" target="_blank" rel="noopener noreferrer">使用React Hook提高代码复用性, 状态复用<ExternalLinkIcon/></a></p>
<ol start="2">
<li>复杂组件变得难以理解</li>
</ol>
<p>我们经常维护一些组件，组件起初很简单，但是逐渐会被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。例如，组件常常在 componentDidMount 和 componentDidUpdate 中获取数据。但是，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。</p>
<p>在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。同时，这也是很多人将 React 与状态管理库结合使用的原因之一。但是，这往往会引入了很多抽象概念，需要你在不同的文件之间来回切换，使得复用变得更加困难。</p>
<p>为了解决这个问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。</p>
<p>我们将在使用 Effect Hook 中对此展开更多讨论。</p>
<ol start="3">
<li>难以理解的 class</li>
</ol>
<p>除了代码复用和代码管理会遇到困难外，我们还发现 class 是学习 React 的一大屏障。你必须去理解 JavaScript 中 this 的工作方式，这与其他语言存在巨大差异。还不能忘记绑定事件处理器。没有稳定的语法提案，这些代码非常冗余。大家可以很好地理解 props，state 和自顶向下的数据流，但对 class 却一筹莫展。即便在有经验的 React 开发者之间，对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景。</p>
<p>另外，React 已经发布五年了，我们希望它能在下一个五年也与时俱进。就像 Svelte，Angular，Glimmer等其它的库展示的那样，组件预编译会带来巨大的潜力。尤其是在它不局限于模板的时候。最近，我们一直在使用 Prepack 来试验 component folding，也取得了初步成效。但是我们发现使用 class 组件会无意中鼓励开发者使用一些让优化措施无效的方案。class 也给目前的工具带来了一些问题。例如，class 不能很好的压缩，并且会使热重载出现不稳定的情况。因此，我们想提供一个使代码更易于优化的 API。</p>
<p>为了解决这些问题，Hook 使你在非 class 的情况下可以使用更多的 React 特性。 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术。</p>
<h3 id="没有破坏性改动" tabindex="-1"><a class="header-anchor" href="#没有破坏性改动" aria-hidden="true">#</a> 没有破坏性改动</h3>
<ul>
<li>完全可选的</li>
<li>100% 向后兼容的</li>
<li>现在可用。 Hook 已发布于 v16.8.0</li>
</ul>
</div></template>


