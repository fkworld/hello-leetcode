/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (60.52%)
 * Total Accepted:    20.4K
 * Total Submissions: 33.4K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = (numRows: number): number[][] => {
    if (0 === numRows) {
        return []
    }
    if (1 === numRows) {
        return [[1]]
    }
    let result = [[1]]
    for (let i = 1; i < numRows; i += 1) {
        let pre_line = result[i - 1]
        let line = []
        for (let j = 0; j < i + 1; j += 1) {
            line[j] = (pre_line[j] || 0) + (pre_line[j - 1] || 0)
        }
        result.push(line)
    }
    return result
};

// test
console.log(generate(5))