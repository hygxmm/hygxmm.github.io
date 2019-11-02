# 数组详解

## 扩展运算符
扩展运算符(...)好比是rest参数的逆运算,将一个数组转为用逗号分隔的参数序列.
```js
const a = [0,...[1,2,3],5,6] //a = [0,1,2,3,5,6]
```

## Array.from()
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）.
```js
const a = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
Array.from(a) // ['a','b','c']
Array.from({length: 10}, (v, i) => i);//生成一个从0到指定数字的新数组
```

## Array.of()
Array.of 方法用于将一组值,转换为数组,主要为了弥补构造函数Array()的不足
```js
Array.of(3,11,8) //[3,11,8]
Array.of(3) //[3]
Array(3) //[ , , ]
```

## Array.isArray
判断一个变量是否是数组类型.
```js
Array.isArray([])//true
```
## pop
删除一个数组中的最后一个元素,并返回这个元素

## push
添加一个或者多个元素到数组末尾,并返回数组新的长度.
```js
array.push(...array1)//合并两个数组 比concat方法效率更高
```

## reverse
颠倒数组中元素的位置,返回数组的引用

## shift
删除数组的第一个元素,返回被删除的元素

## unshift
在数组开始出插入一些元素,返回新数组的长度

## sort
对数组元素进行排序,并返回这个数组.
```js
//省略参数 数组元素将按照各自转换为字符串的Unicode(万国码)位点顺序排序
array.sort()
//中文字符排序
array.sort(function(a,b){
    return a.localeCompare(b)
}
//
```

## splice
使用新元素替换旧元素,修改原始数组
```js
//start 指定修改的位置
//delCount 要删除的元素个数
//item1,item2 要新增的元素
array.splice(start,delCount,...[item1,item2])
```

## copyWithin()
在当前数组内部,将指定位置的成员复制到其他位置(会覆盖原有成员),然后返回当前数组,也就是说,使用这个方法,会修改当前数组.  
他接受三个参数:  
    - target (必需) : 从该位置开始替换数据.如果为负值,表示倒数.  
    - start (可选) : 从该位置开始读取数据,默认为0.如果为负值,表示倒数.  
    - end (可选) : 到该位置前停止读取数据,默认等于数组长度.如果为负值,表示倒数.  
```js
[1,2,3,4,5,6,7,8].copyWithin(0,3,4) //将3号位复制到0号位 //[4,2,3,4,5,6,7,8]
```

## fill()
使用给定的值,填充数组
```js
new Array(8).fill(0) // [0,0,0,0,0,0,0,0]
```

## concat
将传入的数组或者元素与原数组合并，组成一个新的数组并返回。
```js
array.concat(array1,array2,array3)
```

## join
将数组中的所有元素连接成一个字符串

## slice
将数组中一部分元素浅复制存入新的数组对象,并且返回这个数组对象
```js
//start 开始的位置
//end  结束的位置
array.slice(start,end)
```

## toString
返回数组的字符串形式,该字符串由数组中的每个元素的 toString() 返回值调用 join() 方法连接组成
```js
array.toString()
```

## indexOf
查找元素在数组中第一次出现时的索引,如果没有,则返回-1
```js
array.indexOf(item)
```

## lastIndexOf
查找元素在数组中最后一次出现时的索引，如果没有，则返回-1
```js
array.lastIndexOf(item)
```

## forEach
指定数组的每项元素都执行一次传入的函数
```js
array.forEach(item => fn)
```

## every
使用传入的函数测试所有元素,只要其中一个函数返回值为false,那么该方法的结果为false,如果全部返回true,那么该方法的结果才为true
```js
array.every(item => fn)
```
## some
some 测试数组元素时，只要有一个函数返回值为 true，则该方法返回 true，若全部返回 false，则该方法返回 false。
```js
array.some(item => fn)
```

## filter
使用传入的函数测试所有元素，并返回所有通过测试的元素组成的新数组。它就好比一个过滤器，筛掉不符合条件的元素。
```js
const arr = array.filter((item,index,array) => fn)
```

## map
遍历数组，使用传入函数处理每个元素，并返回函数的返回值组成的新数组。
```js
const arr = array.map((item,index,array) => {})
```

## reduce
接收一个方法作为累加器，数组中的每个值(从左至右) 开始合并，最终为一个值。
```js
const num = array.reduce((count,item,index,array) => {},initNum)
```




## find()
找出第一个符合条件的数组成员.它的参数是一个回调函数,所有数组成员依次执行该回调函数,直到找出第一个返回值为true的成员,然后返回该成员.没有符合条件的成员,则返回undefined.
```js
[1,5,12,15].find(item => item > 10) // 12
```

