import{_ as e,p as n,q as i,a1 as a}from"./framework-5866ffd3.js";const d={},r=a(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><h3 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h3><h3 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h3><h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><p>保证一个类仅有一个实例，并提供一个访问它的全局访问点。</p><h3 id="普通单例模式" tabindex="-1"><a class="header-anchor" href="#普通单例模式" aria-hidden="true">#</a> 普通单例模式</h3><p>要实现一个标准的单例模式并不复杂，无非是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var Singleton = function(name) {
    this.name = name;
    this.instance = null;
};
Singleton.prototype.getName = function() {
    alert(this.name);
};
Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
};
var a = Singleton.getInstance(&#39;sven1&#39;);
var b = Singleton.getInstance(&#39;sven2&#39;);
alert(a === b); // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="透明的单例模式" tabindex="-1"><a class="header-anchor" href="#透明的单例模式" aria-hidden="true">#</a> 透明的单例模式</h3><p>我们现在的目标是实现一个“透明”的单例类，用户从这个类中创建对象的时候，可以像使用其他任何普通类一样。在下面的例子中，我们将使用CreateDiv单例类，它的作用是负责在页面中创建唯一的div节点.</p><p>在这段代码中，CreateDiv的构造函数实际上负责了两件事情。第一是创建对象和执行初始化init方法，第二是保证只有一个对象。虽然我们目前还没有接触过“单一职责原则”的概念，但可以明确的是，这是一种不好的做法，至少这个构造函数看起来很奇怪。假设我们某天需要利用这个类，在页面中创建千千万万的div，即要让这个类从单例类变成一个普通的可产生多个实例的类，那我们必须得改写CreateDiv构造函数，把控制创建唯一对象的那一段去掉，这种修改会给我们带来不必要的烦恼。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var CreateDiv = (function() {
    var instance;
    var CreateDiv = function(html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };
    CreateDiv.prototype.init = function() {
        var div = document.createElement(&#39;div&#39;);
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();
var a = new CreateDiv(&#39;sven1&#39;);
var b = new CreateDiv(&#39;sven2&#39;);
alert(a === b); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用代理实现单例模式" tabindex="-1"><a class="header-anchor" href="#用代理实现单例模式" aria-hidden="true">#</a> 用代理实现单例模式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var CreateDiv = function(html) {
    this.html = html;
    this.init();
};
CreateDiv.prototype.init = function() {
    var div = document.createElement(&#39;div&#39;);
    div.innerHTML = this.html;
    document.body.appendChild(div);
};
var ProxySingletonCreateDiv = (function() {
    var instance;
    return function(html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();
var a = new ProxySingletonCreateDiv(&#39;sven1&#39;);
var b = new ProxySingletonCreateDiv(&#39;sven2&#39;);
alert(a === b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="惰性单例" tabindex="-1"><a class="header-anchor" href="#惰性单例" aria-hidden="true">#</a> 惰性单例</h3><p>惰性单例指的是在需要的时候才创建对象实例。惰性单例是单例模式的重点，这种技术在实际开发中非常有用，有用的程度可能超出了我们的想象，实际上在本章开头就使用过这种技术，instance实例对象总是在我们调用Singleton.getInstance的时候才被创建，而不是在页面加载好的时候就创建.</p><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><p>定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。</p><h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2><p>代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。代理模式是一种非常有意义的模式，在生活中可以找到很多代理模式的场景。比如，明星都有经纪人作为代理。如果想请明星来办一场商业演出，只能联系他的经纪人。经纪人会把商业演出的细节和报酬都谈好之后，再把合同交给明星签。代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象。</p><h2 id="迭代器模式" tabindex="-1"><a class="header-anchor" href="#迭代器模式" aria-hidden="true">#</a> 迭代器模式</h2><p>迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。</p><p>目前，恐怕只有在一些“古董级”的语言中才会为实现一个迭代器模式而烦恼，现在流行的大部分语言如Java、Ruby等都已经有了内置的迭代器实现，许多浏览器也支持JavaScript的Array.prototype.forEach。</p><h2 id="订阅发布模式" tabindex="-1"><a class="header-anchor" href="#订阅发布模式" aria-hidden="true">#</a> 订阅发布模式</h2><p>发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。在JavaScript开发中，我们一般用事件模型来替代传统的发布—订阅模式。</p><h2 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h2><p>命令模式是最简单和优雅的模式之一，命令模式中的命令（command）指的是一个执行某些特定事情的指令。</p><p>命令模式最常见的应用场景是：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。此时希望用一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够消除彼此之间的耦合关系。</p><h2 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h2><p>组合模式将对象组合成树形结构，以表示“部分整体”的层次结构。除了用来表示树形结构之外，组合模式的另一个好处是通过对象的多态性表现，使得用户对单个对象和组合对象的使用具有一致性，下面分别说明。</p><ul><li>表示树形结构。通过回顾上面的例子，我们很容易找到组合模式的一个优点：提供了一种遍历树形结构的方案，通过调用组合对象的execute方法，程序会递归调用组合对象下面的叶对象的execute方法，所以我们的万能遥控器只需要一次操作，便能依次完成关门、打开电脑、登录QQ这几件事情。组合模式可以非常方便地描述对象部分整体层次结构。</li><li>利用对象多态性统一对待组合对象和单个对象。利用对象的多态性表现，可以使客户端忽略组合对象和单个对象的不同。在组合模式中，客户将统一地使用组合结构中的所有对象，而不需要关心它究竟是组合对象还是单个对象。</li></ul><p>这在实际开发中会给客户带来相当大的便利性，当我们往万能遥控器里面添加一个命令的时候，并不关心这个命令是宏命令还是普通子命令。这点对于我们不重要，我们只需要确定它是一个命令，并且这个命令拥有可执行的execute方法，那么这个命令就可以被添加进万能遥控器。 当宏命令和普通子命令接收到执行execute方法的请求时，宏命令和普通子命令都会做它们各自认为正确的事情。这些差异是隐藏在客户背后的，在客户看来，这种透明性可以让我们非常自由地扩展这个万能遥控器。</p><h2 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式" aria-hidden="true">#</a> 享元模式</h2><p>享元（flyweight）模式是一种用于性能优化的模式，“fly”在这里是苍蝇的意思，意为蝇量级。享元模式的核心是运用共享技术来有效支持大量细粒度的对象。如果系统中因为创建了大量类似的对象而导致内存占用过高，享元模式就非常有用了。在JavaScript中，浏览器特别是移动端的浏览器分配的内存并不算多，如何节省内存就成了一件非常有意义的事情。</p><h2 id="模版方法模式" tabindex="-1"><a class="header-anchor" href="#模版方法模式" aria-hidden="true">#</a> 模版方法模式</h2><p>模板方法模式是一种只需使用继承就可以实现的非常简单的模式。</p><p>模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。 假如我们有一些平行的子类，各个子类之间有一些相同的行为，也有一些不同的行为。如果相同和不同的行为都混合在各个子类的实现中，说明这些相同的行为会在各个子类中重复出现。但实际上，相同的行为可以被搬移到另外一个单一的地方，模板方法模式就是为解决这个问题而生的。在模板方法模式中，子类实现中的相同部分被上移到父类中，而将不同的部分留待子类来实现。这也很好地体现了泛化的思想。</p><h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2><p>适配器模式的作用是解决两个软件实体间的接口不兼容的问题。</p><p>使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。适配器的别名是包装器（wrapper），这是一个相对简单的模式。在程序开发中有许多这样的场景：当我们试图调用模块或者对象的某个接口时，却发现这个接口的格式并不符合目前的需求。这时候有两种解决办法，第一种是修改原来的接口实现，但如果原来的模块很复杂，或者我们拿到的模块是一段别人编写的经过压缩的代码，修改原接口就显得不太现实了。第二种办法是创建一个适配器，将原接口转换为客户希望的另一个接口，客户只需要和适配器打交道。</p><h2 id="职责链模式" tabindex="-1"><a class="header-anchor" href="#职责链模式" aria-hidden="true">#</a> 职责链模式</h2><p>职责链模式的定义是：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。</p><p>职责链模式的名字非常形象，一系列可能会处理请求的对象被连接成一条链，请求在这些对象之间依次传递，直到遇到一个可以处理它的对象，我们把这些对象称为链中的节点，如图13-1所示。</p><h2 id="中介者模式" tabindex="-1"><a class="header-anchor" href="#中介者模式" aria-hidden="true">#</a> 中介者模式</h2><p>中介者模式的作用就是解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可。中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。中介者模式使网状的多对多关系变成了相对简单的一对多关系</p><h2 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式" aria-hidden="true">#</a> 状态模式</h2><p>状态模式是一种非同寻常的优秀模式，它也许是解决某些需求场景的最好方法。虽然状态模式并不是一种简单到一目了然的模式（它往往还会带来代码量的增加），但你一旦明白了状态模式的精髓，以后一定会感谢它带给你的无与伦比的好处。状态模式的关键是区分事物内部的状态，事物内部状态的改变往往会带来事物的行为改变。</p>`,48),s=[r];function t(l,v){return n(),i("div",null,s)}const h=e(d,[["render",t],["__file","index.html.vue"]]);export{h as default};
