/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // 递归遍历
  if (p === null && q === null) {
    // pq均为null
    return true;
  } else if (p === null || q === null) {
    // pq中只有一个为null
    return false;
  } else if (p.val != q.val) {
    // pq的值的不同
    return false;
  } else {
    // 递归左右树
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}
export {};
// @lc code=end
