import {
  FETCH_ALL, SET_CURRENT_POST_ID
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    await api.createPost(post);
    dispatch(getPosts());

  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    await api.updatePost(id, post);
    dispatch(getPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async(dispatch) => {
  console.log(`Post id:${id}`)
  try {
    await api.likePost(id);
    dispatch(getPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async(dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(getPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const setCurrentPostId = (id) => (dispatch) => {
  try {
    dispatch({ type: SET_CURRENT_POST_ID, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
