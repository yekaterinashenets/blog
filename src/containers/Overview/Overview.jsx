import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateForm } from '../../common/components/Form/CustomForm';
import Posts from './components/Posts';

import {
  sendRequestToAddPost,
  sendRequestToRemovePost,
  sendRequestToEditPost,
  sendRequestToGetAllPosts
} from '../../actions';
import './styles.scss';

class Overview extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className="overview">
        <CreateForm
          submitCallback={this.props.addPost}
          isFormRequestPending={this.props.isFormRequestPending}
        />
        <Posts
          posts={this.props.posts}
          removePost={this.props.removePost}
          editPost={this.props.editPost}
          isRemoveRequestPending={this.props.isRemoveRequestPending}
          isFormRequestPending={this.props.isFormRequestPending}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  isFormRequestPending: state.posts.isFormRequestPending,
  isRemoveRequestPending: state.posts.isRemoveRequestPending,
  isFormRequestPending: state.posts.isFormRequestPending
});

const mapDispatchToProps = {
  addPost: sendRequestToAddPost,
  getAllPosts: sendRequestToGetAllPosts,
  removePost: sendRequestToRemovePost,
  editPost: sendRequestToEditPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
