/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  // 标记法：遍历节点时给标记，再次遍历到标记说明有环
  // JS特殊解法：循环引用时不能被JSON序列化
  // 快慢指针实现，当快指针追上慢指针时，则表示有环
  let slow: typeof head | undefined = head;
  let fast = head?.next;
  while (fast) {
    if (slow === fast) {
      // 快指针追上表示有环
      return true;
    }
    slow = slow?.next;
    fast = fast.next?.next;
  }
  // 快指针跑完，表示无环
  return false;
}
// @lc code=end

export {};
