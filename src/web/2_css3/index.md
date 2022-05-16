# CSS3

[CSS（层叠样式表） MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

[css 可视化文档](https://cssreference.io/)

## flex 弹性布局

**浮动布局的问题**
* 难以控制。如果站点上存在一些不可预知的内容，那么布局将变的难以维护。
* 源码顺序依赖。弹性布局依赖于HTML源码，在做响应式设计时将难以为不同的媒体查询变更布局。
* 列等高问题。如果容器中有两到三列不同的内容，并且在任意内容的条件下，都需要设置为相同的高度。浮动布局难以实现这个要求。
* 内容居中。使用浮动布局难以将内容水平且垂直居中。

### flex-direction

主轴方向
 
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

### flex-wrap

是否换行
* nowrap（默认）：不换行。
* wrap：换行，第一行在上方。
* wrap-reverse：换行，第一行在下方。

### justify-content

项目在主轴上的对齐方式。

* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items

项目在交叉轴上如何对齐.

* flex-start：交叉轴的起点对齐。
* flex-end：交叉轴的终点对齐。
* center：交叉轴的中点对齐。
* baseline: 项目的第一行文字的基线对齐。
* stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### align-content

多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。

### item

#### order
属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

#### flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

#### align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

**参考：**

[CSS 弹性盒子布局 MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)

## 居中

### 水平居中
* text-align: center;
* margin: 0 auto;
* position transform

```
position: absolute;
left: 50%;
top: 50%;
width: 300px;
height: 300px;
background: blue;
transform-origin: center;
transform: translate(-50%, -50%);
```
* flex item-align: center

### 垂直居中
* line-height
* padding(已知高度)
* table-cell vertical-align
* flex justify-content: center
* position transform

## 设备像素比
**物理像素：**  设备屏幕具体的像素点，屏幕的基本单元，是有实体的。
**逻辑像素：** 也叫“设备独立像素”（Device Independent Pixel，DIP），可以理解为反映在CSS/JS程序里面的像素点，也就是说css像素是逻辑像素的一种
**设备像素比：** 物理像素与逻辑像素之比

**参考**

[设备像素比 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio)

## css 选择器
标签选择器 < 类选择器 < ID选择器 < 内联选择器 < !important

权重：

内联选择器 1000

id选择器 100

class类选择器 10

伪类选择器 10

元素 1

通配符选择器 0

**参考**

[CSS 选择器 MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

[css权重 简书](https://www.jianshu.com/p/08ca24758675)
## 块格式化上下文

**块格式化上下文（Block Formatting Context，BFC** 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

* 根元素(html)
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block）
* 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
* 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
* 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
* overflow 值不为 visible 的块元素
* display 值为 flow-root 的元素
* contain 值为 layout、content或 paint 的元素
* 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
* 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
* 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
* column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

**参考**

[块格式化上下文 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
## margin 外边距重叠
- **同一层相邻元素之间**    相邻的两个元素之间的外边距重叠，除非后一个元素加上clear-fix清除浮动。
- **没有内容将父元素和后代元素分开**  如果没有边框border，内边距padding，行内内容，也没有创建块级格式上下文或清除浮动来分开一个块级元素的上边界margin-top 与其内一个或多个后代块级元素的上边界margin-top；或没有边框，内边距，行内内容，高度height，最小高度min-height或 最大高度max-height 来分开一个块级元素的下边界margin-bottom与其内的一个或多个后代后代块元素的下边界margin-bottom，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。
- **空的块级元素** 当一个块元素上边界margin-top 直接贴到元素下边界margin-bottom时也会发生边界折叠。这种情况会发生在一个块元素完全没有设定边框border、内边距paddng、高度height、最小高度min-height 、最大高度max-height 、内容设定为inline或是加上clear-fix的时候。

**参考**

[外边距重叠 MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
## postcss
[postcss 官方文档](https://github.com/postcss/postcss/blob/main/docs/README-cn.md)

[postcss-loader webpack](https://webpack.docschina.org/loaders/postcss-loader/)
## sass/less
[sass 官方文档](https://www.sass.hk/docs/)

[less 官方文档](https://less.bootcss.com/)
