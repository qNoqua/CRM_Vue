import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const categoriesModule = {
  state: {
    // categories: [{id: Date.now(), nameCategory: 'Машина', limit: '1000000'}],
    categories: JSON.parse(localStorage.getItem('localCategories')) || [],
  },
  getters: getters,
  mutations: mutations, 
  actions: actions,
};