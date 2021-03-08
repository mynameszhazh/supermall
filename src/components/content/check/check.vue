<template>
  <div>
    <!-- 注意点：关于我的svg的图片可能是和背景颜色一样的 所以就看不见了 一定要加上我的背景颜色就看见了 -->
    <!-- 我一定会干掉你的  妈的 -->
    <img src="~assets/images/cart/tick.svg" alt=""
     class="check" :class="{ischeck: ischeckshow}" >
  </div>
</template>

<script>
export default {
  name: 'check',
  props: {
    ischeckshow: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .check {
    margin-top: 40px;
    padding-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid gray;
    text-align: center;
  }
  .check img {
    /* width: 100%; */
    /* height: 100%; */
    width: 20px;
    height: 20px;
    border-radius:10px;
  }
  .ischeck {
    background-color: red;
    border-color: red;
  }
</style>
