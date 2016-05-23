
var Content = require("../view/content/content");

var viewManager = (function() {

    function _initView() {
        ReactDOM.render(
            <Content />,
            document.getElementById("contentBox")
        );
    }

    return {
        initView : _initView
    };
}());

module.exports = viewManager;