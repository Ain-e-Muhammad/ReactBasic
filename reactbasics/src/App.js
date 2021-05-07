import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component{
  //The state of monsters we have to display
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  //Fetching data using Async Promises
  async componentDidMount(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const monsters = await res.json()
    this.setState({monsters})
  }

  render(){
    const{monsters, searchField} = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder="Search Monsters" changeSearch={this.changeSearch}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
  changeText = () => {
    this.setState({string: "Hello Ali"})
  }

  changeSearch= (e) => {
    this.setState({searchField: e.target.value})
  }
}

export default App;
