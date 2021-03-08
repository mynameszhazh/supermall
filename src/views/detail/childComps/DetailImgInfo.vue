<template>
    <!-- 注意点： 这里有个坑就是length不要写错了 就会报错 -->
    <div class="img-info" v-if="Object.keys(detailInfo).length !==0 ">
      <div class="info-dec clear-fix">
        <div class="start">
        </div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img :src="item" alt="" @load="imgeLoad"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index" class="img-width">
      </div>
    </div>
</template>

<script>

export default {
  name: 'DetailImgInfo',
  components: {

  },
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      counter: 0,
      imagesinfo: 0
    }
  },
  created () {
    // console.log(this.detailInfo.detailImage[0].list.lenght).catch(() => {})
  },
  mounted () {
  },
  methods: {
    imgeLoad () {
      // 为什么我这里不能直接拦截
      // if (++this.counter === this.imagesinfo) {
      // console.log('---')
      // console.log(this.imagesinfo) a

      this.$emit('imgload')
      // }
    }
  },
  watch: {
    detailInfo () {
      // console.log(this.detailInfo.detailImage[0].list.lenght)
      // this.imagesinfo = this.detailInfo.detailImage[0].list.lenght
    }
  }
}
</script>

<style scoped>
  .img-info {
      margin-top: 20px;
  }
  .img-width {
    width: 100%;
  }
</style>
