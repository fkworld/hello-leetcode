/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (45.20%)
 * Total Accepted:    14.9K
 * Total Submissions: 32.5K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
export { }

interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

/** 思路：深度遍历，将节点的路径和临时保存在val属性中 */
const hasPathSum = (root: TreeNode, sum: number) => {
    // 为null时的处理
    if (!root) {
        return false
    }
    const is_leaf = (node: TreeNode) => {
        return !node.left && !node.right
    }
    // 遍历
    let flag = false
    const child = (root: TreeNode): void => {
        if (flag) {
            return
        }
        if (root.val === sum && is_leaf(root)) {
            flag = true; return
        }
        if (root.left) {
            root.left.val += root.val
            if (root.left.val === sum && is_leaf(root.left)) {
                flag = true; return
            }
            child(root.left)
        }
        if (root.right) {
            root.right.val += root.val
            if (root.right.val === sum && is_leaf(root.right)) {
                flag = true; return
            }
            child(root.right)
        }
    }
    child(root)
    return flag
};