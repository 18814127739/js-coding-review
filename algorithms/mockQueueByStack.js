/**
 * @description: 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
class Queue {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	enQueue(value) {
		this.stack1.push(value);
		return this;
	}

	deQueue() {
		while(this.stack1.length) {
			this.stack2.push(this.stack1.pop());
		}
		return this.stack2.pop();
	}
}


/**
 * @description: test
 */
const q = new Queue();

q.enQueue(1).enQueue(3).enQueue(5);
console.log(q.deQueue()); // 1
console.log(q.deQueue()); // 3
console.log(q.deQueue()); // 5
console.log(q.deQueue()); // undefined
