/** @jsx React.DOM */
var React    = window.React = require('react'), // assign it to winow for react chrome extension

    Header   = require('./header'),
    Posts    = require('./posts'),

    App;

App = React.createClass({
    render: function () {
        return <div>
            <Header/>
            <div className="container content">
                <Posts/>
            </div>
        </div>;
    }
});

App.start = function () {
    React.renderComponent(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;
