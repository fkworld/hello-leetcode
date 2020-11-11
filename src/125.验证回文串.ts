/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // 左右双指针
  let left = 0;
  let right = s.length - 1;
  // 判断 code 是否为 number
  const isCodeNumber = (code: number | undefined): boolean => {
    return !!code && code >= 48 && code <= 57;
  };
  // 判断 code 是否为小写字母
  const isCodeLowercase = (code: number | undefined): boolean => {
    return !!code && code >= 97 && code <= 122;
  };
  // 判断 code 是否为大写字母
  const isCodeUppercase = (code: number | undefined): boolean => {
    return !!code && code >= 65 && code <= 90;
  };
  // 判断合集
  const isNumberOrCase = (code: number | undefined): boolean => {
    return isCodeNumber(code) || isCodeLowercase(code) || isCodeUppercase(code);
  };
  // 判断是否相等
  const isSame = (
    codeA: number | undefined,
    codeB: number | undefined
  ): boolean => {
    if (isCodeNumber(codeA) && codeB) {
      return codeA === codeB;
    }
    if (isCodeLowercase(codeA) && codeB) {
      return codeA === codeB || codeA === codeB + 32;
    }
    if (isCodeUppercase(codeA) && codeB) {
      return codeA === codeB || codeA === codeB - 32;
    }
    return false;
  };
  while (left < right) {
    // 判断值为0-9a-zA-Z，可以用正则
    // 这里使用 codePointAt 做判断
    let leftCode = s.codePointAt(left);
    let rightCode = s.codePointAt(right);
    if (!isNumberOrCase(leftCode)) {
      left += 1;
      continue;
    }
    if (!isNumberOrCase(rightCode)) {
      right -= 1;
      continue;
    }
    if (isSame(leftCode, rightCode)) {
      left += 1;
      right -= 1;
      continue;
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end

export {};
