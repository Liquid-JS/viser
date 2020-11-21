const path = require('path');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { AngularCompilerPlugin } = require('@ngtools/webpack')

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'inline-source-map',
  entry: ['./index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/build/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.vue'],
    alias: {
      viser: path.resolve(__dirname, '../packages/viser/src/index'),
      '@lq-viser/viser-react': path.resolve(__dirname, '../packages/viser-react/src/index'),
      '@lq-viser/viser-vue': path.resolve(__dirname, '../packages/viser-vue/src/index'),
      '@lq-viser/viser-ng': path.resolve(__dirname, '../packages/viser-ng/src/index'),
      '@lq-viser/viser-cell-vue': path.resolve(__dirname, '../packages/viser-cell-vue/src/index'),
      '@lq-viser/viser-cell': path.resolve(__dirname, '../packages/viser-cell/src/index'),
      '@lq-viser/viser-graph': path.resolve(__dirname, '../packages/viser-graph/src/index'),
      '@lq-viser/viser-graph-ng': path.resolve(__dirname, '../packages/viser-graph-ng/src/index'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [
      path.resolve(__dirname, '../packages/viser-ng/node_modules'), 'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'style-loader' }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new AngularCompilerPlugin({
      tsConfigPath: "./tsconfig.json",
      compilerOptions: {
        enableIvy: true,
      }
    })
  ]
};
