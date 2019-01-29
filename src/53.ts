/**
 * 53. 最大子序和
 * - https://leetcode-cn.com/problems/maximum-subarray/
 * - 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
export { }

const maxSubArray = (nums: number[]): number => {
    let res = nums[0];
    let sum = 0;
    for (let num of nums) {
        if (sum > 0)
            sum += num;
        else
            sum = num;
        res = Math.max(res, sum);
    }
    return res;
};