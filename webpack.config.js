const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueloaderPlugin = require("vue-loader/lib/plugin");
const htmlplugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./src/index.html"),
    filename: "index.html"
})
module.exports = {
    mode: "development",
    entry: "./src/index.js", //入口
    output: {
        filename: "bundle.js", //打包后的文件名
        path: path.resolve(__dirname, "dist")
    },
    plugins: [htmlplugin, new VueloaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    }
}