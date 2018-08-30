import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateForm } from '../../components/Form/CustomForm';
import Posts from './components/Posts';

import { addPost, removePost, editPost, getAllPosts } from '../../actions';
const uuidv1 = require('uuid/v1');
import './styles.scss';

class Overview extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
  addPost = post => {
    this.props.addPost({
      ...post,
      id: uuidv1()
    });
  };
  render() {
    return (
      <div className="overview">
        <CreateForm submitCallback={this.addPost} />
        <Posts
          posts={this.props.posts}
          removePost={this.props.removePost}
          editPost={this.props.editPost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  getAllPosts: () => dispatch(getAllPosts()),
  removePost: id => dispatch(removePost(id)),
  editPost: post => dispatch(editPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
