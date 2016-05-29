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

                        index = "list_" + idx;

                        return <List className={index} key={idx} printData={result}/>;
                    })
                }
            </ul>
        );
    }
});

var List = React.createClass( {
    render : function() {
        var importClass = this.props.className + " ellipsis";
        
        return (
          <li className={importClass}>{JSON.stringify(this.props.printData)}</li>
        );
    }
});

module.exports = Content;
