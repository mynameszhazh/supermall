<template>
  <div class="detail-bottom-bar">
    <div class="service">客服</div>
    <div class="shop">商铺</div>
    <div class="Collection">收藏</div>
    <div class="shopcar" @click="shopcarclick">购物车</div>
    <div class="submit">购买</div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  components: {

  },
  props: {
  },
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    shopcarclick () {
      this.$emit('shopcarclicks')
    }
  }
}
</script>

<style scoped>
.detail-bottom-bar {
    display: flex;
    width: 100%;
    height: 49px;
    background-color: #fff;
    text-align: center;
    line-height: 49px;
    position: fixed;
    bottom: 0;
    z-index: 999;
}
.shop, .shopcar, .submit, .Collection, .service {
  flex: 1;
}
.shopcar {
  background-color: yellow;
}
.submit {
  background-color: deeppink;
}
</style>
