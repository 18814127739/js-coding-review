 /**
  * @description: 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
  */

function getKthFromEnd(head, k) {
	let fast = head;
	let slow = head;
	let count = 0;
	while(fast) {
		if(count >= k) {
			slow = slow.next;
		}
		fast = fast.next;
		count ++;
	}
	return slow;
};
