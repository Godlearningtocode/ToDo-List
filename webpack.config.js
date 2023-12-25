const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
        './src/addTask.js',
        './src/appendTask.js',
        './src/removeAddTask.js',
        './src/today.js',
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};