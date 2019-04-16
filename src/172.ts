/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (37.32%)
 * Total Accepted:    10.3K
 * Total Submissions: 27.5K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
export const trailingZeroes = (n: number): number => {
    // 思路:计算末尾的0,只需要计算2和5的个数即可,因为2个个数远大于5,所以只需要计算拆分后5的个数即可
    let count = 0
    for (let i = 1; ; i += 1) {
        let x = 5 ** i
        if (n / x > 0) {
            count += Math.trunc(n / x)
        }else{
            break;
        }
    }
    return count
};

// test
console.log(trailingZeroes(100))