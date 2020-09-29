import { event } from 'jquery'
import React, { Component } from 'react'

export class App extends Component {

  handleSubmit=(event)=>{
    event.preventDefault()
    const values= {
      username: this.username.value,
      password: this.password.value
    }
    console.log(values)
  }
  render() {
    return (
      <div>
        <form>
          <div>
          <label>username:</label>
          <input type="text" ref={input=>this.username = input}/>
          </div>
          <div>
          <label>Password:</label>
          <input type="password" htmlFor="password" ref={input=>this.password = input}/>
          </div>
          <button type="submit" onClick={this.handleSubmit}>Signin</button>
        </form>
        
      </div>
    )
  }
}

export default App
