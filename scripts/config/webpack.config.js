/**
 * Created by eerto_000 on 2016-05-11.
 */

var webpack = require("webpack");

var config = {
    entry : "../view/content/content.js",
    output : {
        path : "../view",
        filename : "contentView.js"
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