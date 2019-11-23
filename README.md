# eslint-config-spec

基于 AlloyTeam 的规范修改而来的个人团队规范。所有的相关配置都有相关说明。

> 每个测试例子下都有一个 `.eslintrc.js` 文件的原因是只测试当前这个规则，而不被其他规则影响。

> alloyteam 默认将样式的规则都关闭了，为了谨慎起见还是引入了 `eslint-config-prettier`。

## 为什么要做自己的规则

1. 可以对 eslint 所提供的所有校验规则有个概念，使得在不同项目中使用特定的规则来限制特定的问题。
2. 可以了解到部分编码的原理。

## 注释标识

* @modified 表示修改了 alloyteam 的规范

## vscode 默认配置解释

```js
{
  // eslint 默认不会识别 vue ts 需要手动配置
  "eslint.validate": { /* code */ },
  // 关闭 vscode 默认的 js 代码校验
  "javascript.validate.enable": false,
  // 关闭 vetur 的格式化功能
  "vetur.format.enable": false,
  // 关闭 vetur 默认的模板检验规则
  "vetur.validation.template": false,
}
```

## 坑

`eslint-plugin-vue` 以及 `vue-eslint-parser` 必须安装 5.x 版本，否则部分规则会出现校验错误。