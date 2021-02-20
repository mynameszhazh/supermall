<template>
  <div id="home-recommend">
    <div class="boxa" v-for="item in recommends" :key="item.url">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homerecommend',
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
  #home-recommend {
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 10px solid #eee;
    padding: 3px 1px;
  }
  #home-recommend .boxa {
    flex: 1;
  }
   .boxa img{
    width: 80px;
    height: 80px;
    border-radius: 100%;
   }
</style>
