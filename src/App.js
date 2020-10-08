import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './component/count.js'
import Colosel from './component/colosel.js'
import TapComponent from './component/TapComponent';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Count></Count>
        <Colosel></Colosel>
        <TapComponent name = "PP" age = {25}></TapComponent>
      </div>
    )
  }
}


export default App;
