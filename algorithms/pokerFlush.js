/**
 * @description:
 * 给定一副扑克牌。52张牌、4种花色，他们的编号分别为：
 * ♠️：1～13
 * ♥️：14～26
 * ♣️：27～39
 * ♦️：40～52
 * 给定一个表示若干张牌的数组，判断是否存在同花顺
 */

function pokerFlush(arr) {
	if (arr.length < 5) return false;

	arr.sort((a, b) => a - b); // 必须传入对比函数，默认对比函数会把 11 排在 2 前面
	let flag = false;
	arr.forEach((c, i) => {
		if (i < arr.length - 4) {
			// 判断最小的数和最大的数-1再除以13然后向下取整是否相同，相同则代表同一花色
			if (
				arr[i + 4] - arr[i] === 4 &&
				// -1后再除以13 是为了避免最大值为13的倍数时的边界情况
				Math.floor((arr[i + 4] - 1) / 13) === Math.floor((arr[i] - 1) / 13)
			) {
				flag = true;
			}
		}
	});
	return flag;
}

/**
 * @description: test
 */
console.log(pokerFlush([1, 2, 3, 4, 5])); // true
console.log(pokerFlush([9, 10, 11, 12, 13])); // true
console.log(pokerFlush([9, 11, 12, 13, 14, 15])); // false
