import React from 'react';
import './App.css';
import Home from './components/Home.js'; 
import Login from './components/Login.js';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component{

  render() {
    
    return (

      <div>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
       
    </div>
    )
    
  }
}

export default App;
