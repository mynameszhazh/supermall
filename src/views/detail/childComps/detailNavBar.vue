<template>
    <div>
      <nav-bar ref="navbar">
        <div slot="center" class="detail">
          <div v-for="(item, index) in titles"
          :key="index" class="detailitem"
          :class="{active: currentIndex === index}"
          @click="detailnavclick(index)">{{item}}</div>
        </div>
        <div slot="left" class="left" @click="backclick">
          <img src="~assets/images/common/back.svg" alt="">
        </div>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      iid: null,
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  created () {
    // console.log(this.$refs.navbar)
  },
  methods: {
    detailnavclick (index) {
      this.currentIndex = index
      this.$emit('indexParams', index)
    },
    backclick () {
      // this.$router.go(-1)
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .detail {
    display: flex;
    font-size: 15px;
    padding: 0 5px;
  }
  .detailitem {
    flex: 1;
  }
  .active {
    color: deeppink;
  }
  .left {
    margin-top: 5px;
  }
</style>
