/**
 * 防抖函数
 * @param {Function} fn 需要防抖的函数
 * @param {Number} delay 防抖时间
 * @returns {Function} 返回一个防抖函数
 */

function debounce(fn, delay, ...params) {
  let timer = null;
  return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
      fn.apply(this, [...params]);
    }, delay);
  };
}

let actionFn = function (a, b) {
  console.log('回调', a, b)
  console.log(Date.now());
}

const cb1 = debounce(actionFn, 500, 'actionFn参数1', '参数2')
// setInterval(cb1, 1000)

/**
 * 节流函数
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 节流时间
 * @returns {Function} 返回一个节流函数
 */

function throttle(fn, time, ...params) {
  let lastTime = 0;
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > time) {
      fn.apply(this, [...params]);
      lastTime = nowTime;
    }

  };
}
const cb2= throttle(actionFn, 2000, '123123', '参数2')

// setInterval(cb2, 10)
 

/**
 * 节流函数最后一次必须触发
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 节流时间
 * @param {*} 返回一个节流函数
 */
function throttleLast(fn, delay, ...params) {
  let lastTime = null;
  let timer = null;
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn.apply(this, [...params]);
      lastTime = nowTime;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, [...params]);
        lastTime = nowTime;
      }, delay);
    }
  };
}

// setInterval(throttleLast(actionFn, 1000, 'actionFn参数1', '参数2'), 500)