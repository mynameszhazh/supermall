// 这是一个防抖的方法 已经是封装好的  注意 const 这个玩意是要给常量  不能更改
export function debounce (fnc, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fnc.apply(this, args)
      // 验证一下 我这个防抖的效果   牛不牛逼
      // console.log('---')
    }, delay)
  }
}
