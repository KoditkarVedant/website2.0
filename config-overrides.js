const _ = require('lodash')

module.exports = {
    webpack: function (config, env) {
        const rules = _.find(config.module.rules, x => x.oneOf)
        const fileLoaderRuleIndex = _.findIndex(
            rules.oneOf, x => _.includes(x.loader, 'file-loader')
        )
        rules.oneOf.splice(fileLoaderRuleIndex, 0, {
            test: /\.md$/i,
            use: [
                {
                    loader: 'raw-loader'
                }
            ]
        })
        console.log('index', fileLoaderRuleIndex)
        return config
    }
}