## findIndex()
与find方法类似,返回第一个符合条件的数组成员的位置,如果所有成员都不符合条件,则返回 -1 .
```js
[1,5,12,15,20].findIndex(item => item > 10) // 2
```

## entries()
对数组的键值对进行遍历
```js
for(let [index,ele] of ['a','b','c'].entries()){
    console.log(index,ele)
}
// 0 'a'
// 1 'b'
// 2 'c'
```

## keys()
对数组的键名进行遍历
```js
for(let ele of ['a','b','c'].keys()){
    console.log(ele)
}
// 0
// 1
// 2
```

## values()
对数组的键值进行遍历
```js
for(let ele of ['a','b','c'].values()){
    console.log(ele)
}
// 'a'
// 'b'
// 'c'
```

## includes()
返回一个布尔值,表示某个数组是否包含给定的值.
```js
[1,2,3,4,5,6].includes(3) //true
```

## flat
flat 用于将嵌套的数组拉平,变成一维数组.该方法返回一个新数组,对原数据没有影响.默认只会拉平一层,接受一个参数,表示要拉平几层.如果不管有多少层嵌套,都要转成一维数组,可以用 infinity 关键字作为参数
```js
[1,2,[3,4,[5,6]],[7,8,[9,10]]].flat(3) //[1,2,3,4,5,6,7,8,9,10]
```

## flatMap
flatMap 对原数组的每个成员执行一个函数,然后对返回值组成的数组执行 flat 方法.该方法返回一个新数组,不改变原数组.
```js
[1,2,3,4,5].flatMap(x => [x,x*2]) //[1,2,2,4,3,6,4,8,5,10]
```

## 数组的空位
数组的空位指数组的某一个位置没有任何值.比如,Array构造函数返回的数组都是空位.空位不是undefined,一个位置的值等于undefined,依然是有值得,空位是没有任何值.
+ forEach(),filter(),reduce(),every(),some() 都会跳过空位
+ map()会跳过这个空位,但会保留这个值
+ join()和toString()会将空位视为undefined,而undefined和null会被处理成空字符串.
+ Array.from()会将数组的空位转为undefined
+ 扩展运算符(...)也会将空位转为undefined
+ copywithin()会连空位一起拷贝
+ fill()会将空位视为正常的数组位置
+ for ... of 循环也会遍历空位
+ entries(),keys(),values(),find(),findIndex()会将空位处理成 undefined

## 


## 数组操作
### 常用数组方法
+ Array.find()
+ Array.findIndex()
+ Array.some()
+ Array.filter()
+ Array.map()
+ Array.reduce()
+ Array.indexOf()
+ Array.includes()
### 数组去重
```js
const arr = [...new Set(arr)]
```
### 数组合并
```js
const arr = [...arr1,...arr2]
```
### 类数组集合转数组
```js
const arr = Array.from(args)
```

## 遍历多叉树

```js
//数据结构
const data = [
    {
        id: 1,
        children: [
            {
                id: 11,
                children: [
                    {
                        id: 111
                    },
                    {
                        id: 112
                    },
                    {
                        id: 113
                    }
                ]
            },
            {
                id: 12,
                children: [
                    {
                        id: 121
                    },
                    {
                        id: 122
                    },
                    {
                        id: 123
                    }
                ]
            },
            {
                id: 13
            }
        ]
    },
    {
        id: 2,
    },
    {
        id: 3,
        children: [
            {
                id: 31
            },
            {
                id: 32
            },
            {
                id: 33
            }
        ]
    }
]
```

+ **递归实现**
```js
const parseData = (data) => {
    if(!data || !data.length) return;
    for(let i=0,len=data.length;i<len;i++){
        let child = data[i].children;
        if(child && child.length !== 0){
            parseData(child)
        }
    }
}
parseData(data)
```
+ **广度优先实现**
```js
//非递归广度优先实现
const parseData = (data) => {
    if(!data || !data.length) return;
    let stack = [];
    for(let i=0,len=data.length;i<len;i++){
        stack.push(data[i])
    }
    let item;
    while(stack.length){
        item = stack.shift();
        if(item.children && item.children.length){
            stack = stack.concat(item.children)
        }
    }
}
parseData(data);
```

+ **深度优先实现**
```js
//非递归深度优先实现
const parseData = (data) => {
    if(!data || !data.length) return;
    let stact = [];
    for(let i=0,len=data.length;i<len;i++){
        stack.push(data[i])
    }
    let item;
    while(stack.length){
        item = stack.shift();
        if(item.children && item.children.length){
            stack = item.children.concat(stack)
        }
    }
}
parseData(data);
```
