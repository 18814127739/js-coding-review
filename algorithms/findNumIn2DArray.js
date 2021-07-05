/**
 * @description:
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {target: 目标整数  array: 二维数组}
 * @return: boolean
 */

function findNumIn2DArray(arr, num) {
	let i = 0;
	let j = arr[0].length - 1;
	while (i < arr.length && j >= 0) {
		if (arr[i][j] === num) {
			return true;
		} else if (arr[i][j] < num) {
			i++;
		} else {
			j--;
		}
	}
	return false;
}

// test
const arr = [
	[1, 2, 3, 4, 5],
	[2, 4, 6, 8, 10],
	[3, 6, 9, 12, 15],
	[4, 8, 12, 16, 20],
]

console.log(findNumIn2DArray(arr, 1)); // true
console.log(findNumIn2DArray(arr, 11)); // false
console.log(findNumIn2DArray(arr, 15)); //true
