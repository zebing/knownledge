# 起步

1. cargo 创建工程：
```dotnetcli
cargo new [project-name] --lib
```

2. 在 `Cargo.toml`文件加入如下内容
```dotnetcli
[lib]
crate-type = ["cdylib", "rlib"]

[features]
default = ["console_error_panic_hook"]

[dependencies]
wasm-bindgen = "0.2.63"
js-sys = "0.3.56"
web-sys = { version="0.3.56", features=[ "console", "Document", "Window", "HtmlElement" ] }

# 调试工具
console_error_panic_hook = { version = "0.1.6", optional = true }

# `wee_alloc`是wasm的一个很小的分配器
wee_alloc = { version = "0.4.5", optional = true }

[profile.release]
# 告诉 `rustc` 优化代码尺寸
opt-level = "s"
```

3. 安装 `wasm-pack`, 如果已经安装过了可忽略。
```dotnetcli
cargo install wasm-pack
```

4. clone web工程模版 到 www目录下
```dotnetcli
// rust demo template
git clone git@github.com:rust-Study/create-wasm-app.git www
```

5. 安装以来
```dotnetcli
npm i
```

6. 将pkg link到 npm
```dotnetcli
cd pkg
npm link
```

7. 将引入pkg包，具体包名为`package.json`文件的name
```dotnetcli
npm link [name]
```