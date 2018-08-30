import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { EditForm } from '../../../components/Form/CustomForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false
    };
  }
  remove = () => this.props.removePost(this.props.post.id);
  edit = () =>
    this.setState({
      isEditMode: true
    });
  editPost = post => {
    this.setState({
      isEditMode: false
    });
    this.props.editPost(post);
  };
  render() {
    const { title, text, email } = this.props.post;
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
            initialData={this.props.post}
            form={this.props.post.id}
            submitCallback={this.editPost}
          />
        )}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired
};

export default Post;
