export const getters = {
    categories (state) {
        return state.ids.map(id => state.categories[id])
    },
    getCategoriesById(state) {
        return (id) => {
            const items = state.ids.map(key => state.categories[key])
            if(id) return items.filter(item => item.id === id)
            return items
        }   
    }
}