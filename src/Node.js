/** @jsx React.DOM */

var React = require('react');
var d3 = require('d3');
var color = d3.scale.category20();
require('./Node.less');

var Node = React.createClass({
    render: function () {
        return (
            <circle
                r={5}
                cx={this.props.x}
                cy={this.props.y}
                style={{
                    "fill": color(this.props.group),
                    "stroke":"#fff",
                    "strokeWidth":"1.5px"
                }}
            />
        )
    }
});

module.exports = Node;