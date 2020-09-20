/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  // 栈
  let stack: string[] = [];
  let sArray = [...s];
  for (let i = 0; i < sArray.length; i += 1) {
    let v = sArray[i];
    if ("([{".includes(v)) {
      // 入栈
      stack.push(v);
    } else if (
      // 3种对应情况下出栈
      (v === ")" && stack.pop() === "(") ||
      (v === "]" && stack.pop() === "[") ||
      (v === "}" && stack.pop() === "{")
    ) {
      continue;
    } else {
      // 入、出栈均失败则直接返回false
      return false;
    }
  }
  // 结束后，如果栈不为空，返回false
  return stack.length === 0;
}
// @lc code=end
