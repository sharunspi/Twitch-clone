import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, Col, Row} from 'react-bootstrap'

class StreamCreate extends Component {

    renderInputs({input, label, mutedText}) {
        return <div>
            <Form.Label> {label} </Form.Label>
            <Form.Control {...input}/>
            <Form.Text className="text-muted">
                { mutedText }
            </Form.Text>
        </div>
    }

    onSubmit(e) {
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
                                <Field name='stream_name' mutedText='name should be unique' label='Stream name' placeholder='Type stream name' type='text'
                                    component={
                                        this.renderInputs
                                    }/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
                                <Field name='stream_type' mutedText='name should be unique' label='Stream Description' placeholder='Type stream description' type='text'
                                    component={
                                        this.renderInputs
                                    }/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default reduxForm({form: 'streamCreate'})(StreamCreate)
