## 渲染过程
浏览器使用流式布局模型.具体渲染过程如下:
1. 构建DOM树(DOM tree)): 从上到下解析HTML文档生成DOM节点树.
2. 构建CSSOM树(CSS Object Model tree): 加载解析样式生成CSSOM树.
3. 执行javascript: 加载并执行javascript代码(包括内联代码或外联javascript文件).
4. 构建渲染树(render tree): 根据DOM树和CSSOM树,生成渲染树(render true);渲染树: 按顺序展示在屏幕上的一系列矩形,这些矩形带有字体,颜色和尺寸等视觉属性.
5. 布局(layout): 根据渲染树将节点树的每一个节点布局在屏幕上的正确位置.
6. 绘制(painting): 遍历渲染树绘制所有节点,为每一个节点适用对应的样式,这一过程是通过UI后端模块完成.

由于浏览器使用流式布局,对Render Tree 的计算通常只需要遍历一次就可以完成,但是table及其内部元素除外,它们可能需要多次计算,通常要花3倍与同等元素的时间,这也是为什么要避免使用table布局的原因之一.

## 回流(reflow)
当 `Render Tree` 中部分或者全部元素的尺寸,结构或者属性发生改变时,浏览器重新渲染部分或者全部文档的过程称为回流.

会导致回流的操作:
1. 页面首次渲染
2. 浏览器窗口大小发生改变
3. 元素尺寸或者位置发生改变
4. 元素内容变化
5. 元素字体变化
6. 添加或删除**可见**的*DOM*元素
7. 激活CSS伪类
8. 查询某些属性或调用某些方法

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
**回流必将引起重绘,重绘不一定引起回流**\
**回流比重绘的代价要更高**
**有时仅仅回流一个单一的元素,它的父元素以及任何跟随他的元素也会产生回流.**
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