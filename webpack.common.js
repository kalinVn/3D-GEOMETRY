const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: {import: "./src/index.js", dependOn: 'shared'},
        shared: 'lodash'
    },
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
            
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template : "./src/views/index.html",
			filename : "./index.html"
        })
        
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}