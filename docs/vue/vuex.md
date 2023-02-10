# Vue 状态管理
## 简介
## 面试考点
### vuex的action有返回值吗?返回的是什么?
+ store.dispatch可以处理被触发的action的处理函数返回的Promise,并且store.dispatch仍旧返回Promise;
+ Action通常是异步的,要知道action什么时候结束,或者组合多个action已处理复杂的异步流程,可以通过定义action时返回一个promise对象,就可以在派发action的时候就可以通过处理返回的Promise处理异步流程
### 为什么不直接分发mutation,而要通过分发action之后提交mutation变更状态
+ mutation必须同步执行,我们可以在action内部执行异步操作
+ 可以通过一些列的异步操作,并且通过提交mutation来记录action产生的副作用
### 