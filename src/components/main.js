import React, { Component } from 'react'
import JSON from './data.json'
import NeswFeed from './NeswFeed'

export class Main extends Component {
  state={
    news:JSON
  }
  render() {
    console.log(JSON)
    return (
      <div>
        <NeswFeed news={this.state.news} />
      </div>
    )
  }
}

export default Main

