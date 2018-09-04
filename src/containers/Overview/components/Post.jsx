import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostModel from '../../../common/models/PostModel';
import './styles.scss';
import { EditForm } from '../../../common/components/Form/CustomForm';
import { Consumer } from '../../../common/contexts/requestContext';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false
    };
  }

  remove = () => this.props.removePost(this.props.post.id);

  static getDerivedStateFromProps(props, state) {
    return props.isRequestPending && props.postId === props.post.id
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
    const { post, isRequestPending, postId } = this.props;
    const { title, text, email, id } = post;
    const isLoaderVisible = isRequestPending && postId === id;
    return (
      <div className="post">
        {!this.state.isEditMode ? (
          <>
            <p>{title}</p>
            <p>{text}</p>
            <p>by {email}</p>
            <button onClick={this.remove}>remove</button>
            <button onClick={this.edit}>edit</button>
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
  isRequestPending: PropTypes.bool,
  postId: PropTypes.string
};

const connectPost = PostComponent => props => (
  <Consumer>
    {requestData => <PostComponent {...props} {...requestData} />}
  </Consumer>
);

export default connectPost(Post);
