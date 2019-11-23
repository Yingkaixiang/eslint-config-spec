module.exports = {
  rules: {
    /**
     * html 标签内的文字需要进行换行
     */
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false,
      },
    ],
  }
};
