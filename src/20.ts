/**
 * 20.有效的括号
 * - https://leetcode-cn.com/problems/valid-parentheses/
 * - 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * - 有效字符串需满足：
 * - 左括号必须用相同类型的右括号闭合。
 * - 左括号必须以正确的顺序闭合。
 * - 注意空字符串可被认为是有效字符串。
 */

export const isValid = (s: string): boolean => {
    let stack = Array.of()
    // 特殊情况
    if (s.length % 2 === 1) { return false }
    if (s.length === 0) { return true }
    // 正常处理
    stack.push(s[0])
    for (let i = 1; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(s[i])
                break;
            case '{':
                stack.push(s[i])
                break;
            case '[':
                stack.push(s[i])
                break;
            case ')':
                if (stack.pop() != '(') { return false }
                break;
            case '}':
                if (stack.pop() != '{') { return false }
                break;
            case ']':
                if (stack.pop() != '[') { return false }
                break;
            default:
                break;
        }
    }
    if (stack.length != 0) { return false } else { return true }
};

// test
let s = '['
let r = isValid(s)
console.log(r)