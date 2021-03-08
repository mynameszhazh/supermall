module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视口的宽度
      viewportHeight: 667, // 视口高度
      unitPrecition: 5, // 保留五位小数
      viewportUnit: 'vw', // 单位
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 这里指不需要转换的类
      minPixelValue: 1, // 小于1px 不做转化
      mediaQuery: false, // 不要媒体查询
      exclude: [/TabBar/]
    }
  }
}
