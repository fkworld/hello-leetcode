/**
 * 14.最长公共前缀
 * - https://leetcode-cn.com/problems/longest-common-prefix/description/
 * - 编写一个函数来查找字符串数组中的最长公共前缀。
 * - 如果不存在公共前缀，返回空字符串 ""。
 */
export { }

const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) {
        return ''
    }
    if (strs.length === 1) {
        return strs[0]
    }
    let min_string_length = strs[0].length
    for (let s of strs) {
        min_string_length = Math.min(min_string_length, s.length)
    }
    for (let i = 0; i < min_string_length; i++) {
        // 对比的char
        let char = strs[0][i]
        for (let s of strs) {
            if (char !== s[i]) {
                if (i - 1 < 0) {
                    return ''
                } else {
                    return strs[0].slice(0, i)
                }
            }
        }
    }
    return strs[0].slice(0, min_string_length)
};

// test
let strs = ["flower", "flow", "flight"]
let r = longestCommonPrefix(strs)
console.log(r)