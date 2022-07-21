// 因为 threeJS 的中心点是在视图中心点，所以此处的 *2 -1 得到的是 [0, window.innerWidth] 的闭区间
export const pointRandom = () => Math.random() * 2 - 1;

export const random = (multiple = 1, negative = false) => {
  const number = Math.random() * multiple;
  if (!negative) return number;
  const n = Math.random() * 10;
  return n > 5 ? number : number * -1;
};

export function throttle(fn: Function, delay = 100) {
  let timer = null as any;
  // @ts-ignore
  let _this = this;
  return (...rest: any[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(_this, rest);
    }, delay);
  };
}

export function debounce(fn: Function, delay = 100) {
  let timer = null as any;
  // @ts-ignore
  let _this = this;
  return (...rest: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, rest);
    }, delay);
  };
}
