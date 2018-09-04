import React from 'react';
import PropTypes from 'prop-types';
import PostModel from '../../../common/models/PostModel';
import Post from './Post';
import './styles.scss';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PostModel)
};

export default Posts;
