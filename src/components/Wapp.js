import React, { Component } from 'react'


class Wapp extends Component {
    shoot = () => {
        alert("Hey You, This is library!")
    }
    render() {
        return (
            <div>
              <button  onClick={this.shoot}>Take the shot!</button>  
            </div>
        )
    }
}


export default Wapp
