/**
 * 防抖函数
 * @param {Function} fn 需要防抖的函数
 * @param {Number} delay 防抖时间
 * @returns {Function} 返回一个防抖函数
 */

function debounce(fn, delay, ...params1) {
  let timer = null;
  return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
      fn.apply(this, [...params1]);
    }, delay);
  };
}

let actionFn = function (a, b) {
  console.log('回调', a, b)
}

const cb = debounce(actionFn, 500, 'actionFn参数1', '参数2')
// setInterval(cb, 1000)

/**
 * 节流函数
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 节流时间
 * @returns {Function} 返回一个节流函数
 */

function throttle(fn, delay, ...params1) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, [...params1]);
      timer = null;
    }, delay);
  };
}