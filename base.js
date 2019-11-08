// 基础配置
module.exports = {
  // 使用 babel-eslint 替换 espree 的原因：
  // https://github.com/babel/babel-eslint
  parser: 'babel-eslint',
  parserOptions: {
    // -------------
    // eslint 默认配置
    // -------------
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局严格模式
      impliedStrict: true,
      jsx: true
    },

    // ----------------
    // babel-eslint 配置
    // ----------------
    // 即使项目中没有 babel 的配置文件
    // 也用 babel-eslint 来解析代码
    // 当解析器发现没有配置文件时
    // 将不会开启实验特性的代码解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true
}