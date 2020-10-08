import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './component/count.js'
import Colosel from './component/colosel.js'
import TapComponent from './component/TapComponent';
import Clock from './component/Clock';

class App extends Component {

  constructor(){
    super();
    this.state={
      location : ["Bangkok","Japan","London"]
    }
  }


  render() {
    return (
      <div className="App">
        <h1 style={{backgroundColor:"grey"}}>World Clock</h1>
        <Clock location={this.state.location[0]}></Clock>
        <Clock location={this.state.location[1]}></Clock>
        <Clock location={this.state.location[2]}></Clock>
        {/* <Clock location={this.state.location[1]}></Clock>
        <Clock location={this.state.location[2]}></Clock> */}
        {/* <Count></Count>
        <Colosel></Colosel>
        <TapComponent name = "PP" age = {25}></TapComponent> */}
      </div>
    )
  }
}


export default App;
