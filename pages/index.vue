<template>
  <v-row justify-center align-center>
    <v-col v-for="product in products" :key="product.id" cols="6" sm="4" md="2" lg="2">
      <v-skeleton-loader v-show="skeletonShown" type="card"></v-skeleton-loader>
      <v-card outlined hover :elevation="mobile ? 4:undefined">
        <v-img
          height="200px"
          contain
          @load="loading=false"
          :src="product.img"
          :alt="product.description"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular color="accent" indeterminate></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      skeletonShown: false,
      loading: true,
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
