## 变量提升
当执行JS代码时,会生成执行环境,只要代码不是写在函数中的,就是在全局执行环境中,函数中的代码会产生函数执行环境,只此两种执行环境.

在生成执行环境时,会有两个阶段,第一个阶段是创建的阶段,js解释器会找出需要提升的变量和函数,并且给他们提前在内存中开辟好空间,函数 的话会将整个函数存入内存中,变量只声明并且赋值为`undefined`,所以在第二个阶段,也就是代码执行阶段,我们可以直接提前使用.

在提升的过程中,相同的函数会覆盖上一个函数,并且函数优先于变量提升.
## 数据类型
JS中分为七种内置类型,七种内置类型又分为两大类型: 原始类型和对象类型.
原始类型存储的都是值,对象类型存储的都是地址(指针).当你创建一个对象类型的时候,计算机会在内存中帮我们开辟一个空间存放值,但我们需要找到这个空间,这个空间会拥有一个地址(指针).
1. number
2. string
3. boolean
4. undefined
5. null
6. object `(包括Object,Array,Function)`
7. symbol `(ES6新增) 生成一个全局唯一的值`

基本类型有六种: `null` , `undefined` , `boolean` , `number` , `string` , `symbol` .

引用类型有一种: `Object` (包括 `Object` 和 `Array` )

## 类型判断
`typeof` 对于基本类型,除了 `null` 都可以显示正确的类型

`typeof` 对于对象,除了函数都会显示 `Object`, 函数显示 `function`,所以说 `typeof` 并不能准确判断变量到底是什么类型.

对于 `null` 来说,虽然它是基本类型,但是会显示 `object`

`instanceof` 可以正确的判断对象的类型,因为内部机制是通过原型链来判断的.

### typeof
typeof主要用于检测基本类型

语法:
```js
typeof(a) // Object
```
### instanceof
instanceof主要用于检测引用类型

语法
```js
a instanceof Array  //true or false
```

## 类型转换
`JS`中类型转换只有三种情况,分别是
* 转换为布尔值
* 转换为数字
* 转换为字符串

### 转Boolean
在条件判断时,除了`undefined`,`null`,`false`,`NaN`,`''`,`0`,`-0`,其他所有值都转为true,包括所有对象.
### 对象转原始类型
对象在转换类型的时候,会调用内置的`[[ToPrimitive]]`函数.
### 四则运算符
加法运算符不同于其他几个运算符,他有一下几个特点:
* 运算中其中一方为字符串,那么就会把另一方也转换为字符串
* 如果一方不是字符串或者数字,那么会将它转换为数字或者字符串
```js
1 + '1' // '11'
true + true // 2
4 + [1,2,3] // '41,2,3'
'a' + + 'b' // 'aNaN'
```

### 比较运算符
* 如果是对象,就通过 toPrimitive 转换对象
* 如果是字符串,就通过 Unicode 字符索引来比较
```js
let a = {
    valueOf(){
        return 0
    },
    toString(){
        return '1'
    }
}
a > -1 // true
```

## this
```js
function foo(){
    console.log(this.a)
}
var a = 1;
foo();
const obj = {
    a: 2,
    foo: foo
}
obj.foo();
const c = new foo();
```
* 对于直接调用`foo`来说,不管foo函数被放在什么地方,`this`一定是`window`
* 对于`obj.foo()`来说,我们只需要记住,谁调用了函数,谁就是`this`,所以在这个场景下`foo`函数中的`this`就是`obj`对象
* 对于`new`的方式来说,`this`被永远绑定在了`c`上面,不会被任何方式改变`this`

```js
function a(){
    return () => {
        return () => {
            console.log(this)
        }
    }
}
console.log(a()()())
```
首先箭头函数其实是没有`this`的,箭头函数的`this`只取决包裹箭头函数的第一个普通函数的`this`.在这个例子中,因为包裹箭头函数的第一个普通函数是a,所以此时的`this`是`window`.另外对箭头函数使用`bind`这类函数是无效的.

最后一种情况也就是`bind`这些改变上下文的`API`了,对于这些函数来说,`this`取决于第一个参数,如果第一个参数为空,那么就是`window`.

当多个规则同时出现的情况,这时候不同的规则之间会根据优先级最高的来决定`this`最终指向哪里.

首先,`new`的方式优先级最高,接下来是`bind`这些函数,然后是`obj.foo()`这种调用方式,最后是`foo`这种调用方式,同时,箭头函数的`this`一旦被绑定,就不会再被任何方式改变.

::: warning 
```js
let fn = function(){console.log(this)}
fn.bind().bind(a)();
```
不管我们给函数`bind`几次,`fn`中的`this`永远由第一次`bind`决定,所以结果永远是`window`.
:::

## == VS ===

