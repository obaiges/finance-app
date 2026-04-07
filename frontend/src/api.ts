import axios from "axios";
import type { AxiosInstance } from "axios"; // import solo para tipo

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080"
});