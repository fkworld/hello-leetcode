/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (39.62%)
 * Total Accepted:    21.9K
 * Total Submissions: 54.2K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
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

const removeElements = (head: ListNode, val: number): ListNode => {
    // 添加一个头结点
    head = {
        val: val + 1,
        next: head
    }
    // 循环遍历
    let before = head
    let x = before.next
    for (; ;) {
        if (!x) { break; }
        if (x.val === val) {
            before.next = x.next
        } else {
            before = x
        }
        x = x.next
    }
    return head.next
};

