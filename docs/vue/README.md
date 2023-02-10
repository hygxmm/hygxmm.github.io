# Vue 简介

## 安装/创建一个新项目

```js
1. 全局安装脚手架
npm install -g @vue/cli
2. 使用命令检测是否安装成功
vue --version
3. 创建一个新项目
vue create project
4. 运行项目
npm run serve
```

## 基础语法

```html
<div id="app">
  <h1>{{title}}</h1>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
  },
});
```

```css
<style scoped>
#app{
    width: 100vw;
    height: 100vh;
}
</style>
```

### 挂载点

这里的 `<div id="app"></div>` 指的就是 vue 实例挂载点，因为 el 中的#id 元素是和上面的 id 是对应的，vue 实例只会处理挂载点里面的内容.

### 模板

在挂载点内部的内容叫做模版

### 实例

用 `new Vue` 可以创建一个实例

## 指令

- **v-text**
  - 不解析标签,纯文本输出

```html
<div id="app">
  <div v-text="title"></div>
  <div>{{title}}</div>
</div>
```

- **v-html**
  - 会解析标签,富文本输出

```html
<div id="app">
  <div v-html="title"></div>
  <div>{{title}}</div>
</div>
```

- **v-bind** 简写成 **:**
  - 绑定指令,使数据和视图绑定起来,想改变我们的视图,只需要改变数据即可,免去了我们手动去操作 DOM 的步骤
  - 单向绑定 只能通过数据改变视图,手动去改变视图,数据不会改变

```html
<div id="app">
  <img :alt="txt" />
</div>
```

- **v-model**
  - 双向数据绑定 一般用于 input 输入框.不管是直接改变数据还是通过输入框输入,视图和数据都会同步改变

```html
<div id="app">
    <input v-model="txt"></input>
    <div>{{txt}}</div>
</div>
```

- **v-on** 简写成 **@**
  - 事件绑定方法,免去我们遍历 DOM,绑定事件的操作
  - 事件修饰符
    - `prevent` 阻止默认事件
    - `stop` 阻止事件继续传播
    - `capture` 设置事件监听器为捕获模式 向内触发事件
    - `self` 只有当 event.target 是当前元素自身时,才触发事件
    - `once` 只触发一次事件
    - `passive` 主要与 scroll 事件连用,提升移动端性能

```html
<div id="app">
  <button v-on:click="handleClick"></button>
  <div @click="handleClick"></div>
  <div @click.prevent="handleClick"></div>
  <div @click.stop="handleClick('123')"></div>
  <div @click.once="handleClick"></div>
  <div @click.self="handleClick"></div>
  <div @click.stop.prevent="handleClick"></div>
</div>
```

```js
new Vue({
  methods: {
    handleClick(item) {
      console.log(item);
    },
  },
});
```

- **v-if**和**v-else**
  - 条件渲染,根据绑定的值来决定是否渲染 DOM

```html
<div id="app">
  <template v-if="show">显示</template>

  <template v-if="show">显示我</template>
  <template v-else>或者显示我</template>
</div>
```

- **v-show**
  - 显示/隐藏切换,等同于 display: none/display: block
  - 频繁切换状态的推荐使用 v-show 不频繁的推荐使用 v-if

```html
<div id="app">
  <div v-show="show">显示</div>
</div>
```

- **v-for**
  - 循环指令 一般用于循环渲染数据列表
  - 使用循环指令时,建议绑定 key 值
  - 有可能对数组数据做大量操作的情况下,尽量不使用 index 来作为 key 值
-

```html
<div id="app">
  <ul>
    <li v-for="item in list" :key="item.id">{{item}}</li>
  </ul>
  <ul>
    <li v-for="(item,index) in list" :key="index"></li>
  </ul>
</div>
+ **v-cloak** 这个指令保持在元素上直到关联实例结束编译,解决初始化慢导致页面
闪动的最佳实践
```

## 生命周期

- beforeCreate
  - 实例创建之前
- created
  - 实例创建完成,初始化结束,可以通过`this`拿到 data 里面的数据,props 里面的数据,调用 methods 里面的方法
- beforeMount
  - 渲染 DOM 之前
- mounted
  - 页面原始 DOM 渲染完成(不包括异步请求回来的数据渲染)
- beforeUpdate
  - 数据更新前
- updated
  - 数据更新完成
- beforeDestroy
  - 实例销毁之前
- destroyed - 实例销毁完成
  ::: danger

1. 生命周期中禁止使用箭头函数,会导致 this 指向不正确
2. 常用的生命周期就是 created 和 mounted ,其他生命周期在封装插件的时候比较有用,可进阶时了解
   :::

