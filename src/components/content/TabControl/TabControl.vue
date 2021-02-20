<template>
  <div id="tab-control">
    <div id="tab-control-item" v-for='(item, index) in titles'
    :key="index" :class="{active: (index === currentIndex)}"
    @click="itempoint(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {

  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itempoint (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  #tab-control {
    padding-top: 10px;
    display: flex;
    text-align: center;
  }
  #tab-control-item {
    font-size: 18px;
    flex: 1;
  }
   #tab-control-item span {
     padding: 5px;
   }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 1px solid var(--color-high-text);
  }
</style>
