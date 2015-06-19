var React = require('react'),

    Footer;

Footer = React.createClass({
    render: function () {
        var post = this.props.post;
        return <small>
            {post.points} points by {post._highlightResult.author.value + ' ' + post.created_at } |
            { post.num_comments } { post.num_comments === 1 ? ' comment' : ' comments' }
        </small>;
    }
});

module.exports = Footer;
