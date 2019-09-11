import { connect } from 'react-redux';
import PostDetails from './PostDetails';

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    postDetails: state.posts.postDetails,
    fetchPostDetailsError: state.posts.fetchPostDetailsError
  }
}

export default connect(mapStateToProps)(PostDetails);