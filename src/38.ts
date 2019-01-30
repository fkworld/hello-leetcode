/**
 * 38. 报数
 * - https://leetcode-cn.com/problems/count-and-say/
 * - 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。
 * - 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 */
export { }

const countAndSay = (n: number): string => {
    if (n === 1) { return `${1}` }
    const f = (str: string): string => {
        let result = ``
        let char = str[0]
        let count = 0
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === char) {
                count += 1
            } else {
                result += `${count}${char}`
                char = str[i]
                count = 1
            }
            result += `${count}${char}`
        }
        return result
    }

    console.log(f(`1`))

    let r = `${1}`
    for (let i = 1; i <= n; i += 1) {
        r = f(r)
    }
    return r
};

// test
console.log(countAndSay(1))
