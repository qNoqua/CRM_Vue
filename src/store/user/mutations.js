export const mutations = {
    addUser(state, user) {
        state.user = user
    },
    signIn(state, isAuthorized) {
        state.isAuthorized = isAuthorized
    },
    signUp(state, isAuthorized) {
        state.isAuthorized = isAuthorized
    },
    logout(state) {
        state.isAuthorized = false;
    },
}

