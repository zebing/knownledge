<template><div><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1>
<p>nginx路径：/usr/local/etc/nginx</p>
<h2 id="_1-mac上nginx无法监听80端口" tabindex="-1"><a class="header-anchor" href="#_1-mac上nginx无法监听80端口" aria-hidden="true">#</a> 1. mac上nginx无法监听80端口</h2>
<blockquote>
<h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h4>
</blockquote>
<p>非root无法监听1024以下的端口</p>
<blockquote>
<h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法<br/></h4>
</blockquote>
<p>在 brew 命令前面加上sudo</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo brew services start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-配置php环境" tabindex="-1"><a class="header-anchor" href="#_2-配置php环境" aria-hidden="true">#</a> 2. 配置php环境</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>server {
    listen 80;
    listen [::]:80;
    # listen [::]:443 ssl http2;
    # listen 443 ssl http2;
    # include ssl.conf;
    # ssl_certificate /path/to/crt;
    # ssl_certificate_key /path/to/key;
    #server_domain_or_IP改成你的网站目录名称
    root /usr/local/var/www;
    index index.html index.htm index.php;
    #server_domain_or_IP改成你的域名或ip
    server_name localhost;
    location / {
        try_files $uri $uri/ =404;
    }
    location ~ \.php$ {
         try_files $uri /index.php =404;
         fastcgi_split_path_info ^(.+\.php)(/.+)$;
         fastcgi_pass 127.0.0.1:9000;
         fastcgi_index index.php;
         fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
         include fastcgi_params;
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


