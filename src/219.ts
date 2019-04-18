/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (33.74%)
 * Total Accepted:    11.8K
 * Total Submissions: 34.9K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */
export { }

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    // 思路：使用map存储，value-index，遍历+替换
    let map = new Map()
    for (let i = 0, length = nums.length; i < length; i += 1) {
        let v = nums[i]
        if (map.has(v)) {
            if (i - map.get(v) <= k) {
                return true
            } else {
                map.set(v, i)
            }
        } else {
            map.set(v, i)
        }
    }
    return false
};

// test
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
