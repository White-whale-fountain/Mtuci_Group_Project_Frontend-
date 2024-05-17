import { instance } from "../instances/rules_auth";

export const cards = {
  async mainCards(user, filters) {
    try {
      const response = await instance.post(
        `/found_users_on_the_main_page/${user}`,
        { ...filters }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async infoCard(login) {
    try {
      const response = await instance.get(`/card/${login}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
