const path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    }
};