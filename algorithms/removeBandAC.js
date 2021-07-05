/**
 * @description: 对输入的字符串，去除其中的 b 和 ac
 * 消消乐类型，与判断有效括号题类似，例如栈先进后出特点解决
 * 例如：
 * 'aacbd' -> 'ad'
 * 'aabcd' -> 'ad'
 * 'aaabbccc' -> ''
 */
function removeBandAC(s) {
	const stk = [];

	for (let ch of s) {
		if (ch === 'b') {
			continue;
		} else if (ch === 'c' && stk.length && stk[stk.length - 1] === 'a') {
			stk.pop();
		} else {
			stk.push(ch);
		}
	}

	return stk.join('');
}

// test
console.log(removeBandAC('aacbd'));
console.log(removeBandAC('aabcd'));
console.log(removeBandAC('aaabbccc'));
