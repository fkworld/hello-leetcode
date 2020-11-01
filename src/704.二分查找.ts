/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let low = 0; // 低index
  let high = nums.length - 1; // 高index
  while (low <= high) {
    if (nums[low] === target) {
      return low;
    }
    if (nums[high] === target) {
      return high;
    }
    let middle = Math.floor((low + high) / 2); // floor和ceil都可以
    if (nums[middle] > target) {
      high = middle - 1; // 需要有-1和+1操作，否则会导致死循环
    } else if (nums[middle] < target) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
// @lc code=end
