// Import all Action Type
import { FETCH_POSTS, CREATE_POST, FETCH_POST_ID, DELETE_POST } from './action-types';
import { HTTP, API_KEY } from './../service/http';

const fetchPosts = () => {
  const req = HTTP.get(`/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: req
  }
};
// Create a New Post
const createPost = (post, callback) => {
  const req = HTTP.post(`/posts${API_KEY}`, post)
  .then(() => callback());
  return {
    type: CREATE_POST,
    payload: req
  }
};
// Get a specific Post by Id
const fetchPost = (id) => {
  const req = HTTP.get(`/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST_ID,
    payload: req
  }
};
// Delete a Post
const deletePost = (id, callback) => {
  HTTP.delete(`/posts/${id}${API_KEY}`)
  .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
};

// Export All Actions
export {
  fetchPost,
  fetchPosts,
  createPost,
  deletePost
};