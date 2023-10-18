## JSX 的本质: JavaScript 的语法扩展

## 基于 Vite 的 React 开发环境搭建

- 创建项目模板

```shell
yarn create vite
yarn
yarn add --dev sass
```

- 安装 prettier

```shell
yarn add --dev --exact prettier
echo {}> .prettierrc.json
echo {}> .prettierignore
yarn add --dev eslint-config-prettier
```

- 将"prettier"添加到.eslintrc.\*文件中的“extends”数组中。确保将其放在最后，这样它就有机会覆盖其他配置。

```json
{
  "extends": ["some-other-config-you-use", "prettier"]
}
```

- 安装 stylelint

```shell
yarn add --dev stylelint stylelint-config-standard-scss
```

- 在项目的根目录下创建一个.stylelintrc.json 配置文件，包含以下内容：

```json
{
  "extends": "stylelint-config-standard-scss"
}
```

- 安装状态管理库

```shell
yarn add zustand
```

- 安装 antd

```shell
yarn add antd
```

- 安装 react-router-dom

```shell
yarn add react-router-dom
```
