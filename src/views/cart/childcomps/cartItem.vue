<template>
  <div class="cartItem">
    <cart-item-list @refreshcheck='refreshcheck'
      v-for="(item, index) in carttList"
      :key="index"
      :item-info='item'>
    </cart-item-list>
  </div>
</template>

<script>

import CartItemList from './cartItemList'

import { mapGetters } from 'vuex'
export default {
  name: 'CartItem',
  components: {
    CartItemList
  },
  methods: {
    refreshcheck () {
      // 逐层传递刷新一下
      this.$emit('refreshchecks')
    }
  },
  computed: {
    ...mapGetters(['carttList'])
  }
}
</script>

<style scoped>

</style>
