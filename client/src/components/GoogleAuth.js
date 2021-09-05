import React, { Component } from 'react'
import { googleAPI,googleScope } from '../config'
import {
    Button
} from 'react-bootstrap'

export default class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId: googleAPI,
                scope: googleScope
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance() 
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            }).catch(err => console.log(err))
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn:this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null)
         return <div> I don't know </div>
        else if (this.state.isSignedIn)
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
