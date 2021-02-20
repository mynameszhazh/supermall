<template>
  <div id="home-feature">
    <a href="http://adi-v3.dev">
      <img src="~assets/images/home/recommend_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>

export default {
  name: 'homefeature',
  props: {
    recommends: {
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
    }
  }
}
</script>

<style scoped>
   #home-feature img{
    width: 100%;
  }
</style>
