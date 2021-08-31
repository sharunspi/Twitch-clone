import React from 'react'
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand >Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link >Home</Nav.Link>
          <Nav.Link >Features</Nav.Link>
          <Nav.Link >Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
