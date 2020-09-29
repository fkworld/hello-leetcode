/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 牛顿迭代主函数
 * @param x
 * @param C
 */
function fx(x: number, C: number): number {
  return x ** 2 - C;
}
/**
 * 牛顿迭代积分函数
 * @param x
 */
function fpx(x: number) {
  return x * 2;
}
function mySqrt(x: number): number {
  // 牛顿迭代
  if (x === 0) {
    // 在x=0时，会使得fpx(x)===0，即分母为0，无解
    return 0;
  }
  const C = x; // 保留C
  let result = C; //从C开始迭代
  let newResult = result - fx(result, C) / fpx(result); // 首次迭代
  // 由于只需要保留整数部分，则可以设置两个迭代差大于1时继续迭代
  while (result - newResult >= 1) {
    result = newResult;
    newResult = result - fx(result, C) / fpx(result);
  }
  // 迭代完毕后返回整数部分
  return Math.floor(newResult);
}
export {};
// @lc code=end
