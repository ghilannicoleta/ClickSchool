import React, { useState } from "react";
import Button from "./Button";


export default function Steper(props){
const [inerStep, setInerStep] = useState(1)
const {step, maxValue, onChange } = props;

function decrement (){
        let newStep = inerStep - 1;
        setInerStep(newStep)
        onChange(newStep)
    }
    
function increment (){
        let newStep = inerStep + 1;
        setInerStep(newStep)
        onChange(newStep)
    }

    const showIncButton = maxValue === undefined || inerStep < maxValue;

    return(
        <div className="border border-2 border-blue-600 p-2 m-2">
            
            <h1>Step: {inerStep}</h1>
            {inerStep> 1 && (
                <Button onClick={() => decrement()}>-{step || 1}</Button>
            )}
            {showIncButton ? (
                <Button onClick={() => increment()}>+{step || 1}</Button>
            ) : (
                <span>Max Value reached</span>
                )}
            
        </div>
    )
}







// export default class Steper extends React.Component {
// constructor(props){
//     super(props)
//     this.state = {
//         step: 1
//     }
// }

// decrement (){
//     let newStep = this.state.step - 1;
//     this.setState({step: newStep})
//     this.props.onChange(newStep)
// }

// increment (){
//     let newStep = this.state.step + 1;
//     this.setState({step : newStep})
//     this.props.onChange(newStep)
// }

// render(){
// const showIncButton = this.props.maxValue === undefined || this.state.step < this.props.maxValue;

//     return(
//         <div className="border border-2 border-blue-600 p-2 m-2">
//             <h1>Step: {this.state.step}</h1>
//             {this.state.step > 1 && <Button onClick={() => this.decrement()}>-{this.props.step || 1}</Button>}
//             {showIncButton ? 
//             <Button onClick={() => this.increment()}>+{this.props.step || 1}</Button>
//             : <span>Max Value reached</span>}
            
//         </div>
//     )
// }
// }