import React from "react";
import Button from "./Button";

export default class Counter extends React.Component {
constructor(props){
    super(props)
    this.state = {
        counter: 1
    }
}

decrement (){
    let newCounter = this.state.counter - (this.props.step || 1);
    this.setState({counter: newCounter})
}

increment (){
    let newCounter = this.state.counter + (this.props.step || 1);
    this.setState({counter : newCounter})
}

render(){
const showIncButton = this.props.maxValue === undefined || this.state.counter < this.props.maxValue;

    return(
        <div className="border border-2 border-red-600 p-2 m-2">
            <h1>Counter: {this.state.counter}</h1>
            <Button onClick={() => this.decrement()}>-{this.props.step || 1}</Button>
            {showIncButton ? 
            <Button onClick={() => this.increment()}>+{this.props.step || 1}</Button>
            : <span>Max Value reached</span>}
            
        </div>
    )
}
}