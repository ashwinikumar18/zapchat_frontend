import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://zapchat-frontend.onrender.com/api" : "/api",
  withCredentials: true,
});