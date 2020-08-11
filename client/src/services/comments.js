import api from './api-helper'


export const psotComment = async (postData) => {
  const resp = await api.post('/posts', postData);
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
}

export const destroyPosts = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
}


