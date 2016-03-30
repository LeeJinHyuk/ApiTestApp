/**
 * Created by eerto_000 on 2016-03-28.
 */
function _router(urlObj, handler, response) {
    console.log("[router] pathName : " + urlObj.pathName);

    if (typeof handler[urlObj.pathName] === "function") {
        console.log("[router] Find");
        // pathName 에 해당하는 콜백 수행
        handler[urlObj.pathName](urlObj, response);
    } else {
        console.log("[router] Fail to find " + urlObj.pathName);
        response.writeHead(404);
        response.end();
    }
}

exports.route = _router;