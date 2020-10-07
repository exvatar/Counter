import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputValue: "",
    count: 0
  };

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>บวก</button>
          <button disabled={this.state.count === 0} onClick={() => { this.setState({ count: this.state.count - 1 }) }}>ลบ</button>
          <button onClick={() => { this.setState({ count: 0 }) }}>Reset</button>
          <h1>{this.state.count}</h1>
        </div>
      </div>
    )
  }
}

export default App;
