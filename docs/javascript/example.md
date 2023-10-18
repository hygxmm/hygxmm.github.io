### URL参数反序列化
```javascript
function parseUrlSearch(){
    return location.search.replace(/(^\?)|(&$)/g,"").split('&').reduce((t,v) => {
        const [key,val] = v.split("=");
        t[key] = decodeURIComponent(val);
        return t;
    },{})
}

// url: https://www.baidu.com?name=aaa&age=18
parseUrlSearch(); // {name: 'aaa',age: '18'}
```

### URL 参数序列化
```javascript
function stringifyUrlsearch(search = {}){
    return Object.entries(search).reduce(
        (t,v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
        Object.keys(search).length ? "?" : ""
    ).replace(/&$/,"");
}

stringifyUrlsearch({name: 'aaa',age: 18}); // "?name=aaa&age=18"

```

### 格式化对象为JSON代码
```javascript
const user = {
  id: 1,
  name: 'aaa',
  age: 18,
  address: {
    city: 'beijing'
  },
}
const formatted = JSON.stringify(user, null, 2)
/**
 {
  "id": 1,
  "name": "aaa",
  "age": 18,
  "address": {
      "city": "beijing"
    }
  }
 */

```
### 快速创建数字数组
```javascript
const numArray = Array.from(new Array(10),(val, index) => index);
```
### 随机生成六位数字验证码
```javascript
const code = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
```
### 获取数组的交集
```javascript
const similarity = (arr,values) => arr.filter(v => values.includes(v));
```
### 获取数组的并集
```javascript
const union = (a,b) => Array.from(new Set([...a,...b]));
```
### 获取数组的差集
```javascript
const difference = (a,b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
}
```
### 检测设备类型
```javascript
const detectDeviceType = () =>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
```
### 将数字转化为千分位格式
```javascript
const toDecimalMark = num => num.toLocaleString('en-US');
```
### 常用密码组合正则
```javascript
const passwordReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,20}$/;
// -长度8~20位字符，支持大小写字母、数字、符号三种字符中任意两种字符的组合
```
### RGB 颜色转 16进制颜色
```javascript
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
```
