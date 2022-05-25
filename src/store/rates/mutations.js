export const mutations = {
    updateUserBalance(state, payload) {
        let balance = Number(JSON.parse(localStorage.getItem('user')).balance)
        console.log(balance, payload.sumOfCheck)
        if (payload.typeOfCheck === 'income')  balance += payload.sumOfCheck;
        if (payload.typeOfCheck === 'outcome') balance -= payload.sumOfCheck;
        const newUserState = {
            balance: balance,
        }
        state.user = {...state.user, ...newUserState}
        updateLocalStorage(state.user)
    },
    editUserProfile(state, payload) {
        let name;
        let balance
        if (payload.name !== '') {
            name = { name: payload.name}
        }
        if (payload.balance !== '') {
            balance = { balance: payload.balance}
        }
        state.user = {...state.user, ...name, ...balance}
        updateLocalStorage(state.user)
    },
    fetchCurrency(state, data) {
        state.data = data
    }
}
const updateLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

