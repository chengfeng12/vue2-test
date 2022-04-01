/*
 * @Author: your name
 * @Date: 2022-03-30 15:57:17
 * @LastEditTime: 2022-03-30 17:27:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue2/vue.config.js
 */
const path = require("path");
const IS_PROD = false;
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  pages: {
    // 修改入口配置
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    },
  },
  publicPath: "./", // 公共路径
  indexPath: "index.html", // 相对于打包路径index.html的路径
  outputDir: "dist", // 生产环境构建文件的目录
  assetsDir: "static", // 相对于outputDir的静态资源(js、style、img、fonts)目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  filenameHashing: false, // 打包的时候不使用hash值.因为我们有时间戳来确定项目的唯一性了
  chainWebpack: (config) => {
    config.resolve.alias // 添加别名alias
    .set('@', resolve('examples'))
    .set('@api', resolve('examples/api'))
    .set('@assets', resolve('examples/assets'))
    .set('@components', resolve('examples/components'))
    .set('@config', resolve('examples/config'))
    .set('@layouts', resolve('examples/layouts'))
    .set('@mock', resolve('examples/mock'))
    .set('@store', resolve('examples/store'))
    .set('@utils', resolve('examples/utils'))
    .set('@views', resolve('examples/views'))

    
    config.module
      .rule("js")
      .include.add(__dirname + "packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    proxy: {
      //配置多个跨域
      "/api": {
        target: "http://192.168.1.100",
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        ws: false, //websocket支持
        secure: false,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
