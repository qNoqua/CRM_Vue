export const getters = {
    history (state) {
        return state.history
    },
    getHistoryByCategoryId(state) {
        return (search) => {
            const items = state.historyIds.map(key => state.history[key])
            if (search)  {
                return items.filter(item => Object.values(item).some(element => {
                    return String(element).toLocaleLowerCase().includes(String(search).toLowerCase())
                }))
            }
            return items
        }
    }
}