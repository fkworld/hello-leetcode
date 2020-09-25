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

/** 缓存 */
let cache = ["", "1"];

function countAndSay(n: number): string {
  if (!cache[n]) {
    // 无缓存则进行一次计算
    for (let i = cache.length; i <= n; i += 1) {
      cache[i] = next(cache[i - 1]);
    }
  }
  return cache[n];
}

export {};
// @lc code=end
