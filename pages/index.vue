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
      <v-card outlined hover :elevation="mobile ? 1:undefined">
        <v-img height="200px" contain :src="product.img" :alt="product.description">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular color="accent" indeterminate></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-title class="card-title body-1">{{product.title}}</v-card-title>
        <v-card-actions>
          <v-btn text @click="checkExpand(product)">More...</v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="product.expand">
            <v-divider></v-divider>
            <v-card-text>{{product.description}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
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

export default {
  data() {
    return {
      //checks if the viewport is below the xs threshold, i.e "<600px"
      mobile: this.$vuetify.breakpoint.xsOnly
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
    ...mapMutations({}),
    checkExpand(product) {
      console.log('expanding')
      if (!product.expand) {
        product.expand = false
      } else product.expand = !product.expand
      return product
    }
  }
}
</script>
