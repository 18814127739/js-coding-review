/**
 * @description: 最长公共子序列， 动态规划实现
 * 找出两个字符串序列的最长子序列的长度
 * 最长序列是指：在两个字符串序列中以相同顺序出现，但不要求连续的字符串序列
 */
function longestCommonSubsequence(wordX, wordY) {
	const m = wordX.length;
	const n = wordY.length;
	const l = []; // 记忆矩阵
	const solution = []; // 用于反向寻找子串结果

	// 构造记忆化矩阵
	for (let i = 0; i <= m; i++) {
		l[i] = [];
		solution[i] = [];
		for (let j = 0; j <= n; j++) {
			l[i][j] = 0;
			solution[i][j] = '0';
		}
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (wordX[i - 1] === wordY[j - 1]) {
				// 若找到两个字符串中相同的字符，则最大长度的值基于左上角格子的值 +1
				l[i][j] = l[i - 1][j - 1] + 1;
				solution[i][j] = 'diagonal';
			} else {
				// 若两个字符串的字符不想等，则当前格子的值取左边格子或上边格子中较大的值
				const top = l[i - 1][j];
				const left = l[i][j - 1];
				l[i][j] = top > left ? top : left;
				solution[i][j] = top > left ? 'top' : 'left';
			}
		}
	}

	let subSeq = ''; // 公共子序列
	let a = m;
	let b = n;
	while (solution[a][b] !== '0') {
		if (solution[a][b] === 'diagonal') {
			subSeq = wordX[a - 1] + subSeq;
			a--;
			b--;
		} else if (solution[a][b] === 'top') {
			a--;
		} else if (solution[a][b] === 'left') {
			b--;
		}
	}

	return {
		length: l[m][n],
		subSeq
	};
}

/**
 * @description: test
 */
const wordX = 'accbaed';
const wordY = 'abcadf';

const {
	length,
	subSeq
} = lcs(wordX, wordY);
console.log(length, subSeq); // 4, abad
