import React from "react"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

class App1 extends React.Component {

  render() {
    
    return (
      <div>
        <Router>
          <Switch>
            <Link to='/Blog'>Blog</Link>
          </Switch>
          <Switch>
            <Link to='/ToDoApp'>ToDoApp</Link>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App1