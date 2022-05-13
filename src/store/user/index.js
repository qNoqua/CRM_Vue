import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const userModule = {
  state: {
    isAuthorized: JSON.parse(localStorage.getItem("isAuthorized")),
    user: {},
    history: [1,2,3],
  },
  getters: getters,
  mutations: mutations, 
  actions: actions,
};
