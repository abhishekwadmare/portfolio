const path = require('path')

module.exports = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
}
