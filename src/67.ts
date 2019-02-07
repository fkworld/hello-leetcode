/**
 * 67. 二进制求和
 * - https://leetcode-cn.com/problems/add-binary/
 * - 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * - 输入为非空字符串且只包含数字 1 和 0。
 */
export { }

const addBinary = (a: string, b: string): string => {
    // 字符串补齐
    const max = Math.max(a.length, b.length)
    a = a.padStart(max, '0')
    b = b.padStart(max, '0')
    // 加法器
    let result = ''
    let r = 0 // 临时位
    let flag = 0 // 是否进位
    for (let i = max - 1; i >= 0; i -= 1) {
        r = Number.parseInt(a[i]) + Number.parseInt(b[i]) + flag
        if (r <= 1) {
            result = `${r}` + result
            flag = 0
        } else {
            result = `${r - 2}` + result
            flag = 1
        }
    }
    if (flag === 1) { result = '1' + result }
    return result
};

// test
console.log(addBinary('1010', '1011'))
