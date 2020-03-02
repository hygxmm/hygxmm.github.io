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
        title: 'Hello World'
    }
})
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
这里的 `<div id="app"></div>` 指的就是vue实例挂载点，因为el中的#id元素是和上面的id是对应的，vue实例只会处理挂载点里面的内容.
### 模板
在挂载点内部的内容叫做模版
### 实例
用 `new Vue` 可以创建一个实例


## 指令
+ **v-text**
    + 不解析标签,纯文本输出
```html
<div id="app">
    <div v-text="title"></div>
    <div>{{title}}</div>
</div>
```
+ **v-html**
    + 会解析标签,富文本输出
```html
<div id="app">
    <div v-html="title"></div>
    <div>{{title}}</div>
</div>
```

+ **v-bind** 简写成 **:**
    + 绑定指令,使数据和视图绑定起来,想改变我们的视图,只需要改变数据即可,免去了我们手动去操作DOM的步骤
    + 单向绑定 只能通过数据改变视图,手动去改变视图,数据不会改变
```html
<div id="app">
    <img :alt="txt" />
</div>
```
+ **v-model** 
    + 双向数据绑定 一般用于input输入框.不管是直接改变数据还是通过输入框输入,视图和数据都会同步改变
```html
<div id="app">
    <input v-model="txt"></input>
    <div>{{txt}}</div>
</div>
```
+ **v-on** 简写成 **@**
    + 事件绑定方法,免去我们遍历DOM,绑定事件的操作
    + 事件修饰符
        + `prevent` 阻止默认事件
        + `stop` 阻止事件继续传播
        + `capture` 设置事件监听器为捕获模式 向内触发事件
        + `self` 只有当event.target 是当前元素自身时,才触发事件
        + `once` 只触发一次事件
        + `passive` 主要与scroll事件连用,提升移动端性能
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
        handleClick(item){
            console.log(item)

        }
    }
})
```
+ **v-if**和**v-else**
    + 条件渲染,根据绑定的值来决定是否渲染DOM
```html
<div id="app">
    <template v-if="show">显示</template>

    <template v-if="show">显示我</template>
    <template v-else>或者显示我</template>
</div>

```
+ **v-show**
    + 显示/隐藏切换,等同于 display: none/display: block
    + 频繁切换状态的推荐使用v-show 不频繁的推荐使用v-if
```html
<div id="app">
    <div v-show="show">显示</div>
</div>
```
+ **v-for**
    + 循环指令 一般用于循环渲染数据列表
    + 使用循环指令时,建议绑定key值
    + 有可能对数组数据做大量操作的情况下,尽量不使用index来作为key值
+
```html
<div id="app">
    <ul>
        <li v-for="item in list" :key="item.id">
            {{item}}
        </li>
    </ul>
    <ul>
        <li v-for="(item,index) in list" :key="index"></li>
    </ul>
</div>
```

## 生命周期
+ beforeCreate
    - 实例创建之前 
+ created
    - 实例创建完成,初始化结束,可以通过`this`拿到data里面的数据,props里面的数据,调用methods里面的方法
+ beforeMount
    - 渲染DOM之前
+ mounted
    - 页面原始DOM渲染完成(不包括异步请求回来的数据渲染)
+ beforeUpdate
    - 数据更新前
+ updated
    - 数据更新完成
+ beforeDestroy
    - 实例销毁之前
+ destroyed
    - 实例销毁完成
::: danger 
1. 生命周期中禁止使用箭头函数,会导致this指向不正确
2. 常用的生命周期就是 created 和 mounted ,其他生命周期在封装插件的时候比较有用,可进阶时了解
:::

## 实例的数据与方法
+ props
    - 上级组件传递下来的数据
    - 尽量不要在组件内改变props数据
+ data
    - 数据集合
    - 需要与模板绑定的数据都写在此处,注意处理好默认值
+ methods
    - 方法集合
    - 实例用到的方法都写在此处 可在实例内的任意位置调用
+ mixin
    - 混入 用来分发vue组件中的可复用功能
    - 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
    -同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
```js
const myMixin = {
  created: function () {
      this.init();
  },
  methods: {
    init: function () {
      console.log('this is a mixin function')
    }
  }
}
// 定义一个使用混入对象的组件
new Vue({
    mixins: [mixin],
})
```
+ filters
    - 过滤器 一般用于文本格式化
    - 本地 在当前实例内定义的过滤器时本地过滤器 只在当前实例有效
    - 全局 在创建Vue实例之前定义的过滤器时全局的 后面创建的每一个实例,实例内的每一个组件都有这个方法
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
+ watch
    - 监听某个值改变时,做一些操作
```js
new Vue({
    data: {
        a: 1,
    },
    watch: {
        a(val,oldVal){

        }
    }
})
```
# Vue小技巧
- `this.$forceUpdate()` 这不会更新任何计算属性，调用forceUpdate仅仅强制重新渲染视图。
