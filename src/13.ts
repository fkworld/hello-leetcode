/**
 * 13.罗马数字转整数
 * - https://leetcode-cn.com/problems/roman-to-integer/description/
 * - 罗马数字包含以下七种字符：I-1,V-5,X-10,L-50,C-100,D-5000和M-1000
 * - 特殊：IV,IX,XL,XC,CD,CM
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    // 先按照正常情况求和
    let sum = 0
    for (let c of s) {
        switch (c) {
            case 'I': sum += 1; break;
            case 'V': sum += 5; break;
            case 'X': sum += 10; break;
            case 'L': sum += 50; break;
            case 'C': sum += 100; break;
            case 'D': sum += 500; break;
            case 'M': sum += 1000; break;
            default:
                break;
        }
    }
    // 检测特殊情况
    if (s.includes('IV')) { sum -= 2 }
    if (s.includes('IX')) { sum -= 2 }
    if (s.includes('XL')) { sum -= 20 }
    if (s.includes('XC')) { sum -= 20 }
    if (s.includes('CD')) { sum -= 200 }
    if (s.includes('CM')) { sum -= 200 }
    return sum
};