import React from "react"

class App1 extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
      this.counter= this.counter.bind(this)
    
  }
  counter() {
    this.setState(prevState=> {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
    
    return (
      <div className="footer">
        <h1>{this.state.count}</h1>
        <button onClick= {this.counter} style={{color:'red'}}>Count</button>
        <h1>Follow us on</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default App1