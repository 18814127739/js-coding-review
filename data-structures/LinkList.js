/**
 * @description: 链表
 * 扩展链表：
 * 1、双向链表：Node需要添加指向前一个节点的引用 prev， LinkList需要添加指向最后一个节点的引用 tail
 * 2、循环链表：最后一个节点的next需要指向head
 * 3、有序链表：添加顺序处理
 */
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkList {
	constructor() {
		this.count = 0;
		this.head = null;
	}

	// 向尾部添加元素
	push(element) {
		const node = new Node(element);
		if (this.head == null) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}

	// 获取指定位置上的节点
	gelElementAt(index) {
		if (index >= 0 && index <= this.count) {
			let node = this.head;
			for (let i = 0; i < index && node != null; i++) {
				node = node.next;
			}
			return node;
		}
		return undefined;
	}

	// 指定位置插入元素, 成功返回true， 失败返回false
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			let node = new Node(element);
			if (index === 0) {
				const current = this.head;
				node.next = current;
				this.head = node;
			} else {
				const previous = this.gelElementAt(index - 1);
				node.next = previous.next;
				previous.next = node;
			}
			this.count++;
			return true;
		}
		return false;
	}

	// 移除指定位置节点
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index == 0) {
				this.head = current.next;
			} else {
				const previous = this.gelElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current.element
		}
		return undefined;
	}

	// 根据元素找到对应的索引
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count && current != null; i++) {
			if (current.element === element) {
				return i;
			}
			current = current.next
		}
		return -1;
	}

	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	isEmpty() {
		return this.count === 0;
	}

	size() {
		return this.count;
	}

	getHead() {
		return this.head;
	}

	toString() {
		if (this.head == null) return '';
		let str = `${this.head.element}`;
		let current = this.head.next;
		for (let i = 1; i < this.count && current != null; i++) {
			str = `${str},${current.element}`;
			current = current.next;
		}
		return str;
	}
}

/**
 * @description: test
 */
// const linkList = new LinkList();

linkList.push(2);
linkList.push(1);
linkList.insert(5, 0);
linkList.insert(8, 3);
linkList.removeAt(2);
linkList.remove(2);

console.log(linkList.size());
console.log(linkList.toString());

export default LinkList;
