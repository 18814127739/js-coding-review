/**
 * @description: 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 */
function isSymmetric(root) {
	if (!root) return true;

	function isEqual(left, right) {
		if (!left && !right) {
			return true;
		}
		if (!left || !right) {
			return false
		}
		return left.val === right.val && isEqual(left.left, right.right) && isEqual(left.right, right.left);
	}

	return isEqual(root.left, root.right);
};
