/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  // 二分法
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      // 找到则直接返回
      return mid;
    } else if (mid * mid > x) {
      // 过大，则修改右边界
      right = mid - 1;
    } else {
      // 过小，则修改左边界
      left = mid + 1;
    }
  }
  // 没找到则以小数为准
  return right;
}
export {};
// @lc code=end
