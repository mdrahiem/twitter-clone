import { connect } from 'react-redux';
import SignIn from './SignIn';

const mapStateToProps = state => {
  return {
    userDetails: state.user.userDetails,
    userDetailsError: state.user.userDetailsError,
  }
}

export default connect(mapStateToProps)(SignIn);