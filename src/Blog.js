import React from "react"
import { CardGroup } from 'react-bootstrap';

function Blog(props) {
    return(
   <div class="container">  
    <div className="row">
      <div className="col-md-4">
        <div className="thumbnail">
          <img src={props.pic} alt="Lights" style={{width: "100%"}}></img>
            <div className="caption">
              <h3>{props.heading}</h3>
              <h3>Category: {props.category}</h3>
              <p>Published on: {props.date}</p>
            </div>
            </div>
      </div>
    </div>
    </div>
  
    )
  }

export default Blog