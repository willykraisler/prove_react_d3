/** @jsx React.DOM */
var React = require('react');
var d3 = require('d3');
var Link = require('./Link');
var Node = require('./Node');
var Radium = require('radium');

var Graph = React.createClass({
    mixins: [Radium.StyleResolverMixin, Radium.BrowserStateMixin],
    getInitialState: function() {
        var svgWidth = 900;
        var svgHeight = 900;
        var force = d3.layout.force()
            .charge(-120)
            .linkDistance(30)
            .size([svgWidth, svgHeight]);
        return {
            svgWidth: svgWidth,
            svgHeight: svgHeight,
            force: force,
            nodes: null,
            links: null
        }
    },
    componentDidMount: function () {
        var self = this;
        // refactor entire graph into sub component - force layout shouldn't be
        // manipulating props, though this works
        this.state.force
            .nodes(this.props.lesmis.nodes)
            .links(this.props.lesmis.links)
            .start()

        this.state.force.on("tick", function (tick, b, c) {
            self.forceUpdate()
        })
    },
    drawLinks: function () {
        var links = this.props.lesmis.links.map(function (link, index) {
            return (<Link datum={link} key={index} />)
        })
        return (<g>
            {links}
            </g>)
    },
    drawNodes: function () {
        var nodes = this.props.lesmis.nodes.map(function (node, index) {
            return (
                <Node key={index}  x={node.x} y={node.y} group={node.group}/>
            ) })
        return nodes;
    },
    render: function() {
        return (
            <div>
                <div style={{"marginLeft": "20px", "fontFamily": "Helvetica"}}></div>
                <svg style={{"border": "2px solid black", "margin": "20px"}} width={this.state.svgWidth} height={this.state.svgHeight}> {this.drawLinks()} {this.drawNodes()}</svg>
            </div>
        )
    }
});

module.exports = Graph;
