/**
 * https://leetcode-cn.com/problems/reverse-integer/description/
 * - 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * - 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 */
export { }

const reverse = (x: number): number => {
    let is_minus = false
    if (x < 0) { is_minus = true }
    let s = Math.abs(x).toString()
    let new_s_array = Array.of()
    for (let c of s) {
        new_s_array.unshift(c)
    }
    let new_s = new_s_array.toString()
    new_s = new_s.replace(/,/g, '')
    if (Math.abs(Number(new_s)) > (2 ** 31 - 1)) { return 0 }
    if (is_minus) {
        return -Number(new_s)
    } else {
        return Number(new_s)
    }
}