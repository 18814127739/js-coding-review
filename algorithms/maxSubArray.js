/**
 * @description: 连续子数组的最大和
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为O(n)。
 * 动态规划
 */

var maxSubArray = function (nums) {
	const numsLength = nums.length
	if (numsLength === 1) {
		return nums[0];
	}
	let max = nums[0];
	// 存放 dp 的数据
	let dpi = nums[0];
	for (let i = 1; i < numsLength; i++) {
		// dp 计算规则为如果 上次 dp > 0 让上次 dp 参与计算，否则丢弃
		dpi = dpi > 0 ? dpi + nums[i] : nums[i];
		// 在上次的最大值和计算好的 dp 中取最大值
		max = max > dpi ? max : dpi;
	}
	return max;
};











