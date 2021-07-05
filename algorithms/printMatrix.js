/**
 * @description: 顺时针打印矩阵
 * @param {*} matrix 二位数组
 * @return {*} 顺时针数组
 * 定义上、下、左、左右4个边界索引， 遍历一个方向后顺时针切换方向
 */
function printMatrix(matrix) {
	if (matrix.length === 0) return [];
	const rows = matrix.length;
	const cols = matrix[0].length;
	let left = 0,
		top = 0;
	right = cols - 1;
	bottom = rows - 1;
	const total = rows * cols;
	const res = [];
	while (res.length < total) {
		for (let i = left; i <= right; i++) { // 从左到右
			res.push(matrix[top][i]);
			// 如果长度已经和矩阵大小一致， 直接返回
			if (res.length === total) {
				return res;
			}
		}
		top++; // 遍历完第一行后， 上边界 -1
		for (let i = top; i <= bottom; i++) { // 从上到下
			res.push(matrix[i][right]);
			if (res.length === total) {
				return res;
			}
		}
		right--;
		for (let i = right; i >= left; i--) { // 从右到左
			res.push(matrix[bottom][i]);
			if (res.length === total) {
				return res;
			}
		}
		bottom--;
		for (let i = bottom; i >= top; i--) { // 从下到上
			res.push(matrix[i][left]);
			if (res.length === total) {
				return res;
			}
		}
		left++;
	}
	return res;
}

// test
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
console.log(printMatrix(matrix)); // [1,2,3,6,9,8,7,4,5]
matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
];
console.log(printMatrix(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
