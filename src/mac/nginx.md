# Nginx

nginx路径：/usr/local/etc/nginx

## 1. mac上nginx无法监听80端口

> #### 原因 
  非root无法监听1024以下的端口
> #### 解决方法<br/>
  在 brew 命令前面加上sudo
```
sudo brew services start nginx
```
## 2. 配置php环境
```
server {
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
```