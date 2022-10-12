# javascript

## 数据类型
最新的 ECMAScript 标准定义了 8 种数据类型:
* 7 种 [原始类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)

	1. [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)

	2. [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)

	3. [String](https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%AD%97%E7%AC%A6%E4%B8%B2)

	4. [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

	5. [symbol](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)

	6. [Null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)

	7. [Undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined)

* 和[Object](https://developer.mozilla.org/zh-CN/docs/Glossary/Object)

## 作用域

1. **全局作用域**
浏览器是window，node是global

2.  **函数作用域**
函数作用域内，对外是封闭的，从外层的作用域无法直接访问函数内部的作用域

3.  **块级作用域**
代码块里面声明的变量，代码块外面无法访问。es6语法。var声明仍然可以访问;

4. **词法作用域**
词法作用域，也叫静态作用域，它的作用域是指在词法分析阶段就确定了，不会改变。

5. **动态作用域**
动态作用域是在运行时根据程序的流程信息来动态确定的，而不是在写代码时进行静态确定的。

> 需要明确的是，Javascript并不具有动态作用域，它只有词法作用域，简单明了。但是，它的 eval()、with、this机制某种程度上很像动态作用域，使用上要特别注意。

## 执行上下文
当一段 JavaScript 代码在运行的时候，它实际上是运行在执行上下文中。下面3种类型的代码会创建一个新的执行上下文：

* 全局上下文是为运行代码主体而创建的执行上下文，也就是说它是为那些存在于JavaScript 函数之外的任何代码而创建的。
* 每个函数会在执行的时候创建自己的执行上下文。这个上下文就是通常说的 “本地上下文”。
* 使用 eval() 函数也会创建一个新的执行上下文。

**参考**

[JavaScript 执行上下文 mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)

[深入理解JavaScript执行上下文、函数堆栈、提升的概念](https://segmentfault.com/a/1190000009041008)

## 闭包

在函数A中返回一个函数B，并且函数B可以访问到函数A的变量。那么函数B就是闭包。

> 很多人对于闭包的解释可能是函数嵌套了函数，然后返回一个函数。其实这个解释是不完整的，就比如我下面这个例子就可以反驳这个观点。
```
function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1
```

**缺点**
1. 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2. 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

**用途**
1. 访问函数内部的变量
2. 使变量长期保存在内存中

**参考**

[学习Javascript闭包（Closure）](https://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

## 事件委托

**概念**
事件委托，通俗地来讲，就是把一个元素响应事件的函数委托到另一个元素。一般是它的父级或更外层元素。

**原理**
主要是通过事件冒泡机制来实现。过程为三个阶段：
1. 事件捕获阶段
2. 目标阶段
3. 事件冒泡阶段
![图片](https://xiaoxinling.coding.net/api/project/7846264/files/21112064/imagePreview)

**基本实现**

```
<ul id='list'>
    <li>li1</li>
    <li>li2</li>
    <li>li3</li>
    <li>li4</li>
    ...
</ul>
```

```
document.getElementById('list').addEventListener('click', function(e) {
    var taget = e.target;
    if (target.nodeName.toLocaleLowerCase() === 'li') {
        console.log('li')
    }
})
```
**优点**
1. 减少事件绑定，节约内存
2. 减少dom更新操作，无需添加事件绑定

**缺点**
1. 不支持onfocus，onBlur等事件
2. 一旦层级过多，可能会被阻隔掉

## 事件循环机制 Event Loop

**同步任务**
主线程上排队执行的任务。js线程是单线程，同步任务执行完之后，才执行微任务，最后执行宏任务。执行宏任务的时候可能会产生微任务，会先执行微任务才执行剩下的宏任务。

**宏任务**
* setTimeout
* setInterval
* console.log
* ajax
* addEventListener事件监听
* postMessage

**微任务**
* promise
* queueMicroTask
* MutationObserver
* Object.observe
* process.nextTick(Node.js 环境)

**参考：**

[Event Loop MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

[在 JavaScript 中通过 queueMicrotask() 使用微任务 MD](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)

## this

与其他语言相比，函数的 this 关键字在 JavaScript 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。

在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）。this 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的。ES2015 引入了箭头函数，箭头函数不提供自身的 this 绑定（this 的值将保持为闭合词法上下文的值）。

**参考：**

[this MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

## bind

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。多次绑定，只有一次有效
[bind MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```
var obj1 = { value: 1 }
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
```

**手写bind**

```
Function.prototype.bind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
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

```

## apply

apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。[apply MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
> 注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

**手写apply**


```
Function.prototype.myApply = function(context, args = []) {
  context = context || window; // 参数默认值并不会排除null，所以重新赋值
  context.fn = this; // this是调用call的函数
  const result = context.fn(...args);
  delete context.fn; // 执行后删除新增属性
  return result;
}
```
## call

call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。[call MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
> 注意：该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

**手写call**

```
Function.prototype.myCall = function(context, ...args) {
  context = context || window; // 参数默认值并不会排除null，所以重新赋值
  context.fn = this; // this是调用call的函数
  const result = context.fn(...args);
  delete context.fn; // 执行后删除新增属性
  return result;
}
```

## new

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

**描述**
new 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即{}）；

2. 链接该对象（设置该对象的constructor）到另一个对象 ；

3. 将步骤1新创建的对象作为this的上下文 ；

4.如果该函数没有返回对象，则返回this。

**参考**

[new 运算符 mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

## prototype 和 __proto__

**prototype**
Object.prototype 属性表示 Object 的原型对象。[prototype MDN 链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），尽管这些属性可能被遮蔽（亦称为覆盖）。但是有时候可能故意创建不具有典型原型链继承的对象，比如通过Object.create(null)创建的对象，或者通过Object.setPrototypeOf方法改变原型链。

改变Object原型，会通过原型链改变所有对象；除非在原型链中进一步覆盖受这些变化影响的属性和方法。这提供了一个非常强大的、但有潜在危险的机制来覆盖或扩展对象行为。

**__proto__**
Object.prototype 的 __proto__  属性是一个访问器属性（一个getter函数和一个setter函数）, 暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。[__proto__ MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
> 已废弃
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

## 原型

每个函数都有 ```prototype``` 属性，除了 ```Function.prototype.bind()```，该属性指向原型。

每个对象都有 ```__proto__ ```属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 ```_proto_ ```来访问。

对象可以通过 ```__proto__ ```来寻找不属于该对象的属性，```__proto__``` 将对象连接起来组成了原型链。

如果你想更进一步的了解原型，可以仔细阅读 [深度解析原型中的各个难点](https://github.com/KieSun/Dream/issues/2)。

**参考**

[对象原型 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)

## 继承

JavaScript常用八种继承方案，在常用七种继承方案的基础之上增加了ES6的类继承。

### 构造函数继承

**构造函数继承**
```
function  SuperType(){
    this.color=["red","green","blue"];
}
function  SubType(){
    //继承自SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.color.push("black");
alert(instance1.color);//"red,green,blue,black"

var instance2 = new SubType();
alert(instance2.color);//"red,green,blue"
```
**缺点**
1. 只能继承父类的实例属性和方法，不能继承原型属性/方法
2. 无法实现复用，每个子类都有父类实例函数的副本，影响性能

### 原型链继承

**原型链继承**
原型链继承即重写原型对象

```
function SuperType() {
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
```
**缺点**
多个实例会对引用类型进行篡改

```
function SuperType(){
  this.colors = ["red", "blue", "green"];
}
function SubType(){}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"

var instance2 = new SubType(); 
alert(instance2.colors); //"red,blue,green,black"
```

### 组合继承

**组合继承**
原型链继承和构造函数继承相结合。

```
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
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

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27
```
**缺点**
由于存在两个调用，所以在实例和原型链上会存在两份相同的属性／方法
![图片](https://xiaoxinling.coding.net/api/project/7846264/files/21146924/imagePreview)

### 原型式继承

**原型式继承**
利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
> Object.create() 可替代如下 object 

```
function object(obj){
  function F(){}
  F.prototype = obj;
  return new F();
}
var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
```

**缺点*
1. 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
2. 无法继承多个对象参数

### 寄生式继承

**寄生式继承**
在原型式继承的基础上，增强对象，返回构造函数

```
function object(obj){
  function F(){}
  F.prototype = obj;
  return new F();
}

function createAnother(original){
  var clone = object(original); // 通过调用 object() 函数创建一个新对象
  clone.sayHi = function(){  // 以某种方式来增强对象
    alert("hi");
  };
  return clone; // 返回这个对象
}

```
** 缺点*
1. 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
2. 无法继承多个对象参数

### 寄生组合继承

**寄生组合式继承 **
结合借用 **构造函数** 传递参数和 **寄生模式** 实现继承


```
function inheritPrototype(subType, superType){
  var prototype = Object.create(superType.prototype); // 创建对象，创建父类原型的一个副本
  prototype.constructor = subType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
  subType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
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

var instance1 = new SubType("xyc", 23);
var instance2 = new SubType("lxy", 23);

instance1.colors.push("2"); // ["red", "blue", "green", "2"]
instance1.colors.push("3"); // ["red", "blue", "green", "3"]
```

![图片](/api/project/7846264/files/21162732/imagePreview)
这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()
**这是最成熟的方法，也是现在库实现的方法**

### 混入方式继承

**混入方式继承**

```
function MyClass() {
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

```
Object.assign会把 OtherSuperClass原型上的函数拷贝到 MyClass原型上，使 MyClass 的所有实例都可用 OtherSuperClass 的方法。

### class继承

**ES6 类继承**
es6 类语法提供继承关键字 extends

```
class SuperClass {
    constructor(){
        this.type = 'SuperClass'
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
```
extends继承的核心代码如下，其实现和上述的寄生组合式继承方式一样

```
function _inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass && superClass.prototype, {
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
```
## 模块化

**JavaScript模块化**
[模块化 MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)
- 命名冲突
- 提高代码可重用性

** AMD 与 CMD：**

AMD是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD是 SeaJS 在推广过程中对模块定义的规范化产出。
CMD推崇依赖就近，AMD推崇依赖前置。

**ES Module与CommonJS:**

CommonJS模块是对象，是运行时加载，运行时才把模块挂载在exports之上（加载整个模块的所有），加载模块其实就是查找对象属性。
ES Module不是对象，是使用export显示指定输出，再通过import输入。此法为编译时加载，编译时遇到import就会生成一个只读引用。等到运行时就会根据此引用去被加载的模块取值。所以不会加载模块所有方法，仅取所需。
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口


**CommonJS与AMD/CMD:**

AMD/CMD是CommonJS在浏览器端的解决方案。
CommonJS是同步加载（代码在本地，加载时间基本等于硬盘读取时间）。
AMD/CMD是异步加载（浏览器必须这么做，代码在服务端）


** UMD与AMD/CMD**

UMD（Universal Module Definition）是AMD和CommonJS的糅合，跨平台的解决方案。
AMD模块以浏览器第一的原则发展，异步加载模块。
CommonJS模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。
UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。

[博客链接](https://juejin.im/post/5b7d2f45e51d4538826f4c28)


## 深浅拷贝

**浅拷贝**
可以通过 ```Object.assign``` 来解决这个问题
```
let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
```
**深拷贝**
这个问题通常可以通过 JSON.parse(JSON.stringify(object)) 来解决。
```
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE
```
**问题：**
* 会忽略 undefined
* 会忽略 symbol
* 不能序列化函数
* 不能解决循环引用的对象

**手写深拷贝函数**
```
const clone = (data, hash = new WeakMap()) => {
  // 对象
  if (Object.prototype.toString.call(data) === '[object Object]') {
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
  if (Object.prototype.toString.call(data) === '[object Array]') {
    return data.map(item => clone(item, hash));
  }

  return data;
}
```

## 防抖节流

**防抖**
Debounce 防抖： 最后一个人说了算。
例如一个搜索框，在你输入关键词的过程中，会触发n次change事件，便会发起n次请求，造成不必要的性能损失。防抖就是为了解决这个问题。在输入关键词这个动作未完成之前，不会发起请求，直到输完之后才会发起请求。

```javascript
// fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间
function debounce(fn, delay) {
  // 定时器
  let timer = null
  
  // 将debounce处理结果当作函数返回
  return function () {
    let args = arguments

    // 每次事件被触发时，都去清除之前的旧定时器
    if(timer) {
        clearTimeout(timer)
    }

    // 设立新定时器
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

// 用debounce来包装scroll的回调
const better_scroll = debounce(() => console.log('触发了滚动事件'), 1000)

```

**节流**
Throttle 节流： 第一个人说了算

```
function throttle(fn, delay) {
  let timeout = null;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn(...args)
        clearTimeout(timeout)
        timeout = null
      }, delay)
    }
  }
}

// 用Throttle来包装scroll的回调
const better_scroll = Throttle(() => console.log('触发了滚动事件'), 1000)

```
## promise

[【译】 Promises/A+ 规范](https://github.com/Yangfan2016/learn-translate/blob/master/1-Promises-A%2B_zh.md)

** Promise  状态**
promise 一共有如下三种状态，只有在pending的时候才可改变
1. 等待中（pending）
2. 完成了 （resolved）
3. 拒绝了（rejected）
**手写Promise**

```
function MyPromise(executor){
  let self = this
  self.value = undefined
  self.reason = undefined
  // 默认promise状态是pending
  self.status = 'pending'
  // 用来保存then 方法中，第一个参数
  self.onResolvedCallbacks = []
  // 用来保存then 方法中，第二个参数
  self.onRejectedCallbacks = []
  function resolve(value){
    if(self.status === 'pending'){ //保证状态一旦变更，不能再次修改
      self.value = value
      self.status = 'resolved' // 成功状态
      self.onResolvedCallbacks.forEach(fn => {
        fn()
      })
    }
  }
  function reject(reason){
    if(self.status === 'pending'){
      self.reason = reason
      self.status = 'rejected' //失败状态
      self.onRejectedCallbacks.forEach(fn => {
        fn()
      })
    }
  }
  executor(resolve, reject) // 因为会立即执行这个执行器函数
}

MyPromise.prototype.then = function(onFulfilled, onRejected){
  let self = this
  if(self.status === 'resolved'){
    onFulfilled(self.value)
  }
  if(self.status === 'rejected'){
    onRejected(self.reason)
  }
  if(self.status === 'pending'){
  // 订阅
    self.onResolvedCallbacks.push(function(){
      onFulfilled(self.value)
    })
    self.onRejectedCallbacks.push(function(){
      onRejected(self.reason)
    })
  }
}
```

**完整版：**
```
// 三种状态
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
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
    setTimeout(() => { // 异步执行，保证执行顺序
      if (_this.currentState === PENDING) {
        _this.currentState = RESOLVED;
        _this.value = value;
        _this.resolvedCallbacks.forEach(cb => cb());
      }
    })
  };

  _this.reject = function (reason) {
    setTimeout(() => { // 异步执行，保证执行顺序
      if (_this.currentState === PENDING) {
        _this.currentState = REJECTED;
        _this.value = reason;
        _this.rejectedCallbacks.forEach(cb => cb());
      }
    })
  }
  // 用于解决以下问题
  // new Promise(() => throw Error('error))
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
  // Promise.resolve(4).then().then((value) => console.log(value))
  onResolved = typeof onResolved === 'function' ? onResolved : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => throw r;

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
    return reject(new TypeError("Error"));
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
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    // 规范 2.3.3.2，如果不能取出 then，就 reject
    try {
      // 规范 2.3.3.1
      let then = x.then;
      // 如果 then 是函数，调用 x.then
      if (typeof then === "function") {
        // 规范 2.3.3.3
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            // 规范 2.3.3.3.1
            resolutionProcedure(promise2, y, resolve, reject);
          },
          e => {
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
```

**参考**

[Promise MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Generator

迭代器

function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个  Generator  对象。

```
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);// 移交执行权
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

**源码实现**
```
// 源码实现
function createIterator(items) {
    var i = 0
    return {
        next: function() {
            var done = (i >= items.length)
            var value = !done ? items[i++] : undefined
            
            return {
                done: done,
                value: value
            }
        }
    }
}

// 应用
const iterator = createIterator([1, 2, 3])
console.log(iterator.next())	// {value: 1, done: false}
console.log(iterator.next())	// {value: 2, done: false}
console.log(iterator.next())	// {value: 3, done: false}
console.log(iterator.next())	// {value: undefined, done: true}
```

**参考**

[Generator MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)

[迭代器和生成器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)

## async 和 await

示例
```
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
}

async function test() {
  return await getData();
}

test().then((res) => {
  console.log(res)
})
```
自码demo
```
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
}

function* generator () {
  yield getData();
  yield getData();
}
const gen = generator();
console.log(gen.next().value.then((res) => console.log('value: ', res)))
console.log(gen.next().value.then((res) => console.log('value: ', res)))
console.log(gen.next())
```
babel生成

```
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch(error) {
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
  return function() {
    var self = this,
    args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator(function * () {
    return 'data';
  });
  return _getData.apply(this, arguments);
}

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator(function * () {
    const data = yield getData();
    return data;
  });
  return _test.apply(this, arguments);
}

test();
```

## proxy

Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。

handler 对象的方法
handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。

所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

* handler.getPrototypeOf()
Object.getPrototypeOf 方法的捕捉器。
* handler.setPrototypeOf()
Object.setPrototypeOf 方法的捕捉器。
* handler.isExtensible()
Object.isExtensible 方法的捕捉器。
* handler.preventExtensions()
Object.preventExtensions 方法的捕捉器。
* handler.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptor 方法的捕捉器。
* handler.defineProperty()
Object.defineProperty 方法的捕捉器。
* handler.has()
in 操作符的捕捉器。
* handler.get()
属性读取操作的捕捉器。
* handler.set()
属性设置操作的捕捉器。
* handler.deleteProperty()
delete 操作符的捕捉器。
* handler.ownKeys()
Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。
* handler.apply()
函数调用操作的捕捉器。
* handler.construct()
new 操作符的捕捉器。

## Set

Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。

## Map
Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

```
// Map 转化为数组
Array.from(Map)

// 数组转化为Map
new Map([['key','value']])
```

## WeakMap
WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

在 JavaScript 里，map API 可以通过使其四个 API 方法共用两个数组(一个存放键,一个存放值)来实现。给这种 map 设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该 map 取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。

但这样的实现会有两个很大的缺点，首先赋值和搜索操作都是 O(n) 的时间复杂度( n 是键值对的个数)，因为这两个操作都需要遍历全部整个数组来进行匹配。另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。

相比之下，原生的 WeakMap 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行。原生 WeakMap 的结构是特殊且有效的，其用于映射的 key 只有在其没有被回收时才是有效的。

正由于这样的弱引用，WeakMap 的 key 是不可枚举的 (没有方法能给出所有的 key)。如果key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。因此，如果你想要这种类型对象的 key 值的列表，你应该使用 Map。

基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。

## Node
Node 是一个接口，各种类型的 DOM API 对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如, 继承同一组方法，或者用同样的方式测试。

以下接口都从 Node 继承其方法和属性：

Document, Element, Attr, CharacterData (which Text, Comment, and CDATASection inherit), ProcessingInstruction (en-US), DocumentFragment, DocumentType, Notation, Entity, EntityReference
在方法和属性不相关的特定情况下，这些接口可能返回 null。它们可能会抛出异常 - 例如，当将子节点添加到不允许子节点存在的节点时。

**参考**

[Node NDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

## 正则表达式
[正则表达式 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

```

.（小数点）默认匹配除换行符之外的任何单个字符。
* 匹配前一个表达式 0 次或多次。等价于 {0,}。
? 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
+ 匹配前面一个表达式 1 次或者多次。等价于 {1,}。
```

## 函数式编程

### 偏函数
[偏函数](https://en.wikipedia.org/wiki/Partial_application)
在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

**例子**

```
function partial(fn,a){
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
```

### 柯里化函数

[柯里化](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

**例子**
```
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
multiply(1)(2)(3) // 6
```

### 高阶函数
[高阶函数](https://zh.wikipedia.org/wiki/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0)

