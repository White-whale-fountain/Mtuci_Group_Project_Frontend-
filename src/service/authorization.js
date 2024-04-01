import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 1000,
  headers: { "content-type": "application/json" },
});

export const auth = {
  async login(form) {
    try {
      const response = await instance.post(`/login`, { ...form });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async registration(form) {
    try {
      const response = await instance.post(`/registration`, { ...form });
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  },
};
