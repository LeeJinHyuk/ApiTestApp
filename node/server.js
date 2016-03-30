/**
 * Created by eerto_000 on 2016-03-27.
 */
var http = require("http");
var url = require("url");

var serverObj;

function setEvent(onRoute, handler) {
    serverObj.on("request", function(request, response) {
        console.log("[server] server.on request");
        var pathName;
        var method;
        var urlObj;

        console.log("[server] url : " + url.parse(request.url).href);

        pathName = url.parse(request.url).pathname;
        method = request.method;

        urlObj = {
            "pathName" : pathName,
            "method" : method
        };
        
        // pathName, method 에 따라 처리 
        onRoute(urlObj, handler, response);
    });

    serverObj.on("connection", function(request, response) {
        console.log("[server] server.on connection");
    });
}

function _start(onRoute, handler) {
    // 서버 생성
    serverObj = http.createServer();
    setEvent(onRoute, handler);
    // 서버 실행
    serverObj.listen(8888);

    console.log("[server] Start server");
}

exports.start = _start;