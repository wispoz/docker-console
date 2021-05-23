const path = require('path');

module.exports = {
    watch: true,
    target: 'node',
    entry: path.resolve(__dirname, './src/app.js'),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
        fallback: {
            crypto: false ,
            "fs": false,
            "tty": false,
            "child_process": false
        },
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
};