# eslint-config-team-spec

![版本](https://img.shields.io/badge/eslint--config--team--spec-v1.0.5-blue) [![Greenkeeper badge](https://badges.greenkeeper.io/Yingkaixiang/eslint-config-team-spec.svg)](https://greenkeeper.io/)

统一团队内部编码规范的 ESLint 标准规则集，目前支持 `js` 规则以及 `vue` 规则。基于 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) 修改。

## 注释解释

* `@recommended` 表示当前规则在官方基础规则中已包含，如果自定义规则和推荐规则不同则会加上 `x` 标识。
* `@fix` 表示可以被 eslint 自动修复。
* `@desc` 表示对于当前规则功能和制定的背景说明。

## 如何使用

请先安装相关依赖。

```
npm i eslint-config-team-spce eslint --save-dev
```

### 使用 JavaScript 规则

请在 `.eslintrc.js` 中添加以下配置，并安装相关依赖。

```bash
npm i babel-eslint --save-dev
```

```js
module.exports = {
  extends: ['eslint-config-team-spec']
  // ... 自定义配置
}
```

### 使用 Prettier 规则

请在 `.eslintrc.js` 中添加以下配置，并安装相关依赖。

```bash
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

```js
module.exports = {
  extends: [
    'eslint-config-team-spec',
    'eslint-config-team-spec/prettier',
  ]
  // ... 自定义配置
}
```

### 使用 Vue 规则

请在 `.eslintrc.js` 中添加以下配置，并安装相关依赖：

```bash
npm i eslint-plugin-vue vue-eslint-parser eslint-plugin-prettier-vue --save-dev
```

`eslint-plugin-prettier-vue` 可以指定将 `prettier` 的规则运用于 `template`, `script`, `style` 中的哪一个模块，默认关闭了 `template` 的校验。

```js
module.exports = {
  extends: [
    'eslint-config-team-spec',
    // 如果需要 prettier
    'eslint-config-team-spec/prettier',
    'eslint-config-team-spec/vue',
  ]
  // ... 自定义配置
}
```

因为 `eslint` 本身不支持 `vue` 的解析所以需要在 `VSCode` 中添加以下配置：

```json
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "javascript.validate.enable": false,
  "vetur.format.enable": false,
  "vetur.validation.template": false,
}
```

## 本地调试

请在 `VSCode` 中安装 `eslint` 插件以及 `prettier` 插件，如果校验没有马上生效的话，请尝试重启 `VSCode`。