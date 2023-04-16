<template><div><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h2 id="自定义图片懒加载指令" tabindex="-1"><a class="header-anchor" href="#自定义图片懒加载指令" aria-hidden="true">#</a> 自定义图片懒加载指令</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html lang="en">
    &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &lt;title>Document&lt;/title>
        &lt;style>
            img {
                width: 100%;
                height: 300px;
            }
        &lt;/style>
    &lt;/head>
    &lt;body>
        &lt;div id="app">
            &lt;p v-for="item in imgs" :key="item">
                &lt;img v-lazyload="item">
            &lt;/p>
        &lt;/div>
    &lt;/body>
    &lt;script src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>
    &lt;script>
        Vue.directive("lazyload", {
            // 指令的定义
            bind: function(el, binding) {
                let lazyImageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry, index) => {
                        let lazyImage = entry.target;
                        // 相交率，默认是相对于浏览器视窗
                        if(entry.intersectionRatio > 0) {
                            lazyImage.src = binding.value;
                            // 当前图片加载完之后需要去掉监听
                            lazyImageObserver.unobserve(lazyImage);
                        }

                    })
                })
                lazyImageObserver.observe(el);
            },
        });
        var app = new Vue({
            el: "#app",
            data: {
                imgs: [
                    'https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657907683.jpeg',
                    'https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657913523.jpeg',
                    'https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657925550.jpeg',
                    'https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657930289.jpeg',
                    'https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657934750.jpeg',
                    'https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657918315.jpeg',
                ]
            },
        });
    &lt;/script>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件通信方式" tabindex="-1"><a class="header-anchor" href="#组件通信方式" aria-hidden="true">#</a> 组件通信方式</h2>
<ul>
<li>props</li>
<li>vuex</li>
<li>provide/inject</li>
<li>vnode</li>
<li>localstorage/sessionstorage</li>
<li>eventbus</li>
<li>ref</li>
</ul>
<h2 id="key的作用" tabindex="-1"><a class="header-anchor" href="#key的作用" aria-hidden="true">#</a> key的作用</h2>
<ul>
<li>
<p><a href="https://cn.vuejs.org/v2/guide/list.html#%E7%BB%B4%E6%8A%A4%E7%8A%B6%E6%80%81" target="_blank" rel="noopener noreferrer">维护状态 就地复用<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0" target="_blank" rel="noopener noreferrer">用 key 管理可复用的元素<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><strong>参考</strong></p>
<p><a href="https://www.infoq.cn/article/hucO1IFCg757j2lDr7OT" target="_blank" rel="noopener noreferrer">深入Vue2.x的虚拟DOM diff原理 infoQ<ExternalLinkIcon/></a></p>
<h2 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法" aria-hidden="true">#</a> diff算法</h2>
<p><a href="https://www.infoq.cn/article/hucO1IFCg757j2lDr7OT" target="_blank" rel="noopener noreferrer">深入Vue2.x的虚拟DOM diff原理 infoQ<ExternalLinkIcon/></a></p>
<h2 id="为什么vue-2-0-中的v-if和v-for不建议一起用" tabindex="-1"><a class="header-anchor" href="#为什么vue-2-0-中的v-if和v-for不建议一起用" aria-hidden="true">#</a> 为什么Vue 2.0 中的v-if和v-for不建议一起用</h2>
<p>永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）</p>
</div></template>


