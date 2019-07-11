module.exports = {
  publicPath: "/vue-crafts-store/",

  devServer: {
    proxy: "https://localhost/"
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/_variables.scss";'
      }
    }
  }
};
