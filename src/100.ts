/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (51.78%)
 * Total Accepted:    16.8K
 * Total Submissions: 32.5K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
 * 
 * 
 */
export {}

interface TreeNode {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null,
}

const isSameTree = (p: TreeNode, q: TreeNode): boolean => {
    // 算法，将树分层输出，比较每层的值是否相同
    let list_p: (TreeNode | null)[] = [p]
    let list_q: (TreeNode | null)[] = [q]
    while (true) {
        let f = list_p.every((element, index, array) => {
            if (element && list_q[index]) {
                return element.val === (<any>list_q[index]).val
            } else {
                return list_q[index] === null
            }
        })
        if (f) {
            // 如果相等并且为[null]，则返回true，否则进行下一层的便利
            if (list_p.every(v => v === null)) {
                return true
            }
            //
            let new_list_p: (TreeNode | null)[] = []
            list_p.forEach(element => {
                if (element) {
                    new_list_p.push(element.left, element.right)
                } else {
                    new_list_p.push(null)
                }
            })
            list_p = new_list_p
            //
            let new_list_q: (TreeNode | null)[] = []
            list_q.forEach(element => {
                if (element) {
                    new_list_q.push(element.left, element.right)
                } else {
                    new_list_q.push(null)
                }
            })
            list_q = new_list_q
        } else {
            return false
        }
    }
};

// test

let p = { val: 1, left: null, right: null }
let q = { val: 1, left: null, right: null }
console.log(isSameTree(p, q))

