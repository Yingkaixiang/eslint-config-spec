module.exports = {
  rules: {
    /**
     * 限制自定义组件的属性风格
     * 
     * @recommended x
     * @fix
     * @desc
     * 采用驼峰式便于以后将组建迁移到 React 或其他框架
     */
    "vue/attribute-hyphenation": ["error", "never"]
  }
};
