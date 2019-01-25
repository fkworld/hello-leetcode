/**
 * 21.合并两个有序链表
 * - https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 * - 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

interface ListNode {
    val: number,
    next: ListNode | null,
}

export const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null) => {
    // 系统中最后返回一个array
    let new_node_list = []
    while (true) {
        if (l1 != null) {
            new_node_list.push(l1.val)
            l1 = l1.next
        }
        if (l2 != null) {
            new_node_list.push(l2.val)
            l2 = l2.next
        }
        if (l1 === null && l2 === null) {
            return new_node_list.sort((a, b) => { return a - b })
        }
    }
};


// test
let l1 = {
    val: 3,
    next: {
        val: 2,
        next: {
            val: 1,
            next: null
        }
    }
}
let l2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}
let r = mergeTwoLists(l1, l2)
console.log(r)