## 实例的数据与方法

- props
  - 上级组件传递下来的数据
  - 尽量不要在组件内改变 props 数据
- data
  - 数据集合
  - 需要与模板绑定的数据都写在此处,注意处理好默认值
- methods
  - 方法集合
  - 实例用到的方法都写在此处 可在实例内的任意位置调用
- mixin
  - 混入 用来分发 vue 组件中的可复用功能
  - 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。 -同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

```js
const myMixin = {
  created: function () {
    this.init();
  },
  methods: {
    init: function () {
      console.log('this is a mixin function');
    },
  },
};
// 定义一个使用混入对象的组件
new Vue({
  mixins: [mixin],
});
```

- filters
  - 过滤器 一般用于文本格式化
  - 本地 在当前实例内定义的过滤器时本地过滤器 只在当前实例有效
  - 全局 在创建 Vue 实例之前定义的过滤器时全局的 后面创建的每一个实例,实例内的每一个组件都有这个方法

```js
<div >{{createTime | parseDate}}</div>
<div v-text="createTime | parseDate"></div>
new Vue({
    filters: {
        parseDate(date){
            //do some
            return string;
        }
    }
})

```

- watch
  - 监听某个值改变时,做一些操作

```js
new Vue({
  data: {
    a: 1,
  },
  watch: {
    a(val, oldVal) {},
  },
});
```

# Vue 小技巧

- `this.$forceUpdate()` 这不会更新任何计算属性，调用 forceUpdate 仅仅强制重新渲染视图。

## watch 和 computed 的区别和运用的场景

- `computed`是计算属性,依赖其他属性计算值,并且`computed`的值有缓存,只有当计算值变化才会返回内容.
- `watch`监听到值得变化就会执行回调,在回调中进行一些逻辑操作.
- `computer`就是简单计算一下,适用于渲染页面.`watcher`适合做一些复杂业务逻辑.
- 前者有依赖两个`watcher`,`computer watcher`和`渲染 watcher`.判断计算出的值变化后`watcher`派发更新触发渲染.

## vue 中的父子通信

- 父传子
  - 通过`props`
  - 通过`$children`访问子组件数组
- 子传父
  - 通过`$emit`
  - 通过`$parent`访问父组件
- 使用`EventBus`
- 使用`Vuex`解决一切

## 面试考点

### 为什么 v-for 和 v-if 不建议用在一起

- 当 v-for 和 v-if 处于同一个节点时,v-for 的优先级比 v-if 更高,这意味着 v-if 将分别重复运行于每个 v-for 循环中.如果要便利的数组很大,而真正要展示 的数据很少,这将造成很大的性能浪费
- 使用 computed 对数据进行过滤

### 组件中的 data 为什么是一个函数

- 一个组件被复用多次的话,也就会创建多个实例.本质上,这些实例用的都是同一个构造函数.
- 如果 data 是对象的话,对象属于引用类型,会影响到所有实例.所以为了保证组件不同的实例之间 data 不冲突,data 必须是一个函数.

### 子组件为什么不可以修改父组件传递的 prop?怎么理解 vue 的单向数据流?

vue 提倡单向数据流,即 props 的更新会流向子组件.这是为了防止意外的改变父组件状态,使得应用的数据流变得难以理解.如果破坏了单向数据流,当应用复杂时,debug 的成本会非常高

### v-model 是如何实现双向绑定的?

v-model 是用来在表单控件或组件上创建双向绑定的,他的本质是 v-bind 和 v-on 的语法糖,在一个组件上使用 v-model,默认会为组件绑定名为 value 的 prop 和名为 input 的事件

### vue 如何检测数组变化

vue 对 7 种数组方法进行了重写(push,shift,pop,splice,unshift,sort,reverse),通过这 7 种方法修改数组才会触发数组对应的 watcher 进行更新

### v-for 为什么要加 key

key 是 vue 中 vnode 的唯一标记,通过这个 key,我们的 diff 操作可以更准确,更快速

### 都做过哪些 vue 性能优化

- 对象层级不要过深,否则性能就会差
- 不需要响应式的数据不要放在 data 中(或者使用 Object.freeze()冻结数据)
- v-if 和 v-show 区分使用场景
- computed 和 watch 区分使用场景
- v-for 遍历必须加 key,同时避免使用 v-if
- 大数据列表使用虚拟列表
- 组件销毁后把全局变量和事件销毁
- 适当采用 keep-alive 缓存组件
- 防抖节流
- 路由懒加载，借助 webpack 的 import 实现异步组件
