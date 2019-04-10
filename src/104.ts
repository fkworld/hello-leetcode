/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (68.16%)
 * Total Accepted:    39.4K
 * Total Submissions: 57.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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

const maxDepth = (root: TreeNode): number => {
    let depth = 0
    let line: (TreeNode | null)[] = [root]
    while (true) {
        let old_depth = depth
        for (let i = 0; i < line.length; i += 1) {
            let x = line[i]
            if (x) {
                depth += 1
                // 写入新的line
                let result: (TreeNode | null)[] = []
                for (let j = 0; j < line.length; j += 1) {
                    let y = line[j]
                    if (y) {
                        result.push(y.left, y.right)
                    }
                }
                line = result
                break;
            } else {
                continue;
            }
        }
        if (old_depth === depth) {
            return depth
        }
    }
};

// test
let p = {
    val: 1,
    left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } },
    right: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 3, left: null, right: null } },
}
console.log(maxDepth(p))
