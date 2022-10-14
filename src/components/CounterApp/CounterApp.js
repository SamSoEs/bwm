import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import './CounterApp.css'
import CounterView from './CounterView'


const functions = new Set();

const CounterApp = (props) => {

    const [count, setCount] = useState(0); 
    const [whatEver, setWhatever] = useState(100); 
    const { title } = props;

    useEffect(() => {
        console.log("Calling use effect");
    })

    const increment = useCallback((step) => () => setCount(count + step), [count]);
    const doWhatever = useCallback(() => setWhatever(whatEver + 1), [whatEver]);
    
    functions.add(increment);
    functions.add(doWhatever);

    return(
        <div>
            <div className='counter-app'>
                <h1>{title}</h1>
                <CounterView
                    
                    countValue={count}
                    handleIncrement={increment}
                />
                <button style={{background:'red'}} onClick={doWhatever}> Do Whatever</button>
                <h1>{functions.size}</h1>
            </div>
        </div>
    )
}

CounterApp.prototypes = {
    title: PropTypes.string.isRequired
}



// class CounterApp extends React.Component{
    
//     constructor(){
//         super();
//         // this.increment = this.increment.bind(this);
//         // this.decrement = this.decrement.bind(this);
//         this.state = {
//             count: 99
//         }
//     }

//     componentDidMount(){
//         alert("Component Did Mount called");
//     }

//     increment = (step) => () => 
 
//     this.setState({
//             count: this.state.count + step
//         })
    


//     render() {
//         const { count } = this.state;
//         const { title } = this.props;
//         return (
//             <div>
//             <div className='counter-app'>
//                 <h2>{title}</h2>
                
//             </div>
//         </div>
//         )
//     }
// }

export default CounterApp;