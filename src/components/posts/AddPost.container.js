import { connect } from 'react-redux';
import AddPost from './AddPost';

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    postsList: state.posts.postsList
  }
}

export default connect(mapStateToProps)(AddPost);