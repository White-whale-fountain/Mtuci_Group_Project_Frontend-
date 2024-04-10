import { instance } from "../instances/rules_auth";

export async function profile(user) {
  try {
    const response = await instance.post("/profile", { login: user });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
