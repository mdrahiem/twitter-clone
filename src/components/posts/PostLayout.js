import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import styles from './posts.module.scss';

const PostLayout = props => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <LeftSidebar />
        </Col>
        <Col md={5}>
          <div className={styles['posts-container']}>
            {props.children}
          </div>
        </Col>
        <Col md={4}>
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default PostLayout;
