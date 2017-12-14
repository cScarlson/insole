
var path = require('path');
var webpack = require('webpack')
  , HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin
  , ProvidePlugin = webpack.ProvidePlugin
  ;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    
    context: path.resolve(__dirname, './'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // { test: /\.EXT$/, use: 'XXXX-loader', exclude: /node_modules/ },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ExtractTextPlugin.extract(['css-loader']), exclude: /node_modules/ },
            { test: /\.less$/, use: ExtractTextPlugin.extract(['css-loader', 'less-loader']), exclude: /node_modules/ },
            { test: /\.(otf|eot|svg|ttf|woff)$/, use: 'url-loader', exclude: /node_modules/ },
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new ProvidePlugin({ '$': 'jquery', 'jQuery': 'jquery' }),
    ],
    
    // Webpack-Dev-Server
    resolve: {
        extensions: [ '.js' ]
    },
    devServer: {
        port: 9090,
        contentBase: path.resolve(__dirname, 'public'),  // <-- need contentBase as localhost:[port] needs to know where to find index.html
        publicPath: '/build/',  // <-- where index.html asks for content from
        // hot: true,  // <-- broken?
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // },
    },
    
};
