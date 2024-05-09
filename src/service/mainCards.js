import { instance } from "../instances/rules_auth";

export async function mainCards(user, filters) {
  try {
    const response = await instance.post(
      `/found_users_on_the_main_page/${user}`,
      { ...filters }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
