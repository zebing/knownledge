<template><div><h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h1>
<p><a href="https://www.pnpm.cn/motivation" target="_blank" rel="noopener noreferrer">npm 中文网<ExternalLinkIcon/></a></p>
<h2 id="pnpm-是凭什么对-npm-和-yarn-降维打击的" tabindex="-1"><a class="header-anchor" href="#pnpm-是凭什么对-npm-和-yarn-降维打击的" aria-hidden="true">#</a> pnpm 是凭什么对 npm 和 yarn 降维打击的</h2>
<h3 id="节省磁盘空间并提升安装速度" tabindex="-1"><a class="header-anchor" href="#节省磁盘空间并提升安装速度" aria-hidden="true">#</a> 节省磁盘空间并提升安装速度</h3>
<p><img src="@source/web/11_工程化/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpeg" alt="图片"></p>
<p>当使用 npm 或 Yarn 时，如果你有 100 个项目，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要保存 100 份该相同依赖包的副本。然而，如果是使用 pnpm，依赖包将被 存放在一个统一的位置，因此：</p>
<ol>
<li>如果你对同一依赖包需要使用不同的版本，则仅有 版本之间不同的文件会被存储起来。例如，如果某个依赖包包含 100 个文件，其发布了一个新 版本，并且新版本中只有一个文件有修改，则 pnpm update 只需要添加一个 新文件到存储中，而不会因为一个文件的修改而保存依赖包的 所有文件。</li>
<li>所有文件都保存在硬盘上的统一的位置。当安装软件包时， 其包含的所有文件都会硬链接自此位置，而不会占用 额外的硬盘空间。这让你可以在项目之间方便地共享相同版本的 依赖包。
最终结果就是以项目和依赖包的比例来看，你节省了大量的硬盘空间， 并且安装速度也大大提高了！</li>
</ol>
<h3 id="创建非扁平的-node-modules-目录" tabindex="-1"><a class="header-anchor" href="#创建非扁平的-node-modules-目录" aria-hidden="true">#</a> 创建非扁平的 node_modules 目录</h3>
<p><img src="@source/web/11_工程化/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb1.jpeg" alt="图片"></p>
<p>当使用 npm 或 Yarn Classic 安装依赖包时，所有软件包都将被提升到 node_modules 的 根目录下。其结果是，源码可以访问 本不属于当前项目所设定的依赖包。</p>
</div></template>


