/**
 * 38. 报数
 * - https://leetcode-cn.com/problems/count-and-say/
 * - 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。
 * - 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 */
export { }

const countAndSay = (n: number): string => {
    if (n === 1) { return '1' }
    let source = countAndSay(n - 1)
    let result = ''
    let char = source[0]
    let count = 0
    for (let i = 0; i < source.length; i += 1) {
        if (source[i] === char) {
            count += 1
        } else {
            result += `${count}${char}`
            char = source[i]
            count = 1
        }
    }
    result += `${count}${char}`
    return result
};

// test
console.log(countAndSay(3))
