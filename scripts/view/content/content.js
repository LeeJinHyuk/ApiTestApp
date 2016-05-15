/**
 * Created by eerto_000 on 2016-05-11.
 */

var Content = React.createClass({
    render: function() {
        return (
            <div className="content">
                <h1>Content</h1>    
            </div>
        );
    }
});

window.onload = function() {
    socketManager.createSocket();
    viewManager.initView();

    ReactDOM.render(
        <Content />,
        document.getElementById("contentBox")
    );
};