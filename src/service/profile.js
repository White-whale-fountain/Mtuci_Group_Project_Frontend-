import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 2000,
  headers: { "content-type": "application/json" },
});

export async function profile(user) {
  try {
    const response = await instance.post("/profile", { login: user });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
