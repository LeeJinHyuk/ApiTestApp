/**
 * Created by user on 2016-03-31.
 */
var socketManager = (function() {
    var socket;

    function _createSocket() {
        console.log("[socketManager] _createSocket");
        socket = io.connect();
        setEvent();
    }

    function setEvent() {
        console.log("[socketManager] setEvent");
        socket.on("requestData", function(data) {
            console.log("[socketManager] socket.on requestData");
            
        });
        
        socket.on("responseData", function(data) {
            console.log("[socketManager] socket.on responseData");
            
        });
    }

    return {
        createSocket : _createSocket
    };
}());