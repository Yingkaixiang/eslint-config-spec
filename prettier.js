module.exports = {
  // 用于关闭所有会和 prettier 冲突的规则
  extends: ['plugin:prettier-vue/recommended'],
  plugins: ['prettier'],
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: false,
        script: true,
        style: true,
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'js' },
          comments: false,
        },
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false,
      },
    },
  },
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        // 每行最多 80 个字符
        printWidth: 80,
        // 缩进使用 2 个空格
        tabWidth: 2,
        // 缩进使用 tabs 代替空格
        useTabs: false,
        // 每条语句末尾添加分号
        semi: true,
        // 使用单引号替换双引号
        singleQuote: true,
        // 对象的 key 仅在必要时用引号
        quoteProps: 'as-needed',
        // jsx 不使用单引号，而使用双引号
        jsxSingleQuote: false,
        // 多行结尾添加逗号
        trailingComma: 'all',
        // 大括号内的首尾需要空格
        bracketSpacing: true,
        // jsx 标签的反尖括号需要换行
        jsxBracketSameLine: false,
        // 箭头函数，只有一个参数的时候，也需要括号
        // 迁移到 typescript 的时候会很便利
        arrowParens: 'always',
        // 每个文件格式化的范围是文件的全部内容
        rangeStart: 0,
        rangeEnd: Infinity,
        // 不需要写文件开头的 @prettier
        requirePragma: false,
        // 不需要自动在文件开头插入 @prettier
        insertPragma: false,
        // 使用默认的折行标准
        proseWrap: 'preserve',
        // 根据显示样式决定 html 要不要折行
        htmlWhitespaceSensitivity: 'css',
        // 换行符使用 lf
        endOfLine: 'lf',
      },
    ],
  },
};
