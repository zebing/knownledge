<template><div><h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> mongodb</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>首先，确保你的包是最新的。打开终端并输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo apt update &amp;&amp; sudo apt upgrade -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>继续安装 MongoDB：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo apt install mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这就完成了！MongoDB 现在安装到你的计算机上了。</p>
<p>MongoDB 服务应该在安装时自动启动，但要检查服务状态：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl status mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行-mongodb" tabindex="-1"><a class="header-anchor" href="#运行-mongodb" aria-hidden="true">#</a> 运行 MongoDB</h2>
<p>MongoDB 目前是一个 systemd 服务，因此我们使用 systemctl 来检查和修改它的状态，使用以下命令：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl status mongodb
sudo systemctl stop mongodb
sudo systemctl start mongodb
sudo systemctl restart mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以修改 MongoDB 是否自动随系统启动（默认：启用）：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl disable mongodb
sudo systemctl enable mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要开始使用（创建和编辑）数据库，请输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将启动 mongo shell。有关查询和选项的详细信息，请查看<a href="https://www.mongodb.com/docs/manual/tutorial/getting-started/" target="_blank" rel="noopener noreferrer">手册<ExternalLinkIcon/></a>。</p>
<h2 id="卸载-mongodb" tabindex="-1"><a class="header-anchor" href="#卸载-mongodb" aria-hidden="true">#</a> 卸载 MongoDB</h2>
<p>如果你从 Ubuntu 仓库安装 MongoDB 并想要卸载它（可能要使用官方支持的方式安装），请输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo systemctl stop mongodb
sudo apt purge mongodb
sudo apt autoremove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这应该会完全卸载 MongoDB。确保备份你可能想要保留的任何集合或文档，因为它们将被删除！</p>
</div></template>


