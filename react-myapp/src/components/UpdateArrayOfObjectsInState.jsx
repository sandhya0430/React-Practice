import React,{useState} from 'react';
function UpdateArrayOfOjectsInState(){
    const[cars,setCars]=useState([]);
    const[carYear,setCarYear]=useState(new Date().getFullYear());
    const[carMake,setCarMake]=useState("");
    const[carModel,setCarModel]=useState("");

    function handleAddCar(){
         
        
        const newCars={year:carYear, make:carMake,model:carModel}
        //year will be equal current state of the year

        setCars(c=>[...c,newCars]);
        setCarYear(new Date().getFullYear())//setting defaul value once the form is submitted
        setCarMake("");
        setCarModel("");

    }
function handleRemoveCar(index){
    setCars(cars=>cars.filter((_,i)=>i!==index))

}
function handleYearChange(event){
    setCarYear(event.target.value)

}
function handleMakeChange(event){
    setCarMake(event.target.value);

}
function handleModelChange(event){
    setCarModel(event.target.value);

}
return(<div>
    <h2>List of car object</h2>
    <ul>
        {cars.map((car,index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}
            </li>)}
     
    </ul>
    <input type="number" value={carYear} onChange={handleYearChange} /><br></br>
    <input type="text" value={carMake} onChange={handleMakeChange}  placeholder="Enter car make"/> <br></br>
    <input type="text" value={carModel} onChange={handleModelChange}placeholder="Enter car model"/><br></br>
    <button onClick={handleAddCar} >Add car</button >



</div>)

}export default UpdateArrayOfOjectsInState