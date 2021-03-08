import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cartList: []
  },
  // 这里搞了很多的抽离  但是说呢  怎么说呢 就是还有个常数可以抽离 只是我不想而已
  mutations,
  actions,
  modules: {
  },
  getters
})
