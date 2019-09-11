import React, { Component } from 'react'
import { doFetchPosts } from '../../store/actions/posts.action';
import { getUser } from '../../utils/saveAuth';
import PostsListSingle from './PostSingle';
import AddPostContainer from './AddPost.container';
import PostLayout from './PostLayout';
import { getSortedList } from '../../utils/common';
import NoContent from '../common/NoContent';


export class PostsList extends Component {
  state = {
    postsList: []
  }

  componentDidMount = () => {
    doFetchPosts();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.postsList !== this.props.postsList) {
      const postsList = this.getFilteredPosts(this.props.postsList);
      const sortedPostsList = getSortedList(postsList, 'timePosted');
      this.setState({ postsList: sortedPostsList });
    }
  }

  getFilteredPosts = list => {
    const currentUser = getUser();
    return list.filter(item => item.userName !== currentUser.userName)
  }

  gotoPostDetails = data => {
    this.props.history.push(`/tweet/${data.id}`)
  }

  render() {
    const { postsList = [] } = this.state;
    return (
      <PostLayout>
        <AddPostContainer />
        {
          postsList && postsList.length > 0 ? postsList.map(post => {
            return <PostsListSingle key={post.id} postData={post} gotoPostDetails={this.gotoPostDetails} />
          }) : <NoContent text="No posts are available!" />
        }
      </PostLayout>
      
    )
  }
}

export default PostsList;
