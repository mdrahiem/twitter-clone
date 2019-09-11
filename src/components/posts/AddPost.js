import React, { Component } from 'react'
import AddPostForm from '../forms/AddPost.form';
import { doAddPost, doFetchPosts } from '../../store/actions/posts.action';
import {toastr} from 'react-redux-toastr';
import styles from './posts.module.scss';
import { reset } from 'redux-form';

export class AddPost extends Component {
  handleAddPost = async values => {
    const { postsList = [], userDetails = {} } = this.props;
    const maxIdPost = Math.max.apply(Math, postsList.map(post => post.id))
    const payload = {
      ...values,
      id: maxIdPost.length + 1,
      timePosted: Date.now(),
      postedBy: userDetails.firstName
    };
    const addPostResp = await doAddPost(payload);
    if (addPostResp === 201) {
      this.props.dispatch(reset('addPostForm'));
      doFetchPosts();

    } else {
      toastr.error('Adding Post Failed!');
    }
  }

  render() {
    return (
      <div className={styles['add-post-form-container']}>
        <AddPostForm onSubmit={this.handleAddPost} />
      </div>
    )
  }
}

export default AddPost;
