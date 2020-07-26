const {
    override,
    addWebpackModuleRule,
    useBabelRc
} = require('customize-cra')

module.exports = override(
    useBabelRc(),
    addWebpackModuleRule({ test: /\.md$/i, use: 'raw-loader' }),
    addWebpackModuleRule({ test: /\.(md|markdown)$/, use: 'markdown-image-loader' })
)
