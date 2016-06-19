/**
 * Created by eerto_000 on 2016-06-19.
 */
"use strict";

var Nav = React.createClass({

    render: function() {
        return (
            <ul className="nav">
                <li className="clear">화면 초기화</li>
                <li className="screenCopy">모든 데이터 저장</li>
                <li className="selectItemCopy">선택 데이터 저장</li>
            </ul>
        );
    }
});

module.exports = Nav;