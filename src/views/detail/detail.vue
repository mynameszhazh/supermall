<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" :pullUpLoad='true' ref="scroll">
        <!-- 我这里的轮播图一直出问题  就是图片老是只有一张这样子  有时候又是可以的 但是大部分是不可以的   -->
      <detail-swiper :imgswiper='imgswiper'
      :detailimgloads='detailimgloads'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info></detail-shop-info>
      <detail-img-info :detailInfo='detailInfo' @imgload='imgload'></detail-img-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar'
import DetailSwiper from './childComps/detailSwiper'
import DetailBaseInfo from './childComps/detailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImgInfo from './childComps/DetailImgInfo'
import Scroll from 'components/common/scroll/scroll'

import { detailData, Goods } from 'network/detail'
export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailImgInfo
  },
  data () {
    return {
      iid: null,
      imgswiper: [],
      goods: {},
      detailInfo: {}
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
      // console.log(this.imgswiper)
      // console.log(data.columns)

      // 4.获取我的首页商品库
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // console.log(this.goods)
      // console.log(data.shopInfo.services.lenght)
      // console.log(data.shopInfo.services instanceof Array)

      // 5.获取我的详情里面的信息
      this.detailInfo = data.detailInfo
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
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
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
