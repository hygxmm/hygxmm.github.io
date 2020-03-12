### URL参数反序列化
```js
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
```js
function stringifyUrlsearch(search = {}){
    return Object.entries(search).reduce(
        (t,v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
        Object.keys(search).length ? "?" : ""
    ).replace(/&$/,"");
}

stringifyUrlsearch({name: 'aaa',age: 18}); // "?name=aaa&age=18"

```