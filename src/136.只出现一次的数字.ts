/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // 可以用位运算中的异或实现，异或满足：0^a=a 0^a^a=0 交换律结合律
  // 使用Set实现
  let set: Set<number> = new Set();
  nums.forEach(num => {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  });
  return [...set.values()][0];
}
// @lc code=end

export {};
