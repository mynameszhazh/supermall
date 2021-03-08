<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center" ref="navbar">购物车</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
    class="tab-control" @tabclick='tabclick'
    ref="tabcontrol2" v-show='isshowfixed'></tab-control>
    <scroll class="content"
      ref="scroll"
      :probe-type='3'
      @pullingup='pullingup'
      @scrolll='scrolll'
      :pull-up-load='true'>
      <homeswiper :cbanners='banners' @swiperloadimg='swiperloadimg'></homeswiper>
      <homerecommend :recommends='recommend'></homerecommend>
      <homefeature></homefeature>
      <tab-control :titles="['流行', '新款', '精选']"
      class="tab-control" @tabclick='tabclick'
      ref="tabcontrol1"></tab-control>
      <good-list :goods='cgoods'></good-list>
    </scroll>
    <backtop @click.native='backclick' v-show="isshow"></backtop>
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
import scroll from '@/components/common/scroll/scroll'

import { getHomeMuiltidata, getHomeGoods } from '@/network/home/home'
import { debounce } from 'common/debounce'
import { backTopMixin } from 'common/mixin'
export default {
  name: 'home',
  components: {
    NavBar,
    homeswiper,
    homerecommend,
    homefeature,
    TabControl,
    GoodList,
    scroll
  },
  mixins: [backTopMixin],
  data () {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      tabcontroltop: 0,
      isshowmost: false,
      isshowfixed: false,
      saveY: 0
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
    // console.log(this.$refs.navbar.$el)
    console.log(this.$store.state.cartList.length)
  },
  mounted () {
    // 重新加载图片信息，不会出现加载长度不够的bug
    // 注意了  这里也有个小细节 ，就是关于我这个方法  再调用的时候里面又用到我的dom元素  所有要在我的mounted中调用这个方法
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    // 这是一个关于事件总线用法
    this.$bus.$on('itemreload', () => {
      refresh()
    })
  },
  methods: {
    /**
     * 这是我的事件方法
     */
    // 在我点击tabcontrol 的三个按钮的时候会选择不同的加载图片
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
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    // 显示返回顶部图标的显示和隐藏方法
    scrolll (option) {
      if (-option.y >= this.tabcontroltop) {
        this.isshowfixed = true
      } else {
        this.isshowfixed = false
      }
      this.backTopScr(option)
    },
    // 上拉加载
    pullingup () {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    // 获取我的tabcontrol的吸顶时需要的距离
    swiperloadimg () {
      if (!this.isshowmost) {
        this.tabcontroltop = this.$refs.tabcontrol1.$el.offsetTop
        console.log(this.$refs.tabcontrol1.$el.offsetTop)
        // console.log('-home--')
        this.isshowmost = true
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
        // console.log(res.data.list.length)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
  activated () {
    // console.log('-activated-')
    // 用的时我的封装的一个scrollto方法  不是原生的一个scrollto方法
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    // console.log('-deactivated-')
    // getScrollY  这个玩意是我封装好的一个玩意
    this.saveY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped>
  #home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
  }
  .home-nav {
  background-color: var(--color-tint);
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    /* margin-top: 44px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* height: 500px; */
  }
</style>
