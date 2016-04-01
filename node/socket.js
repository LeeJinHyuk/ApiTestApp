/**
 * Created by user on 2016-03-31.
 */
var socket = require("socket.io");

var io;

function setEvent() {
    // 연결 이벤트
    io.sockets.on("connection", function(socket) {
        console.log("[socket] connection");
        
    });

    // 연결해제 이벤트
    io.sockets.on("disconnect", function(socket) {
        console.log("[socket] disconnect");
        
    });
}

function _start(serverObj) {
    io = socket.listen(serverObj);
    setEvent();
}

exports.start = _start;