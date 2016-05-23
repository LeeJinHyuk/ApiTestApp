/**
 * Created by eerto_000 on 2016-05-22.
 */
var webpack = require("webpack");

var config = {
    context : __dirname + "/scripts",
    entry : {
        main : "./main.js"
    },
    output : {
        path : __dirname + "/scripts",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};

module.exports = config;