import { createStore } from 'vuex'

const store =  createStore({
  state: {
    return: {
      isAuthorized: false
    }
  },
  mutations: {
    changeAuth (state) {
      state.isAuthorized = !state.isAuthorized
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
export {store}
