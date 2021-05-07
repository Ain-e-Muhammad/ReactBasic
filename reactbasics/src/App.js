import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'

class App extends Component{
  //The state of monsters we have to display
  constructor(){
    super()
    this.state = {
      monsters: []
    }
  }

  //Fetchinf ata using Async Promises
  async componentDidMount(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const monsters = await res.json()
    this.setState({monsters})
  }

  render(){
    return(
      <div className="App">
        <CardList monsters={this.state.monsters}>
        
        </CardList>
      </div>
    )
  }
  changeText = () => {
    this.setState({string: "Hello Ali"})
  }
}

export default App;
