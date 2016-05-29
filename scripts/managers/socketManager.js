/**
 * Created by user on 2016-03-31.
 */
"use strict";
var socketManager = (function() {
    var socket;
    var listener = [];

    function _createSocket() {
        console.log("[socketManager] _createSocket");
        socket = io.connect();
        setEvent();
    }

    function setEvent() {
        console.log("[socketManager] setEvent");
        socket.on("requestData", function(data) {
            console.log("[socketManager] socket.on requestData");
            console.log("[socketManager] data : " + JSON.stringify(data));

            for(var i = 0; i < listener.length; i++) {
                listener[i](data);
            }
        });
        
        socket.on("responseData", function(data) {
            console.log("[socketManager] socket.on responseData");
            
        });
    }

    function _addEventListener(callback) {
        if (listener.indexOf(callback) === -1) {
            listener.push(callback);
        }
    }

    return {
        createSocket : _createSocket,
        addEventListener : _addEventListener
    };
}());

module.exports = socketManager;