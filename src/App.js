import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/images/logo.png";
import {Route, Switch} from "react-router-dom";

import CreateSurvey from './CreateSurvey/CreateSurvey';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  

  render(){
    return (
      <div className="App">
        <img src={logo} alt="logo"></img><br></br>

        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/create" component={CreateSurvey}/>
        </Switch>   
        
      </div>
    );
  }
}


export default App;
