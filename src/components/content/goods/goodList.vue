<template>
  <div id="good-list">
    <good-list-item v-for="item in goods" :key="item.index" :goodsItem='item'
    class="good-list-item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './goodListIten'

export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodListItem
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  #good-list {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
