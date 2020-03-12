# React 简介

## 生命周期函数
```js
class ExampleComponent extends React.Component{
    // 初始化state
    constructor(){}
    // 用于替换 componentWillReceiveProps,该函数会在初始化和 update 时被调用
    // 因为该函数是静态函数,所以取不到this
    // 如果需要对比 prevProps,需要单独在 state 中维护
    static getDerivedStateFromProps(nextProps,prevState){}
    // 判断是否需要更新组件,多用于组件性能优化
    shouldComponentUpdate(nextProps,nextState){}
    // 组件挂载后调用,多用于请求或者订阅
    componentDidMount(){}
    // 用于获取最新 DOM 数据
    getSnapshotBeforeUpdate(){}
    // 组件即将销毁,多用于移除订阅,移除定时器等等
    componentWillUnmount(){}
    // 组件销毁后调用
    componentDidUnmount(){}
    // 组件更新后调用
    componentDidUpdate(){}
    // 渲染函数
    render(){}
}
```