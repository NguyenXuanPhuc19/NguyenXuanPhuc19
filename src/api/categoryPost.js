import instance from "./config";

export const getAll = () => instance.get("/category_Post");
export const get = (id) => instance.get(`/category_Post/${id}`);
export const remove = (id) => instance.delete(`/category_Post/${id}`);
export const add = (categoryPost) => instance.post(`/category_Post/`, categoryPost);
export const update = (categoryPost) => instance.put(`/category_Post/${categoryPost.id}`, categoryPost);