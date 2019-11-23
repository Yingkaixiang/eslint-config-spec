module.exports = {
  rules: {
    /**
     * 标签关闭时的 > 符号需要换行，单行可以不换行
     */
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }]
  }
};
