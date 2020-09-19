/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  // 定义罗马数字与整数的一一对应关系
  const maps = new Map(
    Object.entries({
      // 标准
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      // 特殊
      IV: -1,
      IX: -1,
      XL: -10,
      XC: -10,
      CD: -100,
      CM: -100,
    })
  );
  // 将字符切割为单个罗马数字
  let a = [...s].map((v, i, array) => {
    if (maps.has(v + array[i + 1])) {
      // 与下一个组合
      return v + array[i + 1];
    } else {
      // 单独
      return v;
    }
  });
  // 将罗马数字相加
  let b = a.reduce((sum, v) => {
    sum += maps.get(v) ?? 0;
    return sum;
  }, 0);
  return b;
}
// @lc code=end
