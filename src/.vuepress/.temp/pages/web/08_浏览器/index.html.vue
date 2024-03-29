<template><div><h1 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h1>
<h2 id="重绘-重染" tabindex="-1"><a class="header-anchor" href="#重绘-重染" aria-hidden="true">#</a> 重绘/重染</h2>
<h2 id="bom-window" tabindex="-1"><a class="header-anchor" href="#bom-window" aria-hidden="true">#</a> bom(window)</h2>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank" rel="noopener noreferrer">Window MDN<ExternalLinkIcon/></a></p>
<ul>
<li>BOM是browser object model的缩写，简称浏览器对象模型</li>
<li>BOM提供了独立于内容而与浏览器窗口进行交互的对象</li>
<li>由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window</li>
<li>BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性</li>
<li>BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C</li>
<li>BOM最初是Netscape浏览器标准的一部分</li>
</ul>
<h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> document</h2>
<h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Node" target="_blank" rel="noopener noreferrer">Node MDN<ExternalLinkIcon/></a></p>
<p><strong>常用属性</strong></p>
<ul>
<li>childNodes</li>
<li>firstChild</li>
<li>lastChild</li>
<li>nextSibling</li>
<li>previousSibling</li>
<li>nodeName</li>
<li>nodeType</li>
<li>parentNode</li>
</ul>
<p><strong>常用方法</strong></p>
<ul>
<li>appendChild</li>
<li>insertBefore</li>
<li>isSameNode</li>
<li>removeChild</li>
<li>replaceChild</li>
</ul>
<h3 id="element" tabindex="-1"><a class="header-anchor" href="#element" aria-hidden="true">#</a> Element</h3>
<p>所有属性继承自它的祖先接口 Node，并且扩展了 Node 的父接口 EventTarget
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element" target="_blank" rel="noopener noreferrer">Element MDN<ExternalLinkIcon/></a></p>
<ul>
<li>attributes</li>
<li>classList</li>
<li>className</li>
<li>clientHeight, clientLeft, clientRight, clientTop, clientWidth</li>
<li>id</li>
<li>innerHTML</li>
<li>outerHTML</li>
<li>scrollHeight , scrollLeft, scrollRight, scrollTop,scrollWidth</li>
<li>tagName</li>
</ul>
<h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h2>
<p>在javascript中，用户无需关心内存的分配以及回收，这一切都由javascript自身完成。v8引擎的垃圾回收器会对已分配的内存自动进行回收。</p>
<p><strong>分代回收</strong>
v8引擎将内存（堆）分为新生区和老生区。新生区较活跃，老生区保存在新生区存活一定时间之后的对象。</p>
<ul>
<li>
<p>新生区
新生区使用Scavenge算法清理。</p>
<p>新生区的对象存活时间较短，内存分配非常容易。我们只需保有一个指向内存区的指针，不断根据新对象的大小对其进行递增即可。当该指针达到了新生区的末尾，就会有一次清理（小周期），清理掉新生区中不活跃的死对象。</p>
<p>新生区分为两个区，出区和入区。当出区内存被占满之后，我们交换出区和入区（这样所有的对象都归属在入区当中），然后将入区中活跃的对象复制至出区或老生区当中。Scavenge算法在所有对象都处理完毕时终止。这时入区的内容都可视为垃圾，可能会在未来释放或重用。</p>
</li>
<li>
<p>老生区
老生区使用标记-清除与标记-紧缩算法。</p>
<p><strong>什么样的对象会移到老生区？需要满足以下条件</strong>：</p>
<ol>
<li>经历过一次Scavenge算法。</li>
</ol>
<p><strong>在老生代中，以下情况会先启动标记清除算法</strong>：</p>
<ol>
<li>某一个空间没有分块的时候</li>
<li>空间中被对象超过一定限制</li>
<li>空间不能保证新生代中的对象移动到老生代中</li>
</ol>
<p>在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行，你可以点击 该博客 详细阅读。</p>
<p>清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。</p>
</li>
</ul>
<p><strong>参考：</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management" target="_blank" rel="noopener noreferrer">内存管理 - MDN<ExternalLinkIcon/></a>
<a href="http://newhtml.net/v8-garbage-collection/" target="_blank" rel="noopener noreferrer">V8 之旅： 垃圾回收器<ExternalLinkIcon/></a>
<a href="https://v8.dev/blog/concurrent-marking" target="_blank" rel="noopener noreferrer">V8中的并发标记<ExternalLinkIcon/></a></p>
</div></template>


