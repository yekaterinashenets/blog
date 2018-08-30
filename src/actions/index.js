import { add, remove, update, getAll } from '../indexedDB';

export const addPost = post => {
  add(post);
  return {
    type: 'ADD_POST',
    payload: post
  };
};

export const removePost = id => {
  remove(id);
  return {
    type: 'REMOVE_POST',
    payload: id
  };
};
export const editPost = post => {
  update(post);
  return {
    type: 'EDIT_POST',
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
