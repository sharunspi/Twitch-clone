import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'

import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import Header from './header'
import Login from './login'
import history from '../history'

export default function App() {

    return (
        <div>

            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path='/' exact
                        component={StreamList}/>
                    <Route path='/login' exact
                        component={Login}/>
                    <Route path='/streams/edit/:id' exact
                        component={StreamEdit}/>
                    <Route path='/streams/new' exact
                        component={StreamCreate}/>
                    <Route path='/streams/delete/:id' exact
                        component={StreamDelete}/>
                    <Route path='/streams/:id' exact
                        component={StreamShow}/>
                </Switch>
            </Router>
        </div>
    )
}
