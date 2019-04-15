// import store from "@/store/store";
import axios from "axios";
const API = axios.create({
  baseURL: process.env.VUE_APP_WOO_URL,
  auth: {
    username: process.env.VUE_APP_WOO_KEY,
    password: process.env.VUE_APP_WOO_PASS
  }
});

export default {
  async setMainCategories({ commit }) {
    const response = await API.get("products/categories");
    const categories = response.data.filter(category => {
      return category.parent == 0 && category.id !== 29; // The id of uncategorized posts
    });
    const mainCategories = [];
    await categories.forEach(category => {
      mainCategories.push({
        id: category.id,
        name: category.name
        // image: category.image.src
      });
    });
    commit("setMainCategories", mainCategories);
  }
};
