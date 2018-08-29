const initialState = {
  posts: []
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POSTS':
      return { ...state, posts: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
export default posts;
