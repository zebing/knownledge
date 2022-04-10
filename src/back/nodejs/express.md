# express

## 参数解析
### 1. body-parse

body-parser是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，Express框架中就是使用这个模块做为请求体解析中间件。
body-parser 与 原生解析对比
Node.js 原生HTTP模块中，是将用户请求数据封装到了用于请求对象req中，该对象是一个IncomingMessage，该对象同时也是一个可读流对象。

**参考资料**

[body-parser](https://github.com/expressjs/body-parser)

### 2. multer

Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。它是写在 busboy 之上非常高效。

>注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据。

**参考资料**

[Multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)

### 3. 原始数据解析

```
function middleware (req, res, next) {
  const chunks = [];
  // 接收数据
  req.on('data', buf => {
    chunks.push(buf)
  })

  // 接收数据完成
  req.on('end', () => {
    let buffer = Buffer.concat(chunks);
    console.log(buffer.toString('utf8'))
    next();
  })
}

app.post('/test/json', middleware, (req, res) => {
  console.log('test data')
  res.send('test data');
})

```