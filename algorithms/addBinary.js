/**
 * @description: 二进制求和， 二进制版的大数相加
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 */
var addBinary = function (a, b) {
	const maxLength = Math.max(a.length, b.length);
	a = a.padStart(maxLength, '0');
	b = b.padStart(maxLength, '0');
	let f = 0;
	let res = '';
	for (let i = a.length - 1; i >= 0; i--) {
		const temp = +a[i] + +b[i] + f;
		f = Math.floor(temp / 2);
		res = temp % 2 + res;
	}
	if (f === 1) {
		res = '1' + res;
	}
	return res;
};
