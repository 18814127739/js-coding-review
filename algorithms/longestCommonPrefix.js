/**
 * @description:最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀，如果不存在公共前缀，返回空字符串 ""。
 * @param {*} strs 字符串数组
 *
 * 思路：
 * 先得出所有字符串中长度最小的字符串长度。 以最短字符串长度作为外层循环结束条件
 * 内层循环判断各个字符串当前索引的字符是否相等，相等则继续拼接最长前缀， 一旦发现不相等，直接返回当前的最长前缀
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return "";
	let minLength = Number.MAX_SAFE_INTEGER;
	strs.forEach(c => {
			minLength = Math.min(c.length, minLength);
	});
	let prefix = '';
	for (let i = 0; i < minLength; i++) {
			let flag = true;
			let tmp = strs[0][i];
			for (let j = 1; j < strs.length; j++) {
					if (strs[j][i] !== tmp) {
							flag = false;
					}
			}
			if (flag) {
					prefix += tmp;
			} else {
					return prefix;
			}
	}
	return prefix;
};
