import React, { Component } from 'react'
import JSON from './data.json'
import NewsFeed from './NewsFeed'

export class Main extends Component {
  state={
    news:JSON,
    input:""
  }
  inputChangeHandler = (event)=>{
    this.setState({
      input: event.target.value
    }

    )
  }
  

  
  render() {
    let styling = ()=>{
      if(this.state.input==="")
      return "red"
      else
      return "skyblue"
    }
    const red= "red"
    const skyblue= "skyblue"
    return (
      <div>
        <div style={{backgroundColor: styling(), height:90}}>
          <h1>My Logo</h1>
          
        </div><br></br>
        <input type="text" onChange={this.inputChangeHandler}/>
        <NewsFeed news={this.state.news}>
    <h1>Mr. {this.state.input}, your feeds are here !!!</h1>
        </NewsFeed>
      </div>
    )
  }
}

export default Main

