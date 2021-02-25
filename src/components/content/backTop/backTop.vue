<template>
  <div class="backtop">
    <img src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backtop',
  data () {
    return {
      scroll: null
    }
  }
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 5px;
    bottom: 50px;
  }
  .backtop img {
    width: 50px;
    height: 50px;
  }
</style>
