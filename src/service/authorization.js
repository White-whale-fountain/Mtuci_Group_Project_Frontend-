import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://127.0.0.1:5000",
// });

export const auth = {
  async login(name, pass) {
    // console.log(name);
    const resp = await axios
      .post(
        "http://127.0.0.1:5000/login",
        { name: name, password: pass },
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        console.log(response.data.access_token);
      });
    return resp;
  },
  async registr(name, pass) {
    console.log(name);
    const resp = await axios
      .post(
        "http://127.0.0.1:5000/registration",
        { email: name, name: name, password: pass },
        { headers: { "content-type": "application/json" } }
      )
      .then((response) => {
        console.log(response.data.access_token);
      });
    return resp;
  },
};
