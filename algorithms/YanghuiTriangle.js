/**
 * @description: 杨辉三角
 * 给定一个非负整数 n，生成杨辉三角的前 n 行。
 */

function generate(n) {
	if(n === 1) return [[1]];

	const res= [[1]];
	for(let i = 1; i < n; i++) {
		res[i] = [];
		for(let j = 0; j < i + 1; j++) {
			res[i][j] = (res[i-1][j-1] || 0) + (res[i-1][j] || 0)
		}
	}
	return res;
}

/**
 * @description: test
 */

console.log(generate(5));
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
