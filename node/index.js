/**
 * Created by eerto_000 on 2016-03-27.
 */
var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

server.start(router.route, requestHandler.handler);