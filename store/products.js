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
    let response = await this.$axios.get(
      'https://my-json-server.typicode.com/tdmichaelis/json-api/products'
    )
    let catalogue = response.data.map(product => {
      product.expand = false
      return product
    })

    context.commit('SET_LOADING_STATUS', false)
    context.commit('SET_CATALOGUE', catalogue)
  },
  async fetchCategories(context) {
    context.commit('SET_LOADING_STATUS', true)
    let response = await this.$axios.get(
      'https://my-json-server.typicode.com/tdmichaelis/json-api/categories'
    )
    context.commit('SET_LOADING_STATUS', false)
    context.commit('SET_CATEGORIES', response.data)
  }
}
