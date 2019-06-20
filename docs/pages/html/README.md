# HTML


## 有趣的元素方法
1. scrollIntoView()
    + 将视窗滚动至指定元素
```js
document.querySelector('#id').scrollIntoView();
```
::: tip  小技巧
当页面的 URL 中包含 #something 元素时，一旦页面加载，浏览器就会自动滚动至具有这个 ID 的元素之处。
:::

2. hidden 
    + 可使用`hiddren`方法隐藏任意元素
```js
myElement.hidden = true;
```

3. toggle()
    + 为元素添加或删除某个`class`方法
    + 第二个参数为`true`时,指定的`class`就会添加到元素上
```js
el.classList.toggle('some-orange-class', theme === 'orange');
```

4. querySelector()
    + 元素选择器 替代id及类选择器

5. closest
    + 向上查找元素的树形结构,与`querySelector()`相反的方法 可以连用
```js
myElement.closest('article').querySelector('h1');
```

6. getBoundingClientRect()
    + 获取元素空间结构详细信息对象
    + 该方法会导致元素重绘,避免频繁调用该方法
```js
myElement.getBoundingClientRect();
```

7. matches()
    + 检查某个元素是否包括一个特定的 class。
```js
if (myElement.matches('.some-class')) {
  // do something
}
```

8. insertAdjacentElement()
    + 类似与`appendChild()` 但能够更好的控制插入子元素的具体位置
    + 有 `beforebegin`、`afterbegin` 或 `afterend` 
```js
parentEl.insertAdjacentElement('beforeend', newEl)
```

9. contains()
    + 判断一个元素是否被包含在宁一个元素中
```js
modalEl.contains(e.target)
```  

10. dialog 新元素
    + show() 显示
    + close() 关闭
    + showModal() 居中显示模态窗并至于顶层