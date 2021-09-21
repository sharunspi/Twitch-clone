import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { fetchStreams } from '../../actions'

class StreamList extends Component {
    
    componentDidMount(){
        this.props.fetchStreams()
    }

    renderAuthButtons(stream){
        if( stream.userId === this.props.currentUserId ) {
            return <>
              <Link to={`/streams/edit/${stream._id}`}>
                <Button className='m-1' variant='primary' > Edit </Button>
              </Link>
              <Link to={`/streams/delete/${stream._id}`}>
                <Button className='m-1' variant='danger' > Delete </Button>
              </Link>
            </>
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return <Card style={{ width: '18rem',margin:'6px' }} key={stream._id}>
            <Card.Body>
              <Link to={`/streams/${stream._id}`}>
              <Card.Title> { stream.title } </Card.Title>
              </Link>
              <Card.Subtitle className="mb-2 text-muted">  { stream.description } </Card.Subtitle>
                { this.renderAuthButtons(stream) }
            </Card.Body>
          </Card>
        })
    }

    renderCreateStreamButton(){
        console.log(this.props)
        if(this.props.isSignedIn){
            return <Row className='mt-2 mb-2'>
            <Link to='/streams/new'>
            <Button variant='info'>
                 Create a new stream
             </Button>
            </Link>
         </Row>
        }  
    }

    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <h2> Streams </h2>
                        {
                            this.renderList()
                        }
                    </Row>
                   {
                       this.renderCreateStreamButton()
                   }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    fetchStreams
})(StreamList)