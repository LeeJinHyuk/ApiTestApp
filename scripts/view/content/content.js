/**
 * Created by eerto_000 on 2016-05-11.
 */
"use strict";
var Content = React.createClass({

    getInitialState : function() {
        return {isOpen : false};
    },

    handleClick : function(event) {
        if (this.state.isOpen === true) {
            this.setState({isOpen : false});
        } else {
            this.setState({isOpen : true});
        }
    },
    
    render: function() {
        var that = this;

        // if (this.state.isOpen === true) {
        //     listDetailTag = <ListDetail />;
        // } else {
        //     listDetailTag = "";
        // }
        
        return (
            <ul className="content">
                {
                    this.props.printData.map(function(result, idx) {
                        var index = "";
                        var listDetailTag;

                        index = "list_" + idx + " ellipsis";

                        // if (that.state.isOpen === true) {
                        //     listDetailTag = <ListDetail />;
                        // } else {
                        //     listDetailTag = "";
                        // }

                        return (
                            <List className={index} onClick={that.handleClick} key={idx} printData={result}/>
                            //{listDetailTag}
                        );
                    })
                }
            </ul>
        );
    }
});

var List = React.createClass({

    _handleClick : function(event) {
        this.props.onClick();
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
            <ul></ul>
        );
    }
});

module.exports = Content;
