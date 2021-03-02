const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].bundle.${new Date().getTime()}.js`
    },
    mode: 'production',
    devServer: {
        open: true,
        port: 5555
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets',
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    }
}