import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/Toast'
import lazyload from 'vue-lazyload'

Vue.use(Toast)
// !它的后面还可以传入内容   可以指定加载时的图片之类的东西在这里  还有其它的参数自己去看官网
Vue.use(lazyload, {
  loading: require('./assets/images/detail/cart.png')
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
