<template>
  <v-btn
    color="accent"
    href="#"
    class="snipcart-add-item"
    :data-item-id="product.id"
    :data-item-name="product.title"
    :data-item-price="product.price"
    :data-item-image="product.img"
    :data-item-description="product.description"
  >Buy for {{ product.price | price }}&nbsp;$</v-btn>
</template>

<script>
export default {
  name: 'BuyButton',
  props: ['product']
}
</script>