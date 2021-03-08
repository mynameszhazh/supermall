<template>
    <div  class="bottom-bar">
      <div class="check-module">
        <check class="check-check"></check>
        <span class="check-font" @click="toastclick">全选</span>
      </div>
    </div>
</template>

<script>
import check from 'components/content/check/check'

export default {
  name: 'BottomBar',
  components: {
    check
  },
  methods: {
    toastclick () {
      this.$toast.show('你在干嘛', 2000)
      // console.log(this.$toast)
    }
  }
}
</script>

<style scoped>
  /* .barbarbar {
    height: 100vh;
    position: relative;
  } */
  .bottom-bar {
    width: 100%;
    height: 49px;
    background-color: #f2f2f2;
    /* bottom: -589px; */
    position: relative;
    bottom: -650px;
  }

</style>
