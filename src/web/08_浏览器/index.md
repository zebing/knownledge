# 浏览器

## 重绘/重染
## bom(window)
[Window MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

* BOM是browser object model的缩写，简称浏览器对象模型
* BOM提供了独立于内容而与浏览器窗口进行交互的对象
* 由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window
* BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性
* BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C
* BOM最初是Netscape浏览器标准的一部分

## document
### Node
[Node MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

**常用属性**

* childNodes
* firstChild
* lastChild
* nextSibling
* previousSibling
* nodeName
* nodeType
* parentNode

**常用方法**

* appendChild
* insertBefore
* isSameNode
* removeChild
* replaceChild
### Element
所有属性继承自它的祖先接口 Node，并且扩展了 Node 的父接口 EventTarget
[Element MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)
* attributes
* classList
* className
* clientHeight, clientLeft, clientRight, clientTop, clientWidth
* id
* innerHTML
* outerHTML
* scrollHeight , scrollLeft, scrollRight, scrollTop,scrollWidth
* tagName
## 垃圾回收
在javascript中，用户无需关心内存的分配以及回收，这一切都由javascript自身完成。v8引擎的垃圾回收器会对已分配的内存自动进行回收。

**分代回收**
v8引擎将内存（堆）分为新生区和老生区。新生区较活跃，老生区保存在新生区存活一定时间之后的对象。
- 新生区
    新生区使用Scavenge算法清理。

    新生区的对象存活时间较短，内存分配非常容易。我们只需保有一个指向内存区的指针，不断根据新对象的大小对其进行递增即可。当该指针达到了新生区的末尾，就会有一次清理（小周期），清理掉新生区中不活跃的死对象。

    新生区分为两个区，出区和入区。当出区内存被占满之后，我们交换出区和入区（这样所有的对象都归属在入区当中），然后将入区中活跃的对象复制至出区或老生区当中。Scavenge算法在所有对象都处理完毕时终止。这时入区的内容都可视为垃圾，可能会在未来释放或重用。
- 老生区
    老生区使用标记-清除与标记-紧缩算法。

   **什么样的对象会移到老生区？需要满足以下条件**：
    1.   经历过一次Scavenge算法。
    
    **在老生代中，以下情况会先启动标记清除算法**：
    
    1. 某一个空间没有分块的时候
    2. 空间中被对象超过一定限制
    3. 空间不能保证新生代中的对象移动到老生代中

    在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行，你可以点击 该博客 详细阅读。
    
    清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。

**参考：**

[内存管理 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
[V8 之旅： 垃圾回收器](http://newhtml.net/v8-garbage-collection/)
[V8中的并发标记](https://v8.dev/blog/concurrent-marking)
