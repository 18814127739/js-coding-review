import { swap } from '../utils.js';

/**
 * @description: 最小堆
 */
class MinHeap {
	constructor() {
		this.heap = [];
	}

	getLeftChildIndex(index) {
		return index * 2 + 1;
	}

	getRigthChildIndex(index) {
		return index * 2 + 2;
	}

	getParentIndex(index) {
		if (index === 0) {
			return undefined;
		}
		return Math.floor((index - 1) / 2);
	}

	insert(value) {
		if (value != null) {
			this.heap.push(value);
			this.siftUp(this.heap.length - 1);
			return true;
		}
		return false;
	}

	// 向上移动
	siftUp(index) {
		let parent = this.getParentIndex(index);
		// 一直往上检查子节点是否大于父节点， 若大于则交互位置
		while (index > 0 && this.heap[parent] > this.heap[index]) {
			swap(this.heap, index, parent);
			index = parent;
			parent = this.getParentIndex(index);
		}
	}

	// 导出最小值
	extract() {
		if (this.isEmpty()) {
			return undefined;
		} else if (this.size() === 1) {
			return this.heap.shift();
		} else {
			// 如果堆不止一个元素，导出后需要重新建堆
			const root = this.heap.shift();
			// 把堆的最后一个元素插入到最前面， 然后一直往下比较， 若比子节点大则交互位置， 优先和左侧子节点交互
			this.heap.unshift(this.heap.pop());
			this.siftDown(0);
			return root;
		}
	}

	// 向下移动, 判断左右子节点是否
	siftDown(index) {
		let ele = index;
		const left = this.getLeftChildIndex(index);
		const right = this.getRigthChildIndex(index);

		if (left < this.size() && this.heap[left] < this.heap[ele]) {
			ele = left;
		} else if (right < this.size() && this.heap[right] < this.heap[ele]) {
			ele = right;
		}

		if (ele !== index) {
			swap(this.heap, ele, index);
			this.siftDown(ele);
		}
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	findMinimum() {
		return this.heap[0];
	}

	toString() {
		return this.heap.join(',');
	}
}

/**
 * @description: test
 */
const heap = new MinHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
// 2            2             1
// 3 4  ----->  1 4  ------>  2 4
// 5 1          5 3           5 3

console.log(heap.toString()); // 1,2,4,5,3
console.log(heap.findMinimum());

heap.extract();
// 2           3           2
// 4 5  ---->  2 4  ---->  3 4
// 3           5           5
console.log(heap.toString());
