import { instance } from "../instances/rules_auth";

export const likes = {
  async putLike(authUser, alienUser) {
    try {
      const response = await instance.post(`/likes/${authUser}`, {
        who_i_liked: alienUser,
      });
      return response.data.status_code;
    } catch (error) {
      console.log(error);
    }
  },
  async checkLike(authUser, alienUser) {
    try {
      const response = await instance.post(`/get_like_from_card/${authUser}`, {
        card_login: alienUser,
      });
      return response.data.access;
    } catch (error) {
      console.log(error);
    }
  },

  async takeLikes(authUser) {
    const response = await instance.get(`/who_i_liked/${authUser}`);
    return response.data.users_who_i_liked;
  },
  catch(error) {
    console.log(error);
  },
};
