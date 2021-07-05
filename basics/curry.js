/**
 * @description: 函数柯里化的运用
 * 实现求和函数sum
 * sum(1, 2)(3).valueOf(); // 输出 6
 * sum(1)(2)(4).valueOf(); // 输出 7
 * sum(1, 2)(3)(4).valueOf(); // 输出 10
 * sum(1, 2, 3, 4).valueOf() // 输出10
 */

// 实现一：
function sum(...initArgs) {
	const nums = initArgs || [];

	function add(...args) {
		nums.push(...(args || []));
		return add;
	}

	add.valueOf = () => nums.reduce((total, c) => total + c, 0);

	return add;
}

// test
console.log(sum(1, 2)(3).valueOf()); // 6
console.log(sum(1)(2)(4).valueOf()); // 7
console.log(sum(1, 2)(3)(4).valueOf()); // 10
console.log(sum(1, 2, 3, 4).valueOf()); // 10
