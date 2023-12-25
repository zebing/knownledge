import{_ as r,M as d,p as a,q as t,R as e,t as n,N as s,a1 as l}from"./framework-5866ffd3.js";const v={},c=e("h1",{id:"javascript",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#javascript","aria-hidden":"true"},"#"),n(" javascript")],-1),o=e("h2",{id:"数据类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据类型","aria-hidden":"true"},"#"),n(" 数据类型")],-1),u=e("p",null,"最新的 ECMAScript 标准定义了 8 种数据类型:",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean",target:"_blank",rel:"noopener noreferrer"},p={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Number",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Null",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/undefined",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Object",target:"_blank",rel:"noopener noreferrer"},j=l('<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><ol><li><p><strong>全局作用域</strong> 浏览器是window，node是global</p></li><li><p><strong>函数作用域</strong> 函数作用域内，对外是封闭的，从外层的作用域无法直接访问函数内部的作用域</p></li><li><p><strong>块级作用域</strong> 代码块里面声明的变量，代码块外面无法访问。es6语法。var声明仍然可以访问;</p></li><li><p><strong>词法作用域</strong> 词法作用域，也叫静态作用域，它的作用域是指在词法分析阶段就确定了，不会改变。</p></li><li><p><strong>动态作用域</strong> 动态作用域是在运行时根据程序的流程信息来动态确定的，而不是在写代码时进行静态确定的。</p></li></ol><blockquote><p>需要明确的是，Javascript并不具有动态作用域，它只有词法作用域，简单明了。但是，它的 eval()、with、this机制某种程度上很像动态作用域，使用上要特别注意。</p></blockquote><h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2><p>当一段 JavaScript 代码在运行的时候，它实际上是运行在执行上下文中。下面3种类型的代码会创建一个新的执行上下文：</p><ul><li>全局上下文是为运行代码主体而创建的执行上下文，也就是说它是为那些存在于JavaScript 函数之外的任何代码而创建的。</li><li>每个函数会在执行的时候创建自己的执行上下文。这个上下文就是通常说的 “本地上下文”。</li><li>使用 eval() 函数也会创建一个新的执行上下文。</li></ul><p><strong>参考</strong></p>',7),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth",target:"_blank",rel:"noopener noreferrer"},q={href:"https://segmentfault.com/a/1190000009041008",target:"_blank",rel:"noopener noreferrer"},S=l(`<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p>在函数A中返回一个函数B，并且函数B可以访问到函数A的变量。那么函数B就是闭包。</p><blockquote><p>很多人对于闭包的解释可能是函数嵌套了函数，然后返回一个函数。其实这个解释是不完整的，就比如我下面这个例子就可以反驳这个观点。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong></p><ol><li><p>由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。</p></li><li><p>闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。</p></li></ol><p><strong>用途</strong></p><ol><li>访问函数内部的变量</li><li>使变量长期保存在内存中</li></ol><p><strong>参考</strong></p>`,9),w={href:"https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html",target:"_blank",rel:"noopener noreferrer"},C=l(`<h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2><p><strong>概念</strong> 事件委托，通俗地来讲，就是把一个元素响应事件的函数委托到另一个元素。一般是它的父级或更外层元素。</p><p><strong>原理</strong> 主要是通过事件冒泡机制来实现。过程为三个阶段：</p><ol><li>事件捕获阶段</li><li>目标阶段</li><li>事件冒泡阶段 <img src="https://xiaoxinling.coding.net/api/project/7846264/files/21112064/imagePreview" alt="图片"></li></ol><p><strong>基本实现</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul id=&#39;list&#39;&gt;
    &lt;li&gt;li1&lt;/li&gt;
    &lt;li&gt;li2&lt;/li&gt;
    &lt;li&gt;li3&lt;/li&gt;
    &lt;li&gt;li4&lt;/li&gt;
    ...
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.getElementById(&#39;list&#39;).addEventListener(&#39;click&#39;, function(e) {
    var taget = e.target;
    if (target.nodeName.toLocaleLowerCase() === &#39;li&#39;) {
        console.log(&#39;li&#39;)
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点</strong></p><ol><li>减少事件绑定，节约内存</li><li>减少dom更新操作，无需添加事件绑定</li></ol><p><strong>缺点</strong></p><ol><li>不支持onfocus，onBlur等事件</li><li>一旦层级过多，可能会被阻隔掉</li></ol><h2 id="事件循环机制-event-loop" tabindex="-1"><a class="header-anchor" href="#事件循环机制-event-loop" aria-hidden="true">#</a> 事件循环机制 Event Loop</h2><p><strong>同步任务</strong> 主线程上排队执行的任务。js线程是单线程，同步任务执行完之后，才执行微任务，最后执行宏任务。执行宏任务的时候可能会产生微任务，会先执行微任务才执行剩下的宏任务。</p><p><strong>宏任务</strong></p><ul><li>setTimeout</li><li>setInterval</li><li>console.log</li><li>ajax</li><li>addEventListener事件监听</li><li>postMessage</li></ul><p><strong>微任务</strong></p><ul><li>promise</li><li>queueMicroTask</li><li>MutationObserver</li><li>Object.observe</li><li>process.nextTick(Node.js 环境)</li></ul><p><strong>参考：</strong></p>`,18),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop",target:"_blank",rel:"noopener noreferrer"},M={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"this",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#this","aria-hidden":"true"},"#"),n(" this")],-1),P=e("p",null,"与其他语言相比，函数的 this 关键字在 JavaScript 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。",-1),O=e("p",null,"在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）。this 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的。ES2015 引入了箭头函数，箭头函数不提供自身的 this 绑定（this 的值将保持为闭合词法上下文的值）。",-1),E=e("p",null,[e("strong",null,"参考：")],-1),D={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"bind",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bind","aria-hidden":"true"},"#"),n(" bind")],-1),R={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind",target:"_blank",rel:"noopener noreferrer"},A=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj1 = { value: 1 }
var obj2 = { value: 2 }
function addArguments(arg1, arg2) {
    console.log(this)
    return arg1 + arg2
}
var firstBind = addArguments.bind(obj1, 10) // 创建新函数firstBind，绑定this到obj1， 并预设第一个参数为10
var secondBind = addArguments.bind(obj2, 20, 30)
firstBind(1, 2) // {value: 1} 12
secondBind(3,4) // { value: 2 } 50

var firstBind2 = firstBind.bind(obj2, 20) // 创建新函数firstBind2，已绑定过this，再次绑定obj2无效， 并预设第二个参数为20
firstBind2(1, 2) // {value: 1} 30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>手写bind</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.bind = function (context = null, ...args) {
    //返回一个绑定this的函数，这里我们需要保存this
    const _this = this
        //返回一个函数
    return function F() {
        //因为返回一个函数，我们可以new F()需要判断能当做构造函数吗
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2>`,4),J={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply",target:"_blank",rel:"noopener noreferrer"},G=l(`<blockquote><p>注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。</p></blockquote><p><strong>手写apply</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.myApply = function(context, args = []) {
  context = context || {}; // 参数默认值并不会排除null，所以重新赋值
  context.fn = this; // this是调用call的函数
  const result = context.fn(...args);
  delete context.fn; // 执行后删除新增属性
  return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h2>`,4),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call",target:"_blank",rel:"noopener noreferrer"},F=l(`<blockquote><p>注意：该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。</p></blockquote><p><strong>手写call</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.myCall = function(context, ...args) {
  context = context || {}; // 参数默认值并不会排除null，所以重新赋值
  context.fn = this; // this是调用call的函数
  const result = context.fn(...args);
  delete context.fn; // 执行后删除新增属性
  return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h2><p>new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。</p><p><strong>描述</strong> new 关键字会进行如下的操作：</p><ol><li><p>创建一个空的简单JavaScript对象（即{}）；</p></li><li><p>如果构造函数的原型 prototype 是一个对象，则链接新对象到prototype；</p></li><li><p>将新对象作为this的上下文，并执行构造函数；</p></li><li><p>如果该函数没有返回对象，则返回生成的新对象。</p></li></ol><p><strong>参考</strong></p>`,8),W={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"prototype-和-proto",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prototype-和-proto","aria-hidden":"true"},"#"),n(" prototype 和 "),e("strong",null,"proto")],-1),L=e("strong",null,"prototype",-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,"改变Object原型，会通过原型链改变所有对象；除非在原型链中进一步覆盖受这些变化影响的属性和方法。这提供了一个非常强大的、但有潜在危险的机制来覆盖或扩展对象行为。",-1),U=e("strong",null,[e("strong",null,"proto")],-1),H=e("strong",null,"proto",-1),K={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",target:"_blank",rel:"noopener noreferrer"},Y=e("strong",null,"proto",-1),Q=l('<blockquote><p>已废弃 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。</p></blockquote><h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2><p>每个函数都有 <code>prototype</code> 属性，除了 <code>Function.prototype.bind()</code>，该属性指向原型。</p><p>每个对象都有 <code>__proto__ </code>属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 <code>_proto_ </code>来访问。</p><p>对象可以通过 <code>__proto__ </code>来寻找不属于该对象的属性，<code>__proto__</code> 将对象连接起来组成了原型链。</p>',5),X={href:"https://github.com/KieSun/Dream/issues/2",target:"_blank",rel:"noopener noreferrer"},Z=e("p",null,[e("strong",null,"参考")],-1),ee={href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes",target:"_blank",rel:"noopener noreferrer"},ne=l(`<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p>JavaScript常用八种继承方案，在常用七种继承方案的基础之上增加了ES6的类继承。</p><h3 id="构造函数继承" tabindex="-1"><a class="header-anchor" href="#构造函数继承" aria-hidden="true">#</a> 构造函数继承</h3><p><strong>构造函数继承</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function  SuperType(){
    this.color=[&quot;red&quot;,&quot;green&quot;,&quot;blue&quot;];
}
function  SubType(){
    //继承自SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.color.push(&quot;black&quot;);
alert(instance1.color);//&quot;red,green,blue,black&quot;

var instance2 = new SubType();
alert(instance2.color);//&quot;red,green,blue&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong></p><ol><li>只能继承父类的实例属性和方法，不能继承原型属性/方法</li><li>无法实现复用，每个子类都有父类实例函数的副本，影响性能</li></ol><h3 id="原型链继承" tabindex="-1"><a class="header-anchor" href="#原型链继承" aria-hidden="true">#</a> 原型链继承</h3><p><strong>原型链继承</strong> 原型链继承即重写原型对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype
SubType.prototype = new SuperType(); 

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue()); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong> 多个实例会对引用类型进行篡改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SuperType(){
  this.colors = [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;];
}
function SubType(){}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push(&quot;black&quot;);
alert(instance1.colors); //&quot;red,blue,green,black&quot;

var instance2 = new SubType(); 
alert(instance2.colors); //&quot;red,blue,green,black&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> 组合继承</h3><p><strong>组合继承</strong> 原型链继承和构造函数继承相结合。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function SuperType(name){
  this.name = name;
  this.colors = [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

function SubType(name, age){
  // 继承属性
  // 第二次调用SuperType()
  SuperType.call(this, name);
  this.age = age;
}

// 继承方法
// 构建原型链
// 第一次调用SuperType()
SubType.prototype = new SuperType(); 
// 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){
    alert(this.age);
};

var instance1 = new SubType(&quot;Nicholas&quot;, 29);
instance1.colors.push(&quot;black&quot;);
alert(instance1.colors); //&quot;red,blue,green,black&quot;
instance1.sayName(); //&quot;Nicholas&quot;;
instance1.sayAge(); //29

var instance2 = new SubType(&quot;Greg&quot;, 27);
alert(instance2.colors); //&quot;red,blue,green&quot;
instance2.sayName(); //&quot;Greg&quot;;
instance2.sayAge(); //27
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong> 由于存在两个调用，所以在实例和原型链上会存在两份相同的属性／方法 <img src="https://xiaoxinling.coding.net/api/project/7846264/files/21146924/imagePreview" alt="图片"></p><h3 id="原型式继承" tabindex="-1"><a class="header-anchor" href="#原型式继承" aria-hidden="true">#</a> 原型式继承</h3><p><strong>原型式继承</strong> 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。</p><blockquote><p>Object.create() 可替代如下 object</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function object(obj){
  function F(){}
  F.prototype = obj;
  return new F();
}
var person = {
  name: &quot;Nicholas&quot;,
  friends: [&quot;Shelby&quot;, &quot;Court&quot;, &quot;Van&quot;]
};

var anotherPerson = object(person);
anotherPerson.name = &quot;Greg&quot;;
anotherPerson.friends.push(&quot;Rob&quot;);

var yetAnotherPerson = object(person);
yetAnotherPerson.name = &quot;Linda&quot;;
yetAnotherPerson.friends.push(&quot;Barbie&quot;);

alert(person.friends);   //&quot;Shelby,Court,Van,Rob,Barbie&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*<em>缺点</em></p><ol><li>原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。</li><li>无法继承多个对象参数</li></ol><h3 id="寄生式继承" tabindex="-1"><a class="header-anchor" href="#寄生式继承" aria-hidden="true">#</a> 寄生式继承</h3><p><strong>寄生式继承</strong> 在原型式继承的基础上，增强对象，返回构造函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function object(obj){
  function F(){}
  F.prototype = obj;
  return new F();
}

function createAnother(original){
  var clone = object(original); // 通过调用 object() 函数创建一个新对象
  clone.sayHi = function(){  // 以某种方式来增强对象
    alert(&quot;hi&quot;);
  };
  return clone; // 返回这个对象
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 缺点*</p><ol><li>原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。</li><li>无法继承多个对象参数</li></ol><h3 id="寄生组合继承" tabindex="-1"><a class="header-anchor" href="#寄生组合继承" aria-hidden="true">#</a> 寄生组合继承</h3><p>**寄生组合式继承 ** 结合借用 <strong>构造函数</strong> 传递参数和 <strong>寄生模式</strong> 实现继承</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function inheritPrototype(subType, superType){
  var prototype = Object.create(superType.prototype); // 创建对象，创建父类原型的一个副本
  prototype.constructor = subType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  subType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function SuperType(name){
  this.name = name;
  this.colors = [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
}

// 将父类原型指向子类
inheritPrototype(SubType, SuperType);

// 新增子类原型属性
SubType.prototype.sayAge = function(){
  alert(this.age);
}

var instance1 = new SubType(&quot;xyc&quot;, 23);
var instance2 = new SubType(&quot;lxy&quot;, 23);

instance1.colors.push(&quot;2&quot;); // [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;, &quot;2&quot;]
instance1.colors.push(&quot;3&quot;); // [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;, &quot;3&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf() <strong>这是最成熟的方法，也是现在库实现的方法</strong></p><h3 id="混入方式继承" tabindex="-1"><a class="header-anchor" href="#混入方式继承" aria-hidden="true">#</a> 混入方式继承</h3><p><strong>混入方式继承</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function MyClass() {
     SuperClass.call(this);
     OtherSuperClass.call(this);
}

// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
     // do something
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.assign会把 OtherSuperClass原型上的函数拷贝到 MyClass原型上，使 MyClass 的所有实例都可用 OtherSuperClass 的方法。</p><h3 id="class继承" tabindex="-1"><a class="header-anchor" href="#class继承" aria-hidden="true">#</a> class继承</h3><p><strong>ES6 类继承</strong> es6 类语法提供继承关键字 extends</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class SuperClass {
    constructor(){
        this.type = &#39;SuperClass&#39;
    }
}
class SubClass extends SuperClass{
    constructor(props) {
        super(props);
    }
    sayType() {
        console.log(this.type)
    }
}

const sub = new SubClass()
sub.sayType() // SuperClass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>extends继承的核心代码如下，其实现和上述的寄生组合式继承方式一样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function _inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass &amp;&amp; superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p; return o;
  };
  return _setPrototypeOf(o, p);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>`,41),ie=e("strong",null,"JavaScript模块化",-1),se={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},le=l(`<ul><li>命名冲突</li><li>提高代码可重用性</li></ul><p>** AMD 与 CMD：**</p><p>AMD是 RequireJS 在推广过程中对模块定义的规范化产出。 CMD是 SeaJS 在推广过程中对模块定义的规范化产出。 CMD推崇依赖就近，AMD推崇依赖前置。</p><p><strong>ES Module与CommonJS:</strong></p><ol><li><strong>语法不同</strong></li></ol><p>commonjs是module.exports，exports导出，require导入。ES6则是export导出，import导入。</p><ol start="2"><li><strong>是否存在提升</strong></li></ol><p>ES module在编译期间会将所有import提升到顶部，commonjs不会提升require。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foo()

import { foo } from &#39;module&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这代码并不会报错，因为import会被提升到文件顶部。</p><ol start="3"><li><strong>是否支持动态加载</strong></li></ol><p>commonjs是运行时加载模块，支持动态加载。ES6是在静态编译期间就确定模块的依赖，不支持动态加载。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 报错
import { &#39;f&#39; + &#39;oo&#39; } from &#39;module&#39;

// 报错
let module = &#39;module&#39;
import { foo } from module

// 报错
if (x === 1) {
  import { foo } from &#39;module1&#39;
} else {
  import { foo } from &#39;module2&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。 但ES2020提案引入import()函数，支持动态加载模块。 import()函数接受一个参数specifier，为所要加载的模块的位置，返回一个 promise。 import()类似于Node的require方法，区别主要是前者是异步加载，后者是同步加载。 看个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// main.js
function init() {
  const canvas = &#39;canvas&#39;
  
  // 使用import函数
  import(\`./modules/\${canvas}.js\`).then((module) =&gt; {
    console.log(module.default)
  })
}

init()

// canvas.js
console.log(&#39;canvas.js开始执行&#39;)

export default &#39;canvas&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>导出值</strong></li></ol><p>commonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// a.js
// 第一次require之后就缓存了done
const { done } = require(&#39;./b.js&#39;)

console.log(done)

setTimeout(() =&gt; {
  console.log(done)
}, 500)

// b.js
var done = false

setTimeout(() =&gt; {
  done = true
}, 500)

exports.done = done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行node a.js，两次打印结果应该都是false ES6是导出的一个引用，内部修改可以同步到外部。看一个之前的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// a.js
export var foo = &#39;bar&#39;

setTimeout(() =&gt; foo = &#39;baz&#39;, 500)
复制代码
// index.js
import { foo } from &#39;./a.js&#39;

console.log(foo)

setTimeout(() =&gt; console.log(foo), 500)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据ES module的特性，开始执行时输出bar，0.5秒后输出 baz。</p><ol start="5"><li><strong>this指向</strong></li></ol><p>commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。 因为ES module采用严格模式，严格模式禁止this指向全局对象。</p><ol start="6"><li><strong>循环加载的处理</strong></li></ol><p>由于之前五个不同点，导致commonjs和es module在处理循环加载时的表现不同。可以参考这篇文章</p><p>6.1. <strong>CommonJs的表现</strong></p><p>根据 6.4 ，在commonjs中，代码在require的时就会全部执行，然后在内存生成一个对象，内部修改不会同步到外部。一旦出现某个模块被&quot;循环加载&quot;，就只输出已经执行的部分，还未执行的部分不会输出。 比如可以运行如下例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// mian.js
var a = require(&#39;./a.js&#39;)

var b = require(&#39;./b.js&#39;)

// 在 main.js 之中, a.done=true, b.done=true
console.log(&#39;在 main.js 之中, a.done=%j, b.done=%j&#39;, a.done, b.done)

// a.js
exports.done = false

console.log(&#39;a 开始执行&#39;)

var b = require(&#39;./b.js&#39;)

// 在 a.js 之中，b.done = true
console.log(&#39;在 a.js 之中，b.done = %j&#39;, b.done)

exports.done = true

console.log(&#39;a.js 执行完毕&#39;)

// b.js
exports.done = false

// 返回a.js已经执行的部分，此时done为false
var a = require(&#39;./a.js&#39;)

// 在 b.js 之中，a.done = false
console.log(&#39;在 b.js 之中，a.done = %j&#39;, a.done)

exports.done = true

console.log(&#39;b.js 执行完毕&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.2. <strong>ES module的表现</strong></p><p>在ES module中，import存在提升，且导出值是只是一个引用，等到真的需要用到时，会再去模块里面去取值。比如导出一个变量，内部修改会影响外部。 可以运行这个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// a.js
console.log(&#39;执行a.js&#39;)

// import会被提升到顶部
import { bar } from &#39;./b.js&#39;

export function foo() {
  bar()
  console.log(&#39;执行完毕&#39;)
}

foo()

console.log(&#39;a.js执行完毕&#39;)

// b.js
console.log(&#39;执行b.js&#39;)

import { foo } from &#39;./a.js&#39;

export function bar() {  
  if (Math.random() &gt; 0.5) {
    foo()
  }
}

console.log(&#39;b.js执行完毕&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行a.js，输出结果应该类型于</p><p>“执行b.js” “b.js执行完毕” “执行a.js” “执行完毕” “a.js执行完毕”四种输出的顺序是固定的，但“执行完毕”的输出次数不定</p><p><strong>CommonJS与AMD/CMD:</strong></p><p>AMD/CMD是CommonJS在浏览器端的解决方案。 CommonJS是同步加载（代码在本地，加载时间基本等于硬盘读取时间）。 AMD/CMD是异步加载（浏览器必须这么做，代码在服务端）</p><p>** UMD与AMD/CMD**</p><p>UMD（Universal Module Definition）是AMD和CommonJS的糅合，跨平台的解决方案。 AMD模块以浏览器第一的原则发展，异步加载模块。 CommonJS模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。 UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。</p>`,37),re={href:"https://juejin.im/post/5b7d2f45e51d4538826f4c28",target:"_blank",rel:"noopener noreferrer"},de=l(`<h2 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝" aria-hidden="true">#</a> 深浅拷贝</h2><p><strong>浅拷贝</strong> 可以通过 <code>Object.assign</code> 来解决这个问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>深拷贝</strong> 这个问题通常可以通过 JSON.parse(JSON.stringify(object)) 来解决。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = {
    age: 1,
    jobs: {
        first: &#39;FE&#39;
    }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = &#39;native&#39;
console.log(b.jobs.first) // FE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题：</strong></p><ul><li>会忽略 undefined</li><li>会忽略 symbol</li><li>不能序列化函数</li><li>不能解决循环引用的对象</li></ul><p><strong>手写深拷贝函数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const clone = (data, hash = new WeakMap()) =&gt; {
  // 对象
  if (Object.prototype.toString.call(data) === &#39;[object Object]&#39;) {
    const target = {};
    const value = hash.get(data);
    if(value) return value;
    hash.set(data, target);

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        target[key] = clone(data[key], hash);
      }
    }

    return target;
  }

  // 数组
  if (Object.prototype.toString.call(data) === &#39;[object Array]&#39;) {
    return data.map(item =&gt; clone(item, hash));
  }

  return data;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖节流" tabindex="-1"><a class="header-anchor" href="#防抖节流" aria-hidden="true">#</a> 防抖节流</h2><p><strong>防抖</strong> Debounce 防抖： 最后一个人说了算。 例如一个搜索框，在你输入关键词的过程中，会触发n次change事件，便会发起n次请求，造成不必要的性能损失。防抖就是为了解决这个问题。在输入关键词这个动作未完成之前，不会发起请求，直到输完之后才会发起请求。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定时器</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  
  <span class="token comment">// 将debounce处理结果当作函数返回</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments

    <span class="token comment">// 每次事件被触发时，都去清除之前的旧定时器</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设立新定时器</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用debounce来包装scroll的回调</span>
<span class="token keyword">const</span> better_scroll <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发了滚动事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节流</strong> Throttle 节流： 第一个人说了算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function throttle(fn, delay) {
  let timeout = null;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() =&gt; {
        fn(...args)
        clearTimeout(timeout)
        timeout = null
      }, delay)
    }
  }
}

// 用Throttle来包装scroll的回调
const better_scroll = Throttle(() =&gt; console.log(&#39;触发了滚动事件&#39;), 1000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> promise</h2>`,15),ae={href:"https://github.com/Yangfan2016/learn-translate/blob/master/1-Promises-A%2B_zh.md",target:"_blank",rel:"noopener noreferrer"},te=l(`<p>** Promise 状态** promise 一共有如下三种状态，只有在pending的时候才可改变</p><ol><li>等待中（pending）</li><li>完成了 （resolved）</li><li>拒绝了（rejected） <strong>手写Promise</strong></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function MyPromise(executor){
  let self = this
  self.value = undefined
  self.reason = undefined
  // 默认promise状态是pending
  self.status = &#39;pending&#39;
  // 用来保存then 方法中，第一个参数
  self.onResolvedCallbacks = []
  // 用来保存then 方法中，第二个参数
  self.onRejectedCallbacks = []
  function resolve(value){
    if(self.status === &#39;pending&#39;){ //保证状态一旦变更，不能再次修改
      self.value = value
      self.status = &#39;resolved&#39; // 成功状态
      self.onResolvedCallbacks.forEach(fn =&gt; {
        fn()
      })
    }
  }
  function reject(reason){
    if(self.status === &#39;pending&#39;){
      self.reason = reason
      self.status = &#39;rejected&#39; //失败状态
      self.onRejectedCallbacks.forEach(fn =&gt; {
        fn()
      })
    }
  }
  executor(resolve, reject) // 因为会立即执行这个执行器函数
}

MyPromise.prototype.then = function(onFulfilled, onRejected){
  let self = this
  if(self.status === &#39;resolved&#39;){
    onFulfilled(self.value)
  }
  if(self.status === &#39;rejected&#39;){
    onRejected(self.reason)
  }
  if(self.status === &#39;pending&#39;){
  // 订阅
    self.onResolvedCallbacks.push(function(){
      onFulfilled(self.value)
    })
    self.onRejectedCallbacks.push(function(){
      onRejected(self.reason)
    })
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整版：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 三种状态
const PENDING = &quot;pending&quot;;
const RESOLVED = &quot;resolved&quot;;
const REJECTED = &quot;rejected&quot;;
// promise 接收一个函数参数，该函数会立即执行
function MyPromise(fn) {
  let _this = this;
  _this.currentState = PENDING;
  _this.value = undefined;
  // 用于保存 then 中的回调，只有当 promise
  // 状态为 pending 时才会缓存，并且每个实例至多缓存一个
  _this.resolvedCallbacks = [];
  _this.rejectedCallbacks = [];

  _this.resolve = function (value) {
    if (value instanceof MyPromise) {
      // 如果 value 是个 Promise，递归执行
      return value.then(_this.resolve, _this.reject)
    }
    setTimeout(() =&gt; { // 异步执行，保证执行顺序
      if (_this.currentState === PENDING) {
        _this.currentState = RESOLVED;
        _this.value = value;
        _this.resolvedCallbacks.forEach(cb =&gt; cb());
      }
    })
  };

  _this.reject = function (reason) {
    setTimeout(() =&gt; { // 异步执行，保证执行顺序
      if (_this.currentState === PENDING) {
        _this.currentState = REJECTED;
        _this.value = reason;
        _this.rejectedCallbacks.forEach(cb =&gt; cb());
      }
    })
  }
  // 用于解决以下问题
  // new Promise(() =&gt; throw Error(&#39;error))
  try {
    fn(_this.resolve, _this.reject);
  } catch (e) {
    _this.reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  var self = this;
  // 规范 2.2.7，then 必须返回一个新的 promise
  var promise2;
  // 规范 2.2.onResolved 和 onRejected 都为可选参数
  // 如果类型不是函数需要忽略，同时也实现了透传
  // Promise.resolve(4).then().then((value) =&gt; console.log(value))
  onResolved = typeof onResolved === &#39;function&#39; ? onResolved : v =&gt; v;
  onRejected = typeof onRejected === &#39;function&#39; ? onRejected : r =&gt; throw r;

  if (self.currentState === RESOLVED) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      // 规范 2.2.4，保证 onFulfilled，onRjected 异步执行
      // 所以用了 setTimeout 包裹下
      setTimeout(function () {
        try {
          var x = onResolved(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      });
    }));
  }

  if (self.currentState === REJECTED) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        // 异步执行onRejected
        try {
          var x = onRejected(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (reason) {
          reject(reason);
        }
      });
    }));
  }

  if (self.currentState === PENDING) {
    return (promise2 = new MyPromise(function (resolve, reject) {
      self.resolvedCallbacks.push(function () {
        // 考虑到可能会有报错，所以使用 try/catch 包裹
        try {
          var x = onResolved(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });

      self.rejectedCallbacks.push(function () {
        try {
          var x = onRejected(self.value);
          resolutionProcedure(promise2, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });
    }));
  }
};
// 规范 2.3
function resolutionProcedure(promise2, x, resolve, reject) {
  // 规范 2.3.1，x 不能和 promise2 相同，避免循环引用
  if (promise2 === x) {
    return reject(new TypeError(&quot;Error&quot;));
  }
  // 规范 2.3.2
  // 如果 x 为 Promise，状态为 pending 需要继续等待否则执行
  if (x instanceof MyPromise) {
    if (x.currentState === PENDING) {
      x.then(function (value) {
        // 再次调用该函数是为了确认 x resolve 的
        // 参数是什么类型，如果是基本类型就再次 resolve
        // 把值传给下个 then
        resolutionProcedure(promise2, value, resolve, reject);
      }, reject);
    } else {
      x.then(resolve, reject);
    }
    return;
  }
  // 规范 2.3.3.3.3
  // reject 或者 resolve 其中一个执行过得话，忽略其他的
  let called = false;
  // 规范 2.3.3，判断 x 是否为对象或者函数
  if (x !== null &amp;&amp; (typeof x === &quot;object&quot; || typeof x === &quot;function&quot;)) {
    // 规范 2.3.3.2，如果不能取出 then，就 reject
    try {
      // 规范 2.3.3.1
      let then = x.then;
      // 如果 then 是函数，调用 x.then
      if (typeof then === &quot;function&quot;) {
        // 规范 2.3.3.3
        then.call(
          x,
          y =&gt; {
            if (called) return;
            called = true;
            // 规范 2.3.3.3.1
            resolutionProcedure(promise2, y, resolve, reject);
          },
          e =&gt; {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        // 规范 2.3.3.4
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // 规范 2.3.4，x 为基本类型
    resolve(x);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考</strong></p>`,6),ve={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},ce=l(`<h2 id="generator" tabindex="-1"><a class="header-anchor" href="#generator" aria-hidden="true">#</a> Generator</h2><p>迭代器</p><p>function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个 Generator 对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* generator(i){
  yield i + 1;
  yield i + 2;
  return i + 3;
}

var gen = generator(10);

console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>源码实现</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function _regeneratorRuntime() {
  const ctx = {
    next: 0,
    done: false, // 表示迭代器没有执行完毕
    stop() {
      ctx.done = true;
      return ctx.sent;
    },
    sent: null, // 用于接收用户传递的值
    abrupt(next, val) {
      ctx.next = &#39;end&#39;;
      return val
    }
  }

  return {
    mark(genFn) {
      return genFn
    },
    wrap(generator) {
      return {
        next(val) {
          ctx.sent = val;
          let value = generator(ctx);
          return {
            value: value,
            done: ctx.done
          }
        }
      }
    }
  }
}

function generator(i) {
  return _regeneratorRuntime().wrap(function generator$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return i + 1;
        case 2:
          _context.next = 4;
          return i + 2;
        case 4:
          return _context.abrupt(&quot;return&quot;, i + 3);
        case 5:
        case &quot;end&quot;:
          return _context.stop();
      }
    }
  });
}
var gen = generator(10);
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考</strong></p>`,7),oe={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators",target:"_blank",rel:"noopener noreferrer"},be=l(`<h2 id="async-和-await" tabindex="-1"><a class="header-anchor" href="#async-和-await" aria-hidden="true">#</a> async 和 await</h2><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getData() {
  return new Promise((resolve) =&gt; {
    setTimeout(() =&gt; {
      resolve(&#39;data&#39;);
    }, 300);
  });
}

async function test() {
  const value1 = await getData();
  const value2 = await getData();
  return \`value1: \${value1}, value2: \${value2}\`;
}

test().then((res) =&gt; {
  console.log(res)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>babel generator</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg); 
    var value = info.value;
    console.log(info)
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this, args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, &quot;next&quot;, value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, &quot;throw&quot;, err);
      }
      _next(undefined);
    });
  };
}
function getData() {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(&#39;data&#39;);
    }, 300);
  });
}
function test() {
  return _asyncToGenerator(function* () {
    const value1 = yield getData();
    const value2 = yield getData();
    return \`value1: \${value1}, value2: \${value2}\`;
  })(this, arguments);
}

test().then(res =&gt; {
  console.log(res);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function _regeneratorRuntime() {
  const ctx = {
    next: 0,
    done: false, // 表示迭代器没有执行完毕
    stop() {
      ctx.done = true;
      return ctx.sent;
    },
    sent: null, // 用于接收用户传递的值
    abrupt(next, val) {
      ctx.next = &#39;end&#39;;
      return val
    }
  }

  return {
    mark(genFn) {
      return genFn
    },
    wrap(generator) {
      return {
        next(val) {
          ctx.sent = val;
          let value = generator(ctx);
          return {
            value: value,
            done: ctx.done
          }
        }
      }
    }
  }
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, &quot;next&quot;, value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, &quot;throw&quot;, err);
      }
      _next(undefined);
    });
  };
}
function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(&quot;data&quot;);
    }, 300);
  });
}
function test() {
  return _test.apply(this, arguments);
}
function _test() {
  _test = _asyncToGenerator(
    _regeneratorRuntime().mark(function _callee() {
      var value1, value2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return getData();
            case 2:
              value1 = _context.sent;
              _context.next = 5;
              return getData();
            case 5:
              value2 = _context.sent;
              return _context.abrupt(
                &quot;return&quot;,
                &quot;value1: &quot;.concat(value1, &quot;, value2: &quot;).concat(value2)
              );
            case 7:
            case &quot;end&quot;:
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _test.apply(this, arguments);
}
test().then(function (res) {
  console.log(res);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h2><p>Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。</p><p>handler 对象的方法 handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。</p><p>所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。</p><ul><li>handler.getPrototypeOf() Object.getPrototypeOf 方法的捕捉器。</li><li>handler.setPrototypeOf() Object.setPrototypeOf 方法的捕捉器。</li><li>handler.isExtensible() Object.isExtensible 方法的捕捉器。</li><li>handler.preventExtensions() Object.preventExtensions 方法的捕捉器。</li><li>handler.getOwnPropertyDescriptor() Object.getOwnPropertyDescriptor 方法的捕捉器。</li><li>handler.defineProperty() Object.defineProperty 方法的捕捉器。</li><li>handler.has() in 操作符的捕捉器。</li><li>handler.get() 属性读取操作的捕捉器。</li><li>handler.set() 属性设置操作的捕捉器。</li><li>handler.deleteProperty() delete 操作符的捕捉器。</li><li>handler.ownKeys() Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。</li><li>handler.apply() 函数调用操作的捕捉器。</li><li>handler.construct() new 操作符的捕捉器。</li></ul><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2><p>Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。</p><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Map 转化为数组
Array.from(Map)

// 数组转化为Map
new Map([[&#39;key&#39;,&#39;value&#39;]])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="weakmap" tabindex="-1"><a class="header-anchor" href="#weakmap" aria-hidden="true">#</a> WeakMap</h2><p>WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。</p><p>在 JavaScript 里，map API 可以通过使其四个 API 方法共用两个数组(一个存放键,一个存放值)来实现。给这种 map 设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该 map 取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。</p><p>但这样的实现会有两个很大的缺点，首先赋值和搜索操作都是 O(n) 的时间复杂度( n 是键值对的个数)，因为这两个操作都需要遍历全部整个数组来进行匹配。另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。</p><p>相比之下，原生的 WeakMap 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生 WeakMap 的结构是特殊且有效的，其用于映射的 key 只有在其没有被回收时才是有效的。</p><p>正由于这样的弱引用，WeakMap 的 key 是不可枚举的 (没有方法能给出所有的 key)。如果key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。因此，如果你想要这种类型对象的 key 值的列表，你应该使用 Map。</p><p>基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。</p><h2 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h2><p>Node 是一个接口，各种类型的 DOM API 对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如, 继承同一组方法，或者用同样的方式测试。</p><p>以下接口都从 Node 继承其方法和属性：</p><p>Document, Element, Attr, CharacterData (which Text, Comment, and CDATASection inherit), ProcessingInstruction (en-US), DocumentFragment, DocumentType, Notation, Entity, EntityReference 在方法和属性不相关的特定情况下，这些接口可能返回 null。它们可能会抛出异常 - 例如，当将子节点添加到不允许子节点存在的节点时。</p><p><strong>参考</strong></p>`,29),me={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Node",target:"_blank",rel:"noopener noreferrer"},pe=e("h2",{id:"正则表达式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正则表达式","aria-hidden":"true"},"#"),n(" 正则表达式")],-1),he={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noopener noreferrer"},ge=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
.（小数点）默认匹配除换行符之外的任何单个字符。
* 匹配前一个表达式 0 次或多次。等价于 {0,}。
? 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
+ 匹配前面一个表达式 1 次或者多次。等价于 {1,}。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h2><h3 id="偏函数" tabindex="-1"><a class="header-anchor" href="#偏函数" aria-hidden="true">#</a> 偏函数</h3>`,3),fe={href:"https://en.wikipedia.org/wiki/Partial_application",target:"_blank",rel:"noopener noreferrer"},xe=l(`<p><strong>例子</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function partial(fn,a){
    return function(b,c){
        return fn(a,b,c);
    }
}

function add(a, b) {
    return a + b;
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2) // 3

// 假设有一个 partial 函数可以做到局部应用
var addOne = partial(add, 1);

addOne(2) // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="柯里化函数" tabindex="-1"><a class="header-anchor" href="#柯里化函数" aria-hidden="true">#</a> 柯里化函数</h3>`,3),_e={href:"https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96",target:"_blank",rel:"noopener noreferrer"},ye=l(`<p><strong>例子</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function multiply(a) {
    return (b) =&gt; {
        return (c) =&gt; {
            return a * b * c
        }
    }
}
multiply(1)(2)(3) // 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3>`,3),je={href:"https://zh.wikipedia.org/wiki/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"};function ke(qe,Se){const i=d("ExternalLinkIcon");return a(),t("div",null,[c,o,u,e("ul",null,[e("li",null,[e("p",null,[n("7 种 "),e("a",b,[n("原始类型"),s(i)])]),e("ol",null,[e("li",null,[e("p",null,[e("a",m,[n("Boolean"),s(i)])])]),e("li",null,[e("p",null,[e("a",p,[n("Number"),s(i)])])]),e("li",null,[e("p",null,[e("a",h,[n("String"),s(i)])])]),e("li",null,[e("p",null,[e("a",g,[n("BigInt"),s(i)])])]),e("li",null,[e("p",null,[e("a",f,[n("symbol"),s(i)])])]),e("li",null,[e("p",null,[e("a",x,[n("Null"),s(i)])])]),e("li",null,[e("p",null,[e("a",_,[n("Undefined"),s(i)])])])])]),e("li",null,[e("p",null,[n("和"),e("a",y,[n("Object"),s(i)])])])]),j,e("p",null,[e("a",k,[n("JavaScript 执行上下文 mdn"),s(i)])]),e("p",null,[e("a",q,[n("深入理解JavaScript执行上下文、函数堆栈、提升的概念"),s(i)])]),S,e("p",null,[e("a",w,[n("学习Javascript闭包（Closure）"),s(i)])]),C,e("p",null,[e("a",T,[n("Event Loop MDN链接"),s(i)])]),e("p",null,[e("a",M,[n("在 JavaScript 中通过 queueMicrotask() 使用微任务 MD"),s(i)])]),N,P,O,E,e("p",null,[e("a",D,[n("this MDN链接"),s(i)])]),z,e("p",null,[n("bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。多次绑定，只有一次有效 "),e("a",R,[n("bind MDN链接"),s(i)])]),A,e("p",null,[n("apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。"),e("a",J,[n("apply MDN链接"),s(i)])]),G,e("p",null,[n("call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。"),e("a",B,[n("call MDN链接"),s(i)])]),F,e("p",null,[e("a",W,[n("new 运算符 mdn"),s(i)])]),I,e("p",null,[L,n(" Object.prototype 属性表示 Object 的原型对象。"),e("a",V,[n("prototype MDN 链接"),s(i)]),n(" 几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），尽管这些属性可能被遮蔽（亦称为覆盖）。但是有时候可能故意创建不具有典型原型链继承的对象，比如通过Object.create(null)创建的对象，或者通过Object.setPrototypeOf方法改变原型链。")]),$,e("p",null,[U,n(" Object.prototype 的 "),H,n(" 属性是一个访问器属性（一个getter函数和一个setter函数）, 暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。"),e("a",K,[Y,n(" MDN链接"),s(i)])]),Q,e("p",null,[n("如果你想更进一步的了解原型，可以仔细阅读 "),e("a",X,[n("深度解析原型中的各个难点"),s(i)]),n("。")]),Z,e("p",null,[e("a",ee,[n("对象原型 MDN"),s(i)])]),ne,e("p",null,[ie,e("a",se,[n("模块化 MDN链接"),s(i)])]),le,e("p",null,[e("a",re,[n("博客链接"),s(i)])]),de,e("p",null,[e("a",ae,[n("【译】 Promises/A+ 规范"),s(i)])]),te,e("p",null,[e("a",ve,[n("Promise MDN"),s(i)])]),ce,e("p",null,[e("a",oe,[n("Generator MDN"),s(i)])]),e("p",null,[e("a",ue,[n("迭代器和生成器"),s(i)])]),be,e("p",null,[e("a",me,[n("Node NDN"),s(i)])]),pe,e("p",null,[e("a",he,[n("正则表达式 MDN"),s(i)])]),ge,e("p",null,[e("a",fe,[n("偏函数"),s(i)]),n(" 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。")]),xe,e("p",null,[e("a",_e,[n("柯里化"),s(i)]),n("（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。")]),ye,e("p",null,[e("a",je,[n("高阶函数"),s(i)])])])}const Ce=r(v,[["render",ke],["__file","index.html.vue"]]);export{Ce as default};
