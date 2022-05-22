export const getters = {
    history (state) {
        return state.history
    },
    getHistoryByCategoryId(state) {
        return (id) => {
            const items = state.historyIds.map(key => state.history[key])
            if (id)  {
                return items.filter(item => item.categoryId === id)
            }
            return items
        }
    }
}