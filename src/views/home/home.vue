<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <homeswiper :cbanners='banners'></homeswiper>
    <homerecommend :recommends='recommend'></homerecommend>
    <homefeature></homefeature>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
    </ul>
  </div>
</template>

<script>
// 导入home需要的数据
import homeswiper from './homecomps/homeSwiper'
import homerecommend from './homecomps/homeRecommend'
import homefeature from './homecomps/homefeature'

import NavBar from '@/components/common/navbar/navbar'
import TabControl from '@/components/content/TabControl/TabControl'

import { getHomeMuiltidata } from '@/network/home/home'
export default {
  name: 'home',
  components: {
    NavBar,
    homeswiper,
    homerecommend,
    homefeature,
    TabControl
  },
  data () {
    return {
      banners: [],
      recommend: []
    }
  },
  created () {
    getHomeMuiltidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home {
  padding-top: 44px;
  }
  .home-nav {
  background-color: var(--color-tint);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  }
</style>
