/** @jsx React.DOM */
jest.dontMock('../footer.js');

describe('footer', function () {

    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,

        Footer = require('../footer');

    it('should correctly render the footer text comments as plural for multiple comments', function () {
         var post = {
             points:         5,
             postedBy:       'Prabir Shrestha',
             postedAgo:      '4 hours ago',
             commentCount:   7
         };

        var footer = TestUtils.renderIntoDocument(<Footer post={post} />);
        var small = TestUtils.findRenderedDOMComponentWithTag(footer, 'small');
        var text = small.getDOMNode().textContent;

        expect(text.indexOf('comments', text.length - 'comments'.length)).not.toBe(-1);
    });

});
