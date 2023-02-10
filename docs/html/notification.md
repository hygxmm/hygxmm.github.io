<!-- # H5 notification 浏览器左面通知 -->

`Notification`是 HTML5 新增的 API,用于向用户配置和显示桌面通知. 可在 `Web Worker` 中使用.

## 构造方法

```js
let notification = new Notification(title, options);
```

### 参数

```js

title: '一定会被显示的通知标题'
options{
    dir: '文字方向;他的值可以是auto(自动),ltr(从左到右),rtl(从右到左))',
    lang: '指定通知所用的语言',
    body: '通知中额外显示的字符串',
    tag: '赋予通知的ID,以便必要时对通知进行刷新,替换或移除',
    icon: '一个图片URL,用于显示通知的图标',
}
```

## 属性

### 静态属性

这些属性仅在`Notification`对象上有效

#### `Notification.permission`只读

用于表明当前通知显示授权状态的字符串.可能的值包括: denied(用户拒绝了通知的显示),granted(用户允许了通知的显示),default(不知道用户的选择,行为与 denied 时相同).

### 实例属性

##### `Notification.title`只读

##### `Notification.dir`只读

##### `Notification.lang`只读

##### `Notification.body`只读

##### `Notification.tag`只读

##### `Notification.icon`只读

### 事件处理

##### `Notification.onclick`

处理 click 事件.当用户点击通知时被触发.

##### `Notification.onshow`

处理 show 事件.当通知显示的时候被触发.

##### `Notification.onerror`

处理 error 事件.当通知遇到错误时被触发.

##### `Notification.onclose`

处理 close 事件.当用户关闭通知时被触发.

## 方法

### 静态方法

这些方法仅在`Notification`对象中有效

#### `Notification.requestPermission()`

用于当前页面向用户申请通知的权限.这个方法只能被用户行为调用(比如: onclick 事件),并且不能被其它方式调用.

### 实例方法

这些方法仅在 `Notification`实例或其 `prototype` 中有效

#### `Notification.close()`

用于关闭通知

## 示例

```js
if (window.Notification && Notification.permission !== 'granted') {
  Notification.requestPermission((permission) => {
    if (permission === 'granted') {
      let notification = new Notification('Notification 标题: ', {
        body: 'Notification 内容',
        icon: '../../demo_01.png',
      });
      notification.onclick = () => {
        notification.close();
      };
    }
  });
}
```
