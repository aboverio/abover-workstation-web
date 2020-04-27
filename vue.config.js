module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    svgLoader: {
      svgo: {
        plugins: []
      }
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  }
};