/**
 * https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/770/
 * - 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
 * - 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * - 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 */

export const pivotIndex = function (nums: number[]): number {
    let left_sum_array = []
    let right_sum_array = []
    left_sum_array[-1] = 0
    right_sum_array[-1] = 0
    for (let i = 0; i < nums.length; i++) {
        left_sum_array[i] = left_sum_array[i - 1] + nums[i]
        right_sum_array[i] = right_sum_array[i - 1] + nums[nums.length - i - 1]
    }
    // console.log(left_sum_array)
    // console.log(right_sum_array)
    for (let i = 0; i < nums.length; i++) {
        if (left_sum_array[i - 1] === right_sum_array[nums.length - i - 2]) {
            return i
        }
    }
    return -1
};


// test
let nums = [-1, -1, 0, 1, 1, 0]
let r = pivotIndex(nums)
console.log(r)