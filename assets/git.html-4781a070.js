import{_ as d,M as n,p as t,q as s,R as e,t as r,N as l,a1 as i}from"./framework-5866ffd3.js";const c={},u=i(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="配置多个ssh-key" tabindex="-1"><a class="header-anchor" href="#配置多个ssh-key" aria-hidden="true">#</a> 配置多个ssh key</h2><p>当有多个git账号的时候，比如一个github，用于自己进行一些开发活动，再来一个gitlab，一般是公司内部的git。这两者你的邮箱如果不同的话，就会涉及到一个问题，生成第二个git的key的时候会覆盖第一个的key，导致必然有一个用不了。</p><h3 id="_1-生成账号" tabindex="-1"><a class="header-anchor" href="#_1-生成账号" aria-hidden="true">#</a> 1. 生成账号</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -f filename -C &quot;name@qq.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-t type:指定要生成的密钥类型，有rsa1(SSH1),dsa(SSH2),ecdsa(SSH2),rsa(SSH2)等类型，较为常用的是rsa类型</p><p>-C comment：提供一个新的注释</p><p>-b bits：指定要生成的密钥长度 (单位:bit)，对于RSA类型的密钥，最小长度768bits,默认长度为2048bits。DSA密钥必须是1024bits</p><p>-f filename:指定生成的密钥文件名字</p><p>ssh key生成之后，将 .pub 文件里的内容配置到git仓库</p><h3 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件" aria-hidden="true">#</a> 2. 配置文件</h3><p>新建配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后按以下格式配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># github
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-测试" tabindex="-1"><a class="header-anchor" href="#_3-测试" aria-hidden="true">#</a> 3. 测试</h3><p>输入以下命令测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh -T git@git.silvrr.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初次连接会出现如下提示，请输入yes</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The authenticity of host &#39;git.silvrr.com (52.74.45.60)&#39; can&#39;t be established.
ECDSA key fingerprint is SHA256:L1HNvdqRIKUVgB/YIQ7qgay9w6djnsNz+9X6NwlhuMY.
Are you sure you want to continue connecting (yes/no)?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建版本库" tabindex="-1"><a class="header-anchor" href="#创建版本库" aria-hidden="true">#</a> 创建版本库</h2><p><code>git init</code></p><h2 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退" aria-hidden="true">#</a> 版本回退</h2><h3 id="回退commit-merge" tabindex="-1"><a class="header-anchor" href="#回退commit-merge" aria-hidden="true">#</a> 回退commit/merge</h3><p><strong>1. git reset --hard HEAD</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--mixed 
意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。


--soft  
不删除工作空间改动代码，撤销commit，不撤销git add . 

--hard
删除工作空间改动代码，撤销commit，撤销git add . 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. git revert</strong></p><p>it revert 撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销 作为一次最新的提交</p><ul><li>git revert HEAD 撤销前一次 commit</li><li>git revert HEAD^ 撤销前前一次 commit</li><li>git revert commit （比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。</li></ul><p>git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去， 版本会递增，不影响之前提交的内容</p><h2 id="暂存" tabindex="-1"><a class="header-anchor" href="#暂存" aria-hidden="true">#</a> 暂存</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  保存当前修改
git stash

// 应用当前修改
git stash pop

// 查看stash列表
git stash list

// 从stash创建分支
git stash branch testchanges
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><p><code>git rm filename</code></p><h2 id="修改commit-信息" tabindex="-1"><a class="header-anchor" href="#修改commit-信息" aria-hidden="true">#</a> 修改commit 信息</h2><ul><li>修改最后一次提交</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改多个提交信息</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase -i HEAD~3
git commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从commit切出分支" tabindex="-1"><a class="header-anchor" href="#从commit切出分支" aria-hidden="true">#</a> 从commit切出分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b new_branch commit_hash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-pull-新仓库" tabindex="-1"><a class="header-anchor" href="#git-pull-新仓库" aria-hidden="true">#</a> git pull 新仓库</h2><p>设置remote，拉取远程仓库，拒绝合并无关历史</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fatal: refusing to merge unrelated histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决</p><p>在你操作命令后面加--allow-unrelated-histories</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log -p -2 // 一个常用的选项是 -p，用来显示每次提交的内容差异。 你也可以加上 -2 来仅显示最近两次提交：
git log --stat // 每次提交的简略的统计信息，你可以使用 --stat 选项：
git log --graph // 展示分支合并图
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),v={href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="git-仓库嵌套" tabindex="-1"><a class="header-anchor" href="#git-仓库嵌套" aria-hidden="true">#</a> git 仓库嵌套</h2><p>在自己的仓库中clone了别人的demo，git add 无效。 先在子仓库执行</p><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>rm -rf .git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在子仓库的父文件夹执行</p><div class="language-dotnetcli line-numbers-mode" data-ext="dotnetcli"><pre class="language-dotnetcli"><code>git rm -rf --cached [子仓库文件夹名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-tag-按时间排序" tabindex="-1"><a class="header-anchor" href="#git-tag-按时间排序" aria-hidden="true">#</a> git tag 按时间排序</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag --sort=-creatordate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function o(h,g){const a=n("ExternalLinkIcon");return t(),s("div",null,[u,e("p",null,[e("a",v,[r("2.3 Git 基础 - 查看提交历史"),l(a)])]),m])}const p=d(c,[["render",o],["__file","git.html.vue"]]);export{p as default};
