## 单行文本溢出省略
```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

## 多行文本溢出省略
```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
text-overflow: ellipsis;
```

## 吸顶效果
```css
position: sticky;
position: -webkit-sticky;
top: 50px;
```
:::warning 注意
1. 父元素及祖先元素不能有`overflow:hidden`或者`overflow:auto`属性.
2. 必须指定`top`,`bottom`,`left`,`right`中的一个值.
3. 父元素高度不能低于sticky元素的高度
4. sticky元素仅在其父元素内生效
:::

## IPhoneX底部横条兼容
```css
padding-bottom: 0
padding-bottom: constant(safe-area-inset-bottom);
padding-bottom: env(safe-area-inset-bottom);
```

## 重置浏览器自动填充的样式
```css
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  transition: background-color 5000s ease-in-out 0s !important;
}
```

