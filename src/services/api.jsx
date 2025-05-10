import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/blogAprendizaje/v1",
  timeout: 5000,
  httpsAgent: false,
});

export const getPost = async (params = {}) => {
  try { return await apiClient.get('/posts/getPosts', { params }); }
  catch (e) { return { error: true, e }; }
};

export const getPostById = async (id) => {
  try { 
    return await apiClient.get(`/posts/getPostById/${id}`);
  }
  catch (e) { 
    return { error: true, e }; 
  }
};
