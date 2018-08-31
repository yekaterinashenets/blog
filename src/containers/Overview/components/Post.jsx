import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostModel from '../../../common/models/PostModel';
import IsPendingModel from '../../../common/models/IsPendingModel';
import './styles.scss';
import { EditForm } from '../../../common/components/Form/CustomForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false
    };
  }

  remove = () => this.props.removePost(this.props.post.id);

  static getDerivedStateFromProps(props, state) {
    return props.isFormRequestPending &&
      props.isFormRequestPending.isPending &&
      props.isFormRequestPending.id === props.post.id
      ? {
          isEditMode: false
        }
      : state;
  }

  edit = () =>
    this.setState({
      isEditMode: true
    });

  editPost = post => {
    this.props.editPost(post);
  };

  render() {
    const { post, isFormRequestPending, isRemoveRequestPending } = this.props;
    const { title, text, email, id } = post;
    const AreButtonsDisabled =
      isRemoveRequestPending && isRemoveRequestPending.id === id;
    const isLoaderVisible =
      isFormRequestPending &&
      isFormRequestPending.isPending &&
      isFormRequestPending.id === id;
    return (
      <div className="post">
        {!this.state.isEditMode ? (
          <>
            <p>{title}</p>
            <p>{text}</p>
            <p>by {email}</p>
            <button onClick={this.remove} disabled={AreButtonsDisabled}>
              remove
            </button>
            <button onClick={this.edit} disabled={AreButtonsDisabled}>
              edit
            </button>
          </>
        ) : (
          <EditForm
            initialData={post}
            form={id}
            submitCallback={this.editPost}
          />
        )}
        {isLoaderVisible && <span>Loading...</span>}
      </div>
    );
  }
}

Post.propTypes = {
  post: PostModel,
  removePost: PropTypes.func.isRequired,
  isRemoveRequestPending: IsPendingModel
};

export default Post;
