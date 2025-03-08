import React,{useState,useEffect} from "react";
function UseEffect(){
    const[count,setCount]=useState(0);
    const[color,setColor]=useState("Green");
    function addCount(){
        setCount(c=>c+1);
    }
    function subtractCount(){
        setCount(c=>c-1);
    }
    function colorChange(){
        setColor(c=>c==="Green"?"red":"Green")

    }
    // useEffect(()=>{
    //     document.title=`Count:${count}`;
    //     //runs after every re render;
    // }); 

    // useEffect(()=>{
    //     document.title=`Count:${count}`;
    //     //runs only once;
    // },[]);

      useEffect(()=>{
        document.title=`Count:${count} Color:${color}`;
        //when it mounts+ value changes;
    },[count]);

    return (<>
    <p style={{color:color}}>Count:{count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br></br>
    <button onClick={colorChange}>Color</button>
    </>)


}export default UseEffect;
