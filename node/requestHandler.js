/**
 * Created by eerto_000 on 2016-03-30.
 */
var fs = require("fs");
var qs = require('querystring');

var handle = {
    "/" : _loadMainPage,
    "/data" : _sendData,
    "file" : _loadMainFile
};

var defaultPath = __dirname + "/..";

/**
 * 메인 페이지 이동
 */
function _loadMainPage(urlObj, response) {
    console.log("[requestHandler] loadMainPage");
    console.log("[requestHandler] pathName : " + urlObj.pathName + ", method : " + urlObj.method);

    fs.readFile(defaultPath + "/index.html", function(error, data) {
        console.log("[requestHandler] readFile");
        console.log("[requestHandler] error : " + error);
        console.log("[requestHandler] data : " + data);

        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}

function _loadMainFile(urlObj, response) {
    console.log("[requestHandler] loadMainFile");
    console.log("[requestHandler] pathName : " + urlObj.pathName + ", method : " + urlObj.method);

    fs.readFile(defaultPath + urlObj.pathName, function(error, data) {
        console.log("[requestHandler] readFile");
        console.log("[requestHandler] error : " + error);
        console.log("[requestHandler] data : " + data);
        response.writeHead(200);
        response.end(data);
    });
}

/**
 * 데이터 전송
 */
function _sendData(urlObj, response, request, ioObj) {
    console.log("[requestHandler] sendData");
    console.log("[requestHandler] pathName : " + urlObj.pathName + ", method : " + urlObj.method);

    var postData = "";
    var cors = {};

    cors["Access-Control-Allow-Origin"] = "*";

    if (urlObj.method === "POST") {
        request.on("data", function(data) {
            console.log("[requestHandler] request data : " + data);
            postData += data.toString();
        });

        request.on('end', function () {
            console.log("[requestHandler] request end postData : " + postData);
            response.writeHead(200, cors);
            response.end();

            transmitData(ioObj, qs.parse(postData));
        });
    } else {

    }
}

/**
 * 데이터를 페이지로 전송
 */
function transmitData(ioObj, postData) {
    console.log("[requestHandler] transmitData postData : " + postData);
    ioObj.sockets.emit("requestData", postData);
}

exports.handler = handle;
