/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description: 删除排序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	if (!head) return head;
	let current = head;
	while (current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next;
		} else {
			current = current.next
		}
	}
	return head;
};
