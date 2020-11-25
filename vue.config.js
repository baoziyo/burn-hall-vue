const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  devServer: {
    open: true,
    port: "9099",
    proxy: {
      '/api': {
        target: 'http://whell-laravel.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '',
  outputDir: 'public/admin/',
  filenameHashing: false,
  css: {
    sourceMap: process.env.VUE_APP_ENV !== 'production',
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: process.env.VUE_APP_ENV !== 'production',
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: webpack => {
    if (process.env.NODE_ENV === 'production') {
      webpack.plugin('compressionPlugin')
        .use(new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
          threshold: 0,
          minRatio: 0.8,
        }))
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('./src/styles/mixin.less'),
      ]
    }
  }
}
