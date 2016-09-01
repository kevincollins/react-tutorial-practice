
// webpack.config.js      react-transform-boilerplate

var path = require("path");
var webpack = require('webpack');

var publicPath = 'http://127.0.0.1:3000/';

module.exports = {
    entry: './app/p2/main.js', //演示单入口文件
    // entry: [
    //     // 写在入口文件之前
    //     "webpack-dev-server/client?http://127.0.0.1:3000",
    //     "webpack/hot/only-dev-server",
    //     // 这里是你的入口文件
    //     "./app/p2/main.js",
    // ],
    output: {
        path: path.join(__dirname, 'out'),  //打包输出的路径
        filename: 'bundle.js',			  //打包后的名字
        publicPath: "/out/"				//html引用路径，在这里是本地地址。
        //publicPath: publicPath
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets:['es2015','react'],  //备注：es2015用于支持ES6语法，react用于解决render()报错的问题
                    //plugins: ['transform-runtime']
                }
            }
            /*{test: /\.js$/,
              exclude: /node_modules/,
              // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
              loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            } */
        ]
    }
};

// 添加插件
// plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
// ]