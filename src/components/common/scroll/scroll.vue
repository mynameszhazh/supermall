<template>
  <div class="wrapper" ref="home">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.home, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.on('scroll', option => {
      // console.log(option)
      this.$emit('scrolll', option)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingup')
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      // 注意这里有个小细节就是  我先判断我这个上面有没有这个scroll再去调用我的这个方法
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
