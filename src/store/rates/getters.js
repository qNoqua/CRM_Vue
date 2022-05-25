export const getters = {
    rates(state) {
        const data =  {
            EURRUB: 0,
            USDRUB: 0,
        }
        return state.data || {data}
    }
}