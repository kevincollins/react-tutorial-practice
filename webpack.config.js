
// webpack.config.js
var path = require("path");

module.exports = {
    entry: './app/main.js', //演示单入口文件
    output: {
        path: path.join(__dirname, 'out'),  //打包输出的路径
        filename: 'bundle.js',			  //打包后的名字
        publicPath: "./out/"				//html引用路径，在这里是本地地址。
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets:['es2015','react'],  //备注：es2015用于支持ES6语法，react用于解决render()报错的问题
                    //plugins: ['transform-runtime']
                }
            }
        ]
    }
};