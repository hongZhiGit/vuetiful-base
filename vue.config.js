const isProd = process.env.NODE_ENV === 'production';
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const cdn = {
  css: [],
  js: [
    'https://cdn.bootcss.com/vue/2.6.10/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.18.0/axios.min.js'
  ]
};

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh-cn',
      fallbackLocale: 'zh-cn',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  outputDir: '../advokate-earn-pos-midway/src/app/public',
  publicPath: process.env.NODE_ENV === 'production' ? '/web' : '/',
  indexPath: 'index.nj',
  devServer: {
    // 前端端口
    port: 8080,
    // 代理地址
    // proxy: 'http://g5rdyr.ngrok.io'
    proxy: 'http://localhost:8090'
  },
  configureWebpack: config => {
    if (isProd) {
      // #region cdn拆分
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
      };
      // #endregion
      // #region 打包生产.gz包
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );
      // #endregion
      // // #region 添加自定义代码压缩配置
      // config.plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         warnings: false,
      //         drop_debugger: true,
      //         drop_console: true
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true
      //   })
      // );
      // // #endregion
    }
  },
  chainWebpack: config => {
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn;
        return args;
      });
    }
  }
};
