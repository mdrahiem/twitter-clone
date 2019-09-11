import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import validationHelper from '../../utils/validationHelper';
import renderField from './commonFields';

let SignUpForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit} className="form-section">
      <Form.Group controlId="userName">
        <Form.Label className="text-secondary">User Name</Form.Label>
        <Field name="userName" type="text" component={renderField.inputField} />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label className="text-secondary">First Name</Form.Label>
        <Field name="firstName" type="text" component={renderField.inputField} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label className="text-secondary">Password</Form.Label>
        <Field name="password" component={renderField.inputField} type="password" />
      </Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </div>
    </Form>
  );
}




SignUpForm = reduxForm({
  // a unique name for the form
  form: 'signup',
  validate: validationHelper.signInValidate,
})(SignUpForm)

export default SignUpForm