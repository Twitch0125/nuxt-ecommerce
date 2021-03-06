<template>
  <v-app>
    <script defer src="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js"></script>
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css" />
    <!-- public test API key -->
    <div
      hidden
      id="snipcart"
      data-api-key="OGVlMzI0NzQtM2E4Ny00OWQyLThhOGMtZDIzNmIxYjVlNjYyNjM3MDc1MzkwNDg5NDIyOTIx"
    ></div>
    <v-navigation-drawer
      class="elevation-1"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="display-1 d-flex justify-center font-weight-light primary--text">VueCommerce</div>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="snipcart-checkout" v-ripple>
          <v-list-item-action>
            <v-badge>
              <template v-slot:badge>
                <span class="snipcart-items-count"></span>
              </template>
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text text-capitalize" v-text="'Checkout'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(category, i) in categories"
            :class="{'v-item--active':isSelected(category), 'v-list-item--active': isSelected(category)}"
            :key="i"
            @click="selectCategory(category)"
            :ref="`${category}`"
          >
            <v-list-item-content>
              <v-list-item-title class="secondary--text text-capitalize" v-text="category" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="mobile | small | medium" :clipped-left="clipped" fixed app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="'VueCommerce'" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container :fluid="fluid">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      fluid: false,
      clipped: false,
      drawer: true,
      fixed: false,
      mobile: this.$vuetify.breakpoint.xsOnly,
      small: this.$vuetify.breakpoint.smOnly,
      medium: this.$vuetify.breakpoint.mdOnly,
      items: [
        {
          icon: 'mdi-store',
          title: 'Store',
          to: '/'
        }
      ],
      miniVariant: false
    }
  },
  computed: {
    categories() {
      return this.$store.state.products.categories
    },
    selectedCategories() {
      return this.$store.state.products.selectedCategories
    }
  },
  mounted() {
    this.$store.dispatch('products/fetchCategories')
  },
  methods: {
    isSelected(category) {
      return this.$store.state.products.selectedCategories.includes(category)
    },
    selectCategory(category) {
      if (this.$store.state.products.selectedCategories.includes(category)) {
        this.$store.dispatch('products/removeCategory', category)
      } else {
        this.$store.dispatch('products/pushCategory', category)
      }
    },
    ...mapMutations({})
  }
}
</script>
