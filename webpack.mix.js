const mix = require('laravel-mix');
const cleanObsoleteChunks = require('webpack-clean-obsolete-chunks');

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

mix.ts('resources/ts/app.ts', 'public/js').extract()
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
      module: {
         rules: [
            {
               test: /\.pug$/,
               loader: 'pug-plain-loader'
            },
            {
               test: /\.(graphql|gql)$/,
               loader: 'graphql-tag/loader',
               exclude: /node_modules/,
            },
         ],
      },

      output: {
         filename: '[name].js', 
         chunkFilename: 'js/[name].app.js', 
         publicPath: '/',
      },

      resolve: {
         alias: {
            styles: path.resolve(__dirname, 'resources/sass'),
         },
      },

      plugins: [
         new cleanObsoleteChunks(),
      ]
   })
