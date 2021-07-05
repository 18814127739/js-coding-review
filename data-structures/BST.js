import { defaultCompareFn } from '../utils.js';

/**
 * @description: 二叉搜索树
 * 两个继承二叉搜索树的自平衡树：
 * 1、AVL树：插入和移除时需要根据情况进行单旋转 or 双旋转，搜索效率较高。
 * 2、红黑树：插入和移除时利用红黑树特性可减少旋转次数，且能规避双旋情况，插入移除效率较高。
 */
class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor(compareFn = defaultCompareFn) {
		this.compareFn = compareFn;
		this.root = null;
	}

	min() {
		return this.minNode(this.root);
	}

	minNode(node) {
		let current = node;
		while (current != null & current.left != null) {
			current = current.left;
		}
		return current;
	}

	max() {
		return this.maxNode(this.root);
	}

	maxNode(node) {
		let current = node;
		while (current != null && current.right != null) {
			current = node.right;
		}
		return current;
	}

	insert(key) {
		if (this.root == null) {
			this.root = new Node(key);
		} else {
			this.insertNode(this.root, key);
		}
		return this;
	}

	insertNode(node, key) {
		if (this.compareFn(key, node.key) === -1) {
			if (node.left == null) {
				node.left = new Node(key);
			} else {
				this.insertNode(node.left, key);
			}
		}
		if (this.compareFn(key, node.key) === 1) {
			if (node.right == null) {
				node.right = new Node(key);
			} else {
				this.insertNode(node.right, key);
			}
		}
	}

	remove(key) {
		this.root = this.removeNode(this.root, key);
		return this;
	}

	removeNode(node, key) {
		if (node == null) {
			return null;
		}
		if (this.compareFn(key, node.key) === -1) {
			// key < node.key，继续遍历左边节点
			node.left = this.removeNode(node.left, key);
		} else if (this.compareFn(key, node.key) === 1) {
			// key > node.key，继续遍历右边节点
			node.right = this.removeNode(node.right, key);
		} else {
			// key === node.key
			if (node.left == null && node.right == null) {
				// 情况1: 该节点为叶子节点， 被移除后直接返回null
				node = null;
			} else if (node.left == null) {
				// 情况2: 该节点的左子节点为null，右子节点不为null， 被移除后使用右子节点代替自身
				node = node.right;
			} else if (node.right == null) {
				// 情况3: 与2相反
				node = node.left;
			} else {
				// 情况4: 左右子节点都不为null，则执行以下步骤
				// 1、找到右子树中最小的节点 rightMinNode
				// 2、使用 rightMinNode 的key 替换自身的key， 相当于节点被移除
				// 3、递归移除 rightMinNode
				const rightMinNode = this.minNode(node.right);
				node.key = rightMinNode.key;
				node.right = this.removeNode(node.right, rightMinNode.key);
			}
		}
		return node;
	}

	search(key) {
		this.searchNode(this.root, key);
	}

	// 是否能找到key
	searchNode(node, key) {
		if (node == null) {
			return false;
		}
		if (this.compareFn(key, node.key) === -1) {
			return this.searchNode(node.left, key);
		} else if (this.compareFn(key, node.key) === 1) {
			return this.searchNode(node.right, key);
		} else {
			return true;
		}
	}

	// 中序遍历，左、父、右
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback);
	}

	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback);
		}
	}

	// 先序遍历，父、左、右
	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback);
	}

	preOrderTraverseNode(node, callback) {
		if (node != null) {
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}

	// 后序遍历，左、右、父
	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback);
	}

	postOrderTraverseNode(node, callback) {
		if (node != null) {
			this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}
}

/**
 * @description: test
 */
const tree = new BinarySearchTree();

tree.insert(11).insert(7).insert(15).insert(5).insert(3).insert(9).insert(8).insert(10).insert(13).insert(12).insert(14).insert(20).insert(18).insert(25).insert(6);

console.log('inOrder');
tree.inOrderTraverse((v) => console.log(v));
// console.log('preOrder');
// tree.preOrderTraverse((v) => console.log(v));
// console.log('postOrder');
// tree.postOrderTraverse((v) => console.log(v));

tree.remove(11).remove(25).remove(15);
console.log('remove: 11, 25, 15');
tree.inOrderTraverse((v) => console.log(v));
