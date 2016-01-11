/** @jsx React.DOM */
var React = require('react');
var miserables = require("json!./miserables.json");
var Graph = require('./Graph');


var App = React.createClass({
    render : function(){
        return (
            <div className="mount-point">
                <Graph lesmis={miserables}/>
            </div>)
        }
});

module.exports = App;