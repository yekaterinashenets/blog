const initialState = {
  posts: []
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
export default posts;
