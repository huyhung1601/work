import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Images from '../components/images/Images'
import './comment.css'

export default function Comment() {
    return (
      <Container className='container'>
        <Row>
          <Col xs/>
          <Col>
            <Images/>          
          </Col>
          <Col> comment</Col>
          <Col xs/>
        </Row>
      </Container>
    )
}
