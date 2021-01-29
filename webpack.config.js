const path = require('path')
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
        ]
    }

}
