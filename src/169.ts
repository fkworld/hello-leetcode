/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (58.20%)
 * Total Accepted:    35.5K
 * Total Submissions: 60.7K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = (nums: number[]): number => {
    // 思路:Map
    let a = new Map()
    for (let i = 0; i < nums.length; i += 1) {
        a.set(nums[i], (a.get(nums[i]) || 0) + 1)
    }
    console.log(a)
    let r: number;
    a.forEach((v, k) => {
        if (v > nums.length / 2) {
            r = k
        }
    })
    return r
};

let list = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(list))