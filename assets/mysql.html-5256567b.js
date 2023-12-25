import{_ as e,p as a,q as s,a1 as r}from"./framework-5866ffd3.js";const i={},d=r(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h1><h2 id="_1-brew-安装mysql之后-启动失败" tabindex="-1"><a class="header-anchor" href="#_1-brew-安装mysql之后-启动失败" aria-hidden="true">#</a> 1. brew 安装mysql之后，启动失败</h2><blockquote><h4 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h4></blockquote><p>brew install mysql 安装完mysql之后，执行命令sudo brew services restart mysql启动失败</p><blockquote><h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h4></blockquote><p>权限问题</p><blockquote><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4></blockquote><p>通用一下命令修改权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo chmod -R a+rwx /usr/local/var/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-mysql-8-0-版本修改root密码" tabindex="-1"><a class="header-anchor" href="#_2-mysql-8-0-版本修改root密码" aria-hidden="true">#</a> 2. mysql 8.0 版本修改root密码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install mysql
brew services start mysql
sudo mysql_secure_installation

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-命令" tabindex="-1"><a class="header-anchor" href="#_3-命令" aria-hidden="true">#</a> 3 命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew services start mysql
brew services restart mysql
brew services stop mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[d];function n(t,c){return a(),s("div",null,l)}const h=e(i,[["render",n],["__file","mysql.html.vue"]]);export{h as default};