<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for='(item, index) in cbanners' :key="index">
        <a :href="item.link" >
          <img :src="item.image" alt="" @load="swiperload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'homeswiper',
  props: {
    cbanners: {
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
    swiperload () {
      if (!this.isshowfixed) {
        this.$emit('swiperloadimg')
        this.isshowfixed = true
      }
    }
  }
}
</script>

<style scoped>

</style>
