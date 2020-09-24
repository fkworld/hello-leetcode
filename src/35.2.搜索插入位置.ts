/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 二分法
  let left = 0;
  let right = nums.length - 1;
  // 在left<=right时查找
  while (left <= right) {
    // 使用>>1来计算除以2并取整，a>>1相当于Math.floor(a/2)
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      // 找到则直接返回
      return mid;
    } else if (nums[mid] > target) {
      // 如果边界过大，则需要减小边界，改右边界
      right = mid - 1;
    } else {
      // 如果边界过小，则需要扩大边界，改左边界
      left = mid + 1;
    }
  }
  // 搜索完毕没找到对应值，则以右边界为基准写入
  return nums[right] > target ? right : right + 1;
}
// @lc code=end
