/**
 * @description: 现在要求输入一个整数n，请你输出斐波那契数列的第n项
 */

// 普通迭代实现
function fibonacci(n) {
	if(n < 2) {
		return n;
	}
	let n1 = 0;
	let n2 = 1;
	let num = n;
	for (i = 2; i <= n; i++) {
		num = n1 + n2;
		n1 = n2;
		n2 = num;
	}
	return num;
}

// 递归实现，效率最低
function rFibonacci(n) {
	if (n < 2) {
		return n;
	}
	return rFibonacci(n - 1) + rFibonacci(n - 2);
}

// 迭代实现，缓存优化
function memoFibonacci(n) {
	if (n < 2) {
		return n;
	}
	const arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return arr[n]
}

console.log(memoFibonacci(2));
console.log(memoFibonacci(5));
