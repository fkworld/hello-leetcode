/**
 * 58. 最后一个单词的长度
 * - https://leetcode-cn.com/problems/length-of-last-word/
 * - 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * - 如果不存在最后一个单词，请返回 0 。
 * - 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 */

export { }

const lengthOfLastWord = (s: string): number => {
    if (s.length === 0) { return 0 }
    s = s.trim() // 题目出的不算很严谨，需要去掉字符串末尾空格
    let count = 0
    for (let i = s.length - 1; i >= 0; i -= 1) {
        if (s[i] !== ' ') {
            count += 1
        } else {
            return count
        }
    }
    return count
};

// test
console.log(lengthOfLastWord('a '))