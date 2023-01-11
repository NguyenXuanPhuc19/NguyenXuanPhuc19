import instance from "./config";

export const getAll = () => instance.get("/category_Product");
export const get = (id) => instance.get(`/category_Product/${id}`);
export const remove = (id) => instance.delete(`/category_Product/${id}`);
export const add = (categoryProduct) => instance.post(`/category_Product/`, categoryProduct);
export const update = (categoryProduct) => instance.put(`/category_Product/${categoryProduct.id}`, categoryProduct);