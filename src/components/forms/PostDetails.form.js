import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import renderField from './commonFields';
import { connect } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

let PostDetailsForm = props => {
  const { handleSubmit, handleEditBtn, handleDeleteBtn, isMessageDisabled = true } = props
  return (
    <Form onSubmit={handleSubmit} className="form-section">
      <div className="text-right pr-2 mb-2">
        <Button variant="primary" type="button" className="rounded-button mr-1" onClick={handleEditBtn}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="danger" type="button" className="rounded-button" onClick={handleDeleteBtn}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>
      <Form.Group controlId="id" className="mb-2">
        <Form.Label className="text-secondary">Tweet Id</Form.Label>
        <Field name="id" type="text" disabled component={renderField.inputField} styleClass="pl-2" />
      </Form.Group>
      <Form.Group controlId="message" className="mb-2">
        <Form.Label className="text-secondary">Message</Form.Label>
        <Field name="message" type="text" disabled={isMessageDisabled} component={renderField.textAreaField} styleClass="pl-2" />
      </Form.Group>
      <Form.Group controlId="timePosted" className="mb-2">
        <Form.Label className="text-secondary">Posted on</Form.Label>
        <Field name="timePosted" type="text" disabled component={renderField.inputField} styleClass="pl-2" />
      </Form.Group>
      <Form.Group controlId="postedBy" className="mb-2">
        <Form.Label className="text-secondary">Posted By</Form.Label>
        <Field name="postedBy" type="text" disabled component={renderField.inputField} styleClass="pl-2" />
      </Form.Group>
      <div className="text-right pr-2 mb-2">
        {!isMessageDisabled && <Button variant="primary" type="submit" className="rounded-button">
          Update
        </Button>}
      </div>
    </Form>
  );
}

const mapStateToProps = (state, { postDetails }) => {
  return {
    initialValues: {
      id: postDetails.id,
      message: postDetails.message,
      timePosted: moment(postDetails.timePosted).format("dddd, MMMM Do YYYY, h:mm:ss a"),
      postedBy: postDetails.postedBy
    }
  }
};


PostDetailsForm = connect(mapStateToProps)(reduxForm({
  form: 'postDetailsForm',
  enableReinitialize: true
})(PostDetailsForm))

export default PostDetailsForm