import api from './api-helper'


export const postComment = async (postData) => {
  const resp = await api.post('/comments', postData);
  return resp.data;
}

export const putComments = async (id, postData) => {
  const resp = await api.put(`/comments/${id}`, { post: postData });
  return resp.data;
}

export const destroyComments = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
}


