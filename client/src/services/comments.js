import api from './api-helper'


export const postComment = async (id, commentData) => {
  const resp = await api.post(`/posts/${id}/comments`, { comment: commentData });
  return resp.data;
}

export const getAllComment = async (commentData) => {
  const resp = await api.get('/comments', commentData);
  return resp.data;
}

export const putComments = async (id, postData) => {
  const resp = await api.put(`/comments/${id}`, { post: postData });
  return resp.data;
}

export const destroyComment = async (post_id, id) => {
  const resp = await api.delete(`/posts/${post_id}/comments/${id}`);
  return resp;
}


