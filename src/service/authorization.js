import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const auth = {
  async login(mail, pass) {
    instance
      .post("/login", { email: mail, password: pass })
      .then((response) => {
        console.log(response.data.access_token);
      });
  },
};
