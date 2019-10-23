<template>
  <v-row justify-center align-center>
    <v-col
      v-for="product in products"
      :key="product.id"
      cols="12"
      sm="4"
      md="2"
      lg="2"
      text-capitalize
    >
      <v-skeleton-loader v-show="loadingStatus" type="card"></v-skeleton-loader>
      <Product :product="product"></Product>
    </v-col>
  </v-row>
</template>

<style>
.card-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  min-height: 47px;
  max-height: 67px;
}
</style>

<script>
import { mapMutations } from 'vuex'
import Product from '~/components/Product.vue'
export default {
  components: {
    Product
  },
  data() {
    return {

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
    },
    loadingStatus() {
      return this.$store.state.products.loadingStatus
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
