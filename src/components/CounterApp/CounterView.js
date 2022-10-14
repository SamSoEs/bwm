import React, {useEffect} from 'react'


const generateColor = () => {
    return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);

}

const CounterView = React.memo((props) => {
    const {countValue, handleIncrement} = props;
    useEffect(() => {
        console.log();
    })

    return(
        <div style={{background:generateColor()}}>
            <h2 className="value">{countValue}</h2>
            <button onClick={handleIncrement(2)}>Increment</button>
            <button onClick={handleIncrement(-2)}>Decrement</button>
        </div>
    )
})

export default CounterView;
