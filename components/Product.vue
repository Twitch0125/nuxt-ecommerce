<template>
  <v-card outlined hover :elevation="mobile ? 1:undefined">
    <v-card-title class="card-title body-1 text-truncate">{{product.title}}</v-card-title>

    <v-img height="200px" contain :src="product.img" :alt="product.description">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular color="accent" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-rating v-model="product.rating" readonly background-color="primary" color="primary"></v-rating>

    <v-expand-transition>
      <div v-show="expand">
        <v-card-text>{{product.description}}</v-card-text>
      </div>
    </v-expand-transition>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn color="secondary">
        <v-icon>mdi-cart-plus</v-icon>
        ${{product.price}}
      </v-btn>
      <v-btn color="secondary" text @click="expand = !expand">More...</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.primary--background-color {
  background-color: $vuetify.primary;
}
</style>

<script>
export default {
  data() {
    return {
      expand: false,
      //checks if the viewport is below the xs threshold, i.e "<600px"
      mobile: this.$vuetify.breakpoint.xsOnly
    }
  },
  props: {
    product: Object
  }
}
</script>