/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (44.28%)
 * Total Accepted:    18.8K
 * Total Submissions: 42.5K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */

export { }

interface ListNode {
    val: number,
    next: ListNode | null,
}

const deleteDuplicates = (head: ListNode) => {
    if (!head || !head.next) { return head }
    // 初始化
    let list: number[] = [head.val]
    let before = head
    let x: ListNode | null = head.next
    while (true) {
        if (!x) { break }
        if (list.includes(x.val)) {
            before.next = x.next
            x = x.next
        } else {
            list.push(x.val)
            if (before.next) { before = before.next }
            x = x.next
        }
    }
    return head
};

// test

let source: ListNode = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: null,
        }
    },
}

console.log(deleteDuplicates(source))