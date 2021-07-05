/**
 * @description: 合并两个有序链表
 *  function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 *  }
 */

var mergeTwoLists = function (l1, l2) {
	// 先设定一个哨兵节点，方便迭代时追加节点
	let preHead = new ListNode(-1);
	let prev = preHead;
	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) {
			prev.next = l1;
			l1 = l1.next;
		} else {
			prev.next = l2;
			l2 = l2.next;
		}
		prev = prev.next;
	}
	prev.next = l1 === null ? l2 : l1;
	// 返回时忽略哨兵节点
	return preHead.next;
};
