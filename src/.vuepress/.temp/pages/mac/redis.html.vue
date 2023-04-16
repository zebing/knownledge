<template><div><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1>
<h2 id="_1-安装redis" tabindex="-1"><a class="header-anchor" href="#_1-安装redis" aria-hidden="true">#</a> 1. 安装redis</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>brew install redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-安装php-redis" tabindex="-1"><a class="header-anchor" href="#_2-安装php-redis" aria-hidden="true">#</a> 2. 安装php-redis</h2>
<p>克隆php-redis仓库</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone https://www.github.com/phpredis/phpredis.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到该目录并编译</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cd phpredis
sudo phpize &amp;&amp; sudo ./configure &amp;&amp; sudo make &amp;&amp; sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>完成之后，执行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>make test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后将 extension=redis.so 添加到php.ini文件中,重启</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>brew services restart php</code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>


