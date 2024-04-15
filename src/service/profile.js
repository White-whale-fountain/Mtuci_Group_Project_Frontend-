import { instance } from "../instances/rules_auth";

export const profile = {
  async card(user) {
    try {
      const response = await instance.post("/profile", { login: user });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async about_me(user_login) {
    try {
      const response = await instance.post("/user_info", {
        login: user_login,
        about_me: "",
        interests: "",
        z: "",
        height: "",
        education: "",
      });
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async about_me_save(user_login) {
    try {
      const response = await instance.put("/user_info", {
        login: user_login,
        about_me: "1",
        interests: "1",
        z: "1",
        height: "1",
        education: "1",
      });
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async about_me_take(user) {
    try {
      const response = await instance.get(`/user_info/${user}`);
      return console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  // async about_me(user) {
  //   try {
  //     const response = await instance.get("/user_info", { login: user });
  //     return console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
