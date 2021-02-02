const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/js/main.js'),
    output: {
        publicPath: '',
        path: path.join(__dirname, './src/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpG|jpeg|png|gif|bmp)$/i,use:['url-loader?limit=643170&name=[name]']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/i,use:['url-loader']},
            {test:/\.js$/i,use:['babel-loader'],exclude:/node_modules/},
            {test:/\.vue$/i,use:['vue-loader']},

        ]
    },
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.js'
        }
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]

}
