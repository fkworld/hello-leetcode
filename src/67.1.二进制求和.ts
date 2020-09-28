/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
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
    result.push(aNumber ^ bNumber ^ carrying); // a^b的结果为加法结果
    // 计算进位
    // a&b直接进位，或者ab相加后再与carrying进位
    carrying = (aNumber & bNumber) | ((aNumber ^ bNumber) & carrying); // a&b的结果为进位数
  }
  if (carrying != 0) {
    result.push(carrying);
  }
  return result.reverse().join("");
}
export {};
// @lc code=end
