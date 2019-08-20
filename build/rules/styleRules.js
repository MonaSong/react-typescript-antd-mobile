const { resolve } = require('./../utils');
const theme = require('./../../theme');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// {
//     test: /\.scss$/,
//     include: [path.join(__dirname, './../', 'src')],
//     use: [
//         'style-loader',
//         'css-loader',
//         'sass-loader',
//     ],
// },
// devMode ? 'style-loader' : MiniCssExtractPlugin.loader,

module.exports = [
    // 当前项目使用的是.scss
    {
        test: /\.scss$/,
        include: [resolve('src/styles')],
        use: [
            // process.env.NODE_ENV == 'development'? 'style-loader' : MiniCssExtractPlugin.loader,
            'style-loader',
            {
                loader: 'cache-loader',
                options: {
                    // cacheDirectory: resolve('.cache-loader')
                }
            },
            {
                loader: 'css-modules-typescript-loader',
                options: {
                  mode: process.env.CI ? 'verify' : 'emit'
                }
            },
            {
                loader: 'css-loader',
                options: {
                  modules: true
                }
            },
            { 
                loader: 'sass-loader',
                options: {
                    includePaths: [resolve('src')]
                }
            },
        ],
    },
    // 加载normalize.css中的样式 antd-mobile中特有依赖
    {
        test: /\.css$/,
        include: [resolve('node_modules')],
        use: [
            'style-loader',
            'css-loader'
        ]
    },

    // 加载antd-mobile中的组件样式
    {
        test: /\.less$/,
        include: [resolve('node_modules')],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    // 禁用内联js代码，这个功能用于禁用在样式表里面的js代码
                    javascriptEnabled: true,
                    // 根据antd官网进行主题修改
                    modifyVars: theme
                }
            }
        ]
    }
];