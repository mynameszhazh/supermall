<template>
  <div class="cart">
    <nav-bar class="navbar" >
      <div slot="center">
        购物车({{cartItmeCount}})
      </div>
    </nav-bar>
    <scroll :probeType='3'
    :pullUpLoad='true'
    class="scroll"
    ref="scroll">
      <cart-item @refreshchecks='refreshchecks'></cart-item>
    </scroll>
    <bottom-bar class="bottombar"></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import scroll from 'components/common/scroll/scroll'
import CartItem from './childcomps/cartItem'
import BottomBar from './childcomps/BottomBar'

import { mapGetters } from 'vuex'
export default {
  name: 'cart',
  components: {
    NavBar,
    scroll,
    CartItem,
    BottomBar
  },
  computed: {
    ...mapGetters(['cartItmeCount', 'carttList'])
    // lenght () {
    //   return this.$store.getters.cartItmeCount
    // }
  },
  //  注意点:  就是我这个scroll在加入购物车的时候还是没有高度的  所有我们在进入购物车的时候一定要刷新一下
  activated () {
    // 在进入购物车页面的时候刷新一下
    this.$refs.scroll.refresh()
  },
  methods: {
    refreshchecks () {
      this.$refs.scroll.refresh()
      // console.log('nihao')
    }
  }
}
</script>

<style scoped>
  .navbar {
    /* 注意点: 下面的bs是脱离标准流的  所有我想要navbar覆盖它就要页脱离标准流 */
    position: relative;
    background-color: var(--color-tint);
    color: white;
    z-index: 9;
  }
  .cart {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
