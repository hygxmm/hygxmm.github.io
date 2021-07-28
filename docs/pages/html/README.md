# HTML 相关

## scrollIntoView()

让当前元素滚动到浏览器窗口的可视区域

```js
element.scrollIntoView();
```

## hidden

隐藏元素

```js
element.hidden = true;
```

## toggle()

添加或删除元素的某个 class

```js
element.classList.toggle("some-class");
```

## querySelector()

元素选择器,可以应用在任意元素上,而不仅限于 document 上.仅返回匹配到的第一个元素.

```js
const ul = document.querySelect(".ul");
ul.querySelect("a");
```

## querySelectorAll()

元素向下查询,返回所有匹配的元素

```js
document.queryselectorAll("li");
```

## closest()

该方法可在任意元素上使用,它能够向上查找元素的树形结构,可以理解为与`querySelect`相反的方法.

```js
element.closest("#app");
```

## dataset

获取元素以`data-`为前缀的属性集合

```html
<input data-param="{a: 3}" />
```

```js
const input = document.querySelector("input");
const param = input.dataset.param; // 获取自定义属性
delete input.dataset.param; // 删除自定义属性
input.dataset.value = "{a:1,b:2}"; // 添加自定义属性
```

## URLSearchParams

## contenteditable

## spellCheck

## classList

## online state

## battery state

## vibration

## page visibility

## deviceOrientation

## toDataUrl

## customEvent

## fullScreen

## orientation

## getBoundingClientRect()

返回包含其空间结构详细信息的简单对象

```js
element.getBoundingClientRect();
```

## matches()

检查某个元素是否包含一个特定的 class

```js
element.matches("some-class");
```

## insertAdjacentElement()

将一个给定的元素节点插入到相对于被调用的元素的给定的一个位置

```js
element.insertAdjacentElement(position, element);
```

参数:

- position // 插入位置
  - `beforebegin` // 在该元素本身的前面
  - `afterbegin` // 在该元素当中,在该元素第一个孩子前面
  - `beforeend` // 在该元素当中,在该元素最后一个孩子后面
  - `afterend` // 在该元素本身的后面
- element // 要插入到树中的元素

## contains()

该方法用于检测某个节点是不是另一个节点的后代.调用`contains()`方法的应该是祖先节点,这个方法接收一个参数,即要检测的后代节点.如果被检测的节点是后代节点返回`true`,否则返回`false`.

```js
document.body.contains(document.querySelector("#app")); // true
```

## getAttribute()

获取元素的属性

## select()

制定元素中的所有内容全选

## table

```js
const table = document.querySelector("table"); // 获取表单元素
const thead = table.createHead().insertRow();
thead.insertCell().textContent = "表头名";
const row = table.insertRow();
row.insertCell().textContent = "表格内容";
```
