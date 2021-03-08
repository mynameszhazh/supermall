<template>
  <div  class="cartItemList">
      <div class="check-item">
        <check :ischeckshow='itemInfo.checked' @click.native="checkchange"></check>
      </div>
      <!-- 注意点: 这里刚刚我又来一个注意点就是我在标签这里要弄我这个玩意的话是不能直接的v-bind才可以 -->
      <div class="item-img"><img :src="itemInfo.images" alt=""></div>
      <div class="item-info">
        <div class="info-title">{{itemInfo.title}}</div>
        <div class="info-dec">{{itemInfo.dec}}</div>
        <div class="info-price">
          <!-- 这是个过滤器就是用来练习一下 -->
          <span class="price-price">{{itemInfo.price | priceFilter()}}</span>
          <span class="price-count">×{{itemInfo.count}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import check from 'components/content/check/check'

export default {
  name: 'CartItemList',
  computed: {
  },
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    // console.log(this.carttList)
  },
  filters: {
    priceFilter: function (value, type) {
      return '$' + value
    }
  },
  components: {
    check
  },
  methods: {
    checkchange () {
      // console.log(this.iteminfo)
      this.$emit('refreshcheck')
      this.itemInfo.checked = !this.itemInfo.checked
      // this.carttList.checked = !this.carttList.checked
    }
  }
}
</script>

<style scoped>
  .cartItemList {
    width: 100%;
    font-size: 0px;
    padding: 5px;
    border-bottom: 1px solid gray;
    display: flex;
    margin-top: 10px;
  }
  .check-item {
    width: 30px;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .item-img {
    width: 80px;
    height: 100px;
  }
   .item-info {
    flex: 1;
    font-size: 17px;
    color: #333;
    padding:5px 10px;
    position: relative;
    overflow: hidden;
  }
  .info-title, .info-dec {
    /* 超出隐藏 */
    overflow: hidden;
    /* 不换行 */
    white-space: nowrap;
    /* 使用我的省略号来代替替换文字 */
    text-overflow: ellipsis;
    padding: 10px 0;
  }

  .info-dec {
    font-size: 12px;
    color: gray;
    text-indent: 1em;
  }

  .item-img img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .info-price {
    display: flex;
    /* 让我的元素到两边来排布先放好来两边在中间区别 */
    justify-content: space-between;
    /* text-align: center; */
  }
  .info-price span {
    flex: 1;
  }
  .price-price {
    font-size: 20px;
    color: orangered;
    font-weight: 700;
  }
  .price-count {
    font-size: 23px;
    color: gray;
    margin-left: 170px;
    box-sizing: border-box;
  }
</style>
