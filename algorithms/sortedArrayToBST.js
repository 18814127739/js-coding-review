/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 将有序数组转换为二叉搜索树
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 * 核心思路：二分递归 递归找父节点
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	if (!nums.length) {
		return null;
	}
	const mid = nums.length >> 1;
	const node = new TreeNode(nums[mid]);

	node.left = sortedArrayToBST(nums.slice(0, mid));
	node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
	return node;
};
