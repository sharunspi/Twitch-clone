import React from 'react'
import { BrowserRouter,Route} from 'react-router-dom'

const hai = () =>{
    return <div>
        hai
    </div>
}

export default function App() {
    
    return (
        <div>
            <BrowserRouter>
            <Route path='/' exact component={hai}/>
            </BrowserRouter>
        </div>
    )
}
