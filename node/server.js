/**
 * Created by eerto_000 on 2016-03-27.
 */
var http = require("http");
var url = require("url");
var queryString = require("querystring");

var serverObj;
var ioObj;

function setEvent(onRoute, handler) {
    serverObj.on("request", function(request, response) {
        console.log("[server] server.on request");
        var pathName;
        var method;
        var urlObj;
        var postData;

        console.log("[server] url : " + url.parse(request.url).href);
        console.log("[server] request : " + queryString.stringify(request));

        request.on("data", function(data) {
            postData = "" + data;
        });

        request.on('end', function () {
            postData = queryString.parse(postData);
        });

        pathName = url.parse(request.url).pathname;
        method = request.method;

        urlObj = {
            "pathName" : pathName,
            "method" : method,
            "postData" : postData
        };
        
        // pathName, method 에 따라 처리 
        onRoute(urlObj, handler, response, ioObj);
    });

    serverObj.on("connection", function(request, response) {
        console.log("[server] server.on connection");
    });
}

function _start(onRoute, handler, onStart) {
    // 웹 서버 생성
    serverObj = http.createServer();
    setEvent(onRoute, handler);
    // 웹 서버 실행
    serverObj.listen(9574);
    // 웹 소켓 생성 및 실행
    ioObj = onStart(serverObj);
    console.log("[server] Start server");
}

exports.start = _start;