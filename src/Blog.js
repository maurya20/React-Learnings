import React from "react"

function Blog(props) {
    return(
      <div className="blog">
        <p>Date:{props.date}</p>
        <h3>Category:{props.category}</h3>
        <h3>Heading:{props.heading}</h3>
        <img src={props.pic} alt="Only text blog"></img>
        
        
      </div>
    )
  }

export default Blog