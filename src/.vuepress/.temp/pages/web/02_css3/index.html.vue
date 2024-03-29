<template><div><h1 id="css3" tabindex="-1"><a class="header-anchor" href="#css3" aria-hidden="true">#</a> CSS3</h1>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS（层叠样式表） MDN<ExternalLinkIcon/></a></p>
<p><a href="https://cssreference.io/" target="_blank" rel="noopener noreferrer">css 可视化文档<ExternalLinkIcon/></a></p>
<h2 id="flex-弹性布局" tabindex="-1"><a class="header-anchor" href="#flex-弹性布局" aria-hidden="true">#</a> flex 弹性布局</h2>
<p><strong>浮动布局的问题</strong></p>
<ul>
<li>难以控制。如果站点上存在一些不可预知的内容，那么布局将变的难以维护。</li>
<li>源码顺序依赖。弹性布局依赖于HTML源码，在做响应式设计时将难以为不同的媒体查询变更布局。</li>
<li>列等高问题。如果容器中有两到三列不同的内容，并且在任意内容的条件下，都需要设置为相同的高度。浮动布局难以实现这个要求。</li>
<li>内容居中。使用浮动布局难以将内容水平且垂直居中。</li>
</ul>
<h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3>
<p>主轴方向</p>
<ul>
<li>row（默认值）：主轴为水平方向，起点在左端。</li>
<li>row-reverse：主轴为水平方向，起点在右端。</li>
<li>column：主轴为垂直方向，起点在上沿。</li>
<li>column-reverse：主轴为垂直方向，起点在下沿。</li>
</ul>
<h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3>
<p>是否换行</p>
<ul>
<li>nowrap（默认）：不换行。</li>
<li>wrap：换行，第一行在上方。</li>
<li>wrap-reverse：换行，第一行在下方。</li>
</ul>
<h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3>
<p>项目在主轴上的对齐方式。</p>
<ul>
<li>flex-start（默认值）：左对齐</li>
<li>flex-end：右对齐</li>
<li>center： 居中</li>
<li>space-between：两端对齐，项目之间的间隔都相等。</li>
<li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li>
</ul>
<h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3>
<p>项目在交叉轴上如何对齐.</p>
<ul>
<li>flex-start：交叉轴的起点对齐。</li>
<li>flex-end：交叉轴的终点对齐。</li>
<li>center：交叉轴的中点对齐。</li>
<li>baseline: 项目的第一行文字的基线对齐。</li>
<li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li>
</ul>
<h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3>
<p>多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p>
<ul>
<li>flex-start：与交叉轴的起点对齐。</li>
<li>flex-end：与交叉轴的终点对齐。</li>
<li>center：与交叉轴的中点对齐。</li>
<li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
<li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li>
<li>stretch（默认值）：轴线占满整个交叉轴。</li>
</ul>
<h3 id="item" tabindex="-1"><a class="header-anchor" href="#item" aria-hidden="true">#</a> item</h3>
<h4 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h4>
<p>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p>
<h4 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h4>
<p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p>
<h4 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h4>
<p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p>
<p><strong>参考：</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noopener noreferrer">CSS 弹性盒子布局 MDN<ExternalLinkIcon/></a></p>
<h2 id="居中" tabindex="-1"><a class="header-anchor" href="#居中" aria-hidden="true">#</a> 居中</h2>
<h3 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h3>
<ul>
<li>text-align: center;</li>
<li>margin: 0 auto;</li>
<li>position transform</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>position: absolute;
left: 50%;
top: 50%;
width: 300px;
height: 300px;
background: blue;
transform-origin: center;
transform: translate(-50%, -50%);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>flex item-align: center</li>
</ul>
<h3 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h3>
<ul>
<li>line-height</li>
<li>padding(已知高度)</li>
<li>table-cell vertical-align</li>
<li>flex justify-content: center</li>
<li>position transform</li>
</ul>
<h2 id="设备像素比" tabindex="-1"><a class="header-anchor" href="#设备像素比" aria-hidden="true">#</a> 设备像素比</h2>
<p><strong>物理像素：</strong>  设备屏幕具体的像素点，屏幕的基本单元，是有实体的。
<strong>逻辑像素：</strong> 也叫“设备独立像素”（Device Independent Pixel，DIP），可以理解为反映在CSS/JS程序里面的像素点，也就是说css像素是逻辑像素的一种
<strong>设备像素比：</strong> 物理像素与逻辑像素之比</p>
<p><strong>参考</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio" target="_blank" rel="noopener noreferrer">设备像素比 MDN<ExternalLinkIcon/></a></p>
<h2 id="css-选择器" tabindex="-1"><a class="header-anchor" href="#css-选择器" aria-hidden="true">#</a> css 选择器</h2>
<p>标签选择器 &lt; 类选择器 &lt; ID选择器 &lt; 内联选择器 &lt; !important</p>
<p>权重：</p>
<p>内联选择器 1000</p>
<p>id选择器 100</p>
<p>class类选择器 10</p>
<p>伪类选择器 10</p>
<p>元素 1</p>
<p>通配符选择器 0</p>
<p><strong>参考</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors" target="_blank" rel="noopener noreferrer">CSS 选择器 MDN<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/08ca24758675" target="_blank" rel="noopener noreferrer">css权重 简书<ExternalLinkIcon/></a></p>
<h2 id="块格式化上下文" tabindex="-1"><a class="header-anchor" href="#块格式化上下文" aria-hidden="true">#</a> 块格式化上下文</h2>
<p><strong>块格式化上下文（Block Formatting Context，BFC</strong> 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p>
<p>下列方式会创建块格式化上下文：</p>
<ul>
<li>根元素(html)</li>
<li>浮动元素（元素的 float 不是 none）</li>
<li>绝对定位元素（元素的 position 为 absolute 或 fixed）</li>
<li>行内块元素（元素的 display 为 inline-block）</li>
<li>表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）</li>
<li>表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）</li>
<li>匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）</li>
<li>overflow 值不为 visible 的块元素</li>
<li>display 值为 flow-root 的元素</li>
<li>contain 值为 layout、content或 paint 的元素</li>
<li>弹性元素（display为 flex 或 inline-flex元素的直接子元素）</li>
<li>网格元素（display为 grid 或 inline-grid 元素的直接子元素）</li>
<li>多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）</li>
<li>column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。</li>
</ul>
<p><strong>参考</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank" rel="noopener noreferrer">块格式化上下文 MDN<ExternalLinkIcon/></a></p>
<h2 id="margin-外边距重叠" tabindex="-1"><a class="header-anchor" href="#margin-外边距重叠" aria-hidden="true">#</a> margin 外边距重叠</h2>
<ul>
<li><strong>同一层相邻元素之间</strong>    相邻的两个元素之间的外边距重叠，除非后一个元素加上clear-fix清除浮动。</li>
<li><strong>没有内容将父元素和后代元素分开</strong>  如果没有边框border，内边距padding，行内内容，也没有创建块级格式上下文或清除浮动来分开一个块级元素的上边界margin-top 与其内一个或多个后代块级元素的上边界margin-top；或没有边框，内边距，行内内容，高度height，最小高度min-height或 最大高度max-height 来分开一个块级元素的下边界margin-bottom与其内的一个或多个后代后代块元素的下边界margin-bottom，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。</li>
<li><strong>空的块级元素</strong> 当一个块元素上边界margin-top 直接贴到元素下边界margin-bottom时也会发生边界折叠。这种情况会发生在一个块元素完全没有设定边框border、内边距paddng、高度height、最小高度min-height 、最大高度max-height 、内容设定为inline或是加上clear-fix的时候。</li>
</ul>
<p><strong>参考</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing" target="_blank" rel="noopener noreferrer">外边距重叠 MDN<ExternalLinkIcon/></a></p>
<h2 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss</h2>
<p><a href="https://github.com/postcss/postcss/blob/main/docs/README-cn.md" target="_blank" rel="noopener noreferrer">postcss 官方文档<ExternalLinkIcon/></a></p>
<p><a href="https://webpack.docschina.org/loaders/postcss-loader/" target="_blank" rel="noopener noreferrer">postcss-loader webpack<ExternalLinkIcon/></a></p>
<h2 id="sass-less" tabindex="-1"><a class="header-anchor" href="#sass-less" aria-hidden="true">#</a> sass/less</h2>
<p><a href="https://www.sass.hk/docs/" target="_blank" rel="noopener noreferrer">sass 官方文档<ExternalLinkIcon/></a></p>
<p><a href="https://less.bootcss.com/" target="_blank" rel="noopener noreferrer">less 官方文档<ExternalLinkIcon/></a></p>
</div></template>


