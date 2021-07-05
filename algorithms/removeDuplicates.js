/**
 * @description: 删除有序数组中的重复项
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @return {*}
 */

// 方法1: 边遍历，边删除元素, 时间复杂度 O(n2)
var removeDuplicates = function (nums) {
	if (nums.length <= 1) {
		return nums;
	}
	let i = 0;
	while (i < nums.length) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}
	return nums.length;
};

// 方法2: 快慢指针, 时间复杂为 O(n)
// var removeDuplicates = function (nums) {
// 	let p1 = 0,
// 		p2 = 0;

// 	while (p2 < nums.length) {
// 		if (nums[p1] != nums[p2]) {
// 			p1++;
// 			nums[p1] = nums[p2];
// 		}
// 		p2++;
// 	}
// 	return p1 + 1;
// };

/**
 * @description: test
 */
console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5
