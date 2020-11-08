import { FETCH_ALL, SET_CURRENT_POST_ID } from '../constants/actionTypes';

const initialState = {
  posts: [],
  currentPost: null
}

const postsReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {...state, posts:action.payload};
    case SET_CURRENT_POST_ID: 
       const currentPost = state.posts.find((message) => message._id === action.payload);
       return {...state, currentPost:currentPost}
    default:
      return state;
  }
};

export default postsReducer;