<template><div><h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1>
<h2 id="网络体系结构" tabindex="-1"><a class="header-anchor" href="#网络体系结构" aria-hidden="true">#</a> 网络体系结构</h2>
<p><a href="https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E5%88%86%E5%B1%82" target="_blank" rel="noopener noreferrer">网络体系结构 百度<ExternalLinkIcon/></a>
<img src="@source/web/09_网络/images/1612150605-NindRH-image.png" alt="网络体系结构"></p>
<h3 id="osi体系结构" tabindex="-1"><a class="header-anchor" href="#osi体系结构" aria-hidden="true">#</a> OSI体系结构</h3>
<p><a href="https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B" target="_blank" rel="noopener noreferrer">OSI 模型<ExternalLinkIcon/></a></p>
<ul>
<li>应用层</li>
</ul>
<p>应用层（Application Layer）提供为应用软件而设计的接口，以设置与另一应用软件之间的通信。例如：HTTP、HTTPS、FTP、Telnet、SSH、SMTP、POP3等。</p>
<ul>
<li>表示层</li>
</ul>
<p>表示层（Presentation Layer）把数据转换为能与接收者的系统格式兼容并适合传输的格式。</p>
<ul>
<li>会话层</li>
</ul>
<p>会话层（Session Layer）负责在数据传输中设置和维护计算机网络中两台计算机之间的通信连接。</p>
<ul>
<li>运输层</li>
</ul>
<p>运输层（Transport Layer）把传输表头（TH）加至数据以形成数据包。传输表头包含了所使用的协议等发送信息。例如:传输控制协议（TCP）等。</p>
<ul>
<li>网络层</li>
</ul>
<p>网络层（Network Layer）决定数据的路径选择和转寄，将网络表头（NH）加至数据包，以形成报文。网络表头包含了网络资料。例如:互联网协议（IP）等。</p>
<ul>
<li>数据链路层</li>
</ul>
<p>数据链路层（Data Link Layer）负责网络寻址、错误侦测和改错。当表头和表尾被加至数据包时，会形成信息框（Data Frame）。数据链表头（DLH）是包含了物理地址和错误侦测及改错的方法。数据链表尾（DLT）是一串指示数据包末端的字符串。例如以太网、无线局域网（Wi-Fi）和通用分组无线服务（GPRS）等。</p>
<p>分为两个子层：逻辑链路控制（logical link control，LLC）子层和介质访问控制（Media access control，MAC）子层。</p>
<ul>
<li>物理层</li>
</ul>
<p>物理层（Physical Layer）在局部局域网上传送数据帧（Data Frame），它负责管理电脑通信设备和网络媒体之间的互通。包括了针脚、电压、线缆规范、集线器、中继器、网卡、主机接口卡等。</p>
<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h2>
<h3 id="http-头" tabindex="-1"><a class="header-anchor" href="#http-头" aria-hidden="true">#</a> http 头</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers" target="_blank" rel="noopener noreferrer">http 头 MDN<ExternalLinkIcon/></a></p>
<h3 id="http-缓存" tabindex="-1"><a class="header-anchor" href="#http-缓存" aria-hidden="true">#</a> HTTP 缓存</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ" target="_blank" rel="noopener noreferrer">http 缓存 MDN<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6844903757872889870" target="_blank" rel="noopener noreferrer">深入浅出浏览器缓存机制 <ExternalLinkIcon/></a></p>
<p><strong>缓存位置</strong></p>
<ul>
<li>Service Worker</li>
</ul>
<p>service worker 是独立于当前页面的一段运行在浏览器后台进程里的脚本。主要针对于离线web app。它的更新意味着版本的更新。</p>
<ul>
<li>Memory Cache</li>
</ul>
<p>Memory Cache 也就是内存中的缓存。它的特点就是读取快，但是容量有限，时效性较低，关闭浏览器进程之后就失效了。</p>
<ul>
<li>Disk Cache</li>
</ul>
<p>Disk Cache 也就是磁盘中的缓存。它的特点是读取较慢，但是时容量较大，效性较长。</p>
<ul>
<li>Push Cache</li>
</ul>
<p>Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。</p>
<p><strong>缓存策略</strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control" target="_blank" rel="noopener noreferrer">Cache-Control<ExternalLinkIcon/></a> 是 HTTP/1.1 中新增的属性，在请求头和响应头中都可以使用，常用的属性值如有：</p>
<ol>
<li>max-age：单位是秒，缓存时间计算的方式是距离发起的时间的秒数，超过间隔的秒数缓存失效</li>
<li>no-cache：不使用强缓存，需要与服务器验证缓存是否新鲜</li>
<li>no-store：禁止使用缓存（包括协商缓存），每次都向服务器请求最新的资源</li>
<li>private：专用于个人的缓存，中间代理、CDN 等不能缓存此响应</li>
<li>public：响应可以被中间代理、CDN 等缓存</li>
<li>must-revalidate：在缓存过期前可以使用，过期后必须向服务器验证</li>
</ol>
<h4 id="设置缓存" tabindex="-1"><a class="header-anchor" href="#设置缓存" aria-hidden="true">#</a> 设置缓存</h4>
<p><strong>no-cache：不使用本地缓存</strong>。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。</p>
<p><strong>no-store：禁止游览器缓存数据</strong>，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。</p>
<p><strong>public：可以被所有的用户缓存</strong>，包括终端用户和CDN等中间代理服务器。</p>
<p><strong>private：只能被终端用户的浏览器缓存</strong>，不允许CDN等中继缓存服务器对其缓存。</p>
<h4 id="强制缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存" aria-hidden="true">#</a> 强制缓存</h4>
<p><strong>Expires</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Expires: Wed, 22 Oct 2018 08:41:00 GMT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Expires 是 HTTP/1 的产物，表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。并且 Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。</p>
<p><strong>Cache-control</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Cache-control: max-age=30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cache-Control 出现于 HTTP/1.1，优先级高于 Expires 。该属性值表示资源会在 30 秒后过期，需要再次请求。</p>
<h4 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h4>
<p>如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现：<strong>Last-Modified</strong> 和 <strong>ETag</strong> 。
当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。</p>
<p><strong>Last-Modified 和 If-Modified-Since</strong>
Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。
但是 Last-Modified 存在一些弊端：</p>
<ul>
<li>如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源</li>
<li>因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源</li>
</ul>
<p>因为以上这些弊端，所以在 HTTP / 1.1 出现了 ETag 。</p>
<p><strong>ETag 和 If-None-Match</strong>
ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。并且 ETag 优先级比 Last-Modified 高。</p>
<p>以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。如果什么缓存策略都没设置，那么浏览器会怎么处理？</p>
<p>对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 Date 减去 Last-Modified 值的 10% 作为缓存时间。</p>
<p><strong>参考</strong></p>
<p><a href="https://zhuanlan.zhihu.com/p/111190645" target="_blank" rel="noopener noreferrer">缓存策略：强缓存&amp;协商缓存<ExternalLinkIcon/></a></p>
<p><strong>实用的缓存策略</strong></p>
<ul>
<li>
<p>频繁变动的资源
对于频繁变动的资源，首先需要使用 Cache-Control: no-cache 使浏览器每次都请求服务器，然后配合 ETag 或者 Last-Modified 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小</p>
</li>
<li>
<p>代码文件
这里特指除了 HTML 外的代码文件，因为 HTML 文件一般不缓存或者缓存时间很短。</p>
</li>
</ul>
<p>一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年 Cache-Control: max-age=31536000，这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。</p>
<p><strong>其他</strong></p>
<p>为什么在HTTP头里要设置同时设置Expires和Cache-control:max-age？</p>
<p>因为 Expires 是 HTTP 1.0 定义的字段，而 Cache-Control 是 HTTP 1.1 的字段，万一客户端只支持 HTTP 1.0，那么 Cache-Control 有可能就会不工作，所以一般为了兼容会都写上。</p>
<h3 id="http-响应代码" tabindex="-1"><a class="header-anchor" href="#http-响应代码" aria-hidden="true">#</a> HTTP 响应代码</h3>
<p>HTTP 响应状态代码指示特定 HTTP 请求是否已成功完成。响应分为五类：信息响应(100–199)，成功响应(200–299)，重定向(300–399)，客户端错误(400–499)和服务器错误 (500–599)。状态代码由 section 10 of RFC 2616定义</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" target="_blank" rel="noopener noreferrer">HTTP 响应代码 MDN<ExternalLinkIcon/></a></p>
<h3 id="跨源资源共享" tabindex="-1"><a class="header-anchor" href="#跨源资源共享" aria-hidden="true">#</a> 跨源资源共享</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS" target="_blank" rel="noopener noreferrer">跨源资源共享 MDN<ExternalLinkIcon/></a></p>
<h3 id="csp-内容安全协议" tabindex="-1"><a class="header-anchor" href="#csp-内容安全协议" aria-hidden="true">#</a> CSP（内容安全协议）</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank" rel="noopener noreferrer">Content-Security-Policy MDN<ExternalLinkIcon/></a></p>
<h2 id="http-2-0" tabindex="-1"><a class="header-anchor" href="#http-2-0" aria-hidden="true">#</a> http 2.0</h2>
<ul>
<li>压缩请求头</li>
<li>多路复用</li>
<li>采用二进制传输</li>
<li>服务端推送</li>
</ul>
<h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> https</h2>
<p>HTTPS （安全的HTTP）是 HTTP 协议的加密版本。它通常使用 SSL 或者 TLS 来加密客户端和服务器之间所有的通信 。这安全的链接允许客户端与服务器安全地交换敏感的数据，例如网上银行或者在线商城等涉及金钱的操作。</p>
<p><a href="https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE" target="_blank" rel="noopener noreferrer">超文本传输安全协议 wiki<ExternalLinkIcon/></a></p>
<h3 id="ssl-tls" tabindex="-1"><a class="header-anchor" href="#ssl-tls" aria-hidden="true">#</a> SSL/TLS</h3>
<ol>
<li><strong>密钥交换和密钥协商</strong></li>
</ol>
<p>在客户端和服务器开始交换TLS所保护的加密信息之前，他们必须安全地交换或协定加密密钥和加密数据时要使用的密码。用于密钥交换的方法包括：</p>
<p>使用RSA算法生成公钥和私钥（在TLS 握手协议中被称为TLS_RSA）、Diffie-Hellman（在TLS握手协议中被称为TLS_DH）、临时Diffie-Hellman（在TLS握手协议中被称为TLS_DHE）、椭圆曲线迪菲-赫尔曼（在TLS握手协议中被称为TLS_ECDH）、临时椭圆曲线Diffie-Hellman（在TLS握手协议中被称为TLS_ECDHE）、匿名Diffie-Hellman（在TLS握手协议中被称为TLS_DH_anon）[21]和预共享密钥（在TLS握手协议中被称为TLS_PSK）。</p>
<p>身份验证：RSA、DSA、ECDSA；</p>
<p>密钥交换：PSK、Diffie-Hellman、ECDH；</p>
<p>对称密钥加密：RC4、DES、3DES、AES、ChaCha20以及Camellia；</p>
<p>散列函数：MD5、SHA家族。</p>
<ul>
<li>RSA</li>
<li>md5</li>
<li>Diffie-Hellman</li>
<li>Diffie-Hellman</li>
<li>椭圆曲线迪菲-赫尔曼</li>
<li>临时椭圆曲线Diffie-Hellman</li>
<li>匿名Diffie-Hellman</li>
</ul>
<ol start="2">
<li><strong>过程</strong></li>
</ol>
<p>TLS在互联网上为HTTP等应用程序提供身份验证、加密、完整性，其基础是公钥基础设施。这是因为公钥基础设施普遍商业运营。TLS协议的设计在某种程度上能够使主从架构应用程序通讯预防窃听、干扰和消息伪造。</p>
<p>TLS包含几个基本阶段：</p>
<ol>
<li>对等协商支持的TLS版本，和支持的密码包。</li>
<li>基于非对称密钥的身份认证，通常是基于PKI证书的身份认证。服务器将其X.509证书发送给客户端，由客户端验证服务器的身份。如果服务器要验证客户端的证书，则客户端可能会将客户端证书发送给服务器。通常仅验证服务器，不验证客户端。</li>
<li>基于对称密钥的数据加密。客户端生成随机数作为会话密钥，并使用服务器公钥（服务器公钥在服务器证书中）加密会话密钥，最后将已加密的会话密钥发送给服务器。由服务器的私钥解密出会话密钥。最后使用此会话密钥加密数据。TLS也可以使用预共享密钥（PSK）作为对称密钥。</li>
</ol>
<p>在第一阶段，客户端与服务器协商所用密码算法。当前广泛实现的算法选择如下：</p>
<ul>
<li>身份验证：RSA、DSA、ECDSA；</li>
<li>密钥交换：PSK、Diffie-Hellman、ECDH；</li>
<li>对称密钥加密：RC4、DES、3DES、AES、ChaCha20以及Camellia；</li>
<li>散列函数：MD5、SHA家族。</li>
</ul>
<ol start="3">
<li><strong>浏览器如何验证HTTPS证书的合法性？</strong></li>
</ol>
<p><a href="https://www.zhihu.com/question/37370216?sort=created" target="_blank" rel="noopener noreferrer">浏览器如何验证HTTPS证书的合法性？<ExternalLinkIcon/></a></p>
<ul>
<li>在线证书状态协议(OCSP)</li>
</ul>
<p><a href="https://zh.wikipedia.org/wiki/%E5%9C%A8%E7%BA%BF%E8%AF%81%E4%B9%A6%E7%8A%B6%E6%80%81%E5%8D%8F%E8%AE%AE" target="_blank" rel="noopener noreferrer">在线证书状态协议 wiki<ExternalLinkIcon/></a></p>
<ul>
<li>证书吊销列表(CRL)</li>
</ul>
<p><a href="https://zh.wikipedia.org/wiki/%E8%AF%81%E4%B9%A6%E5%90%8A%E9%94%80%E5%88%97%E8%A1%A8" target="_blank" rel="noopener noreferrer">证书吊销列表 wiki<ExternalLinkIcon/></a></p>
<h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> tcp</h2>
<p><a href="https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE" target="_blank" rel="noopener noreferrer">传输控制协议 wiki<ExternalLinkIcon/></a></p>
<ul>
<li>三次握手</li>
<li>四次挥手</li>
</ul>
<h2 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> udp</h2>
<p>用户资料包协议（英语：User Datagram Protocol，缩写：UDP；又称用户资料包协议）是一个简单的面向资料包的通信协议，位于OSI模型的传输层。该协议由David P. Reed在1980年设计且在RFC 768中被规范。典型网络上的众多使用UDP协议的关键应用在一定程度上是相似的。</p>
<p>在TCP/IP模型中，UDP为网络层以上和应用层以下提供了一个简单的接口。UDP只提供资料的不可靠传递，它一旦把应用程序发给网络层的资料发送出去，就不保留资料备份（所以UDP有时候也被认为是不可靠的资料包协议）。UDP在IP资料包的头部仅仅加入了复用和资料校验字段。</p>
<p>UDP适用于不需要或在程序中执行错误检查和纠正的应用，它避免了协议栈中此类处理的开销。对时间有较高要求的应用程序通常使用UDP，因为丢弃资料包比等待或重传导致延迟更可取。</p>
<p><a href="https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE" target="_blank" rel="noopener noreferrer">UDP wiki<ExternalLinkIcon/></a></p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<p>HTTP keep-alive和TCP keepalive的区别？</p>
<p><a href="https://zhuanlan.zhihu.com/p/224595048" target="_blank" rel="noopener noreferrer">HTTP keep-alive和TCP keepalive的区别<ExternalLinkIcon/></a></p>
</div></template>


