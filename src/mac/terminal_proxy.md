# Terminal Proxy

## Terminal 控制台设置代理
1. 开启代理
![image](https://user-images.githubusercontent.com/22534934/136334082-a8b58e36-8854-4325-b1b2-b9a04b921317.png)

2. 添加 Terminal proxy 脚本。
在～/.zshrc文件中，加入以下脚本
```
# proxy list
alias proxy="export all_proxy=socks5://127.0.0.1:7890"
alias unproxy="unset all_proxy"
```
然后执行
```
proxy
```