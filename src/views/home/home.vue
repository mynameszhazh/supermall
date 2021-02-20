<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <homeswiper :cbanners='banners'></homeswiper>
    <homerecommend :recommends='recommend'></homerecommend>
    <homefeature></homefeature>
    <tab-control :titles="['流行', '新款', '精选']"
    class="tab-control" @tabclick='tabclick'></tab-control>
    <good-list :goods='cgoods'></good-list>

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
import GoodList from '@/components/content/goods/goodList'

import { getHomeMuiltidata, getHomeGoods } from '@/network/home/home'
export default {
  name: 'home',
  components: {
    NavBar,
    homeswiper,
    homerecommend,
    homefeature,
    TabControl,
    GoodList
  },
  data () {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  computed: {
    cgoods () {
      return this.goods[this.currentType].list
    }
  },
  created () {
    // 获取多个数据
    this.getHomeMuiltidata()
    // 获取商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 这是我的时间方法
     */
    tabclick (index) {
      console.log(index)

      switch (index) {
        case 0 :
          this.currentType = 'pop'
          break
        case 1 :
          this.currentType = 'new'
          break
        case 2 :
          this.currentType = 'sell'
          break
      }
    },
    /**
     * 这是获取数据的一些方法
     */
    getHomeMuiltidata () {
      getHomeMuiltidata().then(res => {
      // console.log(res)
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
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
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
