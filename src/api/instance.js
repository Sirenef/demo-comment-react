import axios from "axios";

const baseURL = "http://localhost:3000";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUserApi = () => {
  const url = "/users";
  return instance.get(url);
};
