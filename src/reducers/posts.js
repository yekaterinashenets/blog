import { actionTypes } from '../common/constants/actionTypes';

const initialState = {
  posts: [],
  isRequestPending: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_POSTS:
      return { ...state, posts: action.payload };

    case actionTypes.SAVE_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case actionTypes.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload)
      };

    case actionTypes.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(
          post => (post.id === action.payload.id ? action.payload : post)
        )
      };

    case actionTypes.IS_REQUEST_PENDING:
      return {
        ...state,
        isRequestPending: action.payload
      };

    default:
      return state;
  }
};
export default posts;
