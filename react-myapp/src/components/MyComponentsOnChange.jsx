import React,{useState} from 'react';
function MyComponents(){
    const [name,setName]=useState("Guest");
    const[quantity,setQuantity]=useState("0");
    const [comment,setComment]=useState("")
    const [payment,setPayment]=useState("");
    const[shipping,setShipping]=useState("");
    
    
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleSetQuantityChange(e){
          setQuantity(e.target.value)
    }
    function handleComment(e){
        setComment(e.target.value)
    }
    function handlePayment(e){
        setPayment(e.target.value)
    }
    function handleShipping(e){
        setShipping(e.target.value);
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange}/>   
            <p>Name:{name}</p>  

            <input value={quantity} onChange={handleSetQuantityChange} type="number"/>
            <p>set the quantity:{quantity}</p>
               
             <textarea value={comment} onChange={handleComment} placeholder="you are nonsense"/>  
             <p>update tour comments:{comment}</p>
               
            <select value={payment} onChange={handlePayment}>
               
                <option value="">Select an option</option>
                <option value="visa">visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="giftcard">Giftcard</option>
                <option value="cod">cod</option>
                </select>  
                <p>payment process:{payment}</p>
               
            <label>
                <input type="radio" value="PickUp"
                checked={shipping==="PickUp"}
                onChange={handleShipping}/> 
                PickUp
                </label>  
                 
                <br></br> 
                <label>
                    <input type="radio" value="Delivery"
                    checked={shipping==="Delivery"}
                    onChange={handleShipping}/>
                Delivery
                </label> 
               
               
               <p>shipping:{shipping}</p>
               
               </div>
    )

}export default MyComponents;