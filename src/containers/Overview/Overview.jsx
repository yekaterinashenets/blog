import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreatingForm from './components/CreatingForm';
import { addPost, getAllPosts } from '../../actions';
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
    console.log(this.props.posts);
    return (
      <div className="overview">
        <CreatingForm addPost={this.addPost} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
