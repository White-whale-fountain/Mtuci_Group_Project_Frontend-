import { instance } from "../instances/rules_auth";

export const profile = {
  async card(user) {
    try {
      const response = await instance.get(`/profile/${user}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async take(path, user) {
    try {
      const response = await instance.get(`/${path}/${user}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async put(path, user, form) {
    try {
      const response = await instance.put(`/${path}/${user}`, { ...form });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
