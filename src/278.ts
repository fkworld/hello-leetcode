/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
export const solution = (isBadVersion: (i: number) => boolean): Function => {
    console.log(1)
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n: number) {
        // 思路：二分
        let min = 0
        let max = n
        for (; ;) {
            let mid = Math.trunc((min + max) / 2)
            if (isBadVersion(mid)) {
                max = mid
            } else {
                min = mid
            }
            if (max === min + 1) {
                return max
            }
        }
    };
};

