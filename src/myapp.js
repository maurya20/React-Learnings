import React from "react"

class App1 extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogedIn : false
    }
  }
  render() {
    let wd
    if (this.state.isLogedIn===true){
      wd = "In"
    }
    else {
      wd = "out"
    }
    return (
      <div className="footer">
        <h1>Hello, there I am loged {wd} now.</h1>
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