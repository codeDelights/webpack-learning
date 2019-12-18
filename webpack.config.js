const wepback = require('webpack');

const path = require('path');

module.exports = {
    entry: "./src/script.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'src', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
}