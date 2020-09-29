/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 计算排列组合，n为底数，n>=m
 * @param n
 * @param m
 */
function C(n: number, m: number) {
  let result = 1;
  while (m >= 1) {
    result *= n / m;
    n -= 1;
    m -= 1;
  }
  return result;
}
function climbStairs(n: number): number {
  // 分类讨论：全部1级，逐步减少2个1级
  let sum = 0; // 总种类
  let oneStepCount = n; // 当前讨论的1个台阶的个数
  let allStepCount = n; // 当前讨论的总台阶个数
  while (oneStepCount >= 0) {
    sum += C(allStepCount, oneStepCount); // 此种情况下的组合个数
    oneStepCount -= 2; // 讨论下一种情况
    allStepCount -= 1;
    // console.log(sum, oneStepCount, allStepCount);
  }
  return sum;
}
// @lc code=end
