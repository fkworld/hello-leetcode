/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 遍历去重
  // 注意限定条件：排序链表
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      // 重复，则修改current.next指向下一个节点
      current.next = current.next.next;
    } else {
      // 不重复，则移动current
      current = current.next;
    }
  }
  return head;
}
// @lc code=end
