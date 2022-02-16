# Npm

## 登陆
```
npm adduser // or npm login
Username: npm-user-name
Password:
Email: your-email
```
## 更新发布版本
```
npm version [<newversion> | major | minor | patch | premajor | preminor | 
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

```
## 发布前测试
[npm link](https://docs.npmjs.com/cli/v8/commands/npm-link)


```dos
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]
alias: npm ln
```

## 撤销发布
```
npm unpublish my-test-project --force
npm WARN using --force I sure hope you know what you are doing.
- my-test-project

npm deprecate <pkg>[@<version>] <message>

```

