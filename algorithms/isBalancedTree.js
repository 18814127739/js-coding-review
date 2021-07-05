/**
 * @description 判断平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * @return {boolean} 是否为平衡二叉树
 */
var isBalanced = function (root) {
	let flag = true;
	maxDepth(root, () => { flag = false });
	return flag;
};

function maxDepth(node, callback) {
	if (node) {
		// 递归计算每个左子树高度
		const left = maxDepth(node.left, callback);
		// 计算右子树高度
		const right = maxDepth(node.right, callback);
		// 左右子树高度差 > 1, 执行回调修改标记
		if (Math.abs(left - right) > 1) {
			callback();
		}
		return left > right ? left + 1 : right + 1;
	}
	return 0;
}
