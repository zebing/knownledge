# 其他

## React Scheduler 为什么默认使用 MessageChannel 实现, 而不用setTimeout。

React Scheduler 使用 MessageChannel 的原因为：[生成宏任务](https://juejin.cn/post/6953804914715803678)

setTimeout 默认回调时间最短是4毫秒，导致浪费4毫秒时间。

## React 18不再依赖Concurrent Mode开启并发, 而是以是否使用并发特性作为是否开启并发更新的依据。

[链接](https://segmentfault.com/a/1190000040973864)

## react diff
[传送门](reconcileChildrenArray)
