import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'
import user from './auth.reducer';
import posts from './posts.reducer';

export default combineReducers({
  user,
  toastr: toastrReducer,
  posts,
  form: reduxFormReducer
});
