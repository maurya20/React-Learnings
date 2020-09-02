import React, { Component } from 'react'


class Wapp extends Component {
    state = {
        imgUrl:"https://picsum.photos/200"
    }
    render() {
        return (
            <div>
               <img src={this.state.imgUrl} alt="Random error!"/>
            </div>
        )
    }
}


export default Wapp
