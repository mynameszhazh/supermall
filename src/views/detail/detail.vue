<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
    @indexParams='indexParams'
    ref="nav"></detail-nav-bar>
    <scroll class="content"
     :pullUpLoad='true'
      ref="scroll"
      :probe-type='3'
      @scrolll='scrolll'>
        <!-- 我这里的轮播图一直出问题  就是图片老是只有一张这样子  有时候又是可以的 但是大部分是不可以的   -->
      <detail-swiper :imgswiper='imgswiper'
      :detailimgloads='detailimgloads'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info></detail-shop-info>
      <detail-img-info :detailInfo='detailInfo' @imgload='imgload'></detail-img-info>
      <detail-params ref="params"></detail-params>
      <detail-comment ref="comment"></detail-comment>
      <detail-Like ref="like"></detail-Like>
    </scroll>
    <detail-bottom-bar @shopcarclicks='shopcarclicks'></detail-bottom-bar>
    <backtop @click.native='backclick' v-show="isshow"></backtop>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar'
import DetailSwiper from './childComps/detailSwiper'
import DetailBaseInfo from './childComps/detailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'
import DetailLike from './childComps/DetailLike'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/scroll'

import { detailData, Goods } from 'network/detail'
import { debounce } from 'common/debounce'
import { backTopMixin } from 'common/mixin'
export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailLike,
    DetailComment,
    DetailParams,
    DetailBottomBar,
    Scroll,
    DetailImgInfo
  },
  mixins: [backTopMixin],
  data () {
    return {
      iid: null,
      imgswiper: [],
      goods: {},
      detailInfo: {},
      jumpTop: [],
      navDebounce: null,
      // optionY: 0,
      currentIndex: 0,
      itemInfoCar: {}
      // pruduct: {}
    }
  },
  created () {
    // 1.保存我传入的iid
    this.iid = this.$route.params.iid
    // 2.根据iid来接受我的数据
    detailData(this.iid).then(res => {
      // 3. 已经获取到我的iid对应的细节数据
      // console.log(res)
      const data = res.result
      this.imgswiper = res.result.itemInfo.topImages
      this.itemInfoCar = res.result.itemInfo
      // console.log(this.imgswiper)
      // console.log(data.columns)

      // 4.获取我的首页商品库
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // console.log(this.goods)
      // console.log(data.shopInfo.services.lenght)
      // console.log(data.shopInfo.services instanceof Array)

      // 5.获取我的详情里面的信息
      this.detailInfo = data.detailInfo

      // 6.我在获取我的nav参数到下面的高度是做的防抖操作
      this.navDebounce = debounce(() => {
        this.jumpTop = []
        this.jumpTop.push(0)
        this.jumpTop.push(this.$refs.params.$el.offsetTop)
        this.jumpTop.push(this.$refs.comment.$el.offsetTop)
        this.jumpTop.push(this.$refs.like.$el.offsetTop)
      // console.log(this.jumpTop)
      }, 50)
    })
  },
  methods: {
    // 我也不知道我在干什么 方正就是这么一个回事了
    detailimgloads () {
      // 暂时没有用处 就只是一个挂机的玩意
      console.log('加载完毕')
    },
    imgload () {
      // console.log('刷新了一下')
      this.$refs.scroll.refresh()
      this.navDebounce()
    },
    indexParams (index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.jumpTop[index], 300)
    },
    // 这个玩意是我的获取better scroll 滚动的距离
    scrolll (options) {
      // console.log(options)
      const optionY = -options.y
      const lenght = this.jumpTop.length
      for (let i = 0; i < lenght; i++) {
        // 1.到达这里会一直打印我的jumpTop的长度索引
        // 2.这里如果不想要我的这个代码这么长的话  就是把我的数组加长 在我的jumpTop加一个 Math.max_value
        // 3.注意点：这里有很大的坑一定要看明白了  不然只会白白浪费我的服务器资源  这个算法就不是很好
        if (this.currentIndex !== i && ((i < lenght - 1 && optionY >= this.jumpTop[i]) ||
        (i === lenght - 1 && optionY >= this.jumpTop[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.backTopScr(options)
    },
    shopcarclicks () {
      // console.log('bottom---')
      // console.log(this.imgswiper)
      const pruduct = {}
      pruduct.title = this.itemInfoCar.title
      pruduct.price = this.itemInfoCar.lowNowPrice
      pruduct.dec = this.itemInfoCar.desc
      pruduct.iid = this.iid
      pruduct.images = this.imgswiper[0]

      // *这里是现传入到我vuex种的action里面 而不是mutations里面 所有不用commit用dispacth
      // todo 这里可以优化一下  就是用一个mapActions  对就和mapGetters 那个的用法是一样的
      // !一定要学会去查看官方文档这个一定是非常重要的一个东西
      this.$store.dispatch('addCart', pruduct).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 94vh;
    overflow: hidden;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background: #fff;
  }
  /* .detail-swiper {
    height: 350px;
    overflow: hidden;
  } */
  .content {
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
  }
</style>
