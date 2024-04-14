import { instance } from "../instances/rules_auth";

export const auth = {
  async login(form) {
    try {
      const response = await instance.post(`/login`, { ...form });
      return response.data.status_code === 200;
    } catch (error) {
      console.log(error);
    }
  },
  async registration(form) {
    try {
      const response = await instance.post(`/registration`, { ...form });
      return response.data.status_code === 200;
    } catch (error) {
      console.log(error);
    }
  },
};
