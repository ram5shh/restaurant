const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        homepage: './src/homepage/homepage.js',
        menu: './src/menu/menu.js',
        contact: './src/contact/contact.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ai)$/i,
                type: 'asset/resource',
            }
        ],
    },
};