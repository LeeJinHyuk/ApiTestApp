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
                        return <List key={idx} printData={result}/>;
                    })
                }
            </ul>
        );
    }
});

var List = React.createClass( {
    render : function() {
        return (
          <li>{JSON.stringify(this.props.printData)}</li>
        );
    }
});

module.exports = Content;
