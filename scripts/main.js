/**
 * Created by eerto_000 on 2016-03-27.
 */
"use strict";
var socketManager = require("./managers/socketManager");
var viewManager = require("./managers/viewManager");

window.onload = function() {
    socketManager.createSocket();
    viewManager.init(socketManager);
};