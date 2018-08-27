const path =require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html' //生成在内存中的首页的名称
})
module.exports = {
    mode: "development",
    plugins:[
        htmlPlugin
    ],
    module: { //要打包的第三方模块
        rules: [
            {test: /\.js|jsx$/,use: 'babel-loader',exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
        alias: { // 表示别名
            '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
        }
    }
}