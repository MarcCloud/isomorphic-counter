const React = require('react');
const count = require('./count');
const Counter = React.createClass({
    render(){
        return (<div>
                    <a className="btn btn-warning" onClick={this.handleSubstrac} href={'/'+(this.props.count-1)}>-</a>
                    <span> {this.props.count} </span>
                    <a className="btn btn-primary" onClick={this.handleAdd} href={'/'+(this.props.count+1)}>+</a>
                </div>);
    },
    handleAdd (ev){
        ev.preventDefault();
        history.pushState({}, '', '/'+(this.props.count+1))
        count.add(1);
    },
    handleSubstrac (ev){
        ev.preventDefault();
        history.pushState({}, '', '/'+(this.props.count-1))
        count.sub(1);
    }

});
export default Counter;
