const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  //entry:[
  //  './src/main.js',
  //  './src/home.js'
  //],
  entry: {
    main: './src/main.js',
    generator: './src/pages/generator/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    //  filename: 'bundle.js'
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'./src'),
      'assets':path.resolve(__dirname,'./src/assets'),
      'pages':path.resolve(__dirname,'./src/pages'),
      'router':path.resolve(__dirname,'./src/router'),
      'css':path.resolve(__dirname,'./src/css'),
      'components':path.resolve(__dirname,'./src/components'),
      'mixins':path.resolve(__dirname,'./src/mixins'),
      'utils':path.resolve(__dirname,'./src/utils'),
      'config':path.resolve(__dirname,'./src/config')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    port: 8088,
    noInfo: true, // 当前环境 下未生效  node v10.5.0  webpack 4.17.0 webpack-dev-server 3.1.0
    historyApiFallback: true, // 任何404 返回index.html
    compress: true, // gzip压缩 
    quiet: false, // 隐藏控制台
//  overlay: {
//    warnings: true,
//    errors: true
//  }
  },
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },{
      test: /\.css$/,
      use: ['vue-style-loader','css-loader']
    },
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    },
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
      loader: "file-loader"
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  devtool: 'eval-source-map', // 控制台显示文件
  plugins: [
    new VueLoaderPlugin(),
//  new BundleAnalyzerPlugin()
//  new HtmlWebpackPlugin()
  ]
}

module.exports = config