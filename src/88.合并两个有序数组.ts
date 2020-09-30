/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 倒序遍历两个数组，从数组1最后写入
  let read1 = m - 1; // 数组1的遍历指针
  let read2 = n - 1; // 数组2的遍历指针
  let write = m + n - 1; // 写入指针
  while (write >= 0) {
    // 写入较大数，并使的对应指针-=1来遍历下一个
    if (nums2[read2] === undefined || nums1[read1] >= nums2[read2]) {
      nums1[write] = nums1[read1];
      read1 -= 1;
    } else {
      nums1[write] = nums2[read2];
      read2 -= 1;
    }
    write -= 1;
  }
}
// @lc code=end
