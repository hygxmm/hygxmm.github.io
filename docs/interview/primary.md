
## JS的基本数据类型

基本类型:  `String`,`Number`,`Boolean`,`Symbol`,`Undefined`,`Null`

引用类型: `Object`(包括`Object`和`Array`)

## HTML5 离线存储

localStorage: 长期存储数据,浏览器关闭后数据不丢失

sessionStorage: 数据在浏览器关闭后自动删除

## 如何显示/隐藏DOM元素?有何异同?

+ `display: none`
+ `visibility: hidden`

`display:none`会隐藏掉元素空间,`visibility: hidden`会保留元素空间

## GET和POST的区别?

`GET`: 一般用于信息获取,使用`URL`传递参数,对所发送信息的数量也有限制,一般在2000个字符左右

`POST`: 一般用于修改,提交数据,对所发送的信息没有限制

## ===与==有何异同?

相同点: 都是判断两个值是否相等

不同点: `==`不会判断类型,而`===`会判断类型

## 如何判断一个变量是否是数组?
1. Array.isArray(obj)
2. obj instanceof Array
3. Object.prototype.toString.call(obj) === '[object Array]'

## 优化网站性能有哪些方法?
1. 代码压缩合并(压缩代码体积),减少http请求
2. 非核心代码异步加载
3. 利用浏览器缓存
4. 使用CDN
5. DNS预解析
6. 防抖与节流

## vue 生命周期
1. 创建前(beforeCreate)
2. 创建后(created)
3. 载入前(beforeMount)
4. 载入后(mounted)
5. 更新前(beforeUpdate)
6. 更新后(updated)
7. 销毁前(beforeDestroy)
8. 销毁后(destroyed)

## v-if和v-show有什么区别
`v-show`仅仅控制元素的显示方式,将`display`属性在`block`和`none`来回切换;而`v-if`会控制这个`DOM`节点的存在与否.当我们需要经常切换某个元素的显示/隐藏时,使用`v-show`会更加节省性能上的开销,当只需要一次显示或隐藏时,使用`v-if`更加合理.

## 

