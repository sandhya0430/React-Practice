
import React,{useState} from 'react';
function MyComponent(){
    const[name,setName]=useState("Guest");
    const[age,setAge]=useState(0);
const[isEmployed,setIsEmployed]=useState(false);
    const updateName=()=>{
        setName("sandhya");
    }
    const  incrementAge=()=>{
        setAge(age+5);
    }
    const toggleEmployment=()=>{
        setIsEmployed(!isEmployed);
    }
    
    return(<div>
        <p>hello my name {name}</p>
        <button onClick={updateName}>set Name</button>

        <p>Hello my age is:{age}</p>
        <button onClick={incrementAge}>set age</button>
    
    
    <p>status of employe:{isEmployed ?"true":"false"}</p>
    <button onClick={toggleEmployment}>toggleStatus</button>
    </div>)

}
export default MyComponent;