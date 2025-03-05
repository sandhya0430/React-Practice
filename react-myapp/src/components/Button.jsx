function Button()
{
            // console.log("Button component is rendering...")
    
    
    //const handleClick=()=>console.log("Button is clicked")
    
   //const handleClick2=(name)=>console.log(`stop clicking me ${name}`)

//    let count=0;
//    const handleClick=(name)=>{
    
//    if(count<3){
//     count++;
//     console.log(`${name}you clicked me${count}`)
//    }else{
//     console.log(`${name} stop clicking me `)
//    }
//  }


//event 
//const handleClick=(e)=> console.log(e);
const handleClick=(e)=>e.target.textContent="sandhya you are beautiful"
    
            return(

        // <button onClick={handleClick2("sandhya")}>Click Me</button>
        // () made to invoke right way brfore clicking
        //when u use ()=> it will not invoke right away

        //<button onClick={()=>handleClick2("sandhya")}>Click Me</button>
    
    // <button onClick={()=>handleClick("sandhya")}> click me</button>
    //<button onClick={(e)=>handleClick(e)}>Click me</button>   
     <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>   

);

}
export default Button;