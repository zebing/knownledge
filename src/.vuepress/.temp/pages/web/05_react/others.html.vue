<template><div><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="react-scheduler-为什么默认使用-messagechannel-实现-而不用settimeout。" tabindex="-1"><a class="header-anchor" href="#react-scheduler-为什么默认使用-messagechannel-实现-而不用settimeout。" aria-hidden="true">#</a> React Scheduler 为什么默认使用 MessageChannel 实现, 而不用setTimeout。</h2>
<p>React Scheduler 使用 MessageChannel 的原因为：<a href="https://juejin.cn/post/6953804914715803678" target="_blank" rel="noopener noreferrer">生成宏任务<ExternalLinkIcon/></a></p>
<p>setTimeout 默认回调时间最短是4毫秒，导致浪费4毫秒时间。</p>
<h2 id="react-18不再依赖concurrent-mode开启并发-而是以是否使用并发特性作为是否开启并发更新的依据。" tabindex="-1"><a class="header-anchor" href="#react-18不再依赖concurrent-mode开启并发-而是以是否使用并发特性作为是否开启并发更新的依据。" aria-hidden="true">#</a> React 18不再依赖Concurrent Mode开启并发, 而是以是否使用并发特性作为是否开启并发更新的依据。</h2>
<p><a href="https://segmentfault.com/a/1190000040973864" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></p>
<h2 id="react-diff" tabindex="-1"><a class="header-anchor" href="#react-diff" aria-hidden="true">#</a> react diff</h2>
<p><a href="https://github.com/facebook/react/blob/aa9988e5e669122ed0d76c72f2dea159eef872b4/packages/react-reconciler/src/ReactChildFiber.new.js#L750" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>从头到尾遍历，直到找到不一样的。</p>
</li>
<li>
<p>如果 newChildren 已经到达末尾，delete 所有 oldChildren 余下节点。</p>
</li>
<li>
<p>如果 oldChildren 到达末尾，create 所有 newChildren 余下节点。</p>
</li>
<li>
<p>newChildren 和 oldChildren 都没到达末尾。</p>
<p>4.1. 将 oldChildren 余下节点生成 key - index map。 existingChildren。</p>
<p>4.2. 遍历 newChildren 余下节点。key 在 oldChildren 存在则 patch, 并从 existingChildren map 中移除, 不存在则 create。</p>
<p>4.3. delete 所有 existingChildren 余下节点。</p>
</li>
</ol>
</div></template>


