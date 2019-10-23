const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: ["babel-loader"]
          },
          { 
              test: /\.(css)$/, 
              use: ["style-loader", "css-loader"] 
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets"
                }
              },
            ],
          },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/template.html",
            filename: "index.html"
        })
    ],
    devServer: {
        contentBase: "./dist"
    }
}