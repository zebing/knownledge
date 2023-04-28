# Mysql
## 1. brew 安装mysql之后，启动失败

>#### 描述
brew install mysql 安装完mysql之后，执行命令sudo brew services restart mysql启动失败
> #### 原因
权限问题
> #### 解决方法
通用一下命令修改权限
```
sudo chmod -R a+rwx /usr/local/var/mysql
```
## 2. mysql 8.0 版本修改root密码
```
brew install mysql
brew services start mysql
sudo mysql_secure_installation

```

## 3 命令
```
brew services start mysql
brew services restart mysql
brew services stop mysql
```
