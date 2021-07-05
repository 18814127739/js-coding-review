/**
 * @description: 整数翻转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2 ^ 31,  2 ^ 31 − 1] ，就返回 0。
 */

var reverse = function (x) {
	// parseInt会将最后一位'-'移除， '321-' 会转换成 321
	let y = parseInt(`${x}`.split('').reverse().join(''));
	y = x >= 0 ? +y : -+y;
	return y > Math.pow(2, 31) - 1 || y < Math.pow(-2, 31) ? 0 : y;
};
