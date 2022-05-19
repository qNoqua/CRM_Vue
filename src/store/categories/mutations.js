
export const mutations = {
    pushToCategories(state, item){
        state.categories.push(item);
        localStorage.setItem('localCategories', JSON.stringify(state.categories))
    },
    editNameCategory(state, payload) {
        console.log(payload)
        // state.categories.forEach((item) => {
        //     if (item.id === Number(payload.id)) {
               
        //         // Vue.set(state.categories[index], 'nameCategory', payload.value)
        //         // item.nameCategory = payload.value;
        //         item = {...item, nameCategory:payload.value}
        //     }
        // });
        state.categories = state.categories.map(item => {
            console.log(item.id === Number(payload.id))
            if (item.id === Number(payload.id)) {
               return {...item, nameCategory:payload.value}
            } 
            return item
        })
    },
    editLimitCategory(state, item, newLimit) {
        state.categories.item.limit = newLimit
    }
}