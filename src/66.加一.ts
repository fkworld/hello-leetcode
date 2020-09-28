/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  // add为进位
  for (let i = digits.length - 1, add = 1; i >= 0; i -= 1) {
    digits[i] = digits[i] + add;
    if (digits[i] > 9) {
      // 有进位，则保留进位
      digits[i] -= 10;
      add = 1;
    } else {
      // 无进位则直接返回
      return digits;
    }
  }
  // 如果遍历结束，说明首位依然有进位，则在数组首位添加1
  digits.unshift(1);
  return digits;
}
// @lc code=end
