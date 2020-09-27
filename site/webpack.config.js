// @ts-check
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// 整个项目的根目录
const ROOT = path.resolve(__dirname, '..');

// 组件项目根目录
const COMPONENT_ROOT = path.resolve(ROOT, 'src');

// 网站项目更目录
const SITE_ROOT = path.resolve(ROOT, 'site');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const devMode = mode === 'development';

const babelOptions = {
  cacheDirectory: true,
  babelrc: false,
  retainLines: true,
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    devMode && 'react-refresh/babel',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
  ].filter(Boolean),
};

const name = 'tdesign-web-app';
const appEntry = [path.resolve(SITE_ROOT, 'app')];

const alias = {
  '@app': path.resolve(SITE_ROOT, 'app'),
  '@tencent/tdesign-react': COMPONENT_ROOT,
};

/**
 * Webpack 配置
 * @type {import('webpack').Configuration}
 */
module.exports = {
  name,
  mode,
  devtool: devMode ? 'source-map' : false,
  entry: {
    app: appEntry,
  },
  output: {
    // publicPath,
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash:10].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'happypack/loader?id=tsx',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'happypack/loader?id=jsx',
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: 'happypack/loader?id=md',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(ROOT, 'node_modules'), path.resolve(SITE_ROOT, 'engineering')],
  },

  performance: {
    // 限制最大 1M
    maxEntrypointSize: 1 * (2 << 20),
    maxAssetSize: 1 * (2 << 20),
  },

  devServer: {
    hot: true,
    port: 9999,
    publicPath: '/',
    contentBase: ['./dist', './engineering/static'],
  },

  // 配置插件
  plugins: [
    new CleanWebpackPlugin(),
    // 编译错误时不输出文件
    new webpack.NoEmitOnErrorsPlugin(),
    // 定义环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${mode}"`,
    }),
    // Support webpack hot module
    new webpack.HotModuleReplacementPlugin(),
    // Template
    new HtmlWebpackPlugin({
      template: './engineering/static/index.html',
    }),
    // CSS
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash:10].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash:10].css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'engineering/static/assets', to: 'assets' }],
    }),
    // 加速加速
    new HappyPack({
      id: 'tsx',
      verbose: false,
      loaders: [
        {
          loader: 'babel-loader',
          options: babelOptions,
        },
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
          },
        },
      ],
    }),
    new HappyPack({
      id: 'jsx',
      verbose: false,
      loaders: [
        {
          loader: 'babel-loader',
          options: babelOptions,
        },
      ],
    }),
    new HappyPack({
      id: 'md',
      verbose: false,
      loaders: [
        {
          loader: 'babel-loader',
          options: babelOptions,
        },
        {
          loader: './engineering/doc-loader',
        },
      ],
    }),
    devMode && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
