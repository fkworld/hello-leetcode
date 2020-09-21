/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  // 双指针
  let a = 0;
  let b = 0;
  // 遍历b指针
  for (b = 0; b < nums.length; b += 1) {
    if (nums[a] != nums[b]) {
      // 如果其指向与a不同，则a+=1后与b交换
      a += 1;
      [nums[a], nums[b]] = [nums[b], nums[a]];
    } else {
      // 否则b+=1
      continue;
    }
  }
  return a + 1;
}
// @lc code=end
