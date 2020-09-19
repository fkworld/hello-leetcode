/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  // 解法1：176ms。转为字符串。
  let forward = x.toString();
  let backward = [...x.toString()].reverse().join("");
  return forward === backward;
}
// @lc code=end
