/**
 * @description: 环形链表
 * 给定一个链表，判断链表中是否有环。
 * @param {*} head
 */
var hasCycle = function (head) {
	if (!head) return false;
	let current = head;
	while (current) {
		if (current.checked) {
      // 若该节点已被遍历过，证明是环形链表
			return true;
		}
    // 对于遍历过的节点添加checked标记
		current.checked = true;
		current = current.next;
	}
  // 若能正常遍历完链表，证明不是环形链表
	return false;
};
