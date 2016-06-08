/**
 * Created by eerto_000 on 2016-05-11.
 */
"use strict";
var Content = React.createClass({

    // 기본 제공 state 초기화
    getInitialState : function() {
        return {
            isOpen : false,
            selected_index : 0
        };
    },

    // onClick 이벤트
    handleClick : function(index) {
        if (this.state.isOpen === true) {
            this.setState({
                isOpen : false,
                selected_index : index
            });
        } else {
            this.setState({
                isOpen : true,
                selected_index : index
            });
        }
    },

    // onClick 으로 상태 변경에 따라 리스트 상세 노출
    showListDetail : function(index, result) {
        var listDetailTag;
        var detail_index = "";

        detail_index = "detail_" + index;
        
        if (this.state.isOpen === true && (index === this.state.selected_index)) {
            // 선택된 인덱스에 해당하는 디테일만 표시하도록 조건 추가
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

            item =  that.props.printData.map(function(result, idx) {
                var index = "";

                index = "list_" + idx + " ellipsis";

                return ([
                    <List className={index} index={idx} onClick={that.handleClick} key={idx} printData={result}/>,
                    <ul>{that.showListDetail(idx, result)}</ul>
                ]);
            });
            
            return item;
        }
        
        return (
            <ul className="content">
                {makeList()}
            </ul>
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
                {JSON.stringify(this.props.printData)}
            </li>
        );
    }
});

module.exports = Content;
