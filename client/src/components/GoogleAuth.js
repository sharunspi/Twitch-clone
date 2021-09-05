import React, { Component } from 'react'
import {
    Button
} from 'react-bootstrap'
import { connect } from 'react-redux'

import { signIn,signOut } from '../actions'
import { googleAPI,googleScope } from '../config'

class GoogleAuth extends Component {


    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId: googleAPI,
                scope: googleScope
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance() 
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            }).catch(err => console.log(err))
        })
    }

    onAuthChange = isSignedIn =>  isSignedIn ? this.props.signIn() : this.props.signOut()
    

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null)
         return <div> I don't know </div>
        else if (this.props.isSignedIn)
         return <Button onClick={this.onSignOutClick}> Sign Out </Button>
        else 
         return <Button onClick={this.onSignInClick}> Sign In </Button> 
    }



    render() {
        return (
            <div>
               { this.renderAuthButton() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth)