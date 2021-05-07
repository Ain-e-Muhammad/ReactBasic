import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      string: "Hello Aine"
    }
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={this.changeText}>
            Change text
          </button>
        </header>
    </div>
    )
  }
  changeText = () => {
    this.setState({string: "Hello Ali"})
  }
}

export default App;
