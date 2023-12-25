import{_ as s,M as t,p as a,q as d,R as e,t as i,N as l,a1 as r}from"./framework-5866ffd3.js";const v={},c=r(`<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1><h2 id="自定义图片懒加载指令" tabindex="-1"><a class="header-anchor" href="#自定义图片懒加载指令" aria-hidden="true">#</a> 自定义图片懒加载指令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot; /&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
        &lt;title&gt;Document&lt;/title&gt;
        &lt;style&gt;
            img {
                width: 100%;
                height: 300px;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id=&quot;app&quot;&gt;
            &lt;p v-for=&quot;item in imgs&quot; :key=&quot;item&quot;&gt;
                &lt;img v-lazyload=&quot;item&quot;&gt;
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/body&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        Vue.directive(&quot;lazyload&quot;, {
            // 指令的定义
            bind: function(el, binding) {
                let lazyImageObserver = new IntersectionObserver((entries, observer) =&gt; {
                    entries.forEach((entry, index) =&gt; {
                        let lazyImage = entry.target;
                        // 相交率，默认是相对于浏览器视窗
                        if(entry.intersectionRatio &gt; 0) {
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
            el: &quot;#app&quot;,
            data: {
                imgs: [
                    &#39;https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657907683.jpeg&#39;,
                    &#39;https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657913523.jpeg&#39;,
                    &#39;https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657925550.jpeg&#39;,
                    &#39;https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657930289.jpeg&#39;,
                    &#39;https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657934750.jpeg&#39;,
                    &#39;https://cdn.suisuijiang.com/ImageMessage/5adad39555703565e79040fa_1590657918315.jpeg&#39;,
                ]
            },
        });
    &lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件通信方式" tabindex="-1"><a class="header-anchor" href="#组件通信方式" aria-hidden="true">#</a> 组件通信方式</h2><ul><li>props</li><li>vuex</li><li>provide/inject</li><li>vnode</li><li>localstorage/sessionstorage</li><li>eventbus</li><li>ref</li></ul><h2 id="key的作用" tabindex="-1"><a class="header-anchor" href="#key的作用" aria-hidden="true">#</a> key的作用</h2>`,6),o={href:"https://cn.vuejs.org/v2/guide/list.html#%E7%BB%B4%E6%8A%A4%E7%8A%B6%E6%80%81",target:"_blank",rel:"noopener noreferrer"},u={href:"https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[e("strong",null,"参考")],-1),b={href:"https://www.infoq.cn/article/hucO1IFCg757j2lDr7OT",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"diff算法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diff算法","aria-hidden":"true"},"#"),i(" diff算法")],-1),g={href:"https://www.infoq.cn/article/hucO1IFCg757j2lDr7OT",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"为什么vue-2-0-中的v-if和v-for不建议一起用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么vue-2-0-中的v-if和v-for不建议一起用","aria-hidden":"true"},"#"),i(" 为什么Vue 2.0 中的v-if和v-for不建议一起用")],-1),f=e("p",null,"永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）",-1),_=e("h2",{id:"proxy-和-object-defineproperty-的区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#proxy-和-object-defineproperty-的区别","aria-hidden":"true"},"#"),i(" Proxy 和 Object.defineProperty 的区别")],-1),y=e("ol",null,[e("li",null,[e("strong",null,"Proxy 监听类型比 Object.defineProperty 更丰富"),i(" Object.defineProperty 只能对单个属性进行监听，Proxy 支持 数组，对象，函数等类型。")]),e("li",null,[e("strong",null,"监听对原对象的影响"),i(" Object.defineProperty 会修改原数据， Proxy不会。")])],-1);function x(q,j){const n=t("ExternalLinkIcon");return a(),d("div",null,[c,e("ul",null,[e("li",null,[e("p",null,[e("a",o,[i("维护状态 就地复用"),l(n)])])]),e("li",null,[e("p",null,[e("a",u,[i("用 key 管理可复用的元素"),l(n)])])])]),m,e("p",null,[e("a",b,[i("深入Vue2.x的虚拟DOM diff原理 infoQ"),l(n)])]),h,e("p",null,[e("a",g,[i("深入Vue2.x的虚拟DOM diff原理 infoQ"),l(n)])]),p,f,_,y])}const I=s(v,[["render",x],["__file","others.html.vue"]]);export{I as default};
