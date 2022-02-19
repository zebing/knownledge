# PHP

## 1. mac 安装php7版本

> #### 安装Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

> #### 安装php
```
brew update
```
```
brew install php
```
> #### 替换链接
```
sudo vim ~/.bash_profile
```
在里面写入以下内容，/usr/local/opt/php/bin 为php位置
```
export PATH=/usr/local/opt/php/bin:$PATH
```
最后运行
```
source ~/.bash_profile
```
