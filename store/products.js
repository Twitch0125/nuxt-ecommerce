export const state = () => ({
  catalogue: [],
  categories: [],
  loadingStatus: false
})

export const mutations = {
  SET_CATALOGUE(state, catalogue) {
    state.catalogue = catalogue
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status
  },
  addProduct(state, product) {
    state.catalogue.push(product)
  },
  addCategory(state, category) {
    state.categories.push(category)
  }
}
export const actions = {
  async fetchCatalogue(context) {
    context.commit('SET_LOADING_STATUS', true)
    let catalogue = await axios.get(
      'https://my-json-server.typicode.com/tdmichaelis/json-api/products'
    )
    context.commit('SET_LOADING_STATUS', false)
    context.commit('SET_CATALOGUE', catalogue)
  }
}
