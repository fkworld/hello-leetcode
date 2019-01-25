/**
 * 26.删除排序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * - 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * - 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */

export { }

// 2019-1-26 自己的解法
// 遍历数组，遇到重复的置其为flag，flag为最大值+1，然后再次对数组进行排序即可
// 设置一个count变量记录重复元素个数，返回值为数组长度-重复元素个数
// 但是我也不知道空间复杂度是不是O(1)
const removeDuplicates = (nums: number[]): number => {
    let target: number = Math.max(...nums) + 1
    let count: number = 0   // 重复元素计数
    for (let i = 0; i < nums.length; i += 1) {
        if (i === 0) { continue }
        if (nums[i] === nums[i - 1]) {
            nums[i - 1] = target
            count += 1
        } else {
            continue
        }
    }
    nums.sort((a, b) => { return a - b })
    return nums.length - count
}

// 2019-1-26 官方解法，双指针法
const removeDuplicates2 = (nums: number[]): number => {
    if (nums.length === 0) { return 0 }
    let i: number = 0
    for (let j = 1; j < nums.length; j += 1) {
        if (nums[j] != nums[i]) {
            i += 1
            nums[i] = nums[j]
        }
    }
    return i + 1
}

// test
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let r = removeDuplicates2(nums)
console.log(r)