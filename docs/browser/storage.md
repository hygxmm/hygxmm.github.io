## 浏览器中的各种存储方案对比

### Cookie

#### 特点
- cookie的大小受限制,cookie大小被限制在4kb.
- cookie要在服务器和浏览器之间来回传送,cookie数据始终在同源的http请求中携带(即使不需要).
- cookie是服务端生成,客户端进行维护和存储的.
#### 生成方式
- 服务器通过 http response header 中的set-cookie设置
- javascript中通过document.cookie读写,cookie以键值对的形式展示
#### 缺点
- cookie会被附加在每一个HTTP请求中,在`HttpRequest`和`HttpResponse`的`header`中都是要被传输的,所以无形中增加了一些不必要的流量损失.
- cookie是用来维护用户信息的,而域名(domain)下的所有请求都会携带cookie,但对于静态文件的请求,携带cookie信息根本没用,此时可以通过cdn的域名和主站域名分开来解决.
- 由于在HTTP请求中的cookie是明文传递的,所以安全性成问题,除非使用HTTPS.可以使用HttpPnly提升Cookie安全性.HttpOnly不支持读写,浏览器不允许脚本操作document.cookie去更改cookie.一般情况下都应该设置这个为true.这样可以避免被XSS攻击拿到cookie.


### Local Storage
这是一种持久化的存储方式,也就是说如果不手动清除,数据就永远不会过期.它也采用Key-Value的方式存储数据,底层数据接口是sqlite,按域名将数据分别保存到对应数据库文件里.它能保存更大的数据(chrome是5MB,IE8是10MB),同时保存的数据不会再发送给服务器,避免带宽浪费.
#### 特点
1. localStorage大小限制在500万字符左右,各个浏览器不一致
2. localStorage在隐私模式下不可读取
3. localStrong本质是在读取文件,数据多的话比较卡
4. localStorage不能被爬虫爬取,不能用它完全取代URL传参

### Session Storage
和服务端使用的session类似,是一种会话级别的缓存,关闭浏览器会清除数据.不过有点特变的是它的作用域是窗口级别的,也就是说不同窗口间的sessionStorage数据不能共享.
#### 特点
1. 会话级别的浏览器存储
2. 大小为5M左右
3. 仅在客户端使用,不和服务端进行通信
4. 接口封装较好

### IndexedDB