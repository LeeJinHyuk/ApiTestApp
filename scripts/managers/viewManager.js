"use strict";
var Content = require("../view/content/content");
var dataManager = require("./dataManager");

var viewManager = (function() {

    function _init(socketManager) {
        // 데이터 추가 시 실행할 리스너 등록
        dataManager.addEventListener(showResponseListData);
        // 데이터 수신 시 실행할 리스너 등록
        socketManager.addEventListener(dataManager.setData);
    }

    /**
     * 전달 받은 데이터를 화면에 노출
     */
    function showResponseListData(data) {
        console.log("[viewManager] showResponseListData data : " + data);
        ReactDOM.render(
            <Content printData={data} />,
            document.getElementById("contentBox")
        );
    }

    return {
        init : _init
    };
}());

module.exports = viewManager;