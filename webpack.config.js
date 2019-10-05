require('dotenv').config()
const merge = require('webpack-merge')
const parts = require('./webpack.parts')

const commonConfig = merge([
  parts.start(),
  parts.IO(),
  parts.loadHtml(),
  parts.cssExtract(),
  parts.globalVariables()
])

const productionConfig = merge([
  parts.loaders({ filename: '[contenthash].[ext]' }),
  parts.cleanDist(),
  parts.manifest(),
  parts.generateFavicon(),
  parts.minify(),
  parts.minimizeImages()
])

const developmentConfig = merge([
  parts.loaders({ filename: '[name].[ext]' }),
  parts.devServer({
    // customize host/port in env
    host: process.env.HOSTNAME,
    port: process.env.WEBPACK_PORT
  })
])

module.exports = (mode) => mode === 'production' ? merge(commonConfig, productionConfig, { mode }) : merge(commonConfig, developmentConfig, { mode })
