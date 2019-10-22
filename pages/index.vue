<template>
  <v-row dense justify-center align-center>
    <v-col v-for="product in products" :key="product.id" cols="6" sm="4" md="2" lg="2">
      <v-skeleton-loader v-show="skeletonShown" type="card"></v-skeleton-loader>
      <!-- <v-card></v-card> -->
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      skeletonShown: true
    }
  },
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
