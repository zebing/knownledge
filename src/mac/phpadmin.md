# PhpMyadmin

## 1. MySQL8.0无法用phpmyadmin登陆的解决方法
phpmyadmin连接mysql时登录不了，提示mysqli_real_connect(): The server requested authentication method unknown to the client [caching_sha2_password]并且登录不了mysql,用命令行可以登录.

### 解决
首先在控制台登陆mysql，然后依次执行以下命令
```
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
FLUSH PRIVILEGES;
```