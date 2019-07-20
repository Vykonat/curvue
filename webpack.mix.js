/* eslint-disable import/no-extraneous-dependencies */
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const mix = require('laravel-mix');
const path = require('path');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const devPlugins = [
  new CleanObsoleteChunks(),
  new SWPrecacheWebpackPlugin({
    cacheId: 'curvue',
    filename: 'sw.js',
    staticFileGlobs: ['public/**/*.{css,eot,svg,ttf,woff,woff2,js,html}'],
    minify: true,
    stripPrefix: 'public/',
    handleFetch: true,
    dynamicUrlToDependencies: {
      '/': ['resources/views/app.pug']
    },
    staticFileGlobsIgnorePatterns: [
      /\.map$/,
      /mix-manifest\.json$/,
      /manifest\.json$/,
      /sw\.js$/
    ],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/use\.fontawesome\.com\//,
        handler: 'cacheFirst'
      }
    ]
    //  importScripts: ['./js/push_message.js'] <--- eventually
  })
];

const productionPlugins = [
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
  }),
  new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.7
  }),
  new BrotliPlugin({
    filename: '[path].br[query]',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.7
  })
];

const plugins = isProd
  ? [...productionPlugins, ...devPlugins]
  : [...devPlugins];

mix
  .ts('resources/ts/app.ts', 'public/assets/js')
  .sass('resources/sass/app.scss', 'public/assets/css')
  .webpackConfig({
    devtool: isProd ? '' : 'inline-source-map',

    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/'
    },

    optimization: {
      splitChunks: {
        chunks: 'async',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },

    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(graphql|gql)$/,
          loader: 'graphql-tag/loader',
          exclude: /node_modules/
        }
      ]
    },

    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'resources/sass')
      }
    },

    plugins
  })
  .extract()
  .version();
