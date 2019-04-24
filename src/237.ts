/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
interface ListNode {
    val: number,
    next: ListNode | null,
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
export function deleteNode(node: ListNode): void {
    // 思路：删除头结点
    node.val = node.next.val
    node.next = node.next.next
};

