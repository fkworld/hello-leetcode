/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (59.62%)
 * Total Accepted:    12.9K
 * Total Submissions: 21.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
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

const levelOrderBottom = (root: TreeNode): number[][] => {
    if (!root) {
        return []
    }
    let line: TreeNode[] = [root]
    let result: number[][] = []
    while (true) {
        // write line's val
        let line_val = []
        for (let i = 0; i < line.length; i += 1) {
            if (line[i]) {
                line_val.push(line[i].val)
            }
        }
        result.unshift(line_val)
        // get next line
        let next_line = []
        for (let i = 0; i < line.length; i += 1) {
            let x = line[i]
            if (x) {
                if (x.left) {
                    next_line.push(x.left)
                }
                if (x.right) {
                    next_line.push(x.right)
                }
            }
        }
        line = next_line
        // break
        if (line.length === 0) {
            return result
        }
    }
};

let p = {
    val: 1,
    left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } },
    right: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 3, left: null, right: null } },
}
console.log(levelOrderBottom(p))
