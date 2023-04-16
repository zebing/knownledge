<template><div><h1 id="hybrid" tabindex="-1"><a class="header-anchor" href="#hybrid" aria-hidden="true">#</a> hybrid</h1>
<p>h5跟原生页面进行交互，调用原生提供的方法。</p>
<h2 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> android</h2>
<p><a href="https://developer.android.com/reference/android/webkit/WebView#addJavascriptInterface(java.lang.Object,%20java.lang.String)" target="_blank" rel="noopener noreferrer">android WebView docs<ExternalLinkIcon/></a></p>
<p><strong>h5调用原生</strong></p>
<p>通过 <code v-pre>addJavascriptInterface</code>方法将原生对象注入window，然后h5通过window[注入对象属性名][调用的方法]
例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// native 为注入的属性，hello为原生方法
window.native.hello()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原生调用h5</strong></p>
<p>H5 将 JS 方法暴露在 Window 上给 Native 调用，安卓通过<code v-pre>evaluateJavaScript</code>进行调用</p>
<p><strong>参考资料</strong></p>
<p><a href="https://blog.csdn.net/carson_ho/article/details/64904691" target="_blank" rel="noopener noreferrer">Android：你要的WebView与 JS 交互方式 都在这里了<ExternalLinkIcon/></a></p>
<h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> ios</h2>
<p>iOS有<strong>UIWebview</strong>和<strong>WKWebview</strong>两种webview</p>
<p><strong>UIWebview</strong></p>
<p>JS调用native</p>
<ol>
<li>JavaScriptCore</li>
<li>URL拦截方式</li>
</ol>
<p>native调用JS</p>
<ol>
<li>stringByEvaluatingJavaScriptFromString</li>
<li>JavaScriptCore</li>
</ol>
<p><strong>WKWebView</strong></p>
<p>JS调用native <code v-pre>window.webkit.messageHandlers.[methods].postMessage(&quot;Hello, world!&quot;);</code></p>
<ol>
<li>addScriptMessageHandler</li>
<li>URL拦截方式</li>
</ol>
<p>native调用JS</p>
<ol>
<li>JavaScriptCore evaluateJavaScript</li>
</ol>
<p><strong>参考</strong></p>
<p><a href="https://developer.apple.com/documentation/webkit/wkusercontentcontroller/1537172-addscriptmessagehandler?language=objc" target="_blank" rel="noopener noreferrer">wkwebview addScriptMessageHandler:name<ExternalLinkIcon/></a></p>
</div></template>


