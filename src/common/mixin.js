import backtop from '@/components/content/backTop/backTop'

export const backTopMixin = {
  components: {
    backtop
  },
  methods: {
    // backtop  返回顶部使用的方法
    backclick () {
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    backTopScr (option) {
      this.isshow = -option.y > 1000
    }
  },
  data () {
    return {
      isshow: false
    }
  }
}
