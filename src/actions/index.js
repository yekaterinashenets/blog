import { add, remove, update, getAll } from '../common/helpers/indexedDB';
import { actionTypes } from '../common/constants/actionTypes';
const uuidv1 = require('uuid/v1');

export const sendRequestToAddPost = post => async dispatch => {
  dispatch(isFormRequestPending(true));
  post = {
    ...post,
    id: uuidv1()
  };
  await add(post);
  dispatch(savePost(post));
  dispatch(isFormRequestPending(null));
};

export const sendRequestToRemovePost = id => async dispatch => {
  dispatch(isRemoveRequestPending(true, id));
  await remove(id);
  dispatch(removePost(id));
  dispatch(isRemoveRequestPending(null));
};

export const sendRequestToEditPost = post => async dispatch => {
  dispatch(isFormRequestPending(true, post.id));
  await update(post);
  dispatch(editPost(post));
  dispatch(isFormRequestPending(null));
};

export const sendRequestToGetAllPosts = () => async dispatch => {
  const posts = await getAll();
  dispatch(savePosts(posts));
};

export const isFormRequestPending = (isPending, id) => {
  return {
    type: actionTypes.IS_FORM_REQUEST_PENDING,
    payload: isPending ? { id, isPending } : null
  };
};

export const isRemoveRequestPending = (isPending, id) => {
  return {
    type: actionTypes.IS_REMOVE_REQUEST_PENDING,
    payload: isPending ? { id, isPending } : null
  };
};

export const editPost = post => {
  return {
    type: actionTypes.EDIT_POST,
    payload: post
  };
};

export const removePost = id => {
  return {
    type: actionTypes.REMOVE_POST,
    payload: id
  };
};

export const savePost = post => {
  return {
    type: actionTypes.SAVE_POST,
    payload: post
  };
};

export const savePosts = posts => {
  return {
    type: actionTypes.SAVE_POSTS,
    payload: posts
  };
};
