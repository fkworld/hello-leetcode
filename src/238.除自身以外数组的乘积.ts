/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  // 左右乘积
  let ans: number[] = [];
  let left = 1; // 左边数乘积初始值
  let right = 1; // 右边数乘积初始值
  // 先写入左边
  for (let i = 0; i < nums.length; i += 1) {
    left *= nums[i - 1] ?? 1;
    ans[i] = left;
  }
  // 再写入右边
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    right *= nums[i + 1] ?? 1;
    ans[i] *= right;
  }
  return ans;
}
// @lc code=end
