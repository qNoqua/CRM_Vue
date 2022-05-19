import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const historyModule = {
  state: {
    history: [],
  },
  getters: getters,
  mutations: mutations, 
  actions: actions,
};