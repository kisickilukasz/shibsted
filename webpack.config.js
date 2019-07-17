const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, './app/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './app/index.html'),
        filename: 'index.html',
    })],
    devServer: {
        contentBase: './dist',
    },
    devtool: 'source-map',
};
