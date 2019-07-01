import React from 'react';
import { Component } from 'react';
import './App.css';
// import SideBar from './slider';
import Landing from './landing';
import HomePage from './homepage';
import Tool from './tool';



class App extends Component {
  render() {
    return (
       <div className="App">
        <h1 className="menuBrand">OpenClimate</h1>    
        <Landing/>
      </div>
    );
  }
}

export default App;