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

import { Provider } from '../../common/contexts/requestContext';

class Overview extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className="overview">
        <CreateForm
          submitCallback={this.props.addPost}
          isRequestPending={this.props.isRequestPending && !this.props.postId}
        />
        <Provider
          value={{
            isRequestPending: this.props.isRequestPending,
            postId: this.props.postId,
            removePost: this.props.removePost,
            editPost: this.props.editPost
          }}
        >
          <Posts posts={this.props.posts} />
        </Provider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.data,
  isRequestPending: state.posts.isRequestPending,
  isRequestSuccess: state.posts.isRequestSuccess,
  isRequestFailed: state.posts.isRequestFailed,
  postId: state.posts.postId
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
