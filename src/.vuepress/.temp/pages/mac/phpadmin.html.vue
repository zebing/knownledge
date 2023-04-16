<template><div><h1 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin" aria-hidden="true">#</a> PhpMyadmin</h1>
<h2 id="_1-mysql8-0无法用phpmyadmin登陆的解决方法" tabindex="-1"><a class="header-anchor" href="#_1-mysql8-0无法用phpmyadmin登陆的解决方法" aria-hidden="true">#</a> 1. MySQL8.0无法用phpmyadmin登陆的解决方法</h2>
<p>phpmyadmin连接mysql时登录不了，提示mysqli_real_connect(): The server requested authentication method unknown to the client [caching_sha2_password]并且登录不了mysql,用命令行可以登录.</p>
<h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3>
<p>首先在控制台登陆mysql，然后依次执行以下命令</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


