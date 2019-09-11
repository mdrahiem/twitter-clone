import React, { Component } from 'react'
import { doFetchPostDetails, doUpdatePostDetails, doDeletePost } from '../../store/actions/posts.action';
import { Button } from 'react-bootstrap';
import PostLayout from './PostLayout';
import PostDetailsForm from '../forms/PostDetails.form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { toastr } from 'react-redux-toastr';

export class PostDetails extends Component {
  state = {
    isMessageDisabled: true
  }

  componentDidMount = () => {
    const id = (this.props.location.pathname).split('/')[2];
    doFetchPostDetails(id);
  }

  goBack = () => {
    this.props.history.push(`/${this.props.userDetails.userName}`);
  }

  handleSubmit = async values => {
    const postUpdateResp = await doUpdatePostDetails({
      ...this.props.postDetails,
      ...values,
      timePosted: Date.now()
    });
    if (postUpdateResp === 200) {
      toastr.success('Tweet updated successfully!');
      this.props.history.push(`/${this.props.userDetails.userName}`);
    } else {
      toastr.error('Something went wrong!');
    }
  }

  handleEditBtn = () => {
    this.setState({ isMessageDisabled: false });
  }

  handleDeleteBtn = async () => {
    const id = (this.props.location.pathname).split('/')[2];
    const deleteResp = await doDeletePost(id);
    if (deleteResp === 200) {
      toastr.success('Tweet deleted successfully!');
      this.props.history.push(`/${this.props.userDetails.userName}`);
    } else {
      toastr.error('Something went wrong!');
    }
  }

  render() {
    return (
      <PostLayout>
        <div className="post-details__header">
          <Button variant="link" className="link" onClick={this.goBack}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></Button> Tweet
        </div>
        <div className="p-2">
          <PostDetailsForm onSubmit={this.handleSubmit} postDetails={this.props.postDetails} handleEditBtn={this.handleEditBtn} handleDeleteBtn={this.handleDeleteBtn} isMessageDisabled={this.state.isMessageDisabled} />
        </div>
      </PostLayout>
    )
  }
}

export default PostDetails;
