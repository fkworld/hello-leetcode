/*
 * @lc app=leetcode.cn id=1550 lang=typescript
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
function threeConsecutiveOdds(arr: number[]): boolean {
  // 使用位运算判断奇偶：n&1===1为奇数
  for (let i = 0, count = 0; i < arr.length; i += 1) {
    if ((arr[i] & 1) === 1) {
      count += 1;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }
  return false;
}
// @lc code=end
