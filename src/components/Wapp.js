import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import {Col, Row, Container} from 'react-bootstrap'

class Wapp extends Component {
    
        
   
    render() {
        const imgUrl = 'https://picsum.photos/300'
        return (
            
            <Container>
                <h2>Your Lucky Gallery!!!</h2>
            <Row>
              <Col xs={6} md={4}>
                <Image src={imgUrl}  thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/302' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/301' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/299' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/298' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/303' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/304' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/297' thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image src= 'https://picsum.photos/305' thumbnail />
              </Col>
            </Row>
          </Container>
        )
    }
}


export default Wapp
