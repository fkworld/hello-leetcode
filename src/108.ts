/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (61.64%)
 * Total Accepted:    16.3K
 * Total Submissions: 26.2K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 
 * 给定有序数组: [-10,-3,0,5,9],
 * 
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    if (nums == null || nums.length == 0) {
        return null
    }
    return buildMid(nums, 0, nums.length - 1);
};

const buildMid = (nums: number[], l: number, r: number): TreeNode | null => {
    if (r < l) {
        return null;
    }
    if (r == l) {
        return { val: nums[l], left: null, right: null }
    }
    let mid = Math.round((l + r) / 2);
    let root = {
        val: nums[mid],
        left: buildMid(nums, l, mid - 1),
        right: buildMid(nums, mid + 1, r)
    }
    return root;
}

// test
let nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums))