## 简介
浏览器可以分为两部分: shell和浏览器内核,shell是外壳,内核是根本,是基于标记语言显示的程序或模块.

浏览器内核分为两部分: 渲染引擎和JS引擎.

渲染引擎主要负责解析浏览器所呈现的内容,比如HTML,CSS.

## 渲染过程
浏览器使用流式布局模型.具体渲染过程如下:
1. 构建DOM树(DOM tree)): 从上到下解析HTML文档生成DOM节点树.
    - 从父到子,从先到后,DOM树的结构与HTML标签是一一对应的.
2. 构建CSSOM树(CSS Object Model tree): 加载解析样式生成CSSOM树.
    - 在计算`CSS规则`的时候,我们会在已经构建好的元素上,去检查它匹配到了哪些规则,再根据规则的优先级,做覆盖和调整.
    - CSSOM主要是DOM结构上的盒的描述,他是依附于DOM树的.
    - `CSS计算`是把`CSS规则`应用到`DOM树`上,为`DOM结构`添加显示相关属性的过程.
    - `CSSOM`是有`rule`部分和`view`部分的,`rule`部分是在`dom`开始之前就构建完成的,而`view`部分是跟着`dom`同步构建的.
3. 构建渲染树(render tree): 根据DOM树和CSSOM树,生成渲染树(render true);
    - `渲染树`和`DOM元素`相对应的,但并非是一一对应的.非可视化的DOM元素不会插入呈现树中.
4. 布局(layout): 根据渲染树,我们就知道了所有节点的样式,然后计算他们在页面上的大小和位置.
    - 计算这些值的过程称为布局.布局阶段会从`渲染树`更新节点开始遍历,由于渲染树的每个节点都是一个 Render Object 对象,包含宽高,位置,背景色等样式信息.浏览器中渲染这个过程,就是把每一个元素对应的盒变成位图,再把位图合成一个大的位图.
5. 绘制(painting): 遍历渲染树绘制所有节点,为每一个节点适用对应的样式,并将元素呈现出来.
    - 绘制工作是使用用户界面基础组件完成.绘制又分为全局绘制和增量绘制,并且绘制的属性也会有前后之分.

::: tip
由于浏览器使用流式布局,对Render Tree 的计算通常只需要遍历一次就可以完成,但是table及其内部元素除外,它们可能需要多次计算,通常要花3倍与同等元素的时间,这也是为什么要避免使用table布局的原因之一.
:::

::: tip 浏览器如果渲染过程中遇到JS文件怎么处理
渲染过程中,如果遇到`<script>`标签就停止渲染,执行JS代码.因为浏览器有GUI渲染线程与JS引擎线程,为了防止渲染出现不可预期的结果,这两个线程是互斥的关系.JavaScript的加载,解析与执行会阻塞DOM的构建,也就是说,在构建DOM时,HTML解析器若遇到了Javascript,那么它会暂停构建DOM,将控制权移交给Javascript引擎,等Javascript引擎运行完毕,浏览器再从终端的地方恢复DOM构建;
:::
::: warning
1. 默认情况下,`CSS`被视为阻塞渲染的资源,这意味着浏览器将不会渲染任何已处理的内容,直至CSSOM构建完毕.
2. Javascript 不仅可以读取和修改`DOM属性`,还可以读取和修改`CSSOM属性`,因此`CSS解析`与`script执行`互斥.
3. 存在`阻塞的CSS资源时`,浏览器会延迟`javascript的执行和DOM构建`.
:::
由于以上原因,`script标签`的位置很重要,我们在实际开发中应该尽量坚持一下两个原则: 
1. 在引入顺序上,CSS资源优先于javascript资源.
2. javascript应尽量少的去影响DOM的构建.

## 改变阻塞模式
我们熟知的`javascript`标签上的`defer`和`async`属性
- defer 延迟执行 表示延迟执行引入的`Javascript`,即这段`Javascript`加载时`HTML`并未停止解析,这两个过程是并行的.
- async  异步加载 表示异步加载引入的`Javascript`,与`defer`的区别在于,如果已经加载好了,就会开始执行.这种方式加载的`Javascript`依然会阻塞`load`事件.
- 在加载多个JS脚本的时候,`async`是无顺序的加载,而`defer`是有顺序的加载.

## 回流(reflow)
当 `Render Tree` 中部分或者全部元素的尺寸,结构或者属性发生改变时,浏览器重新渲染部分或者全部文档的过程称为回流.

会导致回流的操作:
1. 添加,删除,更新DOM节点
2. 浏览器窗口大小发生改变
3. 元素尺寸或者位置发生改变
4. 元素内容变化
5. 元素字体变化
6. 添加或删除**可见**的*DOM*元素
7. 激活CSS伪类
8. 查询某些属性或调用某些方法
9. 移动DOM,给DOM添加动画

一些常用且会导致回流的属性和方法:
- `clientWidth`,`clientHeight`,`clientTop`,`clientLeft`
- `offsetWidth`,`offsetHeight`,`offsetTop`,`offsetLeft`
- `scrollIntoView()`,`scrollIntoViewIfNeeded`
- `getComputedStyle()`
- `getBoundingClientRect()`
- `scrollTo()`

## 重绘(redraw)

当页面中元素样式的改变并不影响它在文档流中的位置时,浏览器会将新样式赋予给元素并重新绘制它,这个过程称为重绘.

1. 浏览器会根据元素的新属性重新绘制,使元素呈现出新的外观
2. 重绘不会带来重新布局,不一定伴随重排
3. 触发: dom改变,css移动,改变visibility,outline,背景色等属性

::: tip
* 回流必将引起重绘,重绘不一定引起回流
* 回流比重绘的代价要更高
* 有时仅仅回流一个单一的元素,它的父元素以及任何跟随他的元素也会产生回流.
:::

::: tip
**现代浏览器会对频繁的回流或者重绘操作进行优化**\
浏览器会维护一个队列,把所有引起回流和重绘的操作放入队列中,如果队列中的任务数量或者时间间隔达到一个阈值,浏览器就会将队列清空,进行一次批处理,这样可以把多次回流和重绘变成一次.
:::

当你访问以下属性或方法时,浏览器会立刻清空队列:
- `clientWidth`,`clientHeight`,`clientTop`,`clientLeft`
- `offsetWidth`,`offsetHeight`,`offsetTop`,`offsetLeft`
- `scrollWidth`,`scrollHeight`,`scrollTop`,`scrollLeft`
- `width`,`height`
- `getComputedStyle()`
- `getBoundingClientRect()`

因为队列中可能会有影响到这些属性或方法返回值的操作,即使你希望获取的信息与队列中操作引发的改变无关,浏览器也会强行清空队列,确保你拿到的值是最精确的.

## 性能优化
### CSS
- 避免使用table布局
- 尽可能在DOM树的最末端改变class
- 避免设置多层内联样式
- 将动画效果应用到`position`属性为`absolute`或者`fixed`的元素上.
- 避免使用 `CSS`表达式(例如calc());
### JavaScript
- 避免频繁操作样式,最好一次性重写`style`属性,或者将样式列表定义为`class`并一次性更改`class`属性.
- 避免频繁操作`DOM`,创建`documentFragment`,在它上面应用所有`DOM`操作,最后再把它添加到文档中.
- 也可以先把元素设置为 `display: none`,操作结束后再把它显示出来.因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘.
- 避免频繁读取会引发回流和重绘的属性,如果需要多次使用,请使用一个变量缓存起来.
- 对具有复杂动画的元素使用绝对定位,使它脱离文档流,否则会引起父元素及后续元素的频繁回流.
### 提升为合成层
将元素提升为合成层有以下优点:
* 合成层的位图,会交由GPU合成 ,比CPU处理要快
* 当需要重绘市,只需要重绘本身,不会影响其他层
* 对于transform和opacity效果,不会触发重排和重绘

提升合成层的最好方式是使用CSS的 `will-change` 属性
```css
#target {
    will-change: transform;
}

```