/**
 * 28. 实现strStr()
 * - https://leetcode-cn.com/problems/implement-strstr/
 * - 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
 */

export { }

const strStr = (haystack: string, needle: string) => {
    if (needle.length === 0) { return 0 }
    for (let i = 0; i < haystack.length - needle.length + 1; i += 1) {
        if (haystack[i] != needle[0]) {
            continue
        } else {
            if (haystack.slice(i, i + needle.length) === needle) {
                return i
            } else {
                continue
            }
        }
    }
    return -1
};

// test
let r = strStr("mississippi", "issip")
console.log(r)