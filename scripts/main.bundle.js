/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by eerto_000 on 2016-03-27.
	 */
	"use strict";

	var socketManager = __webpack_require__(1);
	var viewManager = __webpack_require__(2);

	window.onload = function () {
	  socketManager.createSocket();
	  viewManager.init(socketManager);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by user on 2016-03-31.
	 */
	"use strict";

	var socketManager = function () {
	    var socket;
	    var listener = [];

	    function _createSocket() {
	        console.log("[socketManager] _createSocket");
	        socket = io.connect();
	        setEvent();
	    }

	    function setEvent() {
	        console.log("[socketManager] setEvent");
	        socket.on("requestData", function (data) {
	            console.log("[socketManager] socket.on requestData");
	            console.log("[socketManager] data : " + JSON.stringify(data));

	            for (var i = 0; i < listener.length; i++) {
	                listener[i](data);
	            }
	        });

	        socket.on("responseData", function (data) {
	            console.log("[socketManager] socket.on responseData");
	        });
	    }

	    function _addEventListener(callback) {
	        if (listener.indexOf(callback) === -1) {
	            listener.push(callback);
	        }
	    }

	    return {
	        createSocket: _createSocket,
	        addEventListener: _addEventListener
	    };
	}();

	module.exports = socketManager;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Content = __webpack_require__(3);
	var dataManager = __webpack_require__(4);

	var viewManager = function () {

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
	        ReactDOM.render(React.createElement(Content, { printData: data }), document.getElementById("contentBox"));
	    }

	    return {
	        init: _init
	    };
	}();

	module.exports = viewManager;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by eerto_000 on 2016-05-11.
	 */
	"use strict";

	var Content = React.createClass({
	    displayName: "Content",


	    getInitialState: function getInitialState() {
	        return { isOpen: false };
	    },

	    handleClick: function handleClick(event) {
	        if (this.state.isOpen === true) {
	            this.setState({ isOpen: false });
	        } else {
	            this.setState({ isOpen: true });
	        }
	    },

	    render: function render() {
	        var that = this;

	        // if (this.state.isOpen === true) {
	        //     listDetailTag = <ListDetail />;
	        // } else {
	        //     listDetailTag = "";
	        // }

	        return React.createElement(
	            "ul",
	            { className: "content" },
	            this.props.printData.map(function (result, idx) {
	                var index = "";
	                var listDetailTag;

	                index = "list_" + idx + " ellipsis";

	                if (that.state.isOpen === true) {
	                    listDetailTag = React.createElement(ListDetail, null);
	                } else {
	                    listDetailTag = "";
	                }

	                return React.createElement(List, { className: index, onClick: that.handleClick, key: idx, printData: result });
	                {
	                    listDetailTag;
	                }
	            })
	        );
	    }
	});

	var List = React.createClass({
	    displayName: "List",


	    _handleClick: function _handleClick(event) {
	        this.props.onClick();
	    },

	    render: function render() {
	        return React.createElement(
	            "li",
	            { className: this.props.className, onClick: this._handleClick },
	            JSON.stringify(this.props.printData)
	        );
	    }
	});

	var ListDetail = React.createClass({
	    displayName: "ListDetail",


	    render: function render() {

	        return React.createElement("ul", null);
	    }
	});

	module.exports = Content;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by eerto_000 on 2016-05-29.
	 */
	"use strict";

	var dataManager = function () {
	    var printData = [];
	    var listener = [];

	    function _setData(data) {
	        printData.push(data);

	        for (var i = 0; i < listener.length; i++) {
	            listener[i](printData);
	        }
	    }

	    function _addEventListener(callback) {
	        if (listener.indexOf(callback) === -1) {
	            listener.push(callback);
	        }
	    }

	    return {
	        setData: _setData,
	        addEventListener: _addEventListener
	    };
	}();

	module.exports = dataManager;

/***/ }
/******/ ]);