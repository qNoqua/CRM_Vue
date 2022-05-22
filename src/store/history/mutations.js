export const mutations = {
    pushToHistory(state, payload){
        state.history[payload.id] = payload;
        state.historyIds.push(payload.id);
        updateLocalStorage(state.history, state.historyIds)
    }
}
const updateLocalStorage = (categories, ids) => {
    localStorage.setItem('localHistory', JSON.stringify(categories))
    localStorage.setItem('localHistoryIds', JSON.stringify(ids))
}