/**
 * https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/772/
 * - 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * - 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * - 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

export const plusOne = (digits: number[]): number[] => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    return [1, ...digits]
};

// test
let nums = [9]
let r = plusOne(nums)
console.log(r)