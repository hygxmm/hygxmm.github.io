# Flutter 布局组件

我们为什么需要跨平台开发?本质上,跨平台开发是为了增加代码复用,减少开发者对多个平台适配的工作量,降低开发成本,提高业务专注的同事,提供比 web 更好的体验.通俗点讲呢,就是: 省钱,偷懒.

## react native

- Facebook 出品
- 使用 Javascript
- JSCore 引擎
- React 技术栈
- 原生渲染

react native 使用了 react 的设计模式,但是 UI 渲染,动画效果,网络请求等均由原生端实现.开发者编写的 js 代码,通过 react native 的中间层转化为原生控件和操作.比 ionic,mui 等跨平台应用,大大提高了用户体验.

react native 是利用 JS 来调用 Native 端的组件,从而实现相应的功能.

## weex

- Alibaba 出品
- Javascript
- JS V8 引擎
- Vue 设计模式
- 原生渲染

## Flutter

- Google 出品
- Dart 语言
- Flutter Engine 引擎
- 响应式设计模式
- 原生渲染

### StatefulWidget 生命周期

```dart
@override
void initState() {
  /// UI还没有准备好
  WidgetsBinding.instance?.addPostFrameCallback((timeStamp) {
    /// 第一帧绘制完毕回调
    // do something...
  });
  super.initState();
}

if (!mounted) return; // 如果页面已销毁，取消后续操作
```
