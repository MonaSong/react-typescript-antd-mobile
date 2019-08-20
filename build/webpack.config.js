const { resolve } = require('./utils');
const styleRules = require('./rules/styleRules');
const jsRules = require('./rules/jsRules');
const plugins = require('./plugins');

module.exports = {
    mode: process.env.NODE_ENV == 'development'? 'development' : 'production',
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [...styleRules, ...jsRules]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': resolve('src/components'),
            '@utils': resolve('src/utils'),
            '@shared': resolve('src/shared'),
            '@views': resolve('src/containers/views'),
            '@styles': resolve('src/styles'),
            '@router': resolve('src/router')
        }
    },
    plugins: [...plugins]
}
