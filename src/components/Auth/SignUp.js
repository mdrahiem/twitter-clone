import React, { Component } from 'react'
import SignUpForm from './../forms/SignUp.form';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { doSignUp } from '../../store/actions/auth.actions';
import { logoUrl } from '../../config';
import {toastr} from 'react-redux-toastr';
import uuidv1 from 'uuid/v1';

class SignUp extends Component {
  componentDidMount() {
    if (this.props.userDetails && this.props.userDetails.userName) {
      this.props.history.push('/posts');
    }
  }
  
  handleSubmit = async values => {
    const id = uuidv1();
    values.id = id;
    const signUpResp = await doSignUp(values);
    if (signUpResp === 201) {
      toastr.success('You have registered successfully!');
      this.props.history.push('/');
    } else {
      toastr.error('Registration Failed');
    }
  }

  render() {
    if (this.props.userDetailsError) {
      toastr.error('User name or Password is incorrect!')
    }
    return (
      <Container className="mt-5">
        <div className="app-logo mb-4 text-center">
          <img alt="Logo" src={logoUrl} />
          <h6 className="app-logo__title">Twitter</h6>
        </div>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <SignUpForm onSubmit={this.handleSubmit} />
            <div className="text-center p-2">
              <Link to="/"><Button variant="link" className="link">Already Registered? Sign-In Here!</Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignUp;
