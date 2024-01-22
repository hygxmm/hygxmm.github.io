# HTML 相关

## scrollIntoView()

让当前元素滚动到浏览器窗口的可视区域

```js
element.scrollIntoView({
  duration: 0, // 滚动时间,默认为0
  easing: 'ease-in-out', // 默认为ease-in-out
  offset: {
    top: 0,
    left: 0,
  }, // 滚动的偏移量
});
```

## hidden

隐藏元素

```js
element.hidden = true;
```

## toggle()

添加或删除元素的某个 class

```js
element.classList.toggle('some-class');
```

## querySelector()

元素选择器,可以应用在任意元素上,而不仅限于 document 上.仅返回匹配到的第一个元素.

```js
const ul = document.querySelect('.ul');
ul.querySelect('a');
```

## querySelectorAll()

元素向下查询,返回所有匹配的元素

```js
document.queryselectorAll('li');
```

## closest()

该方法可在任意元素上使用,它能够向上查找元素的树形结构,可以理解为与`querySelect`相反的方法.

```js
element.closest('#app');
```

## dataset

获取元素以`data-`为前缀的属性集合

```html
<input data-param="{a: 3}" />
```

```js
const input = document.querySelector('input');
const param = input.dataset.param; // 获取自定义属性
delete input.dataset.param; // 删除自定义属性
input.dataset.value = '{a:1,b:2}'; // 添加自定义属性
```

## URLSearchParams

操作 URL 参数

```js
const params = new URLSearchParams(window.location.search);
params.get('a'); // 获取参数a的值
params.set('a', '1'); // 设置参数a的值
params.delete('a'); // 删除参数啊
params.has('a'); // 判断是否有参数a
params.toString(); // 参数字符串
params.append('a', '1'); // 追加一个参数a
```

## contenteditable

使元素变成可编辑的状态

```html
<div contenteditable="true"></div>
```

## classList

操作元素的类名

```js
const div = document.querySelector('div');

div?.classList.add('some-class'); // 添加类名,可添加多个
div?.classList.remove('some-class'); // 删除类名,可删除多个
div?.classList.toggle('some-class'); // 有则删,无则增
div?.classList.replace('some-class', 'new-class'); // 替换类名
div?.classList.contains('some-class'); // 是否包含指定类名
```

## online state

监听当前的网络状态变动，然后执行对应的方法：

```js
window.addEventListener('online', () => {
  console.log('网络已连接');
});
window.addEventListener('offline', () => {
  console.log('断网啦');
});
```

## battery state

获取设备的电池状态

```js
navigator.getBattery().then((battery) => console.log(battery));

// 返回
{
  charging, // 是否在充电
  chargingTime, // 充满电所需时间
  dischargingTime, // 当前电量可使用时间
  level, // 剩余电量;
  onchargingchange, // 监听充电状态变化
  onchargingtimechange, // 监听充满电所需时间变化
  ondischargingtimechange, // 监听当前电量可使用时间变化
  onlevelchange, // 监听电量变化
}
```

## vibration

使设备进行震动

```js
// 震动一次
navigator.vibrate(100);

// 连续震动，震动200ms、暂停100ms、震动300ms
navigator.vibrate([200, 100, 300]);
```

## page visibility

监听页面可见性变化的，在 PC 端标签栏切换、最小化会触发、在移动端程序切到后台会触发，简单说就是页面消失了 🤦‍♂️

```js
document.addEventListener('visibilitychange', () => {
  console.log(`页面可见性：${document.visibilityState}`);
});
```

## deviceOrientation

陀螺仪，也就是设备的方向，又名重力感应，该 API 在 IOS 设备上失效的解决办法，将域名协议改成 https；

```js
window.addEventListener('deviceorientation', (event) => {
  let { alpha, beta, gamma } = event;

  console.log(`alpha：${alpha}`);
  console.log(`beta：${beta}`);
  console.log(`gamma：${gamma}`);
});
```

## toDataUrl

这个 canvas 的 API，作用是将画布的内容转换成一个 base64 的图片地址；
使用 a 标签进行图片下载时，图片链接跨域（图片是我的掘金头像），无法进行下载而是进行图片预览,封装以下代码便可解决.

```js
const downloadImage = (url, name) => {
  // 实例化画布
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  // 实例化一个图片对象
  let image = new Image();
  image.crossOrigin = 'Anonymous';
  image.src = url;

  // 当图片加载完毕
  image.onload = () => {
    // 将图片画在画布上
    canvas.height = image.height;
    canvas.width = image.width;
    context.drawImage(image, 0, 0);

    // 将画布的内容转换成base64地址
    let dataURL = canvas.toDataURL('image/png');

    // 创建a标签模拟点击进行下载
    let a = document.createElement('a');
    a.hidden = true;
    a.href = dataURL;
    a.download = name;

    document.body.appendChild(a);
    a.click();
  };
};
```

## customEvent

自定义事件

```js
// 监听自定义事件
window.addEventListener('follow', (event) => {
  console.log(event.detail); // 输出 {name: "啊啊啊啊啊"}
});
// 派发自定义事件
window.dispatchEvent(
  new CustomEvent('follow', {
    detail: {
      name: '啊啊啊啊啊',
    },
  }),
);
```

## fullScreen

指定元素全屏

```js
const launchFullScreen = (elem = document.documentElement) => {
  if (elem.requestFullScreen) {
    elem.requestFullScreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen();
  }
};
```

## orientation

可以监听用户手机设备的旋转方向变化；

```js
window.addEventListener(
  'orientationchange',
  () => {
    document.body.innerHTML += `<p>屏幕旋转后的角度值：${window.orientation}</p>`;
  },
  false,
);
```

也可以使用 css 的媒体查询：

```css
/* 竖屏时样式 */
@media all and (orientation: portrait) {
  body::after {
    content: '竖屏';
  }
}

/* 横屏时样式 */
@media all and (orientation: landscape) {
  body::after {
    content: '横屏';
  }
}
```

## getBoundingClientRect()

返回包含其空间结构详细信息的简单对象

```js
element.getBoundingClientRect();
```

## matches()

检查某个元素是否包含一个特定的 class

```js
element.matches('some-class');
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
document.body.contains(document.querySelector('#app')); // true
```

## getAttribute()

获取元素的属性

## select()

制定元素中的所有内容全选

## table

```js
const table = document.querySelector('table'); // 获取表单元素
const thead = table.createHead().insertRow();
thead.insertCell().textContent = '表头名';
const row = table.insertRow();
row.insertCell().textContent = '表格内容';
```

## createDocumentFragment

创建文档片段，将元素附加到文档片段，然后将文档片段附加到 DOM 树。使用文档片段 document fragments 通常会起到优化性能的作用。

```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  fragment.appendChild(document.createElement('div'));
}
document.body.appendChild(fragment);
```

## appendChild

将指定的节点添加到调用该方法的节点的子元素的末尾。

```js
parent.appendChild(child);
```

## insertBefore

用来添加一个节点到一个参照节点之前

```js
parent.insertBefore(child, ref); // parent: 父节点 child: 要添加的节点 ref: 参照节点,添加到它前面
```

## removeChild

删除指定的子节点并返回

```js
node.parentNode.removeChild(node);
```
