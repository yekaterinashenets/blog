import { add, remove, update, getAll } from '../common/helpers/indexedDB';
import { actionTypes } from '../common/constants/actionTypes';
const uuidv1 = require('uuid/v1');

export const sendRequestToAddPost = post => async dispatch => {
  try {
    dispatch(changeRequestStateAccordingType(actionTypes.ADD_POST_REQUEST));
    post = {
      ...post,
      id: uuidv1()
    };
    await add(post);
    dispatch(savePost(post));
    dispatch(changeRequestStateAccordingType(actionTypes.ADD_POST_SUCCESS));
  } catch (error) {
    dispatch(changeRequestStateAccordingType(actionTypes.ADD_POST_FAILURE));
  }
};

export const sendRequestToRemovePost = id => async dispatch => {
  try {
    dispatch(
      changeRequestStateAccordingType(actionTypes.REMOVE_POST_REQUEST, id)
    );
    await remove(id);
    dispatch(removePost(id));
    dispatch(changeRequestStateAccordingType(actionTypes.REMOVE_POST_SUCCESS));
  } catch (error) {
    dispatch(changeRequestStateAccordingType(actionTypes.REMOVE_POST_FAILURE));
  }
};

export const sendRequestToEditPost = post => async dispatch => {
  try {
    dispatch(
      changeRequestStateAccordingType(actionTypes.EDIT_POST_REQUEST, post.id)
    );
    await update(post);
    dispatch(editPost(post));
    dispatch(changeRequestStateAccordingType(actionTypes.EDIT_POST_SUCCESS));
  } catch (error) {
    dispatch(changeRequestStateAccordingType(actionTypes.EDIT_POST_FAILURE));
  }
};

export const sendRequestToGetAllPosts = () => async dispatch => {
  const posts = await getAll();
  dispatch(savePosts(posts));
};

// export const isRequestPending = (isPending, id) => {
//   return {
//     type: actionTypes.IS_REQUEST_PENDING,
//     payload: isPending ? { id, isPending } : null
//   };
// };

export const changeRequestStateAccordingType = (type, id) => {
  return {
    type,
    payload: id || null
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
