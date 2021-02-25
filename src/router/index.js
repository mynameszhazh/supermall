import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('@/views/home/home')
const Category = () => import('@/views/category/category')
const Cart = () => import('@/views/cart/cart')
const Profile = () => import('@/views/profile/profile')
const detail = () => import('@/views/detail/detail')

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // 指定的组件
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]
const router = new VueRouter({
  routes,
  // url模式
  mode: 'history'
})

export default router
