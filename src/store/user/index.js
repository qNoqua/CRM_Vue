import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const userModule = {
  state: {
    isAuthorized: JSON.parse(localStorage.getItem("isAuthorized")),
    user: JSON.parse(localStorage.getItem("user")),
  },
  getters: getters,
  mutations: mutations, 
  actions: actions,
};
