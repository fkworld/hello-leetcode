/*
 * @lc app=leetcode.cn id=1071 lang=typescript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
  // 如果有公因子，那么 A+B=B+A
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  // 求两个数的最大公约数
  const gcd = (a: number, b: number): number => (0 === b ? a : gcd(b, a % b));
  return str1.substr(0, gcd(str1.length, str2.length));
}
// @lc code=end
