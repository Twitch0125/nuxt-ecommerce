<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">eCommerce</div>
      <v-card>
        <v-card-title>testing</v-card-title>
        <v-list>
          <v-list-item v-for="product in products" :key="product.id"></v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // async fetch({ store, params }) {
  //   let { catalogue } = await axios.get(
  //     'https://my-json-server.typicode.com/tdmichaelis/json-api/products'
  //   )
  //   let { categories } = await axios.get(
  //     'https://my-json-server.typicode.com/tdmichaelis/json-api/categories'
  //   )
  //   this.$store.commit('products/setCatalogue', catalogue)
  //   this.$store.commit('products/setCategories', categories)
  // },
  mounted() {
    this.$store.dispatch('fetchCatalogue')
  },
  computed: {
    products() {
      return this.$store.state.products.catalogue
    },
    cart() {
      return this.$store.state.cart.cart
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('cart/add', product)
    },
    ...mapMutations({})
  }
}
</script>
