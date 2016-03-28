/**
 * Created by eerto_000 on 2016-03-27.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);