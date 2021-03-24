module.exports = {
  devServer: {
    proxy: {
      "^/api/FaceApi/": {
        target: "https://aip.baidubce.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "/api/FaceApi/*": "",
        },
      },
    },
  },
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
};
