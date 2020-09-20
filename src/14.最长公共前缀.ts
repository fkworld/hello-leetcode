/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  // 选取第一个字符串进行遍历
  for (let i = 0; i <= strs[0]?.length ?? 0; i += 1) {
    // 由短到长遍历
    let common = strs[0].substring(0, i);
    if (strs.some((str) => !str.startsWith(common))) {
      // 如果有字符串不包含当前公共前缀，则返回前一个公共前缀
      return strs[0].slice(0, i - 1);
    } else {
      // 否则继续遍历
      continue;
    }
  }
  // 遍历结束如果没有返回，则返回第一个字符串
  return strs[0] ?? "";
}
// @lc code=end
