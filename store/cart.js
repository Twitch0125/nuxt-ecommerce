export const state = () => ({
    cart: []
})

export const mutations = {
    add(state, product){
        state.cart.push(product)
    },
    remove(state, product){
        state.cart.splice(state.cart.indexOf(product), 1)
    }
}