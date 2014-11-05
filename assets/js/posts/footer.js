var React = require('react'),

    Footer;

Footer = React.createClass({
    render: function () {
        var post = this.props.post;
        return <small>
            {post.points} points by {post.postedBy + ' ' + post.postedAgo} |
            { post.commentCount } { post.commentCount === 1 ? ' comment' : ' comments' }
        </small>;
    }
});

module.exports = Footer;
