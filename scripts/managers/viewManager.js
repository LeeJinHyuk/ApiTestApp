
var Content = require("../view/content/content");
var sockManager = require("./socketManager");

var viewManager = (function() {

    function _init() {
        sockManager.addEventListener(showResponseListData);
    }

    /**
     * 전달 받은 데이터를 화면에 노출
     */
    function showResponseListData(data) {
        console.log("[viewManager] showResponseListData data : " + data);
        ReactDOM.render(
            <Content />,
            document.getElementById("contentBox")
        );
    }

    return {
        init : _init
    };
}());

module.exports = viewManager;