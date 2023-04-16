<template><div><h1 id="terminal-proxy" tabindex="-1"><a class="header-anchor" href="#terminal-proxy" aria-hidden="true">#</a> Terminal Proxy</h1>
<h2 id="terminal-控制台设置代理" tabindex="-1"><a class="header-anchor" href="#terminal-控制台设置代理" aria-hidden="true">#</a> Terminal 控制台设置代理</h2>
<ol>
<li>
<p>开启代理
<img src="https://user-images.githubusercontent.com/22534934/136334082-a8b58e36-8854-4325-b1b2-b9a04b921317.png" alt="image"></p>
</li>
<li>
<p>添加 Terminal proxy 脚本。
在～/.zshrc文件中，加入以下脚本</p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># proxy list
alias proxy="export all_proxy=socks5://127.0.0.1:7890"
alias unproxy="unset all_proxy"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


