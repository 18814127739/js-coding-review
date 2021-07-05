/**
 * @description: 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */
var preorderTraversal = function(root) {
	if(root === null) return [];
	const res = []
	function preorderTraversalOrder(node) {
			if(node === null) {
					return;
			}
			res.push(node.val);
			preorderTraversalOrder(node.left);
			preorderTraversalOrder(node.right);
	}
	preorderTraversalOrder(root);
	return res;
};
