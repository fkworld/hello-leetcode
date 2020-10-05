/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  // 结果数组
  let result: number[] = [];
  // 数的遍历
  const traverse = (root: TreeNode | null) => {
    // 提前处理
    if (!root) return;
    // 前序遍历
    // ...
    traverse(root.left);
    // 中序遍历
    result.push(root.val);
    traverse(root.right);
    // 后序遍历
    // ...
  };
  traverse(root);
  return result;
}
// @lc code=end

import { TreeNode } from "./data";
