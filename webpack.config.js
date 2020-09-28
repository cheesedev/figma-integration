const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    devServer: {
        contentBase: './src/index.html',
        hot: true,
        host: '0.0.0.0',
        port: '8080'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    output: {
        path: path.resolve(__dirname, "build")
    }
};
