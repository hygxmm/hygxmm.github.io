## 1. 如何快速搭建 TypeScript 学习开发环境？

1. 安装 TypeScript

```sh
npm i -g typescript
```

2. 如果想在 node 中直接运行 ts 代码,需要安装 ts-node

```sh
npm i -g ts-node
```

## 2. 简单基础类型: TypeScript 与 JavaScript 有何不同？

### 基本语法

```ts
let num: number = 1;
```

::: tip
`number`表示数字类型

`:`用来分割变量和类型的分隔符
:::

### 原始类型

### 字符串

### 数字

## 3. 复杂基础类型: TypeScript 与 Javascript 有何不同？

## 4. 什么是字面量类型,类型推断,类型拓宽和类型缩小？

## 5. 函数类型: 返回值类型和参数类型到底如何定义？

## 6. 类类型: 如何高效使用类型化的面向对象编程利器？

## 7. 接口类型与类型别名: 这两者的用法与区别分别是什么？

## 8. 高级类型: 如何快速读懂联合类型和交叉类型的含义?

### 联合类型

联合类型用来表示变量,参数的类型不是单一原子类型,而可能是多种不同的类型的组合.
我们主要通过`|`操作符分割类型的语法来表示联合类型.

```ts
function formatPx(size: number | string) {
  if (typeof size === 'number') return `${size}px`;
  if (typeof size === 'string') return `${parseInt(size) || 0}px`;
  throw Error('仅支持 number 或者 string');
}
type ModernUnit = 'vh' | 'vw';
type Unit = 'px' | 'em' | 'rem';
type MessedUp = ModernUnit | Unit; // 类型是 'vh' | 'vw' | 'px' | 'em' | 'rem';
// 接口类型联合
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
const getPet: () => Bird | Fish = () => {
  return {} as Bird | Fish;
};
const Pet = getPet();
Pet.layEggs(); // ok
Pet.fly(); // Fish 没有 fly 属性
if ('fly' in Pet) {
  Pet.fly();
}
```

### 交叉类型

在 TypeScript 中，我们可以使用“&”操作符来声明交叉类型.它可以把多个类型合并成一个类型，合并后的类型将拥有所有成员类型的特性。

#### 合并接口类型

```ts
type IntersectionType = { id: number; name: string } & { age: number };
const mixed: IntersectionType = {
  id: 1,
  name: '鸭鸭',
  age: 18,
};
```

:::warning{title=注意}

- 如果合并的多个接口类型存在同名属性会是什么效果呢？
  - 如果同名属性的类型不兼容，比如上面示例中两个接口类型同名的 name 属性类型一个是 number，另一个是 string，合并后，name 属性的类型就是 number 和 string 两个原子类型的交叉类型，即 never
  - 如果同名属性的类型兼容，比如一个是 number，另一个是 number 的子类型、数字字面量类型，合并后 name 属性的类型就是两者中的子类型

:::

#### 合并联合类型

我们可以合并联合类型为一个交叉类型，这个交叉类型需要同时满足不同的联合类型限制，也就是提取了所有联合类型的相同类型成员。这里，我们也可以将合并联合类型理解为求交集。

```ts
type UnionA = 'px' | 'em' | 'rem' | '%';
type UnionB = 'vh' | 'em' | 'rem' | 'pt';
type IntersectionUnion = UnionA & UnionB;
const intersectionA: IntersectionUnion = 'em'; // ok
const intersectionB: IntersectionUnion = 'rem'; // ok
const intersectionC: IntersectionUnion = 'px'; // ts(2322)
const intersectionD: IntersectionUnion = 'pt'; // ts(2322)
```

既然是求交集，如果多个联合类型中没有相同的类型成员，交叉出来的类型自然就是 never 了.

```ts
type UnionC = 'em' | 'rem';
type UnionD = 'px' | 'pt';
type IntersectionUnionE = UnionC & UnionD;
const intersectionE: IntersectionUnionE = 'any' as any; // ts(2322) 不能赋予 'never' 类型
```

#### 联合、交叉组合

联合操作符 | 的优先级低于交叉操作符 &，同样，我们可以通过使用小括弧 () 来调整操作符的优先级。

```ts
type UnionIntersectionA =
  | ({ id: number } & { name: string })
  | ({ id: string } & { name: number }); // 交叉操作符优先级高于联合操作符
type UnionIntersectionB =
  | ('px' | 'em' | 'rem' | '%')
  | ('vh' | 'em' | 'rem' | 'pt'); // 调整优先级
type UnionIntersectionC = (
  | ({ id: number } & { name: string })
  | { id: string }
) & { name: number };
type UnionIntersectionD =
  | ({ id: number } & { name: string } & { name: number })
  | ({ id: string } & { name: number }); // 满足分配率
type UnionIntersectionE = (
  | { id: string }
  | ({ id: number } & { name: string })
) & { name: number }; // 满足交换律
```

## 9. 枚举类型

在仅仅指定常量命名的情况下，我们定义的就是一个默认从 0 开始递增的数字集合，称之为数字枚举。

如果我们希望枚举值从其他值开始递增，则可以通过“常量命名 = 数值” 的格式显示指定枚举成员的初始值

```ts
enum Day {
  SUNDAY = 1,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}
```

## 10. 泛型: 如何正确使用泛型约束类型变量?

#### 什么是泛型?

泛型指的是类型参数化，即将原来某种具体的类型进行参数化。和定义函数参数一样，我们可以给泛型定义若干个类型参数，并在调用时给泛型传入明确的类型参数。设计泛型的目的在于有效约束类型成员之间的关系，比如函数参数和返回值、类或者接口成员和方法之间的关系。

```ts
function reflect(param: unknown) {
  return param;
}
// 优化
function reflect<T>(param: T) {
  return param;
}
const reflectStr = reflect<string>('string'); // reflectStr 类型是string
const reflectNum = reflect<number>(123); // reflectNum 类型是 number
```

泛型不仅可以约束函数整个参数的类型，还可以约束参数属性、成员的类型，比如参数的类型可以是数组、对象

```ts
function reflectArray<P>(param: P[]) {
  return param;
}
const reflectArr = reflectArray([1, '1']); // reflectArr 类型是 (number | string)[]
```

我们可以给函数定义任何个数的泛型入参

```ts
function reflectExtraParams<P, Q>(p1: P, p2: Q): [P, Q] {
  return [p1, p2];
}
```

在泛型定义中，我们甚至可以使用一些类型操作符进行运算表达，使得泛型可以根据入参的类型衍生出各异的类型

```ts
type StringOrNumberArray<E> = E extends string | number ? E[] : E;
type StringArray = StringOrNumberArray<string>; // 类型是 string[]
type NumberArray = StringOrNumberArray<number>; // 类型是 number[]
type NeverGot = StringOrNumberArray<boolean>; // 类型是 boolean
```

#### 泛型约束

前面提到了泛型就像是类型的函数，它可以抽象、封装并接收（类型）入参，而泛型的入参也拥有类似函数入参的特性。因此，我们可以把泛型入参限定在一个相对更明确的集合内，以便对入参进行约束。

比如最前边提到的原封不动返回参数的 reflect 函数，我们希望把接收参数的类型限定在几种原始类型的集合中，此时就可以使用“泛型入参名 extends 类型”语法达到这个目的

```ts
function reflectSpecified<P extends number | string | boolean>(param: P): P {
  return param;
}
reflectSpecified('string'); // ok
reflectSpecified(1); // ok
reflectSpecified(true); // ok
reflectSpecified(null); // ts(2345) 'null' 不能赋予类型 'number | string | boolean'
```
