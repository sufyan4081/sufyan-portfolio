import axios from "axios";
const ORIGIN = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");
const baseUrl = `${ORIGIN}/api`;
export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
