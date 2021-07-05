/**
 * @param {string} 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * @return {boolean} 是否有效
 */

 var isValidBracket = function (s) {
	if (s.length % 2 !== 0) {
			// 长度为奇数直接返回false
			return false;
	}
	const map = {
			')': '(',
			']': '[',
			'}': '{',
	}
	const stk = [];
	// 遍历字符串，遇到左括号进栈， 遇到右括号判断是否与栈的最后一位为一对， 是则出栈， 否则直接返回false
	for (let ch of s) {
			if (map[ch]) {
					if(!stk.length || stk[stk.length - 1] !== map[ch]) {
							return false;
					}
					stk.pop();
			} else {
					stk.push(ch);
			}
	}
	return !stk.length;
};

// test
console.log(isValidBracket('()[]{}')); // true
console.log(isValidBracket('([)]')); // false
console.log(isValidBracket('{[]}')); // true
