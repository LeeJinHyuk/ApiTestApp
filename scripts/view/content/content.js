/**
 * Created by eerto_000 on 2016-05-11.
 */
"use strict";

var Nav = require("../nav/nav");

var Content = React.createClass({
    // 기본 제공 state 초기화
    getInitialState : function() {
        return {
            selected_array : []
        };
    },

    // onClick 이벤트
    handleClick : function(index) {
        var tmp_array;

        if (this.state.selected_array[index] === true) {
            // 선택된 상태이기 때문에 해제
            tmp_array = this.state.selected_array[index] = false;
        } else {
            // 선택안되거나 해제된 상태이기 때문에 선택
            tmp_array = this.state.selected_array[index] = true;
        }

        this.setState({
            selected_index : tmp_array
        });
    },

    // onClick 으로 상태 변경에 따라 리스트 상세 노출
    showListDetail : function(index, result) {
        var listDetailTag;
        var detail_index = "";

        detail_index = "detail_" + index;
        
        if (this.state.selected_array[index] === true) {
            // 선택된 인덱스에 해당하는 디테일만 표시
            listDetailTag = <ListDetail className={detail_index} printData={result}/>;
        } else {
            listDetailTag = "";
        }
        return listDetailTag;
    },

    render: function() {
        var that = this;

        function makeList() {
            var item;
            if (that.props.printData) {
                item = that.props.printData.map(function (result, idx) {
                    var index = "";
                    var detail_class = "detailBox";

                    index = "list_" + idx + " ellipsis";

                    if (!that.state.selected_array[idx]) {
                        detail_class = "";
                    }

                    return ([
                        <List className={index} index={idx} onClick={that.handleClick} key={idx} printData={result}/>,
                        <ul className={detail_class}>{that.showListDetail(idx, result)}</ul>
                    ]);
                });
            }
            
            return item;
        }
        
        return (
            <div id="container">
                <div id="contentBox">
                    <ul className="content">
                        {makeList()}
                    </ul>
                </div>
                <div id="navBox">
                    <Nav />
                </div>
            </div>
        );
    }
});

var List = React.createClass({

    _handleClick : function(event) {
        this.props.onClick(this.props.index);
    },

    render : function() {
        return (
            <li className={this.props.className} onClick={this._handleClick}>
                {JSON.stringify(this.props.printData)}
            </li>
        );
    }
});

var ListDetail = React.createClass({

    render : function() {

        return (
            <li className={this.props.className}>
                <pre>{JSON.stringify(this.props.printData, undefined, 4)}</pre>
            </li>
        );
    }
});

module.exports = Content;
