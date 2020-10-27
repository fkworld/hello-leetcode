/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // 双指针法，A指针遍历A+B，B指针遍历B+A
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    // 注意遍历A结束有pA=undefined的时候
    // 这样在遍历到A+B结束时，pA===pB===undefined
    pB = pB ? pB.next : headA;
    pA = pA ? pA.next : headB;
  }
  return pA;
}
// @lc code=end
