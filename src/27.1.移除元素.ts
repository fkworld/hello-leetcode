/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 前后双指针
  // 前指针从0开始，表示当前指针的左边都是有效的，包括当前指针
  let a = 0;
  // 后指针从最后一项开始，表示当前指针的右边都是无效的，不包括当前指针
  let b = nums.length - 1;
  // 从头开始遍历，遍历到双指针重合
  while (a <= b) {
    if (nums[a] === val) {
      // 发现val值后，从后交换一个非val值
      while (b >= a) {
        if (nums[b] != val) {
          // 交换成功后a+=1
          [nums[a], nums[b]] = [nums[b], nums[a]];
          a += 1;
          break;
        }
        b -= 1;
      }
    } else {
      // 不是val值，a+=1
      a += 1;
    }
  }
  return a;
}
export {};
// @lc code=end
