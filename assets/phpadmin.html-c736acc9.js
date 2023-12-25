import{_ as e,p as a,q as n,a1 as i}from"./framework-5866ffd3.js";const d={},s=i(`<h1 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin" aria-hidden="true">#</a> PhpMyadmin</h1><h2 id="_1-mysql8-0无法用phpmyadmin登陆的解决方法" tabindex="-1"><a class="header-anchor" href="#_1-mysql8-0无法用phpmyadmin登陆的解决方法" aria-hidden="true">#</a> 1. MySQL8.0无法用phpmyadmin登陆的解决方法</h2><p>phpmyadmin连接mysql时登录不了，提示mysqli_real_connect(): The server requested authentication method unknown to the client [caching_sha2_password]并且登录不了mysql,用命令行可以登录.</p><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3><p>首先在控制台登陆mysql，然后依次执行以下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use mysql;
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;密码&#39;;
FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[s];function r(h,c){return a(),n("div",null,t)}const m=e(d,[["render",r],["__file","phpadmin.html.vue"]]);export{m as default};