/**
 * Created by eerto_000 on 2016-06-19.
 */
"use strict";

var Nav = React.createClass({

    _handleClick : function(event) {
        this.props.onClick(event);
    },
    
    render: function() {
        return (
            <ul className="navBox">
                <li className="clear" onClick={this._handleClick}><span>Screen Clear</span></li>
                <li className="screenCopy"><span>Save All Data</span></li>
            </ul>
        );
    }
});

module.exports = Nav;