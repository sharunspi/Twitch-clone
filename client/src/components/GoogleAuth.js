import React, { Component } from 'react'
import { googleAPI,googleScope } from '../config'


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

    renderAuthButton(){
        if (this.state.isSignedIn === null){
            return <div> I don't know </div>
        }
        else if (this.state.isSignedIn){
            return <div> Yes i am signed in </div>
        }
        else {
            return <div> Not signed in </div>
        }
    }

    render() {
        return (
            <div>
               { this.renderAuthButton() }
            </div>
        )
    }
}
