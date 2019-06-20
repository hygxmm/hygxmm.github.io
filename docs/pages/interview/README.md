# 面试

## 数组去重
```js
[...new Set(arr)]
```

## 打乱数组
```js
arr.sort(() => {
    return 0.5 - Math.random()
})
```

## 统计数组元素出现的次数
```js
let arr = ['2', 1, 5, 4, 7, '9', 4, 1, '2', 6, 8, 2];
let newArr = arr.reduce((arrs,current) => {
    const found = arrs.find(it => it[0] === current);
    if(found){
        found[1] += 1
    }else{
        arrs.push([current,1])
    }
    return arrs
},[])
console.log(newArr)
```

## 统计字符串各个字符出现的次数
```js
let str = 'fjuodsfdsfsdfhis';
let obj = {};
for(let i=0,len=str.length;i<len;i++){
    if(obj[str[i]]){
        obj[str[i]]++
    }else{
        obj[str[i]] = 1
    }
}
console.log(obj)
```

## 获取地址链接的各个参数
```js
let url= '';
const search = url.substring(url.indexOf(?)+1);
const temArr = search.split('&);
const urlObj = {};
if(temArr.length > 0 && temArr[0] != ''){
    for(let i=0,len=temArr.length;i<len;i++){
        let tem = temArr[i].split("=");
        urlObj[tem[0]] = tem[1]
    }
}
console.log(urlObj)
```

## 
