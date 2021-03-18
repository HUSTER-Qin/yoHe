module.exports = {
    //手动入口文件位置
    entry: "./a.js",

    //出口
    output: {
        //路径
        path: __dirname,
        //或者换一种写法：path：path.resolve(__dirname,"dist")
        //注意：__dirname 就是根目录，然后是有两个下划线，打包到dist下;
        filename: 'webpack.js'
    },
    mode: 'development'

}