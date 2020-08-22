import React from 'react'
import ReactDOM from 'react-dom'


function MyInfo() {
  return(
    <div>
      <h1>My Informatation</h1>
      <h3>Name: Mukesh Maurya</h3>
      <h3>Email: mukesh.ice17@gmail.com</h3>
      <h3>Country: India</h3>
      <h3>Hobbies: </h3>
     <ul>
     <li>Cooking</li>
     <li>Travelling</li>
     <li>Talking to people</li>
     </ul>
    </div>
    
  )
}

ReactDOM.render(< MyInfo />, document.getElementById("root"))
