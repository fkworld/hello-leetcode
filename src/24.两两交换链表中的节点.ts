/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

import { ListNode } from "./data";

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

function swapPairs(head: ListNode | null): ListNode | null {
  let newHead = new ListNode(0, head);
  let p = newHead;
  while (p) {
    let first = p.next;
    let second = p.next?.next;
    if (first && second) {
      // 注意次序防止循环链表
      first.next = second.next;
      second.next = first;
      p.next = second;
      // 修改p的指向
      p = first;
    } else {
      break;
    }
  }
  return newHead.next;
}
// @lc code=end
