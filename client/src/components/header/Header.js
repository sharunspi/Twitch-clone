import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Link to='/'>
          <Navbar.Brand > Streams  </Navbar.Brand>
        </Link>
        <Nav>
         <Link to='/login'>
          <Button variant={props.loggedIn ? 'secondary' : 'danger'}>{ props.loggedIn ? 'Log Out' : 'Login' }</Button>  
         </Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {})(Header)