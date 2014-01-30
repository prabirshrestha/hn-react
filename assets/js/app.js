/** @jsx React.DOM */
var React  = require('react'),

    Header = require('./header'),

    App;

App = React.createClass({
    render: function () {
        return (
            <Header/>
        );
    }
});

App.start = function () {
    React.renderComponent(<App/>, document.getElementById('app'));
};

module.exports = window.App = App;
