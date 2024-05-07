import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 2000,
  headers: { "content-type": "application/json" },
});

export const instanceForFiles = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 2000,
  headers: { "content-type": "multipart/form-data;boundary='boundary'"},
});
