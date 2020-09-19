/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.67%)
 * Likes:    2194
 * Dislikes: 0
 * Total Accepted:    467.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
function reverse(x: number): number {
  // 解法1：104ms。转为string后倒置
  // let max_number = 2 ** 31 - 1;
  // let flag = x > 0 ? 1 : -1;
  // let reverse_number = Number.parseInt(
  //   [...Math.abs(x).toString()].reverse().join("")
  // );
  // return reverse_number < max_number ? flag * reverse_number : 0;
  // 解法1优化：100ms。使用位运算简化溢出判定方式 x|0，在不溢出时为x
  // let flag = x > 0 ? 1 : -1;
  // let reverse_number = Number.parseInt(
  //   [...Math.abs(x).toString()].reverse().join("")
  // );
  // return (reverse_number | 0) === reverse_number ? flag * reverse_number : 0;
  // 解法2：92ms。321 = 123%10 12%10 1%10
  let result = 0;
  while (x != 0) {
    result = result * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
}
// @lc code=end
