import { types } from '../action-types';

const defaultState = {
  userDetails: {},
  userDetailsError: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, userDetails: action.payload };
    case types.LOGIN_FAILED:
        return { ...state, userDetailsError: action.err };
    case types.LOGOUT_SUCCESS:
        return { ...state, userDetails: {} };
    default:
      return {...state};
  }
}