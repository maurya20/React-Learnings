import React from "react"

function Info(props) {
    return(
      <div className="info">
        <h1>My Informatation</h1>
        <h3>Name:{props.myinfo.name}</h3>
        <h3>Email:{props.myinfo.email}</h3>
        <h3>Country:{props.myinfo.country}</h3>
        <h3>Hobbies: </h3>
       <ul>
       <li>Cooking</li>
       <li>Travelling</li>
       <li>Talking to people</li>
       </ul>
      </div>
    )
  }

export default Info