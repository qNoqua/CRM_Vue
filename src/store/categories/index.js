import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const categoriesModule = {
  state: {
    categories: JSON.parse(localStorage.getItem('localCategories')) || {},
    ids: JSON.parse(localStorage.getItem('localCategoriesIds')) || [],
  },
  getters: getters,
  mutations: mutations, 
  actions: actions,
};