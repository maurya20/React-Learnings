import React, { Component } from 'react';
import Header from './Header';


class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      isLogedIn : false
    }
    this.handleClick = this.handleClick.bind(this)
  }
   handleClick() {
     this.setState(prevState=> {
       return {
         isLogedIn: !prevState.isLogedIn
       }

       
     })
   }



  render() {
    let buttonText = this.state.isLogedIn ? "Log Out" : "Log In"
    let dispText = this.state.isLogedIn ? "You are Logged In" : "You are Loged out"
    return (
      <div>
        <Header />
       

      <button type="button" className="btn btn-info" onClick={this.handleClick}>{buttonText}</button>
      <h3>{dispText}</h3>
       
       </div>
    );
  }
}
export default ToDoApp;