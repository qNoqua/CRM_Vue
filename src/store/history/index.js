import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

export const historyModule = {
  state: {
    history: JSON.parse(localStorage.getItem('localHistory')) || {},
    historyIds: JSON.parse(localStorage.getItem('localHistoryIds')) || [],
  },
  getters: getters,
  mutations: mutations, 
  actions: actions,
};