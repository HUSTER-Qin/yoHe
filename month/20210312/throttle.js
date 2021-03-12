// 节流

// 在一段时间内 一定执行一次

function throttle(fn, time = 300) {
  let timer = null;

  return function () {
    if (timer) return;
   timer =  setTimeout(() => {
      fn.apply(this, arguments);
      clearTimeout(timer);
      timer = null;
    }, timer);
  };
}

// debounce 防抖
// 多次调用 只执行最后一次

function debounce(fn, time = 300) {
  let timer = null;

  return function () {
    clearTimeout(timer);
    timer =  setTimeout(() => {
      fn.apply(this, arguments);

      timer = null;
    }, timer);
  };
}
