import axios from "axios";
import config from "../config";

const url =
  process.env.NODE_ENV === "production"
    ? `${config.production.memoryApi}/posts`
    : `${config.local.memoryApi}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
