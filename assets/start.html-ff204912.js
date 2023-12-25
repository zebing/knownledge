import{_ as e,p as i,q as n,a1 as l}from"./framework-5866ffd3.js";const d={},a=l(`<h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1><ol><li>cargo 创建工程：</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>cargo new [project-name] --lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在 <code>Cargo.toml</code>文件加入如下内容</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>[lib]
crate-type = [&quot;cdylib&quot;, &quot;rlib&quot;]

[features]
default = [&quot;console_error_panic_hook&quot;]

[dependencies]
wasm-bindgen = &quot;0.2.63&quot;
js-sys = &quot;0.3.56&quot;
web-sys = { version=&quot;0.3.56&quot;, features=[ &quot;console&quot;, &quot;Document&quot;, &quot;Window&quot;, &quot;HtmlElement&quot; ] }

# 调试工具
console_error_panic_hook = { version = &quot;0.1.6&quot;, optional = true }

# \`wee_alloc\`是wasm的一个很小的分配器
wee_alloc = { version = &quot;0.4.5&quot;, optional = true }

[profile.release]
# 告诉 \`rustc\` 优化代码尺寸
opt-level = &quot;s&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装 <code>wasm-pack</code>, 如果已经安装过了可忽略。</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>cargo install wasm-pack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>clone web工程模版 到 www目录下</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>// rust demo template
git clone git@github.com:rust-Study/create-wasm-app.git www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>安装以来</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>npm i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>将pkg link到 npm</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>cd pkg
npm link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>将引入pkg包，具体包名为<code>package.json</code>文件的name</li></ol><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>npm link [name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),s=[a];function t(o,c){return i(),n("div",null,s)}const u=e(d,[["render",t],["__file","start.html.vue"]]);export{u as default};
