# Git

## 配置多个ssh key
当有多个git账号的时候，比如一个github，用于自己进行一些开发活动，再来一个gitlab，一般是公司内部的git。这两者你的邮箱如果不同的话，就会涉及到一个问题，生成第二个git的key的时候会覆盖第一个的key，导致必然有一个用不了。

### 1. 生成账号
```
ssh-keygen -t rsa -f filename -C "name@qq.com"
```
-t type:指定要生成的密钥类型，有rsa1(SSH1),dsa(SSH2),ecdsa(SSH2),rsa(SSH2)等类型，较为常用的是rsa类型

-C comment：提供一个新的注释

 -b bits：指定要生成的密钥长度 (单位:bit)，对于RSA类型的密钥，最小长度768bits,默认长度为2048bits。DSA密钥必须是1024bits

-f filename:指定生成的密钥文件名字

ssh key生成之后，将 .pub 文件里的内容配置到git仓库

### 2. 配置文件
新建配置文件
```
touch config
```
然后按以下格式配置
```
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github
User zebing
# akulaku
Host git.silvrr.com
HostName git.silvrr.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/akulaku
User fuzebing
```
### 3. 测试
输入以下命令测试
```
ssh -T git@git.silvrr.com
```
初次连接会出现如下提示，请输入yes
```
The authenticity of host 'git.silvrr.com (52.74.45.60)' can't be established.
ECDSA key fingerprint is SHA256:L1HNvdqRIKUVgB/YIQ7qgay9w6djnsNz+9X6NwlhuMY.
Are you sure you want to continue connecting (yes/no)?
```

## 创建版本库

`git init`

## 版本回退

### 回退commit/merge

**1. git reset --hard HEAD**
 ```
 --mixed 
意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。


--soft  
不删除工作空间改动代码，撤销commit，不撤销git add . 

--hard
删除工作空间改动代码，撤销commit，撤销git add . 

```

**2. git revert**

it revert 撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销
作为一次最新的提交
* git revert HEAD                  撤销前一次 commit
* git revert HEAD^               撤销前前一次 commit
* git revert commit （比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。

git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，
版本会递增，不影响之前提交的内容

## 暂存
```
//  保存当前修改
git stash

// 应用当前修改
git stash pop

// 查看stash列表
git stash list

// 从stash创建分支
git stash branch testchanges
```

## 删除文件
`git rm filename`

## 修改commit 信息

- 修改最后一次提交

```
git commit --amend
```
- 修改多个提交信息

```
git rebase -i HEAD~3
git commit --amend
```

## 从commit切出分支
```
git checkout -b new_branch commit_hash
```

## git pull 新仓库

设置remote，拉取远程仓库，拒绝合并无关历史
```
fatal: refusing to merge unrelated histories
```
解决

在你操作命令后面加--allow-unrelated-histories

```
git pull --allow-unrelated-histories
```

## 查看提交历史

```
git log -p -2 // 一个常用的选项是 -p，用来显示每次提交的内容差异。 你也可以加上 -2 来仅显示最近两次提交：
git log --stat // 每次提交的简略的统计信息，你可以使用 --stat 选项：
git log --graph // 展示分支合并图
```

[2.3 Git 基础 - 查看提交历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)


## git 仓库嵌套
在自己的仓库中clone了别人的demo，git add 无效。
先在子仓库执行
```dotnetcli
rm -rf .git
```
然后在子仓库的父文件夹执行
```dotnetcli
git rm -rf --cached [子仓库文件夹名称]
```

## git tag 按时间排序
```
git tag --sort=-creatordate
```

