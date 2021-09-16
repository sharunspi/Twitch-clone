import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Container, Row, Button } from 'react-bootstrap'

import { fetchStreams } from '../../actions'

class StreamList extends Component {
    
    componentDidMount(){
        this.props.fetchStreams()
    }

    renderAuthButtons(stream){
        if( stream.userId === this.props.currentUserId ) {
            return <>
              <Button className='m-1' variant='primary' > Edit </Button>
              <Button className='m-1' variant='danger' > Delete </Button>
            </>
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return <Card style={{ width: '18rem',margin:'6px' }} key={stream._id}>
            <Card.Body>
              <Card.Title> { stream.title } </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">  { stream.description } </Card.Subtitle>
                { this.renderAuthButtons(stream) }
            </Card.Body>
          </Card>
        })
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
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, {
    fetchStreams
})(StreamList)