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

	"use strict";

	/**
	 * Created by eerto_000 on 2016-03-27.
	 */

	var socketManager = __webpack_require__(1);
	var viewManager = __webpack_require__(2);

	window.onload = function () {
	  socketManager.createSocket();
	  viewManager.initView();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by user on 2016-03-31.
	 */
	var socketManager = function () {
	    var socket;

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
	        });

	        socket.on("responseData", function (data) {
	            console.log("[socketManager] socket.on responseData");
	        });
	    }

	    return {
	        createSocket: _createSocket
	    };
	}();

	module.exports = socketManager;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Content = __webpack_require__(3);

	var viewManager = function () {

	    function _initView() {
	        ReactDOM.render(React.createElement(Content, null), document.getElementById("contentBox"));
	    }

	    return {
	        initView: _initView
	    };
	}();

	module.exports = viewManager;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by eerto_000 on 2016-05-11.
	 */

	var Content = React.createClass({
	    displayName: "Content",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "content" },
	            React.createElement(
	                "h1",
	                null,
	                "Content"
	            )
	        );
	    }
	});

	module.exports = Content;

/***/ }
/******/ ]);