import React from 'react'
import { Router, Route} from 'react-router-dom'

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
        
            <Router history={ history }>
            <Header />
            <Route path='/' exact component={StreamList}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/streams/show:id' exact component={StreamShow}/>
            <Route path='/streams/edit/:id' exact component={StreamEdit}/>
            <Route path='/streams/new' exact component={StreamCreate}/>
            <Route path='/streams/delete' exact component={StreamDelete}/>
            </Router>
        </div>
    )
}
