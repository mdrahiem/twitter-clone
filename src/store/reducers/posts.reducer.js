import { types } from '../action-types';

const defaultState = {
  postsList: [],
  fetchPostsError: false,
  postDetails: {},
  fetchPostDetailsError: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return { ...state, postsList: action.payload };
    case types.FETCH_POSTS_FAILED:
        return { ...state, fetchPostsError: action.err };
    case types.FETCH_SINGLE_POST_SUCCESS:
        return { ...state, postDetails: action.payload };
      case types.FETCH_SINGLE_POST_FAILED:
          return { ...state, fetchPostDetailsError: action.err };
    default:
      return {...state};
  }
}