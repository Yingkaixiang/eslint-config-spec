module.exports = {
  rules: {
    /**
     * 当 html 标签上的属性大于一个时，需要进行换行
     */
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  }
};
