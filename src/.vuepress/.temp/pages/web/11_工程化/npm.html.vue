<template><div><h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> Npm</h1>
<h2 id="登陆" tabindex="-1"><a class="header-anchor" href="#登陆" aria-hidden="true">#</a> 登陆</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm adduser // or npm login
Username: npm-user-name
Password:
Email: your-email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新发布版本" tabindex="-1"><a class="header-anchor" href="#更新发布版本" aria-hidden="true">#</a> 更新发布版本</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm version [&lt;newversion> | major | minor | patch | premajor | preminor | 
prepatch | prerelease | from-git]

major：主版本号（大版本）
minor：次版本号（小更新）
patch：补丁号（补丁）
premajor：预备主版本
preminor: 预备次版本
prepatch：预备补丁版本
prerelease：预发布版本


npm version patch  // 1.0.1 表示小的bug修复
npm version minor // 1.1.0 表示新增一些小功能
npm version mmajor // 2.0.0 表示大的版本或大升级
npm version preminor // 1.1.0-0 后面多了个0，表示预发布

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布前测试" tabindex="-1"><a class="header-anchor" href="#发布前测试" aria-hidden="true">#</a> 发布前测试</h2>
<p><a href="https://docs.npmjs.com/cli/v8/commands/npm-link" target="_blank" rel="noopener noreferrer">npm link<ExternalLinkIcon/></a></p>
<div class="language-dos line-numbers-mode" data-ext="dos"><pre v-pre class="language-dos"><code>npm link (in package dir)
npm link [&lt;@scope&gt;/]&lt;pkg&gt;[@&lt;version&gt;]
alias: npm ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销发布" tabindex="-1"><a class="header-anchor" href="#撤销发布" aria-hidden="true">#</a> 撤销发布</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm unpublish my-test-project --force
npm WARN using --force I sure hope you know what you are doing.
- my-test-project

npm deprecate &lt;pkg>[@&lt;version>] &lt;message>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


