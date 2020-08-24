import React from "react"

import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';

function Blog(props) {
    return(

<CardGroup>
  <Card>
    <Card.Img variant="top" src={props.pic} />
    <Card.Body>
      <Card.Title>{props.heading}</Card.Title>
      <Card.Text>
      {props.category}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.date}</small>
    </Card.Footer>
  </Card>
</CardGroup>

    )
  }

export default Blog