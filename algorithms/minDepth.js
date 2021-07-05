/**
 * @description 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度, 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * @return {number}
 */
var minDepth = function (root) {
	if (root === null) return 0;
	// 左子树为null， 返回右子树的最小深度 +1， +1代表当前父节点
	if (!root.left) return minDepth(root.right) + 1;
	// 右子树为null， 返回左子树的最小深度 +1，
	if (!root.right) return minDepth(root.left) + 1;
	// 左右子树都不为null， 返回左右子树中较小的深度 +1
	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
