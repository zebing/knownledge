# Redis

## 1. 安装redis
```
brew install redis
```

## 2. 安装php-redis
克隆php-redis仓库
```
git clone https://www.github.com/phpredis/phpredis.git
```
切换到该目录并编译
```
cd phpredis
sudo phpize && sudo ./configure && sudo make && sudo make install
```
完成之后，执行
```
make test
```
最后将 extension=redis.so 添加到php.ini文件中,重启
```
brew services restart php