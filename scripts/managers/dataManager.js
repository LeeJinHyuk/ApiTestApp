/**
 * Created by eerto_000 on 2016-05-29.
 */
"use strict";

var dataManager = (function() {
    var printData = [];
    var listener = [];

    function _setData (data) {
        printData.push(data);

        for(var i = 0; i < listener.length; i++) {
            listener[i](printData);
        }
    }

    function _addEventListener(callback) {
        if (listener.indexOf(callback) === -1) {
            listener.push(callback);
        }
    }

    return {
        setData : _setData,
        addEventListener : _addEventListener
    }
}());

module.exports = dataManager;