import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Col, Row, Button } from 'react-bootstrap'

class StreamForm extends Component {

    renderInputs({input, label, meta}) {
        return <div>
            <Form.Label> {label} </Form.Label>
            <Form.Control { ...input } autoComplete='off'/>
            <Form.Text className="text-muted">
                {
                meta.touched && meta.error
            } </Form.Text>
        </div>
    }

     onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div>
                <Form onSubmit={
                    this.props.handleSubmit(this.onSubmit)
                }>
                    <Row>
                        <Col>
                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Field name='title' label='Stream name' placeholder='Type stream name' type='text'
                                    component={
                                        this.renderInputs
                                    }/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Field name='description' label='Stream Description' placeholder='Type stream description' type='text'
                                    component={
                                        this.renderInputs
                                    }/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type='submit' className='m-2'>
                        {this.props.buttonText}
                    </Button>
                </Form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.stream_name) {
        errors.stream_name = 'You must enter a title'
    }

    if (!formValues.stream_description) {
        errors.stream_description = 'You must enter a description'
    }

    return errors
}

export default reduxForm({form: 'streamForm', validate})(StreamForm)