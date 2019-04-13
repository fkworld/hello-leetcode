/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (38.50%)
 * Total Accepted:    31.3K
 * Total Submissions: 80.5K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = (s: string): boolean => {
    // 思路：使用正则表达式剔除非字母/数字部分
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    return s === s.split("").reverse().join("")
};

// test
console.log(isPalindrome("A man, a plan, a canal: Panama"))

