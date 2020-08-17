import axios from "axios"
import api from "../services/api-helper"

const savePost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
}

const editPost = async (postData) => {
  const resp = await api.patch(`/posts/${postData}`, postData);
  return resp.data;
}

const deletePost = async (postData) => {
  const resp = await api.delete(`/posts/${postData}`, postData);
  return resp.data;
}

const getPost = async (postData) => {
  const resp = await api.get(`/posts/${postData}`, postData);
  return resp.data;
}

const getPosts = async (postData) => {
  const resp = await api.get(`/posts/`, postData);
  return resp.data;
}

// async function savePost(post, id) {
//   try {
//     let res = await axios({
//       method: 'post',
//       url: '/posts',
//       data: {
//         post,
//         id
//       }
//     });
//     return res
//   } catch (e) {
//     console.log(`An error occured: ${e}`);
//   }
// }

// async function getPost(id) {
//   try {
//     let res = await axios({
//       method: 'get',
//       url: `/posts/${id}`
//     });
//     return res
//   } catch (e) {
//     console.log(`An error occured: ${e}`);
//   }
// }

// async function getPosts() {
//   try {
//     let res = await axios({
//       method: 'get',
//       url: '/posts/'
//     });
//     return res
//   } catch (e) {
//     console.log(`An error occured: ${e}`);
//   }
// }

export default {
  savePost,
  getPost,
  getPosts,
  editPost,
  deletePost
};