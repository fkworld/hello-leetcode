/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (58.98%)
 * Total Accepted:    50.7K
 * Total Submissions: 84.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
    val: number
    next: ListNode | null
}

const ListParent = (val: number, child: ListNode): ListNode => {
    return {
        val: val,
        next: child,
    }
}

const reverseList = (head: ListNode): ListNode => {
    if (!head) {
        return null
    }
    // 创建新链表并填入数据
    let result = ListParent(head.val, null)
    for (; ;) {
        head = head.next
        if (head) {
            result = ListParent(head.val, result)
        } else {
            return result
        }
    }
};

