/** @jsx React.DOM */
var React = require('react'),

    Item;

Item = React.createClass({
    render: function () {
        var post = this.props.post;
        return (
            <li>
                <a href={post.url}>{post.title}</a>
            </li>
        );
    }
});

module.exports = Item;
