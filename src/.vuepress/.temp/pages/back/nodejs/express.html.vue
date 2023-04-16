<template><div><h1 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> express</h1>
<h2 id="参数解析" tabindex="-1"><a class="header-anchor" href="#参数解析" aria-hidden="true">#</a> 参数解析</h2>
<h3 id="_1-body-parse" tabindex="-1"><a class="header-anchor" href="#_1-body-parse" aria-hidden="true">#</a> 1. body-parse</h3>
<p>body-parser是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，Express框架中就是使用这个模块做为请求体解析中间件。
body-parser 与 原生解析对比
Node.js 原生HTTP模块中，是将用户请求数据封装到了用于请求对象req中，该对象是一个IncomingMessage，该对象同时也是一个可读流对象。</p>
<p><strong>参考资料</strong></p>
<p><a href="https://github.com/expressjs/body-parser" target="_blank" rel="noopener noreferrer">body-parser<ExternalLinkIcon/></a></p>
<h3 id="_2-multer" tabindex="-1"><a class="header-anchor" href="#_2-multer" aria-hidden="true">#</a> 2. multer</h3>
<p>Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。它是写在 busboy 之上非常高效。</p>
<blockquote>
<p>注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据。</p>
</blockquote>
<p><strong>参考资料</strong></p>
<p><a href="https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md" target="_blank" rel="noopener noreferrer">Multer<ExternalLinkIcon/></a></p>
<h3 id="_3-原始数据解析" tabindex="-1"><a class="header-anchor" href="#_3-原始数据解析" aria-hidden="true">#</a> 3. 原始数据解析</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function middleware (req, res, next) {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


