import React, { Component } from 'react'

class Square extends Component{
  // constructor(props) {
  //   super(props)
  // this.state = {
  //   disabled: false
  //   }
  // }
  handleClick = () => {
    // if (this.state.disabled === false){
    this.props.handleGameplay(this.props.index)
    // this.setState({disabled: true})
    // }
  }

  reactivate = () => {
    this.setState({disabled: false})
  }
  

  render(){
    return(
      <>
      <div className="square" onClick={this.handleClick}>
        {this.props.value}
      </div>
      </>
    )
  }
}
export default Square
