/**
 * Created by eerto_000 on 2016-05-11.
 */
"use strict";
var Content = React.createClass({
    render: function() {
        return (
            <ul className="content">
                {
                    this.props.printData.map(function(result, idx) {
                        var index = "";

                        index = "list_" + idx + " ellipsis";

                        return <List className={index} key={idx} printData={result}/>;
                    })
                }
            </ul>
        );
    }
});

var List = React.createClass({

    handleClick : function(event) {
        if (this.state.isOpen === true) {
            this.setState({isOpen : false});
        } else {
            this.setState({isOpen : true});
        }
    },

    render : function() {
        var importClassForDetail = "detail_" + this.props.key;
        var listDetailTag;

        if (this.state.isOpen === true) {
            listDetailTag = <ListDetail className={importClassForDetail}/>
        } else {
            listDetailTag = "";
        }

        return (
          <li className={this.props.className} onClick={this.handleClick}>{JSON.stringify(this.props.printData)}</li>
        );
    }
});

var ListDetail = React.createClass({

    render : function() {

        return (
            <ul className={this.props.className}></ul>
        );
    }
});

module.exports = Content;
