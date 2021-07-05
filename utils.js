// 比较函数
const defaultCompareFn = (a, b) => {
	if (a - b > 0) {
		return 1;
	} else if (a - b < 0) {
		return -1;
	}
	return 0;
}

// 交互函数
const swap = (array, a, b) => {
	[array[a], array[b]] = [array[b], array[a]];
}

export {
	defaultCompareFn,
	swap,
}
