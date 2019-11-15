export const state = () => ({
  catalogue: [],
  categories: [],
  loadingStatus: false,
  selectedCategories: []
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
  ADD_CATEGORY(state, category) {
    state.selectedCategories.push(category)
  },
  REMOVE_CATEGORY(state, category) {
    state.selectedCategories = state.selectedCategories.filter(
      selectedCategory => selectedCategory != category
    )
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
  },
  pushCategory(context, category) {
    context.commit('ADD_CATEGORY', category)
  },
  removeCategory(context, category) {
    context.commit('REMOVE_CATEGORY', category)
  }
}
