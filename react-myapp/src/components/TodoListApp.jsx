
import React,{useState} from'react';
function TodoListApp(){
    const [tasks,setTasks]=useState(["Eat break fast","Eat dinner","going to bed"]);
    const[newTask,setNewTask]=useState("");
     const [highlightedTask, setHighlightedTask] = useState(null);
    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    
    function highlight(index) {
        setHighlightedTask(t => (t=== index ? null : index)); // Toggle highlight
    }

    function getTaskStyle(index) {
        return {
            backgroundColor: highlightedTask === index ? "yellow" : "white"
        }
    }
    
    function addTask(){
        if(newTask.trimEnd()!==""){
            //above condition for not adding empty task
        setTasks(tasks=>[...tasks,newTask])
        setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=> i!==index)
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            //array  destructing swapping two elements in a array.
            // [[index],[index-1]]=[[index-1],[index]];
           
[updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
setTasks(updatedTasks);
           

        }

    }
    function moveTaskDown(index)
{
 if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            //array  destructing swapping two elements in a array.
            // [[index],[index-1]]=[[index-1],[index]];
           
[updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
setTasks(updatedTasks);
           
} 

}   return(<div className="to-d0-list">
    <h1>To-Do-list</h1>
        <input type="text" placeHolder="Enter a task..."
        value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add me</button>
        <ol>
         {tasks.map((task,index)=>
         <li key={index}  style={getTaskStyle(index)}>
            <span className="text">{task}</span>
             <button className="delete-button" onClick={()=>deleteTask(index)}>delete me</button>  
              <button className="move-up-button" onClick={()=>moveTaskUp(index)}>Move Task Up</button> 
               <button className="move-down-button" onClick={()=>moveTaskDown(index)}>Move Task down</button> 
                 <button onClick={() => highlight(index)}>Highlight</button>
            </li>)}  
         
        </ol>
       
    </div>)

}export default TodoListApp;