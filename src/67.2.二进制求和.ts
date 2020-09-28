/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  // 不使用位运算，使用更易于理解的进制运算
  let result: number[] = []; // 结果数组
  let carrying = 0; // 进位
  // 倒序遍历
  for (
    let ia = a.length - 1, ib = b.length - 1;
    ia >= 0 || ib >= 0;
    ia -= 1, ib -= 1
  ) {
    let aNumber = a[ia] ? Number.parseInt(a[ia]) : 0;
    let bNumber = b[ib] ? Number.parseInt(b[ib]) : 0;
    // 计算位加法结果并写入数组
    let value = aNumber + bNumber + carrying;
    result.push(value % 2);
    // 计算进位
    carrying = Math.floor(value / 2);
  }
  if (carrying != 0) {
    result.push(carrying);
  }
  return result.reverse().join("");
}
export {};
// @lc code=end
