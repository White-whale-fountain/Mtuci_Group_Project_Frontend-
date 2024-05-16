import { instance } from "../instances/rules_auth";
import { instanceForFiles } from "../instances/rules_auth";
export const profile = {
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
  async upPhoto(user, file, avatar) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await instanceForFiles.post(
          `/up_photos/${user}/${avatar}`,
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async downAvatar(user) {
    try {
      const response = await instance.post(`/down_photos/${user}/avatar`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async downPhotos(user) {
    try {
      const response = await instance.post(`/down_photos/${user}/image`);
      return response.data;
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
