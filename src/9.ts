/**
 * 9.回文数
 * - https://leetcode-cn.com/problems/palindrome-number/description/
 * - 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * - 你能不将整数转为字符串来解决这个问题吗？
 */
export { }

const isPalindrome = (x: number): boolean => {
    // 负数一定不是回文数
    if (x < 0) { return false }

    let len = x.toString().length
    // 子方法：获取整数x倒数第n位的值（从0开始）
    const f = (x: number, index: number) => {
        return Math.floor(x / (10 ** index)) % 10
    }
    for (let i = 0; i < len / 2; i++) {
        if (f(x, i) != f(x, len - i - 1)) {
            return false
        }
    }
    return true
}