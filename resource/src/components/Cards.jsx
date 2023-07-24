import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import slugify from 'slugify'

const Cards = ({image,title,desc}) => {
  return (
   
    <Col sm={12} md={4}>
    <Card >
        <Card.Img variant="top" src={image}  />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {desc}
              </Card.Text>
            <LinkContainer to={`/${slugify(title)}`}><Button variant="primary">Read more</Button></LinkContainer>
        </Card.Body>
    </Card>
</Col>
  )
}

export default Cards