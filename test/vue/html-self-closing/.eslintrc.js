module.exports = {
  rules: {
    /**
     * 标签根据设置进行闭合
     */
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never',
          void: 'always',
        },
      },
    ],
  }
};
