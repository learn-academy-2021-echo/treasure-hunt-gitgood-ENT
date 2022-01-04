import React, { Component } from 'react'
import './App.css'
import Square from "./components/Square";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameBoard">
          {this.state.board.map(value => value = <Square value={value}/>)}
        </div>
      </>
    )
  }
}
export default App
