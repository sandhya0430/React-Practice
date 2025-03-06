import react,{useState} from 'react'

function UpdateArray(){
    const[foods,setFoods]=useState(["Apple","Orange","Banana"]);
    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value=""
        
  setFoods(f=>[...f,newFood]);
    }
     function handleRemoveFood(index){
        //going to work on index
            // setFoods(foods.filter(Element,index))

        setFoods(foods.filter((_,i)=> i !==index));
        //we dont have element so _
        //just to diffentiating index it we are giving i
    }
    
    
    return(<div>
        <h2>List of foods</h2>
        <ul>{foods.map((food,index)=><li key={(index)}  onClick={()=>handleRemoveFood(index)}>{food}</li>)}</ul>
        <input type="text" id="foodInput" placeholder="Add some fruits you like"/>
        <button onClick={handleAddFood}>Add food</button>
        
    </div>) ;

}export default UpdateArray;

//onClick{()=>handleRemove(index)}
//cause we are sending a paramter we are nees to add call back