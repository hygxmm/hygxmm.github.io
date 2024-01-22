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

## 使用 ADB WLAN 连接 Android 手机调试 APP

1. 手机和电脑需连接在同一 WiFi 下;
2. 手机开启开发者选项和 USB 调试模式，并通过 USB 连接电脑（即 adb devices -l 可以查看到手机）;
3. 设置手机的监听 adb tcpip 5555;
4. 拔掉 USB 线，找到手机的 IP 地址;
5. 通过 IP 连接到手机 adb connect ip（端口默认：5555）;
6. adb devices -l 命令查看。

## 使用 ADB WIFI 连接 Android 手机调试 APP

1. 手机和电脑需连接在同一 WiFi 下;
2. 保证 SDK 为最新版本（adb --version ≥ 30.0.0）;
3. 手机启用开发者选项和无线调试模式（会提示确认）;
4. 允许无线调试后，选择使用配对码配对。记下显示的配对码、IP 地址和端口号;
5. 运行 adb pair ip:port，使用第 4 步中的 IP 地址和端口号;
6. 根据提示，输入第 3 步中的配对码，系统会显示一条消息，表明您的设备已成功配对;
7. （仅适用于 Linux 或 Windows）运行 adb connect ip:port;

## ADB 常用命令

## Flutter 常用命令

- flutter run

- flutter build

- flutter install
