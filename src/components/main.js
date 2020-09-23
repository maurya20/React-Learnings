import React, { Component } from 'react'

export default class main extends Component {
  state={
    name:" ",
    surname: " "
  }
  inputChangeHandler = (event)=>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    console.log(this.state.name)
    return (
      <div>
        <h2>Testing Input Change!!!</h2>
    <h2>{this.state.name}</h2>
        <input type="text" onChange={this.inputChangeHandler}/>
      </div>
    )
  }
}
