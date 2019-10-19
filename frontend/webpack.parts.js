const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

exports.start = () => (
  console.log('Webpack has been started..')
)

exports.IO = () => ({
  devtool:  '',
  target:   'web',
  // startpoint
  entry:    [
    path.join(__dirname, '/src/index.js')
  ],
  // on production this returns one bundled js file. To avoid caching a hash is added.
  output: {
    chunkFilename:  '[name].js',
    filename:       '[name].bundle.[hash:8].js'
  }
})

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host:               host,
    port:               port,
    open:               true,
    stats:              'errors-only',
    hot:                true,
    overlay:            true,
    compress:           true,
    historyApiFallback: true, // path changes react router dom.,
    after:              () => console.log('Development server has been started.')
  }
})

exports.globalVariables = () => ({
  plugins: [
    new webpack.DefinePlugin({
      __API__: JSON.stringify(process.env.API)
    })
  ]
})

exports.generateFavicon = () => ({
  plugins: [
    new FaviconsWebpackPlugin({
      logo:           './src/images/icon.svg',
      statsFilename:  'faviconStats-[hash].json',
      inject:         true,
      title:          'Blog',
      caches:         true,
      prefix:         '/assets/icons/',
      outputPath:     '/assets/icons/'
    })
  ]
})

exports.cleanDist = () => ({
  plugins: [
    new CleanWebpackPlugin({
      dry:     false, // this simulates the removal off files so you don't remove files outside the dist
      verbose: false
    })
  ]
})

exports.loadHtml = () => ({
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
})

exports.cssExtract = () => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename:       '[name].min.css',
      chunkFilename:  '[id].css'
    })
  ]
})

exports.minify = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel:       4,
        terserOptions:  {
          warnings: false,
          ecma:         8,
          output:       {
            comments: false
          },
          extractComments: false,
          ie8:             false,
          compress:        {},
          mangle:          true
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks:             'all',
      maxInitialRequests: Infinity,
      minSize:            0
    }
  }
})

exports.manifest = () => ({
  plugins: [
    new ManifestPlugin()
  ]
})

exports.minimizeImages = () => ({
  plugins: [
    new ImageminPlugin({
      test:     'dist/**',
      pngquant: {
        quality: '95-100'
      }
    })
  ]
})

// core of webpack all files pass this module. based on which kind it is handled by a different loader.
exports.loaders = ({ filename }) => ({
  module: {
    rules: [
      {
        test:     /\.(js|jsx)$/,
        exclude:  /node_modules/,
        // remember that a file is first handled by stylelint then by babel. If there is a styling error. This will cancel the build and return the styling error.
        use:      [
          'babel-loader',
          'stylelint-custom-processor-loader'
        ]
      },
      {
        test: /\.html$/,
        use:  [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use:  [
          MiniCssExtractPlugin.loader,
          {
            loader:   'css-loader',
            options:  {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jp?g|png|svg|webp|gif)$/,
        use:  {
          loader:   'url-loader',
          options:  {
            limit:      8192,
            fallback:   'file-loader',
            name:       filename,
            outputPath: 'assets/images'
          }
        }
      }
    ]
  }
})
