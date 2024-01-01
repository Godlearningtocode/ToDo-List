const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
        './src/addTask.js',
        './src/appendTask.js',
        './src/today.js',
        './src/checkbox.js',
        './src/deleteTask.js',
        './src/editTask.js',
        './src/importantTasks.js',
        './src/thisWeek.js',
        './src/importantPage.js',
        './src/appendProject.js',
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