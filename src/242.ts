/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram(s: string, t: string): boolean {
    // 思路：利用map；如果仅有26个字母可以利用array
    if (s.length != t.length) { return false }
    let map = new Map()
    for (let i = 0, length = s.length; i < length; i += 1) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
        map.set(t[i], (map.get(t[i]) || 0) - 1)
    }
    return [...map.values()].every(v => v === 0)
};

