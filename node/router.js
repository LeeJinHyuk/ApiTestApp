/**
 * Created by eerto_000 on 2016-03-28.
 */
function _router(urlObj, handler, response, request, ioObj) {
    var path;
    console.log("[router] pathName : " + urlObj.pathName);

    if (urlObj.pathName.indexOf("/scripts/") !== -1 ||
        urlObj.pathName.indexOf("/styles/") !== -1 ||
        urlObj.pathName.indexOf("/node_modules/") !== -1) {
        // js, css, 외부 파일 로딩 부분
        path = "file";
    }
    
    if (typeof handler[urlObj.pathName] === "function") {
        console.log("[router] Find");
        // pathName 에 해당하는 콜백 수행
        handler[urlObj.pathName](urlObj, response, request, ioObj);
    } else if (path === "file" && typeof handler[path] === "function") {
        console.log("[router] Find loading file");
        handler[path](urlObj, response);
    } else {
        console.log("[router] Fail to find " + urlObj.pathName);
        response.writeHead(404);
        response.end();
    }
}

exports.route = _router;