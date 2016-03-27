/**
 * Created by eerto_000 on 2016-03-27.
 */
var http = require("http");

var serverObj;

function setEvent() {
    serverObj.on("request", function(request, response) {
        console.log("server.on request");
    });

    serverObj.on("connection", function(request, response) {
        console.log("server.on connection");
    });
}

function _start() {

    serverObj = http.createServer();
    setEvent();
    serverObj.listen(8888);

    console.log("Start server");
}

exports.start = _start;