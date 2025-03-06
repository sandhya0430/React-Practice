import React,{useState} from 'react';


function UpdateObject(){
    

    const [car,setCar]=useState({year:2025,
        make:"ford",
        model:"mustang"});

    function handleYearChange(event){
        //setCar({year:2025})

        //spread opertor is used
         //setCar({...car,year:2025})
         //after using spread opertor it is going to ook ike this
         //setCar({year:2025,make:"ford",model:"mustang",year:2025})
        
          //setCar({...car,year:event.target.value})
          
          //using updater function
          setCar(c=>({...c,year:event.target.value}))//surrond {} with curly brcket
    }

     function handleMakeChange(event){
       // setCar({...car,make:event.target.value})
    setCar(c=>({...c,make:event.target.value}))
    
    }

    function handleModelChange(event){
        //setCar({...car,model:event.target.value})
        setCar(c=>({...c,model:event.target.value}))
    }

    return(
        <div>
            <p> My favourite car {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <br></br>
            <input type="string" value={car.make} onChange={handleMakeChange}/>
                        <br></br>
            <input type="string" value={car.model} onChange={handleModelChange}/>
        </div>
    );



}export default UpdateObject;