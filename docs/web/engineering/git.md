# Git

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