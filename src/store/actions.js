export default {
  addCart (context, payLoad) {
    return new Promise((resolve, reject) => {
      // 这里会获取到一个新的我发现的一个原来里面有的一个payLoad数据  让他的count加一就可以了
      const product = context.state.cartList.find(item => item.iid === payLoad.iid)
      if (product) {
        context.commit('addCounter', product)
        resolve('商品数量加一~')
      } else {
        context.commit('addToCart', payLoad)
        resolve('添加商品成功~')
      }
    })
  }
}
