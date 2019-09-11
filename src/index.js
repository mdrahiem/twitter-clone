import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr'

import App from './App';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app-root')
);
