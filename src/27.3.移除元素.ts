/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 解法3：覆盖法，遍历到非val值则覆盖到数组前面
  let index = 0;
  nums.forEach((num) => {
    if (num != val) {
      nums[index] = num;
      index += 1;
    }
  });
  return index;
}
export {};
// @lc code=end
