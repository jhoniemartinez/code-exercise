const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'build.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
};
