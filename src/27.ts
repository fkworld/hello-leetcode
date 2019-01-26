/**
 * 27. 移除元素
 * - https://leetcode-cn.com/problems/remove-element/
 * - 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * - 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * - 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */
export { }

const removeElement = (nums: number[], val: number) => {
    let i = 0   // 慢指针
    for (let j = 0; j < nums.length; j += 1) {
        if (nums[j] === val) {
            nums[j] = nums[i]
            i += 1
        }
    }
    nums.reverse()
    return nums.length - i
};

// test
let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2
let r = removeElement(nums, val)
console.log(r, nums)