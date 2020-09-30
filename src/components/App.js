import React, { Component } from 'react'
import Home from './Home'

class App extends Component {


    state={
        name:"Mike",
        Mob:9540,
        dev:true
    }
    render() {
        return (
            <div>
              <Home {...this.state}/>  
            </div>
        )
    }
}

export default App
