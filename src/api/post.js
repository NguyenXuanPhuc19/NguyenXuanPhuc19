import instance from "./config";

export const getAll = () => instance.get("/posts");
export const get = (id) => instance.get(`/posts/${id}`);
export const remove = (id) => instance.delete(`/posts/${id}`);
export const add = (post) => instance.post(`/posts/`, post);
export const update = (post) => instance.put(`/posts/${post.id}`, post);