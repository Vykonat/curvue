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
const cleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const isProd = process.env.NODE_ENV === "production";

const devPlugins = [
   new cleanObsoleteChunks()
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

const plugins = isProd ? [ ...productionPlugins, ...devPlugins ] : [ ...devPlugins ];

mix.ts('resources/ts/app.ts', 'public/assets/js')
   .sass('resources/sass/app.scss', 'public/assets/css')
   .webpackConfig({
      devtool: isProd ? '' : 'inline-source-map',

      output: {
         filename: "[name].js",
         chunkFilename: "[name].js",
         publicPath: '/',
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
               exclude: /node_modules/,
            },
            {
               test: /\.(graphql|gql)$/,
               loader: 'graphql-tag/loader',
               exclude: /node_modules/,
            },
         ],
      },

      resolve: {
         alias: {
            styles: path.resolve(__dirname, 'resources/sass'),
         },
      },

      plugins: plugins
   })
   .extract()
   .version()
