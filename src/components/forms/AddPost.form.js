import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import renderField from './commonFields';


let AddPostForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit} className="form-section hero-textarea">
      <Form.Group controlId="message" className="mb-2">
        <Field name="message" label="Whats happening?" type="text" component={renderField.textAreaField} styleClass="pl-2 height-80 hero-textarea" />
      </Form.Group>
      <div className="text-right pr-2 mb-2">
        <Button variant="primary" type="submit" className="rounded-button">
          Tweet
        </Button>
      </div>
    </Form>
  );
}




AddPostForm = reduxForm({
  form: 'addPostForm'
})(AddPostForm)

export default AddPostForm