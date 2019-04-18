/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.54%)
 * Total Accepted:    21K
 * Total Submissions: 58.2K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export { }
interface ListNode {
    val: number,
    next: ListNode | null,
}
const isPalindrome = (head: ListNode): boolean => {
    // 思路:用栈解决,遍历两次
    // 完全不知道O(1)的空间复杂度如何实现
    let list = []
    // 第一次遍历
    let x = head
    while (x) {
        list.push(x.val)
        x = x.next
    }
    // 第二次遍历
    let y = head
    while (y) {
        if (y.val != list.pop()) {
            return false
        }
        y = y.next
    }
    return true
};

