/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
export const isUgly = (num: number): boolean => {
    if (num === 0) { return false }
    for (; ; num /= 2) {
        if (num === 1) { return true }
        if (!Number.isInteger(num)) { num *= 2; break };
    }
    for (; ; num /= 3) {
        if (num === 1) { return true }
        if (!Number.isInteger(num)) { num *= 3; break; }
    }
    for (; ; num /= 5) {
        if (num === 1) { return true }
        if (!Number.isInteger(num)) { return false }
    }
};

