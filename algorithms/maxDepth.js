/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的最大深度， 深度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function (root) {
	if(root !== null) {
			const left = maxDepth(root.left);
			const right = maxDepth(root.right);
			return left > right ? left + 1 : right + 1;
	}
	return 0;
};
