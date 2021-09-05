import React ,{ useState } from 'react'
import GoogleAuth from '../GoogleAuth'
import {
    Button
} from 'react-bootstrap'
export default function Login() {

    const [showGoogle,setShowGoogle] = useState(false)

    const showGoogleAuth = () =>  {
        console.log('hai')
        setShowGoogle(!showGoogle)
    }

    return (
        <div>
            <Button variant='danger' onClick={()=> showGoogleAuth()}>
                Authenticate with Google
            </Button>
            {
                showGoogle && <GoogleAuth />
            }
        </div>
    )
}
