<template>
    <swiper>
      <swiper-item id="item-swiper" v-for='(item, index) in imgswiper' :key="index">
        <!-- 监听图片加载完毕之类的好像不知道后面是这么搞了  就是这样 -->
          <img :src="item" alt="" @load="detailimgload" >
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  props: {
    imgswiper: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {

    }
  },
  methods: {
    detailimgload () {
      this.$emit('detailimgloads')
    }
  },
  created () {
    // console.log(this.imgswiper)
  }
}
</script>

<style scoped>
 #item-swiper {
   height: 350px;
   overflow: hidden;
 }
</style>
