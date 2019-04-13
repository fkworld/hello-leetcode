/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (37.47%)
 * Total Accepted:    14.9K
 * Total Submissions: 39.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
/** 思路：分层遍历，直到某一层的个数不满足i**2 */
const minDepth = (root: TreeNode) => {
    if (!root) {
        return 0
    }
    let line = [root]
    let i = 0
    while (true) {
        // 判断是否为0
        if (line.length === 0) {
            return i
        }
        // 判断是否为叶子节点
        for (let j = 0; j < line.length; j += 1) {
            if (!line[j].left && !line[j].right) {
                return i + 1
            } else {
                continue
            }
        }
        // 遍历next-line
        let next_line = []
        for (let j = 0; j < line.length; j += 1) {
            if (line[j].left) {
                next_line.push(line[j].left)
            }
            if (line[j].right) {
                next_line.push(line[j].right)
            }
        }
        line = <any>next_line
        i += 1
    }
};

