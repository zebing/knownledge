<template><div><h1 id="vue-2-0" tabindex="-1"><a class="header-anchor" href="#vue-2-0" aria-hidden="true">#</a> vue 2.0</h1>
<p><a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">参考文档<ExternalLinkIcon/></a></p>
<p><a href="https://www.bookstack.cn/read/vue-analysis/readme.md" target="_blank" rel="noopener noreferrer">vue 源码解析<ExternalLinkIcon/></a></p>
<p><a href="https://naotu.baidu.com/file/68cd13ffa495fc762bd5a9a2877c4087?token=fe3dd3920efe4628" target="_blank" rel="noopener noreferrer">vue 源码解析脑图 <ExternalLinkIcon/></a></p>
<h2 id="如何重写数组方法" tabindex="-1"><a class="header-anchor" href="#如何重写数组方法" aria-hidden="true">#</a> 如何重写数组方法</h2>
<p>首先在数据<code v-pre>defineProperty</code>监控阶段将Observer实例保存到数组对象的<a href="https://github.com/vuejs/vue/blob/65a333fcb43737c73a66a088cea17361963e5f66/src/core/observer/index.js#L46" target="_blank" rel="noopener noreferrer"><code v-pre>__ob__</code><ExternalLinkIcon/></a>属性中。</p>
<p>然后通过重写数组的<a href="https://github.com/vuejs/vue/blob/65a333fcb43737c73a66a088cea17361963e5f66/src/core/observer/array.js#L11" target="_blank" rel="noopener noreferrer">methodsToPatch<ExternalLinkIcon/></a>这些方法。
当用户调用这些被重写的方法时，先通过调用原先的方法拿到结果。然后对结果添加<a href="https://github.com/vuejs/vue/blob/65a333fcb43737c73a66a088cea17361963e5f66/src/core/observer/array.js#L40" target="_blank" rel="noopener noreferrer">observeArray<ExternalLinkIcon/></a>响应式监控。</p>
<p>最后调用<a href="https://github.com/vuejs/vue/blob/65a333fcb43737c73a66a088cea17361963e5f66/src/core/observer/array.js#L42" target="_blank" rel="noopener noreferrer">ob.dep.notify()<ExternalLinkIcon/></a>通知视图更新。</p>
<p><strong>参考</strong></p>
<p><a href="https://ustbhuangyi.github.io/vue-analysis/v2/reactive/questions.html#%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">重写数组<ExternalLinkIcon/></a></p>
</div></template>


