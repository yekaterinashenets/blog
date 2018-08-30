const initialState = {
  posts: []
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POSTS':
      return { ...state, posts: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    case 'REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.payload)
      };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(
          post => (post.id === action.payload.id ? action.payload : post)
        )
      };
    default:
      return state;
  }
};
export default posts;
