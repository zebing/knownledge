# mongodb

## 安装
首先，确保你的包是最新的。打开终端并输入：
```
sudo apt update && sudo apt upgrade -y
```
继续安装 MongoDB：

```
sudo apt install mongodb
```
这就完成了！MongoDB 现在安装到你的计算机上了。

MongoDB 服务应该在安装时自动启动，但要检查服务状态：

```
sudo systemctl status mongodb
```

## 运行 MongoDB
MongoDB 目前是一个 systemd 服务，因此我们使用 systemctl 来检查和修改它的状态，使用以下命令：

```
sudo systemctl status mongodb
sudo systemctl stop mongodb
sudo systemctl start mongodb
sudo systemctl restart mongodb
```
你也可以修改 MongoDB 是否自动随系统启动（默认：启用）：

```
sudo systemctl disable mongodb
sudo systemctl enable mongodb
```
要开始使用（创建和编辑）数据库，请输入：

```
mongo
```
这将启动 mongo shell。有关查询和选项的详细信息，请查看[手册](https://www.mongodb.com/docs/manual/tutorial/getting-started/)。

## 卸载 MongoDB
如果你从 Ubuntu 仓库安装 MongoDB 并想要卸载它（可能要使用官方支持的方式安装），请输入：

```
sudo systemctl stop mongodb
sudo apt purge mongodb
sudo apt autoremove
```
这应该会完全卸载 MongoDB。确保备份你可能想要保留的任何集合或文档，因为它们将被删除！

