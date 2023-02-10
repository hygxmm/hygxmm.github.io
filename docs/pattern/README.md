### 概念
通过大量实践总结,方法探索凝练的方法论和模式

### 作用
+ 可解耦
+ 可扩展
+ 可维护
+ 稳定可靠
+ 条理性
+ 可重用

## 单例模式
#### 1. 概念
单例模式: 保证一个类只有一个实例,一般先判断实例是否存在,如果存在,直接返回.如果不存在,则先创建再返回.这样就可以保证一个类只有一个实例对象.
#### 2. 作用
+ 模块间通讯
+ 保证某个类的对象的唯一性
+ 防止变量污染
#### 3. 注意事项
+ 正确使用this
+ 闭包容易造成内存泄漏,所以要及时清除不需要的变量
+ 创建一个新对象的成本较高
#### 4. 示例
```js
(function(){
    // 养鱼游戏
    let fish = null;
    function catchFish(){
        // 如果鱼存在,则直接返回
        if(fish){
            return {
                fish,
                water: function(){
                    let water = this.fish.getAttribute('weight');
                    this.fish.setAttribute('weight',++water);
                }
            }
        }else{
            // 鱼如果不存在,则获取鱼再返回
            fish = document.querySelector('#cat');
            return {
                fish,
                water: function(){
                    let water = this.fish.getAttribute('weight');
                    this.fish.setAttribute('weight',++water);
                }
            }
        }
    }
    // 每隔3小时喂一次水
    setInterval(() => {
        catchFish().water();
    },3*60*60*1000)
})()
```
::: tip 小提示
单例模式广泛应用于不同程序语言中,在实际软件应用中应用比较多的比如电脑的任务管理器,回收站,网站的计数器,多线程的线程池的设计等.
:::
 
## 构造器模式
#### 1. 概念
构造器模式: 用于创建特定类型的对象,以便实现业务逻辑和功能的可复用.
#### 2. 作用
+ 创建特定类型的对象
+ 逻辑和业务的封装
#### 3. 注意事项
+ 注意划分好业务逻辑的边界
+ 配合单例实现初始化等工作
+ 构造函数命名规范,第一个字母大写
+ new对象的成本,把公用方法放在原型链上
#### 4. 示例
```js
function Tools(){
    if(!(this instanceof Tools)) return new Tools();
    this.name = 'js工具库';
    // 获取dom方法
    this.getEl = function(elem){
        return document.querySelector(elem)
    }
    // 判断是否是数组
    this.isArray = function(arr){
        return Array.isArray(arr);
    }
}
```

::: tip 小提示
构造器模式我觉得是代码的格局,也是用来考验程序员对业务代码的理解程度.它往往用于实现javascript的工具库,比如loadash等以及javascript框架.
:::

