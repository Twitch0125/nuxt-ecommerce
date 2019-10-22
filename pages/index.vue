<template>
  <v-row column justify-center align-center>
    <v-col xs12 sm8 md6></v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('products/fetchCatalogue')
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
