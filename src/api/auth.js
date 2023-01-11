import instance from "./config";

export const signup = (user) => instance.post("/signup", user);
export const signin = (user) => instance.post("/signin", user);