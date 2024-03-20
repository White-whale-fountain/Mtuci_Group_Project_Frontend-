import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 1000,
  headers: { "content-type": "application/json" },
});

export const auth = {
  async login(name, pass) {
    await instance
      .post(`/login`, { name: name, password: pass })
      .then((response) => {
        console.log(response.data.access_token);
      });
  },
  async registration(name, pass) {
    await instance
      .post(`/registration`, {
        email: name,
        name: name,
        password: pass,
      })
      .then((response) => {
        console.log(response.data.access_token);
      });
  },
};
