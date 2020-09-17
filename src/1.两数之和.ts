/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.40%)
 * Likes:    9145
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.8M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 *
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // 解法1：1560 ms。计算target-num，看nums中是否包含此值
  // let current = 0;
  // let next = 0;
  // for (current = 0; current < nums.length; current += 1) {
  //   next = nums.findIndex((v) => v === target - nums[current]);
  //   if (next != current && next != -1) {
  //     break;
  //   }
  // }
  // return [current, next];
  // 解法2：128ms。双for循环
  // let x = 0;
  // let y = 0;
  // let length = nums.length;
  // for (x = 0; x < length - 1; x += 1) {
  //   for (y = x + 1; y < length; y += 1) {
  //     if (nums[x] + nums[y] === target) {
  //       return [x, y];
  //     }
  //   }
  // }
  // // 无解
  // return [0, 0];

  // 解法3：76ms。存储遍历内容，遍历到需要的值时可以直接得出结论
  let map = new Map(); // 使用map存储遍历内容，格式为：遍历的值，遍历的序号
  for (let i = 0; i < nums.length; i += 1) {
    let current = nums[i]; // 遍历的当前值
    let need = target - current; // 遍历的需要值
    if (map.has(need)) {
      // 如果之前的遍历中有其需要值，则可以直接返回
      return [map.get(need), i];
    } else {
      // 如果没有，则将当前的遍历内容添加到map中
      map.set(current, i);
    }
  }
  return [0, 0];
}
// @lc code=end
