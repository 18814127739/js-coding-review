/**
 * @description: 多数元素
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 思路：抵消，相同的加1, 不相同的减1, 因为是大于一半, 所以最后肯定剩下大于一半的那个
 */
function majorityElement(nums) {
	let res = nums[0];
	let count = 0;
	nums.forEach(c => {
		if (count === 0) {
			res = c;
		}
		count += res === c ? 1 : -1;
	});
	return res;
}
