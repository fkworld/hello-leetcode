/**
 * 35. 搜索插入位置
 * - https://leetcode-cn.com/problems/search-insert-position/
 * - 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * - 你可以假设数组中无重复元素。
 */
export { }
const searchInsert = (nums: number[], target: number) => {
    if (nums[0] >= target) { return 0 }
    for (let i = 0; i < nums.length; i += 1) {
        // 相等则直接返回其索引
        if (nums[i] === target) { return i }
        if (i < nums.length - 1 && nums[i] < target && nums[i + 1] > target) {
            return i + 1
        }
    }
    return nums.length
};

// test
let r = searchInsert([1, 3], 3)
console.log(r)