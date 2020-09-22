/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  // 优化的暴力解法
  if (needle.length === 0) {
    return 0;
  }
  let needle_first = needle[0];
  let needle_last = needle[needle.length - 1];
  let needle_length = needle.length;
  for (let i = 0; i < haystack.length; i += 1) {
    // 检查首字母 -> 检查尾字母 -> 检查所有
    if (haystack[i] != needle_first) {
      continue;
    }
    if (haystack[i + needle_length - 1] != needle_last) {
      continue;
    }
    if (!checkAll(haystack, needle, i)) {
      continue;
    }
    return i;
  }
  return -1;
}
/**
 * 暴力解法核心
 * @param haystack
 * @param needle
 * @param i 从序号i开始
 */
function checkAll(haystack: string, needle: string, index: number): boolean {
  for (let i = 0; i < needle.length; i += 1) {
    if (needle[i] != haystack[i + index]) {
      return false;
    }
  }
  return true;
}
export {};
// @lc code=end
