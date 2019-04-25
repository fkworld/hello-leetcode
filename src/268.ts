/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = (nums: number[]): number => {
    // 思路：使用set
    // let set = new Set(nums)
    // for (let i = 0; ; i++) {
    //     if (!set.has(i)) {
    //         return i
    //     }
    // }
    // 思路2：使用异或操作符
    let x = nums.length
    for (let i = 0, length = nums.length; i < length; i += 1) {
        x ^= nums[i]
        x ^= i
    }
    return x
};

