import axios from "axios";
import { userLocal } from "./local.service";

export const BASE_URL = "https://fiverrnew.cybersoft.edu.vn";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjA4LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMTk5MzYwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAyMTQxMjAwfQ.1MKFgiR_REeXZ8RKBhPFQLyitVek8kDJ3u1JPaCB1MU";
export const configHeader = () => {
  return {
    tokenCybersoft: TOKEN_CYBER,
    token: userLocal.get()?.token,
  };
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeader(),
});
// Add a request interceptor
