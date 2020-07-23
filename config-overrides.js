const {
    override,
    addWebpackModuleRule
} = require('customize-cra')

module.exports = override(
    addWebpackModuleRule({ test: /\.md$/i, use: 'raw-loader' }),
    addWebpackModuleRule({ test: /\.(md|markdown)$/, use: 'markdown-image-loader' })
)
