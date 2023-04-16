<template><div><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="判断类型" tabindex="-1"><a class="header-anchor" href="#判断类型" aria-hidden="true">#</a> 判断类型</h2>
<p><strong>typeof</strong>
typeof 只能判断一般的数据类型，对Array等识别为 object</p>
<p><strong>instanceof</strong>
用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链，无法检测null, undefined,bool等类型，可通过<code v-pre>Symbol.hasInstance</code>来伪造，<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance" target="_blank" rel="noopener noreferrer">Symbol.hasInstance MDN链接<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class MyArray {  
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考</strong></p>
<p><a href="https://blog.csdn.net/lhjuejiang/article/details/79623973" target="_blank" rel="noopener noreferrer">判断js数据类型的四种方法，以及各自的优缺点（很详细哦）<ExternalLinkIcon/></a></p>
<h2 id="生成-min-max-的随机数" tabindex="-1"><a class="header-anchor" href="#生成-min-max-的随机数" aria-hidden="true">#</a> 生成[min, max] 的随机数</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Math.round(Math.random() * (max - min)) + min
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-1-n-的数组" tabindex="-1"><a class="header-anchor" href="#创建-1-n-的数组" aria-hidden="true">#</a> 创建 1 - n 的数组</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Array.from({ length: 20 }, (value, index) => index + 1);
// (20) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

new Array(20).fill(1)
// (20) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="和" tabindex="-1"><a class="header-anchor" href="#和" aria-hidden="true">#</a> == 和 ===</h2>
<blockquote>
<p>涉及面试题：== 和 === 有什么区别？</p>
</blockquote>
<ul>
<li>
<p>严格相等比较 (===)
比较两个变量的值以及类型。两者有其一不相等则结果为false</p>
</li>
<li>
<p>非严格相等比较 (==)
在比较之前会先转换成相同类型，然后在比较两个值是否相同。</p>
</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness" target="_blank" rel="noopener noreferrer">相等性判断 MDN链接<ExternalLinkIcon/></a></p>
<p><strong>x == 1 &amp;&amp; x == 2 &amp;&amp; x == 3</strong>
通过重写对象中的 <strong>valueOf</strong> 或 <strong>toString</strong> 方法实现</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class Test {
    constructor() {
        this.value = 0;
    }

    valueOf() {
        this.value++;
        console.log('valueOf this.value: ', this.value);
        return this.value;
    }

    toString() {
        this.value++;
        console.log('toString this.value: ', this.value);
        return this.value;
    }
}

const x = new Test();

if (x == 1 &amp;&amp; x == 2 &amp;&amp; x == 3) {
    console.log(true)
}

// this.value:  1
// this.value:  2
// this.value:  3
// true
// undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>x === 1 &amp;&amp; x === 2 &amp;&amp; x === 3</strong>
使用Object.defineProperty实现</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>var value = 0; //window.value
Object.defineProperty(window, 'a', {
    get: function() {
        return this.value += 1;
    }
});

console.log(a===1 &amp;&amp; a===2 &amp;&amp; a===3) //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0-1-0-2-0-3" tabindex="-1"><a class="header-anchor" href="#_0-1-0-2-0-3" aria-hidden="true">#</a> 0.1 + 0.2 !== 0.3</h2>
<p>因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。</p>
<p>0.1和0.2转换成二进制后会无限循环。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>0.1 -> 0.0001100110011001...(无限循环)
0.2 -> 0.0011001100110011...(无限循环)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是由于IEEE 754尾数位数限制，需要将后面多余的位截掉（本文借助这个<a href="https://babbage.cs.qc.cuny.edu/IEEE-754.old/Decimal.html" target="_blank" rel="noopener noreferrer">网站<ExternalLinkIcon/></a>直观展示浮点数在内存中的二进制表示）</p>
<p><strong>参考</strong></p>
<p><a href="https://juejin.im/post/6844903680362151950" target="_blank" rel="noopener noreferrer">0.1 + 0.2不等于0.3？为什么JavaScript有这种“骚”操作？<ExternalLinkIcon/></a></p>
<h2 id="替换日期格式-xxxx-yy-zz-替换成-xxxx-zz-yy" tabindex="-1"><a class="header-anchor" href="#替换日期格式-xxxx-yy-zz-替换成-xxxx-zz-yy" aria-hidden="true">#</a> 替换日期格式，xxxx-yy-zz 替换成 xxxx-zz-yy</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'2020-11-12'.replace(/([\d]*)-([\d]*)-([\d]*)/, "$1-$3-$2");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="string-trim" tabindex="-1"><a class="header-anchor" href="#string-trim" aria-hidden="true">#</a> String.trim</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String.prototype.trim = function () {
  return this.replace(/^[\s]+|[\s]+$/g, '');
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从输入链接到展示页面的过程" tabindex="-1"><a class="header-anchor" href="#从输入链接到展示页面的过程" aria-hidden="true">#</a> 从输入链接到展示页面的过程</h2>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">渲染页面：浏览器的工作原理 MDN<ExternalLinkIcon/></a></p>
<h2 id="隐式调用tostring和valueof的场景" tabindex="-1"><a class="header-anchor" href="#隐式调用tostring和valueof的场景" aria-hidden="true">#</a> 隐式调用toString和valueOf的场景</h2>
<p><a href="https://juejin.cn/post/7041487859441729550" target="_blank" rel="noopener noreferrer">隐式调用toString和valueOf的场景，你认为对吗<ExternalLinkIcon/></a></p>
</div></template>


