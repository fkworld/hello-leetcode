/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 动态规划，若前一个元素大于0，则将其加到当前元素上
  // maxSums的含义，表示以此元素结尾时字串的最大值
  let maxSums = [...nums];
  maxSums.forEach((v, i) => {
    if (maxSums[i - 1] > 0) {
      maxSums[i] += maxSums[i - 1];
    }
  });
  return Math.max(...maxSums);
}
// @lc code=end
