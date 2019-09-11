import { connect } from 'react-redux';
import PostsList from './PostsList';

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    postsList: state.posts.postsList
  }
}

export default connect(mapStateToProps)(PostsList);