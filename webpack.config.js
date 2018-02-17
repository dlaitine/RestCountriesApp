var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['transform-decorators-legacy', 'transform-class-properties']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};