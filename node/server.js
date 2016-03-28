/**
 * Created by eerto_000 on 2016-03-27.
 */
var http = require("http");

var serverObj;

function setEvent(onRoute) {
    serverObj.on("request", function(request, response) {
        console.log("[server] server.on request");
        onRoute();
    });

    serverObj.on("connection", function(request, response) {
        console.log("[server] server.on connection");
    });
}

function _start(onRoute) {

    serverObj = http.createServer();
    setEvent(onRoute);
    serverObj.listen(8888);

    console.log("[server] Start server");
}

exports.start = _start;