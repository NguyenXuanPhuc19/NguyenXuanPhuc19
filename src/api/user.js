import instance from "./config";

export const getAll = () => instance.get("/users");
export const get = () => instance.get(`/users`);
export const remove = (id) => instance.delete(`/users/${id}`);
export const add = (u) => instance.post(`/users/`, u);
export const update = (u) => instance.put(`/users/${u.id}`, u);