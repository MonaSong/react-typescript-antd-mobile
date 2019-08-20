const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        // minify: {
        //     removeComments: true,
        //     collapseWhitespace: true,
        //     removeAttributeQuotes: true,
        // }
    }),

    new MiniCssExtractPlugin({
        filename: "[name].css?[chunkhash]",
        chunkFilename: "[id].css?[chunkhash]"
    }),
    // 用来加载位置在tsconfig的patshs部分中指定的模块，使用webpack时使用json, 这个包提供了tsconfig-paths包的功能
    // 即代码路径提示
    new TsconfigPathsPlugin({
        // 配置文件引入tsconfig.json
        configFile: resolve('tsconfig.json')
    })
];