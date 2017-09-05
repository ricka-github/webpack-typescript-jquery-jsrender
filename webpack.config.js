var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/index.ts"
    },
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
        publicPath: ''
    },
    devtool: 'inline-source-map',
    plugins: [
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })*/
    ],
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            'jquery' : __dirname + "/src/jquery",
            'jsrender' : __dirname + "/src/jsrender"
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}