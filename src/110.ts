/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (46.66%)
 * Total Accepted:    14.1K
 * Total Submissions: 30K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
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

const TreeNode = (val: number): TreeNode => {
    return {
        val: val,
        left: null,
        right: null
    }
}
/**
 * 思路：分层遍历，如果第i层的非null个数<2**i，则记录，再次遇到1次则返回false；全部遍历完毕则返回true
 */
const isBalanced = (root: TreeNode) => {
    let result = true;
    const dfs = (node: TreeNode | null): number => {
        if (!node) {
            return 0
        } else {
            const left: number = dfs(node.left) + 1;
            const right: number = dfs(node.right) + 1;
            if (Math.abs(left - right) > 1) {
                result = false;
            }
            return Math.max(left, right)
        }

    }
    dfs(root)
    return result;
};

// test
let p = {
    val: 1,
    left: null,
    right: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 3, left: null, right: null } },
}
console.log(isBalanced(p))