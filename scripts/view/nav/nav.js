/**
 * Created by eerto_000 on 2016-06-19.
 */
"use strict";

var Nav = React.createClass({

    render: function() {
        return (
            <ul className="navBox">
                <li className="clear"><span>Screen Clear</span></li>
                <li className="screenCopy"><span>Save All Data</span></li>
                <li className="selectItemCopy"><span>Save Selected Data</span></li>
            </ul>
        );
    }
});

module.exports = Nav;