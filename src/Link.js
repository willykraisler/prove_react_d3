/** @jsx React.DOM */

var React = require('react');
require('./Link.less');

var Link = React.createClass({

    render: function () {
        return (
            <line x1={this.props.datum.source.x}
                  y1={this.props.datum.source.y}
                  x2={this.props.datum.target.x}
                  y2={this.props.datum.target.y}
                  style={{
                    "stroke":"#999",
                    "strokeOpacity":".6",
                    "strokeWidth": Math.sqrt(this.props.datum.value)
                  }}
            />
        );
    }
})

module.exports = Link;