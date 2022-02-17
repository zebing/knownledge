(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{422:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("h2",{attrs:{id:"创建版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建版本库"}},[t._v("#")]),t._v(" 创建版本库")]),t._v(" "),e("p",[e("code",[t._v("git init")])]),t._v(" "),e("h2",{attrs:{id:"版本回退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[t._v("#")]),t._v(" 版本回退")]),t._v(" "),e("h3",{attrs:{id:"回退commit-merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回退commit-merge"}},[t._v("#")]),t._v(" 回退commit/merge")]),t._v(" "),e("p",[e("strong",[t._v("1. git reset --hard HEAD")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--mixed \n意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作\n这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。\n\n\n--soft  \n不删除工作空间改动代码，撤销commit，不撤销git add . \n\n--hard\n删除工作空间改动代码，撤销commit，撤销git add . \n\n")])])]),e("p",[e("strong",[t._v("2. git revert")])]),t._v(" "),e("p",[t._v("it revert 撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销\n作为一次最新的提交")]),t._v(" "),e("ul",[e("li",[t._v("git revert HEAD                  撤销前一次 commit")]),t._v(" "),e("li",[t._v("git revert HEAD^               撤销前前一次 commit")]),t._v(" "),e("li",[t._v("git revert commit （比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。")])]),t._v(" "),e("p",[t._v("git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，\n版本会递增，不影响之前提交的内容")]),t._v(" "),e("h2",{attrs:{id:"暂存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#暂存"}},[t._v("#")]),t._v(" 暂存")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//  保存当前修改\ngit stash\n\n// 应用当前修改\ngit stash pop\n\n// 查看stash列表\ngit stash list\n\n// 从stash创建分支\ngit stash branch testchanges\n")])])]),e("h2",{attrs:{id:"删除文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[t._v("#")]),t._v(" 删除文件")]),t._v(" "),e("p",[e("code",[t._v("git rm filename")])]),t._v(" "),e("h2",{attrs:{id:"修改commit-信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改commit-信息"}},[t._v("#")]),t._v(" 修改commit 信息")]),t._v(" "),e("ul",[e("li",[t._v("修改最后一次提交")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git commit --amend\n")])])]),e("ul",[e("li",[t._v("修改多个提交信息")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git rebase -i HEAD~3\ngit commit --amend\n")])])]),e("h2",{attrs:{id:"从commit切出分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从commit切出分支"}},[t._v("#")]),t._v(" 从commit切出分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b new_branch commit_hash\n")])])]),e("h2",{attrs:{id:"git-pull-新仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-新仓库"}},[t._v("#")]),t._v(" git pull 新仓库")]),t._v(" "),e("p",[t._v("设置remote，拉取远程仓库，拒绝合并无关历史")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("fatal: refusing to merge unrelated histories\n")])])]),e("p",[t._v("解决")]),t._v(" "),e("p",[t._v("在你操作命令后面加--allow-unrelated-histories")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull --allow-unrelated-histories\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);