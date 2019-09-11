import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const CustomRoute = props => {
  const { authRequired, component: Component, rest, path, userDetails } = props;
  return (
    <Route
      {...rest}
      render={props =>
        ((userDetails.userName && authRequired) || path === '/signup') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
  }
};

export default connect(mapStateToProps)(CustomRoute);