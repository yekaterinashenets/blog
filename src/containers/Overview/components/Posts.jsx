import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './styles.scss';

const Posts = ({ posts, removePost, editPost }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          removePost={removePost}
          editPost={editPost}
        />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired
};

export default Posts;
