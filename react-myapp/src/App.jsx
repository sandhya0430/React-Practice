 import React from 'react';
 import Header from './components/Header'
 import Footer from './components/Footer'
 import Food from './components/Food'
import Card from './components/Card'
//import Button from './components/Button/button.jsx';
import Student from './components/Student.jsx';
import './App.css';
import UserGreeting from './components/UserGreeting.jsx';
import List from './components/List.jsx';
import Button from './components/Button.jsx';
import ProfilePicture from './components/ProfilePicture.jsx';
import Mycomponent from './components/Mycomponent.jsx';
import Counter from './components/CounterApp.jsx';
import Mycomponents from './components/MyComponentsOnChange.jsx';
import ColorPicker from './components/ColorPicker.jsx';
function App() {
    //  const fruits=[{id:1,name:"orange",calories:30},
    //     {id:2,name:"apple",calories:40},
    //     {id:3,name:"banana",calories:50},
    //     {id:4,name:"grapes",calories:60},
    //     {id:5,name:"mango",calories:70},
    //     {id:6,name:"kiwi",calories:80}];

    //     const vegetables=[{id:7,name:"potato",calories:30},
    //     {id:8,name:"tomato",calories:40},
    //     {id:9,name:"onion",calories:50},
    //     {id:10,name:"cabbage",calories:60},
    //     {id:11,name:"beans",calories:70},
    //     {id:12,name:"capsicium",calories:80}];
 
 
  return(
     <>
    {/* <Header/>
    <Food/> 
     <Footer/>
     <Card/>   
     <Button/> */}
     {/* <Student name="doremon" age={30} isStudent={true}/> 
     <Student name="shinchan" age={30} isStudent={true}/> 
      <Student name="hachu" age={30} isStudent={true}/> 
      <Student/> */}
      {/* <UserGreeting isLoggedIn={false} username="sandhya"/> */}
   
      {/* /<List items={fruits} category="Fruits"/> */}
       {/* <List items={vegetables} category="vegetable"/>   */}
    
    
    {/* {fruits.length>0 ? <List items={fruits} category="Fruits"/>:null}


    {vegetables.length>0 ? <List items={vegetables} category="vegetables"/>:null} */}

      {/* <Button/>  */}
      {/* <ProfilePicture/> */}
      {/* <Mycomponent/> */}
      {/* <Counter/> */}
      {/* <Mycomponents/> */}
      <ColorPicker/> 
    
    
    </>
   
  );
  
   
}

export default App;







// CSS
// external
// inline
// module


//props=read-only properties that are shared btw components.
//a parent component can send data to a child component
//<Component key="value1"/>
// <Component key1="value1" key2="value2"/>
// app is parent component studnet is childe component

//propTypes= a mechnism that ensures that the passed value
//is of the correct type.
//age:PropTypes.number

//defaultProps=default values for props in case they are not passed
//from the parent component.
//name:Guest

//condtional rendering it allows you to control what gets rendered in your
//application based on certain conditions show hide or change the content

//rendering a list
//list componnet reuseable in nature

//click event=an interaction when a user click on a specific element
//we can respond to click by passing a callback to the onclick handler.

//ReactHook=special functions that allow functional components
//to use react features without writing class components
//useState, useEffect,Usecontext,useCallback and more.

//useState=hook that allows the creation of a stateful varaiable and a 
//setter function to update its value in the virtual dom [name,setName]

//onChange =event handler that is used primarily with form elements
//ex <input>,<textarea>,<select> ,<radio>
//triggers a function every time the value of the input chnages