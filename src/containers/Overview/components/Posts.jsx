import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostModel from '../../../common/models/PostModel';
import IsPendingModel from '../../../common/models/IsPendingModel';
import Post from './Post';
import './styles.scss';

const Posts = ({ posts, removePost, editPost, isRequestPending }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          removePost={removePost}
          editPost={editPost}
          isRequestPending={isRequestPending}
        />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PostModel),
  removePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  isRequestPending: IsPendingModel
};

export default Posts;
