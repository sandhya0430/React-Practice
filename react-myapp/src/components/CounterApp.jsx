import React,{useState,Fragment} from 'react';
function Counter(){


    
    const [counter,setCounter]=useState(0);

    const increment=()=>{
        // setCounter(counter+1);
        //  setCounter(counter+1);
        //   setCounter(counter+1);
        //setCount fnction will get updated it increments only once
        //uses the Current state to calculate the next state.
        //set functions do not trigger a update.
        //react batches together state updates for performance reasons.
        //next state becomes the current state after an update.
        //setCounter(0+1);
        //setCounter(0+1);
        //setCounter(0+1);
        //in reality what happens is it take three seperate batches and updates it 
        //example a referesh button at last we end up in refereshing the same page

        setCounter(count=>count+1);
        //setCount(c=>c+1)
        //what happens is that
        //takes the pending state to calulate next sttae
        //react puts your updater function in a queue(waiting in line)
        //during the next renderit will call them in the same order.
    
    
    
    }
    const decrement=()=>{
        //setCounter(counter-1);
        setCounter(c=>c+1);
    }
    const reset=()=>{
        // setCounter(0);
        setCounter(c=>c=0)
        //c is prev state.

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