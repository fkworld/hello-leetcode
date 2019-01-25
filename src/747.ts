/**
 * https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/771/
 * - 在一个给定的数组nums中，总是存在一个最大元素。
 * - 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * - 如果是，则返回最大元素的索引，否则返回-1。
 */

export const dominantIndex = (nums: number[]): number => {
    // 遍历出最大值
    let max = nums[0]
    let max_index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            max_index = i
        }
    }
    // 删除最大值，求出剩下数组元素中的最大值
    nums[max_index] = -1 // 考虑数组元素的取值范围，可以置于-1
    let smax = Math.max(...nums)
    if (max >= smax * 2) {
        return max_index
    } else {
        return -1
    }
};