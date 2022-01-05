import React, { Component } from 'react'
import './App.css'
import Square from "./components/Square";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      guesses: 5,
      didWin: null,
      gameOver: false,

    }
  }

  componentDidMount(){
    let treasure = 0
    // let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure})
    // let bomb = Math.floor(Math.random() * this.state.board.length)
    // this.setState({bombLocation: bomb})
    // if (bomb === treasure) {
    //   let backup = Math.floor(Math.random() * this.state.board.length)
    //   this.setState({bombLocation: backup})
    //   if (backup === treasure) {
    //     let nextBackup = Math.floor(Math.random() * this.state.board.length)
    //     this.setState({bombLocation: nextBackup})
    //   }
    // }
    
    
  }

  handleGameplay = (index) => {
    const { board, treasureLocation, bombLocation } = this.state
    if (board[index] === '?'){
      if (index === treasureLocation){
        board[index] = "💎"
        if (this.state.gameOver === false) {this.winning()}
      } else if (index === bombLocation){
        board[index] = "💥"
        this.losing()
      } else {
      board[index] = "🌴"
      }

      this.setState({board: board})
      
      if (this.state.guesses === 0){
        this.losing()
      }

      if (this.state.gameOver === false){
        this.setState({guesses: this.state.guesses - 1})
        }
    console.log(this.state.gameOver);
    }
  }

  winning = () => {
      this.setState({didWin: true, gameOver: true})
  }

  losing = () => {
    if (this.state.gameOver === false){
      this.setState({didWin: false, gameOver: true, guesses: this.state.guesses + 1})
    }
  }

  resetGame = () => {
    this.setState({
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      guesses: 5,
      didWin: null,
      gameOver: false,
    })
    this.componentDidMount()
  }

  

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameBoard">
          {this.state.board.map((value, index) => 
            value = 
            <Square value={value}
            key={index}
            index = {index}
            handleGameplay={this.handleGameplay}
            />)}
        </div>
        <div>
          {this.state.guesses === 1 ? (<h1>You have 1 guess left.</h1>):(<h1>You have {this.state.guesses} guesses left.</h1>)}
        </div>


          {this.state.didWin ?! (<h1> Sorry, you lose! </h1>) : (null)}
          {this.state.didWin ? (<h1> Congratulations! You Win! </h1>):(null)}

          <div id='resetButton'>
            <button onClick={this.resetGame}>Click here to start over</button>
          </div>
      </>
    )
  }
}
export default App
