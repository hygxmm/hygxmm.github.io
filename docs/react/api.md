## useState

```js
const [state, setState] = useState(initialState);

setState({ a: 1, b: 2 });

setState((value) => {
  return {
    ...value,
    a: 3,
    b: 4,
  };
});
```

返回 state 和更新 state 的函数.
在初始渲染期间,返回的状态(`state`)与传入的第一个参数(`initialState`)值相同.
`setState`函数用于更新 state.他接受一个新的 state 值并将组件的一次重新渲染加入队列.

## useEffect

```js
useEffect(() => {}); // 每轮渲染之后执行
useEffect(() => {}, []); // 首次渲染之后执行
useEffect(() => {}, [a]); // a的值有变化的时候执行
useEffect(() => {
  return () => {};
}, []); // 组件卸载时返回清除函数,可以在这里清除计时器,订阅消息等
```

该 Hook 接受一个包含命令式,且可能有副作用代码的函数.
在函数组件主体内,改变 DOM,添加订阅,设置定时器,记录日志以及其他包含副作用的操作都是不被允许的.
使用`useEffect`完成副作用操作.赋值给`useEffect`的函数会在组件渲染到屏幕之后执行.

## useContext

```js
const value = useContext(MyContext);
```

接受一个 context 对象并返回该 context 的当前值.当前的 context 值由上层组件中距离当前组件最近的`<MyContext.Provider></MyContext.Provider>`的`value`prop 决定.
当组件上层最近的`<MyContext.Provider></MyContext.Provider>`更新时,该 Hook 会触发重新渲染,并使用最新传递给`MyContext`provider 的 context`value`值.

##### 示例:

```js
const themes = {
  light: { color: '#000', background: 'fff' },
  dark: { color: '#fff', background: '#000' },
};
const ThemeContext = React.createContext(themes.light);

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ color: theme.color, background: theme.background }}>
      切换
    </button>
  );
};
```

## useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

`useState`的替代方案.他接受一个形如`(state,action) => newState`的 reducer,并返回当前的 state 以及与其配套的`dispatch`方法.
在某些场景下,`useReducer`会比`useState`更适用,例如 state 逻辑复杂且包含多个子值,或者下一个 state 依赖于之前的 state 等.
使用`useReducer`还能给那些会触发深更新的组件做性能优化,因为你可以向子组件传递`dispatch`而不是回调函数.

##### 示例:

```js
const initialValue = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case: 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state,dispatch] = useReducer(reducer,initialValue);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}
```

## useCallback

```js
const memoizedCallback = useCallback(() => {}, [a, b]);
```

返回一个`memoized`回调函数.
把内联回调函数及依赖项数组作为参数传入`useCallback`,他将返回该回调函数的 memoized 版本,该回调函数仅在某个依赖项改变时才会更新.

## useMemo

```js
const memoizedValue = useMemo(() => {}, [a, b]);
```

返回一个`memoized`值.
把执行函数和依赖项数组作为参数传入`useMemo`,它仅会在某个依赖项改变时才重新计算 memoized 值.这种优化有助于避免在每次渲染时都进行高开销计算.

## useRef

```js
const refContainer = useRef(initialValue);
```

`useRef`返回一个可变的 ref 对象,其`.current`属性被初始化为传入的参数`initialValue`.返回的 ref 对象在组件的整个生命周期内持续存在.

## useImperativeHandle

```js
useImperativeHandle(ref, createHanle, [deps]);
```

`useImperativeHandle`可以让你在使用`ref`时自定义暴露给父组件的示例值.在大多数情况下,应当避免使用 ref 这样的命令式代码.
`useImperativeHandle`应当与`forwardRef`一起使用.

```js
// 子组件
const FancyInput = forwardRef(props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} />;
};
// 父组件
const FormList = () => {



  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  },[])
  return <ul>
    <FancyInput ref={inputRef} />
  </ul>
};
```

## useTransition

```js
const [isPending, startTransition] = useTransition();
```

返回一个状态值表示过渡任务的等待状态,以及一个启动该过渡任务的函数.
`startTransition`允许你通过标记更新将提供的回调函数国为一个过渡任务.

<br />
