import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, Col, Row, Button} from 'react-bootstrap'


class StreamCreate extends Component {

    renderInputs({ input, label, meta }) {
        return <div>
            <Form.Label> { label } </Form.Label>
            <Form.Control { ...input } autoComplete='off'/>
            <Form.Text className="text-muted">
                { meta.touched && meta.error }
            </Form.Text>
        </div>
    }

    onSubmit(formValues) {
        console.log(formValues)
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
                                <Field name='stream_name' label='Stream name' placeholder='Type stream name' type='text'
                                    component={
                                        this.renderInputs
                                    }/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
                                <Field name='stream_description' label='Stream Description' placeholder='Type stream description' type='text'
                                    component={
                                        this.renderInputs
                                    }/>
                            </Form.Group>
                        </Col>
                        <Col lg={2}>
                            <Button type='submit'>
                                Create
                            </Button>        
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if(!formValues.stream_name){
        errors.stream_name = 'You must enter a title'
    }

    if(!formValues.stream_description){
        errors.stream_description = 'You must enter a description'
    }

    return errors
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)
