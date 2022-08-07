# 其他
## 判断类型
**typeof**
typeof 只能判断一般的数据类型，对Array等识别为 object

**instanceof**
用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链，无法检测null, undefined,bool等类型，可通过```Symbol.hasInstance```来伪造，[Symbol.hasInstance MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)
```
class MyArray {  
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

**参考**

[判断js数据类型的四种方法，以及各自的优缺点（很详细哦）](https://blog.csdn.net/lhjuejiang/article/details/79623973)

## 生成[min, max] 的随机数
```
Math.round(Math.random() * (max - min)) + min
```

## 创建 1 - n 的数组
```
Array.from({ length: 20 }, (value, index) => index + 1);
// (20) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

new Array(20).fill(1)
// (20) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
```
## == 和 ===
> 涉及面试题：== 和 === 有什么区别？

- 严格相等比较 (===)
    比较两个变量的值以及类型。两者有其一不相等则结果为false

- 非严格相等比较 (==)
    在比较之前会先转换成相同类型，然后在比较两个值是否相同。

[相等性判断 MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

**x == 1 && x == 2 && x == 3**
通过重写对象中的 **valueOf** 或 **toString** 方法实现

```
class Test {
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

if (x == 1 && x == 2 && x == 3) {
    console.log(true)
}

// this.value:  1
// this.value:  2
// this.value:  3
// true
// undefined
```
**x === 1 && x === 2 && x === 3**
使用Object.defineProperty实现

```
var value = 0; //window.value
Object.defineProperty(window, 'a', {
    get: function() {
        return this.value += 1;
    }
});

console.log(a===1 && a===2 && a===3) //true
```


## 0.1 + 0.2 !== 0.3
因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。

0.1和0.2转换成二进制后会无限循环。
 ```
 0.1 -> 0.0001100110011001...(无限循环)
0.2 -> 0.0011001100110011...(无限循环)
```
但是由于IEEE 754尾数位数限制，需要将后面多余的位截掉（本文借助这个[网站](https://babbage.cs.qc.cuny.edu/IEEE-754.old/Decimal.html)直观展示浮点数在内存中的二进制表示）

**参考**

[0.1 + 0.2不等于0.3？为什么JavaScript有这种“骚”操作？](https://juejin.im/post/6844903680362151950)

## 替换日期格式，xxxx-yy-zz 替换成 xxxx-zz-yy
```
'2020-11-12'.replace(/([\d]*)-([\d]*)-([\d]*)/, "$1-$3-$2");
```
## String.trim
```
String.prototype.trim = function () {
  return this.replace(/^[\s]+|[\s]+$/g, '');
};
```

## 从输入链接到展示页面的过程
[渲染页面：浏览器的工作原理 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Performance/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
