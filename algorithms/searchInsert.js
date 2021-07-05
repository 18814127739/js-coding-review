/**
 * @description: 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * @param {*} nums 有序数组
 * @param {*} target 目标值
 * @return {*}
 */
function searchInsert(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= target) {
			return i;
		}
	}
	return nums.length;
};
