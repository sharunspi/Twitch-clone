import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Link to='/'>
          <Navbar.Brand > Streams  </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
         <Link to='/login'>
          <Button color='info'>Login</Button>  
         </Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
