/**
 * Created by eerto_000 on 2016-03-30.
 */
var fs = require("fs");

var handle = {
    "/" : loadMainPage,
    "data" : sendData
};

/**
 * 메인 페이지 이동
 */
function loadMainPage(urlObj, response) {
    console.log("[requestHandler] loadMainPage");
    console.log("[requestHandler] pathName : " + urlObj.pathName + ", method : " + urlObj.method);

    fs.readFile("index.html", function(error, data) {
        console.log("readFile");
        console.log(error);
        console.log(data);

        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
}

/**
 * 데이터 전송
 */
function sendData(urlObj, response) {
    console.log("[requestHandler] sendData");
    console.log("[requestHandler] pathName : " + urlObj.pathName + ", method : " + urlObj.method);

    if (urlObj.method === "POST") {

    } else {

    }

}

exports.handler = handle;
