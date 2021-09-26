import React, {useContext, useState} from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {MoonStarsFill, SunFill} from 'react-bootstrap-icons'
import modeContext from '../../context/modeContext'

const Header = (props) => {
    const context = useContext(modeContext)
    const [mode, setMode] = useState('sun')

    const onModeChange = modeChange => {
        setMode(modeChange)
    }
    return (
        <Navbar bg={
                context === 'sun' ? "primary" : "dark"
            }
            variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand>
                        Streams
                    </Navbar.Brand>
                </Link>
                <Nav> {
                    context === 'sun' ? <MoonStarsFill size={28}
                        className="m-2 cursor-pointer"
                        style={
                            {cursor: 'pointer'}
                        }
                        onClick={
                            () => onModeChange('moon')
                        }/> : <SunFill size={28}
                        style={
                            {cursor: 'pointer'}
                        }
                        className="m-2 cursor-pointer text-white"
                        onClick={
                            () => onModeChange('moon')
                        }/>
                }
                    <Link to='/login'>
                        <Button variant={
                            props.loggedIn ? 'secondary' : 'danger'
                        }>
                            {
                            props.loggedIn ? 'Log Out' : 'Login'
                        }</Button>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {loggedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {})(Header)
