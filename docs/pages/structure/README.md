# 常见数据结构

## 时间复杂度

#### 什么是时间复杂度?
通常使用最差的时间复杂度来衡量一个算法的好坏.

常数时间O(1)代表这个操作和数据量没关系,是一个固定时间的操作,如四则运算.

对于一个算法来说,可能会计算出操作次数为aN+1,N代表数据量.那么该算法的时间复杂度就是O(N).因为我们在计算时间复杂度的时候,数据量通常是非常大的,这时候低阶项和常数项可以忽略不计.

当然可能会出现两个算法都是 O(N)的时间复杂度,那么对比两个算法的好坏就要通过对比低阶项和常数项了.

## 栈

#### 概念

栈是一个线性结构,栈的特点是只能在某一端添加或删除数据,遵循先进后出的原则.

#### 实现

每种数据结构都可以用很多种方式实现,其实可以把栈看成是数组的一个子集.所以这里使用数组来实现
```js
class Stack {
    constructor(){
        this.stack = [];
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        this.stack.pop();
    }
    peek(){
        return this.stack[this.getCount() - 1];
    }
    getCount(){
        return this.stack.length;
    }
    isEmpty(){
        return this.getCount() === 0;
    }
}
```

#### 应用
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
```js
var isValid = function (s) {
  let map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i])
    } else {
      let last = stack.pop()
      if (map[last] + map[s[i]] != 0) return false
    }
  }
  if (stack.length > 0) return false
  return true
};
```

## 队列

#### 概念

队列是一个线性结构,特点是在某一端添加数据,在另一端删除数据,遵循先进先出的原则.
