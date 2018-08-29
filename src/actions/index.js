import { add, getAll } from '../indexedDB';

export const addPost = post => {
  add(post);
  return {
    type: 'ADD_POST',
    payload: post
  };
};

export const getAllPosts = () => dispatch =>
  getAll().then(posts => dispatch(savePosts(posts)));

export const savePosts = posts => {
  return {
    type: 'SAVE_POSTS',
    payload: posts
  };
};
