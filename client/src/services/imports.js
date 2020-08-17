import axios from "axios"
import api from "../services/api-helper"

export const savePost = async (postData) => {
  const resp = await api.post('/posts', postData);
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

async function getPost(id) {
  try {
    let res = await axios({
      method: 'get',
      url: `/posts/${id}`
    });
    return res
  } catch (e) {
    console.log(`An error occured: ${e}`);
  }
}

async function getPosts() {
  try {
    let res = await axios({
      method: 'get',
      url: '/posts/'
    });
    return res
  } catch (e) {
    console.log(`An error occured: ${e}`);
  }
}

export default {
  savePost,
  getPost,
  getPosts,
};