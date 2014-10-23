var React = require('react'),

    Footer,
    Item;

Footer = React.createClass({
    render: function () {
        var post = this.props.post;
        return <small>
            {post.points} points by {post.postedBy + ' ' + post.postedAgo} |
            { post.commentCount } { post.commentCount === 1 ? ' comment' : ' comments' }
        </small>;
    }
});

Item = React.createClass({
    render: function () {
        var post = this.props.post;
        return <li>
            <a href={post.url}>{post.title}</a>
            <Footer post={post}/>
       </li>;
    }
});

module.exports = Item;
