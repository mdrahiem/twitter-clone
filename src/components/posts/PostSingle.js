import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment';
import styles from './posts.module.scss';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const PostsListSingle = props => {
  const { postData = {}, handleLikeBtn, gotoPostDetails } = props;
  return (
    <Card className={styles['post-single-container']}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{postData.postedBy} <span>{moment(postData.timePosted).fromNow()}</span></Card.Title>
        <Card.Text>{postData.message}</Card.Text>
        <Button variant="light" onClick={handleLikeBtn}>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button variant="light" className="float-right" onClick={() => gotoPostDetails(postData)}>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </Button>
      </Card.Body>
    </Card>
  )
}

export default PostsListSingle;
