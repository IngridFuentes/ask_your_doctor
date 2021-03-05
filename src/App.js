import React from 'react';
import './App.css';
import Home from './components/Home.js'; 

class App extends React.Component{

  render() {
    
    return (

      <div>
        <h1>Login</h1>
        <h1>Sign Up</h1>
        <img className="homepicture" src="images/doctorpic.jpg" alt="doctorpichome" /> 
    </div>
    )
    
  }
}

export default App;
