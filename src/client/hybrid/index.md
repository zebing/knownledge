# hybrid
h5跟原生页面进行交互，调用原生提供的方法。

## android
[android WebView docs](https://developer.android.com/reference/android/webkit/WebView#addJavascriptInterface(java.lang.Object,%20java.lang.String))
**h5调用原生**

通过 ```addJavascriptInterface```方法将原生对象注入window，然后h5通过window[注入对象属性名][调用的方法]
例如：
```
// native 为注入的属性，hello为原生方法
window.native.hello()
```

**原生调用h5**

H5 将 JS 方法暴露在 Window 上给 Native 调用，安卓通过```evaluateJavaScript```进行调用

**参考资料**

[Android：你要的WebView与 JS 交互方式 都在这里了](https://blog.csdn.net/carson_ho/article/details/64904691)

## ios
iOS有**UIWebview**和**WKWebview**两种webview

**UIWebview**

JS调用native
1. JavaScriptCore
2.  URL拦截方式


native调用JS
1.  stringByEvaluatingJavaScriptFromString
2. JavaScriptCore


**WKWebView**

JS调用native
1. addScriptMessageHandler
2. URL拦截方式

native调用JS
1. JavaScriptCore evaluateJavaScript

