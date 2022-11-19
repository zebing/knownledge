# 其他

## React Scheduler 为什么默认使用 MessageChannel 实现, 而不用setTimeout。

React Scheduler 使用 MessageChannel 的原因为：[生成宏任务](https://juejin.cn/post/6953804914715803678)

setTimeout 默认回调时间最短是4毫秒，导致浪费4毫秒时间。

## React 18不再依赖Concurrent Mode开启并发, 而是以是否使用并发特性作为是否开启并发更新的依据。

[链接](https://segmentfault.com/a/1190000040973864)

## react diff
[传送门](https://github.com/facebook/react/blob/aa9988e5e669122ed0d76c72f2dea159eef872b4/packages/react-reconciler/src/ReactChildFiber.new.js#L750)

1. 从头到尾遍历，直到找到不一样的。
2. 如果 newChildren 已经到达末尾，delete 所有 oldChildren 余下节点。
3. 如果 oldChildren 到达末尾，create 所有 newChildren 余下节点。
4. newChildren 和 oldChildren 都没到达末尾。

   4.1. 将 oldChildren 余下节点生成 key - index map。 existingChildren。
   
   4.2. 遍历 newChildren 余下节点。key 在 oldChildren 存在则 patch, 并从 existingChildren map 中移除, 不存在则 create。
   
   4.3. delete 所有 existingChildren 余下节点。
