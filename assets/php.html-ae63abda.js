import{_ as e,p as a,q as d,a1 as t}from"./framework-5866ffd3.js";const i={},s=t(`<h1 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h1><h2 id="_1-mac-安装php7版本" tabindex="-1"><a class="header-anchor" href="#_1-mac-安装php7版本" aria-hidden="true">#</a> 1. mac 安装php7版本</h2><blockquote><h4 id="安装homebrew" tabindex="-1"><a class="header-anchor" href="#安装homebrew" aria-hidden="true">#</a> 安装Homebrew</h4></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/bin/ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><h4 id="安装php" tabindex="-1"><a class="header-anchor" href="#安装php" aria-hidden="true">#</a> 安装php</h4></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><h4 id="替换链接" tabindex="-1"><a class="header-anchor" href="#替换链接" aria-hidden="true">#</a> 替换链接</h4></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在里面写入以下内容，/usr/local/opt/php/bin 为php位置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export PATH=/usr/local/opt/php/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),r=[s];function n(l,c){return a(),d("div",null,r)}const u=e(i,[["render",n],["__file","php.html.vue"]]);export{u as default};
