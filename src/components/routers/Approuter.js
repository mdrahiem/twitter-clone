import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';
import SignInContainer from '../Auth/SignIn.container';
import SignUp from '../Auth/SignUp';
import About from '../generic/About';
import PostsListContainer from '../posts/PostsList.container';
import PostDetailsContainer from '../posts/PostDetails.container';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={SignInContainer} />
          <CustomRoute path='/signup' component={SignUp} />
          <CustomRoute path='/about' component={About} authRequired />
          <CustomRoute path='/tweet/:id' component={PostDetailsContainer} authRequired />
          <CustomRoute path='/:user' component={PostsListContainer} authRequired />
      </Switch>
    </Router>
  );
}

export default AppRouter;