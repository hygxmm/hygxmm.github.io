## 用法

```js
const io = new IntersectionObserver(callback, options);

// options
{
  root: "element", // 相对父容器,默认页面根元素
  rootMargin: "0px 0px 0px 0px", // 改变交叉区域监听的范围
  threshold: [0, 0.25, 0.5, 0.75, 1]; // 什么时候触发回调函数,默认是0. 0: 出现立即出发 1: 完全显示出来再触发回调
}
```

## 示例

```jsx
import { useEffect } from 'react';
export default () => {
  useEffect(() => {
    // 创建观察器实例 threshold: 元素可见比例
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('元素完全可见');
          }
        });
      },
      {
        threshold: 1,
      },
    );
    //
    io.observe(document.querySelector('.tar'));
  }, []);
  return (
    <>
      <div
        style={{
          width: '200px',
          height: '300px',
          background: '#aeaeae',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <div style={{ height: '1500px' }}>
          <div style={{ height: '500px' }}></div>
          <div
            className="tar"
            style={{ height: '50px', background: '#ab4ab9' }}
          ></div>
        </div>
      </div>
      <div style={{ fontSize: 12, color: '#cecece', marginTop: 10 }}>
        打开控制台看打印结果
      </div>
    </>
  );
};
```
