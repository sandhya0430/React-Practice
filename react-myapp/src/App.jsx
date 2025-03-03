 import React from 'react';
 import Header from './components/Header'
 import Footer from './components/Footer'
 import Food from './components/Food'
import Card from './components/Card'
import Button from './components/Button/button.jsx';
import Student from './components/Student.jsx';
import './App.css';
function App() {
 
  return(
     <>
   {/* <Header/>
   <Food/> 
     <Footer/>
     <Card/>   
     <Button/> */}
     <Student name="doremon" age={30} isStudent={true}/> 
     <Student name="shinchan" age={30} isStudent={true}/> 
      <Student name="hachu" age={30} isStudent={true}/> 
      <Student/>
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
