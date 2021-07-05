/**
 * @description: 操作给定的二叉树，将其变换为源二叉树的镜像。
 */

function treeMirror(node) {
	if(node == null) {
		return;
	}
	[node.left, node.right] = [node.right, node.left];
	treeMirror(node.left);
	treeMirror(node.right);
}

// test
const tree = {
	key: 1,
	left: {
		key: 2,
		left: null,
		right: {
			key: 3,
			left: null,
			right: null,
		}
	},
	right: {
		key: 5,
		left: {
			key: 4,
			left: null,
			right: null,
		},
		right: null,
	}
}

treeMirror(tree);
console.log(tree);
