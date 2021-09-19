import React, { Component } from 'react'
import { connect } from 'react-redux'

import StreamForm from './StreamForm'
import { createStream } from '../../actions'

class StreamCreate extends Component {

     onSubmit = formValues => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <div>
                <h3> Create Stream </h3>
                <StreamForm buttonText='Create' onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {
    createStream
})(StreamCreate)
