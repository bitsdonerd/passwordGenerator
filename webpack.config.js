// Importar path do node.js 
const path = require('path'); // CommonJS - sistema de modulos do node

// Exportar o modulo 
module.exports ={
    mode: 'development',     // Modo de funcionamento do webpack 
    entry: './src/main.js', // Arquivo de entrada do webpack
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // path.resolve para encontrar o path da pasta
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    devtool: 'source-map'
};