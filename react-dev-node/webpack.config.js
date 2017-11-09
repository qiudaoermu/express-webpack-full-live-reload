var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        page1: ['./client/page1', hotMiddlewareScript],
        page2: ['./client/page2', hotMiddlewareScript]
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },

    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.(png|jpg|jpeg)$/,
            use: 'url-loader?limit=8192&context=client&name=images/[hash:8][name].[ext]'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = devConfig;
