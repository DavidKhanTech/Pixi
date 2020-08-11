import api from "api-helper";

export const readAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const readOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const post = async (postData) => {
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