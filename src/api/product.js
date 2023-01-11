import instance from "./config";

export const getAll = () => instance.get("/products");
export const get = (id) => instance.get(`/products/${id}`);
export const remove = (id) => instance.delete(`/products/${id}`);
export const add = (product) => instance.post(`/products/`, product);
export const update = (product) => instance.put(`/products/${product.id}`, product);