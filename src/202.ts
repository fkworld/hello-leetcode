/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (52.35%)
 * Total Accepted:    15.8K
 * Total Submissions: 30.1K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到
 * 1。如果可以变为 1，那么这个数就是快乐数。
 * 
 * 示例: 
 * 
 * 输入: 19
 * 输出: true
 * 解释: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 */

// 下一个数字
const next_number = (n: number): number => {
    let s = n.toString()
    let result = 0
    for (let c of s) {
        result += Number(c) ** 2
    }
    return result
}

// 记录 unhappy-number
// 可惜并不知道哪种number比较多
const unhappy_number = new Set()

/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = (n: number): boolean => {
    // 判断是否有重复的数字
    let same_number = new Set()
    for (; ;) {
        if (n === 1) { return true }
        if (unhappy_number.has(n)) { return false }
        if (same_number.has(n)) {
            // 照理说应该全放,但是unhappy-number只是辅助作用,放几个意思意思即可
            unhappy_number.add(n)
            return false
        }
        same_number.add(n)
        n = next_number(n)
    }
};

// test
console.log(isHappy(999))

