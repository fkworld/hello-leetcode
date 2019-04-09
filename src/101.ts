/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (45.50%)
 * Total Accepted:    24.9K
 * Total Submissions: 54.7K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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

const isSymmetric = (root: TreeNode): boolean => {
    let line: (TreeNode | null)[] = [root]
    while (true) {
        let length = line.length
        for (let i = 0; i < length / 2; i += 1) {
            let x = line[i]
            let y = line[length - 1 - i]
            if (x && y) {
                if (x.val === y.val) {
                    continue
                } else {
                    return false
                }
            } else {
                if (x === y) {
                    continue
                } else {
                    return false
                }
            }
        }
        // 计算下一组line
        let next_line = []
        let data_flag = false   // 是否还有数据
        for (let i = 0; i < line.length; i += 1) {
            let x = line[i]
            if (x) {
                next_line.push(x.left, x.right)
                data_flag = true
            } else {
                next_line.push(null, null)
            }
        }
        if (data_flag) {
            line = next_line
        } else {
            return true
        }
        console.log(line)
    }
};

// test
let p = {
    val: 1,
    left: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 4, left: null, right: null } },
    right: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 3, left: null, right: null } },
}
console.log(isSymmetric(p))