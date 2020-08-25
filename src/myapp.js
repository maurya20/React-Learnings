import React from "react"

class App1 extends React.Component {
  render() {
    const date = new Date()
    const hour = date.getDate()
    return (
      <div className="footer">
        <h1>Follow us on  {hour}</h1>
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