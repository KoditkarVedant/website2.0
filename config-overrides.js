const {
    override,
    addWebpackModuleRule,
    useBabelRc
} = require('customize-cra')

module.exports = override(
    useBabelRc(),
    addWebpackModuleRule({ test: /\.md$/i, use: 'raw-loader' })
)
