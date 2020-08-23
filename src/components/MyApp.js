import React from "react"
import Footer from "./Footer"
import Header from "./Header"


function MyApp() {
    const Name = "Mukesh Maurya"
    let y = 34
    return(
      <div>
        < Header />
        <h1>My Informatation</h1>
        <h3>Name: {Name +y}</h3>
        <h3>Email: mukesh.ice17@gmail.com</h3>
        <h3>Country: India</h3>
        <h3>Hobbies: </h3>
       <ul>
       <li>Cooking</li>
       <li>Travelling</li>
       <li>Talking to people</li>
       </ul>
      < Footer />
      </div>
      
    )
  }

  export default MyApp