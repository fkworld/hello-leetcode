/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
export function addDigits(num: number): number {
    return num === 0 ? 0 : num % 9 || 9
};

