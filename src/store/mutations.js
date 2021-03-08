export default {
  // 注意点:  在我们的mutations里面最好不要有if这种由判断的东西在里面  他最好就是只用一个结果的函数在里面
  addCounter (state, payLoad) {
    payLoad.count++
  },
  addToCart (state, payLoad) {
    payLoad.count = 1
    payLoad.checked = true
    state.cartList.push(payLoad)
  }
}
