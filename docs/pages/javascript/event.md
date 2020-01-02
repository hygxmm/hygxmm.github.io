## Event Loop 事件循环机制
我们知道 `js` 是**单线程**执行的,那么异步的代码 `js` 是怎处理的呢?

::: tip 单线程
一次只能运行一个任务
:::

通常情况下,这没什么大不了的.但我们想象一下,我们正在运行一个需要 `30秒` 的任务.在这个任务中,我们要等待 `30秒`,然后才能执行接下来的事情(JS 默认运行在浏览器的主线程上,所以整个UI都卡住了).

辛运的是,浏览器提供了JS引擎本身没有提供的一些特性: WEB API.这包括 DOM API,settimeout HTTP请求等.这些API可以帮助我们创建一些异步的,非阻塞的行为.

当我们调用一个函数时,它被添加到调用堆栈中.调用堆栈是JS引擎的一部分,这不是浏览器特有的.堆栈遵循先进后出的原则,当函数返回一个值时,他会从堆栈中弹出.

```js
function one (){
    console.log('Hello');
}
function two(){
    return setTimeout(() => {
        console.log('Hi');
    },0)
}
two();
one();
```

`response` 函数返回一个 `setTimeout` 函数.`setTimeout`是由 WEB API 提供的.它允许我们在不阻塞主线程的情况下延迟任务.我们传递给 `setTimeout` 函数的回调函数 `() => { console.log('Hey') }` 被添加到`WEB API`中.与此同时,`setTimeout`函数和`response`函数从堆栈中弹出.


