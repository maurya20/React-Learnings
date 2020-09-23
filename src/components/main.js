import React, { Component } from 'react'
import JSON from './data.json'
import NewsFeed from './NewsFeed'

export class Main extends Component {
  state={
    news:JSON
  }
  render() {
    console.log(JSON)
    return (
      <div>
        <NewsFeed news={this.state.news}>
        <h1>Your feeds are here !!!</h1>
        </NewsFeed>
      </div>
    )
  }
}

export default Main

