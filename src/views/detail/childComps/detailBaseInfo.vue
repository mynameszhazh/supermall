<template>
    <div class="base-info" v-if="Object.keys(goods).lenght !==0">
      <div class="base-title">{{goods.title}}</div>
      <button @click="click">按钮</button>
     <div class="base-price">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        <!-- <span>{{goods.services[3].name}}</span> -->
      </div>
      <!-- <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[3].name}}</span>
      </div> -->
       <!-- <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.lenght - 1"
        :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
        </span>
      </div> -->
    </div>
</template>

<script>

export default {
  name: 'datailBaseInfo',
  components: {

  },
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  created () {
    // console.log(this.$refs.navbar)

  },
  mounted () {
  },
  methods: {
    click () {
      // 我是真不知道这个玩意我获取不到  是怎么回事  看不懂
      // console.log(this.goods.services.lenght)
      console.log(this.goods.columns[0])
    }
  }
}
</script>

<style scoped>
  .base-info {
    margin-top: 20px;
  }
</style>
