<template>
  <div class="tab-bar-item" @click = 'itemchange' :style="activeStyle">
     <div :class="{active: isactive}">
      <slot name="item-icon" v-if= '!isactive'></slot>
      <slot name="item-icon-active" v-else></slot>
      <slot name="item-text"></slot>
     </div>
  </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  components: {
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isactive: false
    }
  },
  computed: {
    isactive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isactive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemchange () {
      this.$router.push(this.path).catch(() => {})
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }

  .actived {
    color:coral;
    font-weight: bolder;
  }

</style>
