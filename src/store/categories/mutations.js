export const mutations = {
    pushToCategories(state, payload) {
        state.categories[payload.id] = payload;
        state.ids.push(payload.id);
        updateLocalStorage(state.categories, state.ids)
    },
    editCategory(state, payload) {
        const oldCategory = state.categories[payload.id];
        let newCategoriesName = {id: payload.id};
        let newCategoriesLimit = {id: payload.id};
        if (payload.nameCategory !== '') newCategoriesName.nameCategory = payload.nameCategory
        if (payload.limit !== '') newCategoriesLimit.limit = payload.limit
        state.categories[payload.id] = {...oldCategory, ...newCategoriesName, ...newCategoriesLimit};
        updateLocalStorage(state.categories, state.ids)
    },
    removeCategory(state, payload) {
        state.ids = state.ids.filter((id) => Number(payload.id) !== id);
        const keys = Object.keys(state.categories)
        const newCategories = {}
        keys.forEach((key) => {
            if (state.ids.includes(Number(key)))
            newCategories[key] = state.categories[key]
        })
        state.categories = newCategories;
        updateLocalStorage(state.categories, state.ids)
    },
    categoryOfBalanceChanger(state, payload) {
        const oldCategory = state.categories[payload.categoryId];
        if (payload.typeOfCheck === 'outcome') {
            oldCategory.spent -= payload.sumOfCheck
            console.log(oldCategory)
        }
        if (payload.typeOfCheck === 'income') {
            oldCategory.spent += payload.sumOfCheck
            console.log(oldCategory)
        }
        state.categories[payload.id] = {...oldCategory, ...payload};
        updateLocalStorage(state.categories, state.ids)
    }
}
const updateLocalStorage = (categories, ids) => {
    localStorage.setItem('localCategories', JSON.stringify(categories))
    localStorage.setItem('localCategoriesIds', JSON.stringify(ids))
}