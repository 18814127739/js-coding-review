/**
 * @description: 加一,  简单版的大数相加
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */
var plusOne = function (digits) {
	let f = 1;
	let res = [];
	for (let i = digits.length - 1; i >= 0; i--) {
		const tmp = digits[i] + f;
		f = Math.floor(tmp / 10);
		res.unshift(tmp % 10);
	}
	if (f === 1) {
		res.unshift(1);
	}
	return res;
};

/**
 * @description: test
 */
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
