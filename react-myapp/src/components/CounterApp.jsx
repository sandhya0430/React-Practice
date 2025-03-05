import React,{useState,Fragment} from 'react';
function Counter(){


    
    const [counter,setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    const reset=()=>{
        setCounter(0);

    }

    return(
        
        <div className="counter-container">
        <h1>Counter</h1>

        <p className="count-display">value:{counter}</p>
        <button onClick={increment}>increment </button>
        
        
        <button onClick={decrement}>decrement</button>  

 
        <button onClick={reset}>reset</button>      
        </div>
    );

}export default Counter;