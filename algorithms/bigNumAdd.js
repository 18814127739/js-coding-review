/**
 * @description: 大数相加, 输入两个大数(字符还类型), 返回相加结果
 * @param {string num1,  string num2}
 * @return: 相加结果, string类型
 */

function bigNumAdd(num1, num2) {
	const length = Math.max(num1.length, num2.length);
	// 给少位的一方补0
	num1 = num1.padStart(length, '0');
	num2 = num2.padStart(length, '0');

	let temp = ''; // 每位和进位相加的结果
	let f = 0; // 进位
	let sum = '';
	for (let i = length - 1; i >= 0; i--) {
		temp = Number(num1[i]) + Number(num2[i]) + f;
		f = Math.floor(temp / 10);
		sum = temp % 10 + sum;
	}
	if (f === 1) {
		// 若循环结束后有进位，则在最前面加上1
		sum = '1' + sum;
	}
	return sum;
}

/**
 * @description: test
 */
const num = bigNumAdd('9007199254740991', '1234567899999999999');
console.log(num); //结果为：1243575099254740990
