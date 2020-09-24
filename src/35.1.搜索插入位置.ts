/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 使用高级语法;
  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.indexOf(target);
}
export {};
// @lc code=end
