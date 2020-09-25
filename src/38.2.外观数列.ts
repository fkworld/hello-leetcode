/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start

/**
 * 核心算法：根据给定值求下一个
 * @param s
 */
function next(s: string): string {
  let count = 0;
  let value = s[0];
  let next = "";
  [...s].forEach((v) => {
    if (v === value) {
      count += 1;
    } else {
      next += `${count}${value}`;
      count = 1;
      value = v;
    }
  });
  next += `${count}${value}`;
  return next;
}

function countAndSay(n: number): string {
  // 逆向运算：递归
  if (n === 1) {
    return "1";
  } else {
    return next(countAndSay(n - 1));
  }
}
// @lc code=end
