
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
    editCategory(state, payload) {

            let localCategory = JSON.parse(localStorage.getItem('localCategories')) || []
            console.log(localCategory)
            console.log(payload)
            // Object.assign(localCategory.find((item) => {
            //     Number(item.id) === Number(payload.id)}), payload)
            const item = localCategory.find(item => Number(item.id) === Number(payload.id))
            const index = localCategory.indexOf(item)
            console.log(item)
            localCategory[index] = {...item, ...payload}
            state.categories = localCategory
            localStorage.setItem('localCategories', JSON.stringify(state.categories))

        if (payload.newLimit) {
            localStorage.setItem('localCategories', JSON.stringify(state.categories))
        }
    }
}