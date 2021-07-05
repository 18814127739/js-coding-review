/**
 * @description 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	if (root === null) return false;

	if (!root.left && !root.right) {
		// 叶子节点判断当前值与所剩差值是否相等
		return root.val === targetSum;
	}
	// 每遍历一层都计算剩余差值与当前节点想减的差值
	return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
