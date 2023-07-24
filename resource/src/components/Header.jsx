import React from 'react'
import { Container, Navbar,Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to={'/'}><Nav.Link href="#home">Home</Nav.Link></LinkContainer>
          </Nav>
          <LinkContainer to={'/admin'}><Button variant='success'>Admin</Button></LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header