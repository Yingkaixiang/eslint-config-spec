module.exports = {
  rules: {
    /**
     * 禁止将 undefined 初始化赋值给变量
     * 但是可以给已经赋值的变量赋值 undefined
     */
    "no-undef-init": "error"
  }
};
