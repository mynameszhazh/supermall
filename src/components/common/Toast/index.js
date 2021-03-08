import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const Toastcontructor = Vue.extend(Toast)
  // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new Toastcontructor()
  // 3.将我的组件对象，手动挂载到某一个元素上  div
  toast.$mount(document.createElement('div'))
  // 4. 将我对应的元素放到页面上，还有就是 toast.$el 就是上面那个div
  document.body.appendChild(toast.$el)
  // 5.将我这个$toast的方法放到vue原型上面，我就可以很好的来调用这个玩意了
  Vue.prototype.$toast = toast
}
export default obj