## 建造者模式
#### 1. 概念
建造者模式: 讲一个复杂的逻辑或者功能通过有条理的分工来一步步实现.
#### 2. 作用
+ 分布创建一个复杂的对象或者实现一个复杂的功能
+ 解耦封装过程,无需关注具体创建的细节
#### 3. 注意事项
+ 需要有可靠算法和逻辑的支持
+ 按需暴露一定的接口
#### 4. 示例
```js
// canvas绘制图形验证码
(function(){
    function Gcode(el,option){
        this.el = typeof el === 'string' ? document.querySelector(el) : el;
        this.option = option;
        this.init();
    }
    Gcode.prototype = {
        constructor: Gcode,
        init: function(){
            if(this.el.getContext){
                isSupportCanvas = true;
                let ctx = this.el.getContext('2d');
                // 设置画布宽高
                cw = this.el.width = this.option.width || 200;
                ch = this.el.height = this.option.height || 40;
                textLen = this.option.textLen || 4;
                lineNum = this.option.lineNum || 4;
                let text = this.randomText(textLen);

                this.onClick(ctx,textLen,lineNum,cw,ch);
                this.drawLine(ctx,lineNm,cw,ch);
                this.drawText(ctx,text,ch);
            }
        },
        onClick: function(ctx,textLen,lineNum,cw,ch){
            let _ = this;
            this.el.addEventListener('click',function(){
                text = _.randomText(textLen);
                _.drawLine(ctx,lineNum,cw,ch);
                _.drawText(ctx,text,ch);
            },false)
        },
        drawLine: function(ctx,lineNum,maxW,maxH){
            ctx.clearRect(0,0,maxW,maxH);
            for(let i=0;i<lineNum;i++>){
                let dx1 = Math.random()*maxW,
                    dy1 = Math.random()*maxH,
                    dx2 = Math.random()*maxW,
                    dy2 = Math.random()*maxH;
                ctx.strokeStyle = 'rgb('+255*Math.random()+','255*Math.random()+','+255*Math.random() +')';
                ctx.beginPath();
                ctx.moveTo(dx1,dy1);
                ctx.lineTo(dx2,dy2);
                ctx.stroke();
            }
        },
        drawText: function(ctx,text,maxH){
            var len = text.length;
            for(var i=0; i < len; i++) {
                var dx = 30 * Math.random() + 30* i,
                    dy = Math.random()* 5 + maxH/2;
                ctx.fillStyle = 'rgb(' + 255*Math.random() + ',' + 255*Math.random() + ',' + 255*Math.random() + ')';
                ctx.font = '30px Helvetica';
                ctx.textBaseline = 'middle';
                ctx.fillText(text[i], dx, dy);
            }
        },
        // 生成指定个数的随机文字
        randomText: function(len){
            var source = [
            'a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y',
            'z' ];
            var result = [];
            var sourceLen = source.length;
            for(var i=0; i< len; i++) {
                var text = this.generateUniqueText(source, result, sourceLen);
                result.push(text)
            }
            return result.join('');
        },
        // 生成唯一文字
        generateUniqueText: function(source, hasList, limit) {
            var text = source[Math.floor(Math.random()*limit)];
            if(hasList.indexOf(text) > -1) {
                return this.generateUniqueText(source, hasList, limit)
            }else {
                return text
            }  
        }
    }
})()
new Gcode('#canvas_code',{lineNum: 6});
```

## 代理模式
#### 1. 概念
代理模式: 一个对象通过某种代理方式来控制对另一个对象的访问
#### 2. 作用
+ 远程代理(一个对象对另一个对象的局部代理)
+ 虚拟代理(对于需要创建开销很大的对象如渲染网页大图时,可以先用缩略图代替真图)
+ 安全代理(保护真实对象的访问权限)
+ 缓存代理(一些开销比较大的运算提供暂时的存储,下次运算时,如果传递进来的参数跟之前相同,则可以直接返回前面存储的运算结果)
#### 3. 注意事项
使用代理会增加代码的复杂度,所以应该有选择的使用代理.
#### 4. 示例
```js
// 缓存代理
function sum(a,b){
    return a+b
}
let proxySum = (function(){
    let cache = {}
    return function(){
        let args = Array.prototype.join.call(arguments,',');
        if(args in cache){
            return cache[args];
        }
        cache[args] = sum.apply(this,arguments)
        return cache[args];
    }
})()
```
## 观察者模式
#### 1. 概念
观察者模式: 定义了一种一对多的关系,所有观察对象同时监听某一主题对象,当主题对象状态发生变化时就会通知所有观察者对象,使得他们能够自动更新自己.
#### 2. 作用
+ 目标对象与观察者存在一种动态关联,增加了灵活性
+ 支持简单的广播信息,自动通知所有已经订阅过的对象
+ 目标对象和观察者之间的抽象耦合关系能够单独扩展和重用
#### 3. 注意事项
观察者模式一般都要注意先监听,再触发.
#### 4. 示例 
```js
class Subject {
    constructor(){
        this.subs = {}
    }
    addSub(key,fn){
        const subArr = this.subs[key];
        if(!subArr){
            this.subs[key] = [];
        }
        this.subs[key].push(fn);
    }
    trigger(key,message){
        const subArr = this.subs[key];
        if (!subArr || subArr.length === 0) {
            return false;
        }
        for(let i = 0, len = subArr.length; i < len; i++) {
            const fn = subArr[i];
            fn(message);
        }
    }
    unSub(key, fn) {
        const subArr = this.subs[key];
        if (!subArr) {
            return false;
        }
        if (!fn) {
            this.subs[key] = [];
        } else {
            for (let i = 0, len = subArr.length; i < len; i++) {
                const _fn = subArr[i]
                if (_fn === fn) {
                    subArr.splice(i, 1)
                }
            }
        }
    }
}
// 订阅
let subA = new Subject();
let A = (message) => {
  console.log('订阅者收到信息: ' + message);
}
subA.addSub('A', A);
// 发布
subA.trigger('A', '啊啊啊啊科学实验室');
```