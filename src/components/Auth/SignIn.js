import React, { Component } from 'react'
import SignInForm from './../forms/SignIn.form';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { doLogin } from '../../store/actions/auth.actions';
import { logoUrl } from '../../config';
import {toastr} from 'react-redux-toastr'

class SignIn extends Component {
  componentDidMount() {
    if (this.props.userDetails && this.props.userDetails.userName) {
      this.props.history.push('/posts');
    }    
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.userDetails !== this.props.userDetails) {
      const userName = this.props.userDetails.userName
      this.props.history.push(`/${userName}`);
    }
    if (prevProps.userDetailsError !== this.props.userDetailsError) {
      toastr.error('User name or Password is incorrect!')
    }
  }
  
  handleSubmit = values => {
    doLogin(values);
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
            <SignInForm onSubmit={this.handleSubmit} />
            <div className="text-center p-2">
              <Link to="/signup"><Button variant="link" className="link">New User? Register Here!</Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignIn;
