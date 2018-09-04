import { actionTypes } from '../common/constants/actionTypes';

const initialState = {
  data: [],
  isRequestPending: false,
  isRequestFailed: false,
  postId: null
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_POSTS:
      return { ...state, data: action.payload };

    case actionTypes.SAVE_POST:
      return { ...state, data: [...state.data, action.payload] };

    case actionTypes.REMOVE_POST:
      return {
        ...state,
        data: state.data.filter(post => post.id != action.payload)
      };

    case actionTypes.EDIT_POST:
      return {
        ...state,
        data: state.data.map(
          post => (post.id === action.payload.id ? action.payload : post)
        )
      };

    case actionTypes.ADD_POST_REQUEST:
    case actionTypes.REMOVE_POST_REQUEST:
    case actionTypes.EDIT_POST_REQUEST:
      return {
        ...state,
        isRequestPending: true,
        isRequestFailed: false,
        postId: action.payload
      };
    case actionTypes.ADD_POST_SUCCESS:
    case actionTypes.REMOVE_POST_SUCCESS:
    case actionTypes.EDIT_POST_SUCCESS:
      return {
        ...state,
        isRequestPending: false
      };
    case actionTypes.ADD_POST_FAILURE:
    case actionTypes.REMOVE_POST_FAILURE:
    case actionTypes.EDIT_POST_FAILURE:
      return {
        ...state,
        isRequestPending: false,
        isRequestFailed: true
      };

    default:
      return state;
  }
};
export default posts;
