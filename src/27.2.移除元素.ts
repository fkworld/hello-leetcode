/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 后置双指针
  // 快指针，遍历到第一位
  let fast = nums.length - 1;
  // 慢指针，表示当前指针右边均为不符合，不包括本指针
  let slow = nums.length - 1;
  // 遍历快指针
  for (fast = nums.length - 1; fast >= 0; fast -= 1) {
    if (nums[fast] === val) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow -= 1;
    }
  }
  return slow + 1;
}
export {};
// @lc code=end
