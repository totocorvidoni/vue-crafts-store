import store from "@/store/store";
import axios from "axios";

export default {
  async setMainCategories({ commit }) {
    const API = axios.create({
      baseURL: process.env.VUE_APP_WOO_URL,
      auth: {
        username: process.env.VUE_APP_WOO_KEY,
        password: process.env.VUE_APP_WOO_PASS
      }
    });
    console.log(axios);
    const response = await API.get("products/categories");
    const filtered = [];
    await response.forEach(category => {
      filtered.push({
        id: category.id,
        name: category.name,
        image: category.image.src
      });
    });
    commit("setMainCategories");
  }
};
