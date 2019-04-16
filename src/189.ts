/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (36.84%)
 * Total Accepted:    44.5K
 * Total Submissions: 120.3K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的原地算法。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = (nums: number[], k: number) => {
    // 思路:当成一个链表
    for (let i = 0; i < k; i += 1) {
        nums.unshift(nums.pop())
    }
    // return nums
};

const rotate_2 = (nums: number[], k: number) => {
    // 思路:反转1次后,分别反转前后两部分
    // 整体反转
    nums = nums.reverse()
    k = k % nums.length
    // 前k部分反转
    for (let i = 0; i < k / 2; i += 1) {
        [nums[i], nums[k - 1 - i]] = [nums[k - 1 - i], nums[i]]
    }
    // 后部分反转
    for (let i = 0; i < (nums.length - k) / 2; i += 1) {
        [nums[k + i], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[k + i]]
    }
    // return nums
};

const rotate_3 = (nums: number[], k: number) => {
    // 思路:逐个移动
    for (let i = 0; i < k; i += 1) {
        let x = nums[nums.length - 1]
        for (let j = nums.length - 1; j > 0; j -= 1) {
            nums[j] = nums[j - 1]
        }
        nums[0] = x
    }
    // return nums
};

// test
let nums = [-2]
let k = 2
// console.log(rotate([...nums], k))
console.log(rotate_2([...nums], k))
// console.log(rotate_3([...nums], k))
