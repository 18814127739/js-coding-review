/**
 * @description: 判断回文数
 */
var isPalindrome = function (x) {
	if (x < 0) return false;
	const rx = parseInt(`${x}`.split('').reverse().join(''));
	return x === rx;
};
